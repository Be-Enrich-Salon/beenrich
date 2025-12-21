
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { homeContent } from "@/content/homeContent";

const HospitalitySection = () => {
    const { hospitality } = homeContent;
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Horizontal parallax for overlapping images
    const x1 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
    const x2 = useTransform(scrollYProgress, [0, 1], [-20, 60]);
    const x3 = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const x4 = useTransform(scrollYProgress, [0, 1], [20, 100]);

    // Subtle vertical drift to enhance scroll feel
    const y1 = useTransform(scrollYProgress, [0, 1], [10, -10]);
    const y2 = useTransform(scrollYProgress, [0, 1], [6, -6]);
    const y3 = useTransform(scrollYProgress, [0, 1], [8, -8]);
    const y4 = useTransform(scrollYProgress, [0, 1], [12, -12]);

    // Opacity and scale emphasis for center vs background
    const opacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
    const opacity2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 0.85, 0.75]);
    const opacity3 = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 0.85, 0.75]);
    const opacity4 = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.75, 0.7]);

    const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1.02, 1]);
    const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 0.98, 0.96]);
    const scale3 = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 0.98, 0.96]);
    const scale4 = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 0.95, 0.94]);

    // Gentle rotation for depth
    const rotate1 = useTransform(scrollYProgress, [0, 0.5, 1], [-3, 0, 3]);
    const rotate2 = useTransform(scrollYProgress, [0, 0.5, 1], [3, 0, -3]);
    const rotate3 = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 2]);
    const rotate4 = useTransform(scrollYProgress, [0, 0.5, 1], [2, 0, -2]);

    const branches = [
        { name: "Vijayawada", image: "/images/locations/vijayawada.webp" },
        { name: "Guntur", image: "/images/locations/guntur.webp" },
        { name: "Ongole", image: "/images/locations/ongole.webp" },
        { name: "Tenali", image: "/images/locations/tenali.webp" }
    ];

    return (
        <section ref={containerRef} className="relative py-32 bg-paper overflow-hidden">

            {/* Decorative Background Elements */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-mist/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="section-shell relative z-10">

                {/* Header - Sticky/Fixed feel or just standard */}
                <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "0em" }}
                        whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="inline-block text-gold text-xs md:text-sm font-bold uppercase mb-4"
                    >
                        {hospitality.badge}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-light text-ink font-display"
                    >
                        {hospitality.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="mt-8 text-lg text-stone/80 leading-relaxed max-w-2xl mx-auto"
                    >
                        {hospitality.description}
                    </motion.p>
                </div>

                {/* Overlapping Branch Images - Horizontal layout (full-bleed) */}
                <div className="relative h-[520px] md:h-[560px] w-screen max-w-none left-1/2 -translate-x-1/2 mb-20">

                    {/* Image 1 - Vijayawada (Top Layer - centered and fully visible) */}
                    <motion.div
                        style={{ x: x1, y: y1, rotate: rotate1, opacity: opacity1, scale: scale1 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="absolute top-[6%] left-[20%] w-[44%] md:w-[44%] h-[420px] md:h-[480px] z-50"
                    >
                        <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl ring-2 ring-gold/60 border border-gold/40 group">
                            <Image
                                src={branches[0].image}
                                alt={branches[0].name}
                                fill
                                sizes="(max-width:768px) 60vw, 40vw"
                                className="object-cover brightness-110 transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-ink/8 to-transparent" />
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 text-center">
                                <p className="px-4 py-2 rounded-full bg-ink/70 text-paper font-display text-2xl shadow-card border border-gold/50">
                                    {branches[0].name}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image 2 - Guntur (Behind and partially shown) */}
                    <motion.div
                        style={{ x: x2, y: y2, rotate: rotate2, opacity: opacity2, scale: scale2 }}
                        transition={{ type: "spring", stiffness: 60, damping: 18 }}
                        className="pointer-events-none absolute top-[14%] -left-[3%] w-[40%] md:w-[40%] h-[360px] md:h-[360px] z-30 scale-[0.97] opacity-86"
                    >
                        <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl border-2 border-white/10 opacity-90 hover:opacity-100 transition-opacity">
                            <Image
                                src={branches[1].image}
                                alt={branches[1].name}
                                fill
                                sizes="(max-width:768px) 60vw, 36vw"
                                className="object-cover brightness-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-ink/8 to-transparent" />
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 text-center">
                                <p className="px-4 py-2 rounded-full bg-ink/70 text-paper font-display text-xl shadow-card border border-gold/50">
                                    {branches[1].name}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image 3 - Ongole (Behind and partially shown) */}
                    <motion.div
                        style={{ x: x3, y: y3, rotate: rotate3, opacity: opacity3, scale: scale3 }}
                        transition={{ type: "spring", stiffness: 60, damping: 18 }}
                        className="pointer-events-none absolute top-[14%] left-[48%] w-[34%] md:w-[34%] h-[360px] md:h-[360px] z-20 scale-[0.94] opacity-82"
                    >
                        <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl border-2 border-white/10 opacity-90 hover:opacity-100 transition-opacity">
                            <Image
                                src={branches[2].image}
                                alt={branches[2].name}
                                fill
                                sizes="(max-width:768px) 60vw, 32vw"
                                className="object-cover brightness-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-ink/8 to-transparent" />
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 text-center">
                                <p className="px-4 py-2 rounded-full bg-ink/70 text-paper font-display text-xl shadow-card border border-gold/50">
                                    {branches[2].name}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image 4 - Tenali (Behind and partially shown) */}
                    <motion.div
                        style={{ x: x4, y: y4, rotate: rotate4, opacity: opacity4, scale: scale4 }}
                        transition={{ type: "spring", stiffness: 60, damping: 18 }}
                        className="pointer-events-none absolute top-[16%] left-[64%] w-[28%] md:w-[30%] h-[340px] md:h-[360px] z-15 scale-[0.94] opacity-84"
                    >
                        <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg border border-white/5">
                            <Image
                                src={branches[3].image}
                                alt={branches[3].name}
                                fill
                                sizes="(max-width:768px) 50vw, 30vw"
                                className="object-cover brightness-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-ink/8 to-transparent" />
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 text-center">
                                <p className="px-4 py-2 rounded-full bg-ink/70 text-paper font-display text-xl shadow-card border border-gold/50">
                                    {branches[3].name}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Call to Action */}
                <div className="text-center relative z-20">
                    <Link
                        href="/locations"
                        className="group relative inline-flex items-center gap-4 px-12 py-5 bg-ink text-paper rounded-full overflow-hidden transition-all hover:bg-gold hover:text-ink hover:scale-105 hover:shadow-glow"
                    >
                        <span className="relative z-10 font-bold tracking-widest uppercase text-sm">Find A Salon Near You</span>
                        <span className="relative z-10 text-xl group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default HospitalitySection;
