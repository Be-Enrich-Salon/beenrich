"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { homeContent } from "@/content/homeContent";

const HospitalitySection = () => {
    const { hospitality } = homeContent;

    return (
        <section className="py-24 bg-paper relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-mist/20 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Centered Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block text-gold text-sm tracking-[0.2em] uppercase mb-4 font-medium">
                            {hospitality.badge}
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-ink font-serif">
                            {hospitality.title}
                        </h2>
                    </motion.div>
                </div>

                {/* Overlapping Image Composition */}
                <div className="relative max-w-6xl mx-auto h-[500px] md:h-[700px]">

                    {/* Image 1: Secondary (Left, Tall, Vertically Oriented) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="absolute top-10 left-0 md:left-[5%] w-[40%] md:w-[30%] h-[70%] z-10 hidden md:block"
                    >
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src={hospitality.images.secondary}
                                alt="Salon Interior Left"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>

                    {/* Image 2: Main (Center, Large, Wide) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="absolute top-0 md:top-[10%] left-[5%] md:left-[25%] w-[90%] md:w-[50%] h-[60%] md:h-[80%] z-20"
                    >
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-paper">
                            <Image
                                src={hospitality.images.main}
                                alt="Salon Interior Main"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Image 3: Detail (Right, Floating, Square-ish) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="absolute bottom-20 md:bottom-[15%] right-0 md:right-[5%] w-[40%] md:w-[25%] h-[40%] md:h-[50%] z-30 hidden md:block"
                    >
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-4 border-paper">
                            <Image
                                src={hospitality.images.detail}
                                alt="Salon Detail"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>

                    {/* Mobile Only: Simple Grid for smaller screens if overlap fails */}
                    <div className="md:hidden absolute top-[65%] w-full flex gap-4 overflow-x-auto pb-4 snap-x">
                        <div className="w-[80vw] h-64 shrink-0 rounded-xl overflow-hidden shadow-lg snap-center relative">
                            <Image src={hospitality.images.secondary} alt="Interior 2" fill className="object-cover" />
                        </div>
                        <div className="w-[80vw] h-64 shrink-0 rounded-xl overflow-hidden shadow-lg snap-center relative">
                            <Image src={hospitality.images.detail} alt="Interior 3" fill className="object-cover" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HospitalitySection;
