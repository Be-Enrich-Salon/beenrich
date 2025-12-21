"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { servicesContent } from "@/content/servicesContent";
import { Sparkles, Award, Users } from "lucide-react";
import { useRef } from "react";

const ServicesHero = () => {
    const { hero } = servicesContent;
    const containerRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
    const y = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

    return (
        <section ref={containerRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-ink pt-28 md:pt-32">
            {/* Smooth Background with Parallax */}
            <motion.div 
                style={{ scale }}
                className="absolute inset-0"
            >
                <Image
                    src="/images/hero/hair-spa.webp"
                    alt="Be Enrich Services"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/60 to-paper" />
            </motion.div>

            {/* Subtle Floating Orbs */}
            <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-gold/10 blur-[140px] rounded-full" />
            <div className="absolute bottom-[15%] right-[8%] w-[500px] h-[500px] bg-gold-soft/8 blur-[160px] rounded-full" />

            <div className="section-shell relative z-10 py-20">
                <motion.div
                    style={{ y }}
                    className="max-w-5xl mx-auto text-center"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-center gap-3 mb-6"
                    >
                        <Sparkles className="h-4 w-4 text-gold" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gold">
                            {hero.subtitle}
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-display text-paper leading-[1.1] mb-6"
                    >
                        Premium Salon & <br />
                        <span className="text-gold italic">Spa Services</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-mist/80 font-light leading-relaxed max-w-3xl mx-auto mb-10"
                    >
                        {hero.description}
                    </motion.p>

                    {/* Stats Row */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-wrap items-center gap-8 mb-10 justify-center"
                    >
                        {[
                            { number: "20+", label: "Years", icon: Award },
                            { number: "500+", label: "Clients", icon: Users },
                            { number: "7", label: "Categories", icon: Sparkles }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -3 }}
                                className="flex items-center gap-3"
                            >
                                <div className="h-12 w-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center">
                                    <stat.icon className="h-5 w-5 text-gold" />
                                </div>
                                <div className="text-left">
                                    <p className="text-2xl font-display text-paper">{stat.number}</p>
                                    <p className="text-xs text-mist/60 uppercase">{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.a
                            href="#services-menu"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-ink rounded-full font-bold uppercase tracking-wider text-sm transition-all hover:shadow-glow"
                        >
                            Explore Services
                        </motion.a>
                        <motion.a
                            href="/#booking"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gold/30 text-paper rounded-full font-bold uppercase tracking-wider text-sm transition-all hover:bg-gold/10 hover:border-gold"
                        >
                            Book Appointment
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesHero;