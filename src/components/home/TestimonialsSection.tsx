"use client";
// Vercel build fix

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { homeContent } from "@/content/homeContent";

const TestimonialsSection = () => {
    const { testimonials } = homeContent;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);



    const paginate = useCallback((newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = testimonials.items.length - 1;
            if (nextIndex >= testimonials.items.length) nextIndex = 0;
            return nextIndex;
        });
    }, [testimonials.items.length]);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            paginate(1);
        }, 3000); // 4 seconds auto-slide
        return () => clearInterval(timer);
    }, [currentIndex, isPaused, paginate]);

    const currentTestimonial = testimonials.items[currentIndex];

    return (
        <section className="py-32 bg-ink relative overflow-hidden text-mist">
            {/* Dynamic Background */}
            <div className="absolute inset-0 w-full h-full opacity-30">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-goldDim/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-charcoal/80 rounded-full blur-[80px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-4 mb-4"
                    >
                        <div className="h-px w-8 bg-gold/50" />
                        <span className="text-gold text-sm tracking-[0.25em] uppercase font-medium">
                            {testimonials.badge}
                        </span>
                        <div className="h-px w-8 bg-gold/50" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-light text-paper mb-6 font-serif"
                    >
                        {testimonials.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-stone-300 text-lg font-light tracking-wide max-w-2xl mx-auto"
                    >
                        {testimonials.subtitle}
                    </motion.p>
                </div>

                {/* Highlighted Testimonial Display */}
                <div
                    className="relative max-w-5xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                            className="relative"
                        >
                            {/* Card Container */}
                            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 text-center overflow-hidden">
                                {/* Glow Effect Top */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />

                                {/* Large Background Quote */}
                                <Quote className="absolute top-8 left-8 text-white/5 w-32 h-32 rotate-180" />

                                {/* Stars */}
                                <div className="flex justify-center gap-2 mb-8 relative z-10">
                                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.2 + i * 0.1 }}
                                        >
                                            <Star size={18} className="fill-gold text-gold" />
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Quote Text */}
                                <motion.blockquote
                                    className="text-2xl md:text-4xl leading-snug font-light text-paper mb-10 font-serif relative z-10"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    &quot;{currentTestimonial.quote}&quot;
                                </motion.blockquote>

                                {/* Author Details */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <cite className="block text-xl md:text-2xl text-gold not-italic font-medium mb-1">
                                        {currentTestimonial.name}
                                    </cite>
                                    <span className="text-sm md:text-base text-stone-400 uppercase tracking-widest">
                                        {currentTestimonial.service}
                                    </span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full -mx-4 md:-mx-12 pointer-events-none">
                        <button
                            onClick={() => paginate(-1)}
                            className="pointer-events-auto p-4 rounded-full bg-white/5 border border-white/10 text-mist hover:bg-gold hover:text-ink hover:border-gold transition-all duration-300 backdrop-blur-md group"
                            aria-label="Previous"
                        >
                            <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => paginate(1)}
                            className="pointer-events-auto p-4 rounded-full bg-white/5 border border-white/10 text-mist hover:bg-gold hover:text-ink hover:border-gold transition-all duration-300 backdrop-blur-md group"
                            aria-label="Next"
                        >
                            <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center items-center gap-4 mt-16">
                    {testimonials.items.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className="group relative py-2"
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            <div className={`h-1 transition-all duration-500 rounded-full ${index === currentIndex ? "w-12 bg-gold" : "w-2 bg-stone-700 group-hover:bg-gold/50"
                                }`} />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
