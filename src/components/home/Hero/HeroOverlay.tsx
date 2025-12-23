'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { HeroSlide } from './HeroSlides';
import { colors } from '@/theme/colors';
import { useBooking } from '@/context/BookingContext';

interface HeroOverlayProps {
    slide: HeroSlide;
    isActive: boolean;
}

const HeroOverlay = ({ slide, isActive }: HeroOverlayProps) => {
    const { openBooking } = useBooking();
    const targetHref = slide.slug ? `/services/${slide.slug}` : "/services";

    return (
        <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <AnimatePresence mode='wait'>
                    {isActive && (
                        <motion.div
                            key={slide.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.8 }}
                                    className="mx-auto w-fit rounded-full bg-charcoal/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold border border-gold/20 backdrop-blur-sm"
                                >
                                    Be Enrich Salon & Spa
                                </motion.p>

                                <h1 className="font-display text-4xl font-medium tracking-tight text-paper sm:text-5xl md:text-6xl lg:text-7xl">
                                    {slide.title}
                                </h1>

                                <p className="mx-auto max-w-2xl text-lg text-mist/90 md:text-xl font-light leading-relaxed">
                                    {slide.subtitle}
                                </p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                            >
                                <button
                                    onClick={openBooking}
                                    className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_0_20px_rgba(197,164,109,0.3)]"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Book Appointment
                                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>
                                </button>

                                <Link
                                    href={targetHref}
                                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-paper/20 bg-charcoal/40 px-8 py-3.5 text-sm font-semibold text-paper backdrop-blur-sm transition-all duration-300 hover:bg-paper/10 hover:border-paper/40"
                                >
                                    <span>View Services</span>
                                </Link>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default HeroOverlay;
