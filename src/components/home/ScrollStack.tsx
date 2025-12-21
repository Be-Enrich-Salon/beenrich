"use client";

import React, { useLayoutEffect, useRef, useCallback } from 'react';
import type { ReactNode } from 'react';
import Lenis from 'lenis';
import { cn } from '@/utils/cn';

export interface ScrollStackItemProps {
    itemClassName?: string;
    children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
    <div
        className={`scroll-stack-card relative w-full mb-4 p-0 rounded-[30px] shadow-[0_0_20px_rgba(0,0,0,0.08)] box-border origin-top will-change-transform ${itemClassName}`.trim()}
        style={{
            backfaceVisibility: 'hidden',
            transformStyle: 'preserve-3d'
        }}
    >
        {children}
    </div>
);

interface ScrollStackProps {
    className?: string;
    children: ReactNode;
    itemDistance?: number;
    itemScale?: number;
    itemStackDistance?: number;
    stackPosition?: string;
    scaleEndPosition?: string;
    baseScale?: number;
    scaleDuration?: number;
    rotationAmount?: number;
    blurAmount?: number;
    useWindowScroll?: boolean;
    onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
    children,
    className = '',
    itemDistance = 100,
    itemScale = 0.03,
    itemStackDistance = 30,
    stackPosition = '20%',
    scaleEndPosition = '10%',
    baseScale = 0.85,
    rotationAmount = 0,
    blurAmount = 0,
    useWindowScroll = false,
    onStackComplete
}) => {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const stackCompletedRef = useRef(false);
    const animationFrameRef = useRef<number | null>(null);
    const lenisRef = useRef<Lenis | null>(null);
    const cardsRef = useRef<HTMLElement[]>([]);
    const lastTransformsRef = useRef(new Map<number, any>());
    const isUpdatingRef = useRef(false);

    const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
        if (scrollTop < start) return 0;
        if (scrollTop > end) return 1;
        return (scrollTop - start) / (end - start);
    }, []);

    const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
        if (typeof value === 'string' && value.includes('%')) {
            return (parseFloat(value) / 100) * containerHeight;
        }
        return parseFloat(value as string);
    }, []);

    const getScrollData = useCallback(() => {
        if (useWindowScroll) {
            return {
                scrollTop: window.scrollY,
                containerHeight: window.innerHeight,
                scrollContainer: document.documentElement
            };
        } else {
            const scroller = scrollerRef.current;
            return {
                scrollTop: scroller ? scroller.scrollTop : 0,
                containerHeight: scroller ? scroller.clientHeight : 0,
                scrollContainer: scroller
            };
        }
    }, [useWindowScroll]);

    // Used principally for the End Element or non-transformed items
    const getElementOffset = useCallback(
        (element: HTMLElement) => {
            if (useWindowScroll) {
                const rect = element.getBoundingClientRect();
                return rect.top + window.scrollY;
            } else {
                return element.offsetTop;
            }
        },
        [useWindowScroll]
    );

    const updateCardTransforms = useCallback((lenisScrollPos?: number) => {
        if (!cardsRef.current.length) return;

        // Note: Removed isUpdatingRef check/guard to ensure we always update when Lenis tells us to using the exact scroll pos.
        // If calls pile up (unlikely in RAF), we process latest.

        let scrollTop: number;
        let containerHeight: number;

        if (typeof lenisScrollPos === 'number') {
            scrollTop = lenisScrollPos;
            // For window scroll, height is viewport. For div, it's clientHeight.
            containerHeight = useWindowScroll ? window.innerHeight : (scrollerRef.current?.clientHeight || 0);
        } else {
            const data = getScrollData();
            scrollTop = data.scrollTop;
            containerHeight = data.containerHeight;
        }

        const stackPositionPx = parsePercentage(stackPosition, containerHeight);
        const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

        const endElement = useWindowScroll
            ? (document.querySelector('.scroll-stack-end') as HTMLElement | null)
            : (scrollerRef.current?.querySelector('.scroll-stack-end') as HTMLElement | null);

        // For endElement, we can use getElementOffset because it is a spacer that is NOT transformed.
        const endElementTop = endElement ? getElementOffset(endElement) : 0;

        cardsRef.current.forEach((card, i) => {
            if (!card) return;

            // STABILITY FIX: Use stable offsetTop instead of getBoundingClientRect()
            // getBoundingClientRect reads the transformed position, causing a feedback loop (shake).
            // offsetTop is relative to the offsetParent (the container).
            // If useWindowScroll is true, we assume the container is in the document flow.
            // We need the card's top relative to the document *without transforms*.

            let cardTopReal = 0;
            if (useWindowScroll) {
                // We need the Card's static position on the page.
                // Since the parent .scroll-stack-inner puts them in flow, 
                // we can calculate this by adding the parent's absolute position + card.offsetTop.
                // However, the parent might also be moving if normal document flow? Yes.
                // We use scrollerRef (which is likely the wrapper).
                const wrapper = scrollerRef.current;
                // If the wrapper is the one in the document flow:
                if (wrapper) {
                    // wrapper's rect top + scrollY = wrapper's absolute top on page
                    const wrapperRect = wrapper.getBoundingClientRect();
                    const wrapperTopAbsolute = wrapperRect.top + window.scrollY;
                    // card.offsetTop is distance from wrapper top
                    cardTopReal = wrapperTopAbsolute + card.offsetTop;
                } else {
                    // fallback
                    cardTopReal = card.offsetTop;
                }
            } else {
                // inside a scrolling div
                cardTopReal = card.offsetTop;
            }

            // Adjust cardTopReal for "inner" wrapper offset if necessary?
            // The structure is: div(ref=scroller) -> div.scroll-stack-inner -> cards.
            // If scrollerRef is the outer div, offsetTop of card is relative to .scroll-stack-inner (if positioned) or scroller.
            // .scroll-stack-inner doesn't have relative position in CSS provided? 
            // Wrapper has `relative`. Inner has padding.
            // card.offsetTop should be correct relative to the closest positioned ancestor.
            // Provided CSS: .scroll-stack-inner is just a div. Wrapper has `relative`.
            // So offsetTop is relative to wrapper.

            const pinStart = cardTopReal - stackPositionPx - itemStackDistance * i;
            const pinEnd = endElementTop - containerHeight + (containerHeight * 0.5);

            const triggerStart = pinStart;
            const triggerEnd = pinStart + (containerHeight * 0.5);

            const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
            const targetScale = baseScale + i * itemScale;
            // Linear interpolation
            const scale = 1 - scaleProgress * (1 - targetScale);

            const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

            let blur = 0;
            if (blurAmount) {
                // Simplify blur for now or re-implement if needed. 
                // Focusing on stability.
            }

            let translateY = 0;
            const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

            if (isPinned) {
                // Must counteract the scroll + constant offset
                // If we are at pinStart, we want strictly 0 translation relative to that point?
                // No, we want it fixed at 'stackPositionPx'.
                // A fixed element stays at Y on screen.
                // An element at 'cardTopReal' moves up as scrollTop increases.
                // Position on Screen = cardTopReal - scrollTop.
                // Desired Position on Screen = stackPositionPx + (i * itemStackDistance).
                // So: (cardTopReal - scrollTop) + translateY = stackPositionPx + offsets
                // translateY = stackPositionPx + offsets - cardTopReal + scrollTop
                // translateY = scrollTop - (cardTopReal - stackPositionPx - offsets)
                // translateY = scrollTop - pinStart
                translateY = scrollTop - pinStart;
            } else if (scrollTop > pinEnd) {
                translateY = pinEnd - pinStart;
            }

            const newTransform = {
                translateY: translateY,
                scale: scale,
                rotation: rotation,
                blur: blur
            };

            const lastTransform = lastTransformsRef.current.get(i);

            // Precision check: allow very small updates for TranslateY (smoothness)
            // Block extremely micro updates for Scale/Rotation to save recalc? 
            // For translateY, lenis gives floats. We want to use them.
            const hasChanged =
                !lastTransform ||
                Math.abs(lastTransform.translateY - newTransform.translateY) > 0.005 || // High precision
                Math.abs(lastTransform.scale - newTransform.scale) > 0.0001 ||
                Math.abs(lastTransform.rotation - newTransform.rotation) > 0.01;

            if (hasChanged) {
                card.style.transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
                // Filter perf optimization: only apply if needed
                if (newTransform.blur > 0.01) {
                    card.style.filter = `blur(${newTransform.blur}px)`;
                } else if (lastTransform && lastTransform.blur > 0.01) {
                    card.style.filter = '';
                }
                lastTransformsRef.current.set(i, newTransform);
            }

            if (i === cardsRef.current.length - 1) {
                const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
                if (isInView && !stackCompletedRef.current) {
                    stackCompletedRef.current = true;
                    onStackComplete?.();
                } else if (!isInView && stackCompletedRef.current) {
                    stackCompletedRef.current = false;
                }
            }
        });

    }, [
        itemScale,
        itemStackDistance,
        stackPosition,
        scaleEndPosition,
        baseScale,
        rotationAmount,
        blurAmount,
        useWindowScroll,
        calculateProgress,
        parsePercentage,
        getScrollData,
        getElementOffset, // kept for endElement
        onStackComplete
    ]);

    const handleScroll = useCallback((e: any) => {
        const scrollPos = e && typeof e.scroll === 'number' ? e.scroll : undefined;
        updateCardTransforms(scrollPos);
    }, [updateCardTransforms]);

    const setupLenis = useCallback(() => {
        if (useWindowScroll) {
            const lenis = new Lenis({
                duration: 1.2,
                easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: true,
                touchMultiplier: 2,
                infinite: false,
                wheelMultiplier: 1,
                lerp: 0.1,
                syncTouch: true,
                syncTouchLerp: 0.075
            });

            lenis.on('scroll', handleScroll);

            const raf = (time: number) => {
                lenis.raf(time);
                animationFrameRef.current = requestAnimationFrame(raf);
            };
            animationFrameRef.current = requestAnimationFrame(raf);

            lenisRef.current = lenis;
            return lenis;
        } else {
            const scroller = scrollerRef.current;
            if (!scroller) return;

            const lenis = new Lenis({
                wrapper: scroller,
                content: scroller.querySelector('.scroll-stack-inner') as HTMLElement,
                duration: 1.2,
                easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: true,
                touchMultiplier: 2,
                infinite: false,
                gestureOrientation: 'vertical',
                wheelMultiplier: 1,
                lerp: 0.1,
                syncTouch: true,
                syncTouchLerp: 0.075
            });

            lenis.on('scroll', handleScroll);

            const raf = (time: number) => {
                lenis.raf(time);
                animationFrameRef.current = requestAnimationFrame(raf);
            };
            animationFrameRef.current = requestAnimationFrame(raf);

            lenisRef.current = lenis;
            return lenis;
        }
    }, [handleScroll, useWindowScroll]);

    useLayoutEffect(() => {
        if (!useWindowScroll && !scrollerRef.current) return;

        const cards = Array.from(
            useWindowScroll
                ? document.querySelectorAll('.scroll-stack-card')
                : (scrollerRef.current?.querySelectorAll('.scroll-stack-card') ?? [])
        ) as HTMLElement[];
        cardsRef.current = cards;
        const transformsCache = lastTransformsRef.current;

        cards.forEach((card, i) => {
            if (i < cards.length - 1) {
                card.style.marginBottom = `${itemDistance}px`;
            }
            // Optimization: 'will-change' is good but too many can hurt. 
            // 'transform' is essential.
            card.style.willChange = 'transform';
            card.style.transformOrigin = 'top center';
            card.style.backfaceVisibility = 'hidden';
            // Init transform
            card.style.transform = 'translate3d(0,0,0)';
        });

        setupLenis();
        updateCardTransforms();

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            if (lenisRef.current) {
                lenisRef.current.destroy();
            }
            stackCompletedRef.current = false;
            cardsRef.current = [];
            transformsCache.clear();
            isUpdatingRef.current = false;
        };
    }, [
        itemDistance,
        itemScale,
        itemStackDistance,
        stackPosition,
        scaleEndPosition,
        baseScale,
        // removed scaleDuration unused
        rotationAmount,
        blurAmount,
        useWindowScroll,
        onStackComplete,
        setupLenis,
        updateCardTransforms
    ]);

    return (
        <div
            className={cn(
                "relative w-full overflow-x-visible",
                useWindowScroll ? "h-auto overflow-visible" : "h-full overflow-y-auto",
                className
            )}
            ref={scrollerRef}
            style={!useWindowScroll ? {
                overscrollBehavior: 'contain',
                WebkitOverflowScrolling: 'touch',
                scrollBehavior: 'smooth',
                WebkitTransform: 'translate3d(0,0,0)',
                transform: 'translate3d(0,0,0)',
                willChange: 'scroll-position'
            } : {}}
        >
            <div className={cn(
                "scroll-stack-inner pt-4 px-0 pb-[15vh]",
                !useWindowScroll && "px-4 md:px-20"
            )}>
                {children}
                {/* Spacer so the last pin can release cleanly */}
                <div className="scroll-stack-end w-full h-px" />
            </div>
        </div>
    );
};

export default ScrollStack;
