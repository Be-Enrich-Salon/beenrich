'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from 'framer-motion';
import HeroOverlay from './HeroOverlay';
import { heroSlides } from './HeroSlides';
import Navbar from '../Navbar';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden bg-ink">
            <Navbar />

            {/* Background Slides */}
            <AnimatePresence mode='popLayout'>
                <motion.div
                    key={heroSlides[currentSlide].id}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={heroSlides[currentSlide].image}
                        alt={heroSlides[currentSlide].title}
                        fill
                        priority={currentSlide === 0}
                        sizes="100vw"
                        className="object-cover opacity-60"
                    />
                    {/* Overlay Gradient for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                    <div className="absolute inset-0 bg-ink/30" />
                </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <HeroOverlay
                slide={heroSlides[currentSlide]}
                isActive={true}
            />

            {/* Slide Indicators */}
            <div className="absolute bottom-32 left-1/2 flex -translate-x-1/2 gap-3 z-20">
                {heroSlides.map((slide, index) => (
                    <button
                        key={slide.id}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1.5 transition-all duration-300 rounded-full ${currentSlide === index ? 'w-8 bg-gold' : 'w-2 bg-mist/30 hover:bg-mist/50'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
