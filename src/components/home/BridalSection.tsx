"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import colors from "@/theme/colors";
import { homeContent } from "@/content/homeContent";

export default function BridalSection() {
    const { bridal } = homeContent;

    return (
        <section className="relative w-full py-20 bg-charcoal text-paper overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={bridal.heroImage}
                    alt="Bridal Luxury"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block text-sm uppercase tracking-[0.2em] mb-4"
                        style={{ color: colors.gold }}
                    >
                        {bridal.badge}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-serif mb-6 leading-tight"
                    >
                        {bridal.title} <br />
                        <span style={{ color: colors.goldSoft }}>{bridal.titleAccent}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-mist/80 font-light"
                    >
                        {bridal.description}
                    </motion.p>
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {bridal.packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative bg-stone/50 border border-white/5 rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5 flex flex-col"
                        >
                            <div className="h-64 relative overflow-hidden">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                            </div>

                            <div className="p-8 text-center relative">
                                <div
                                    className="absolute inset-x-0 bottom-0 h-[1px] w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                                    style={{ background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }}
                                />

                                <h3 className="text-2xl font-serif mb-3 text-white">{pkg.name}</h3>
                                <p className="text-mist/80 mb-8 text-sm font-light">{pkg.description}</p>

                                <button
                                    className="px-6 py-2 border border-white/20 rounded-full text-sm tracking-wider uppercase hover:bg-gold hover:text-ink hover:border-gold transition-all duration-300"
                                >
                                    Explore Package
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 text-center space-x-0 md:space-x-6 space-y-4 md:space-y-0 flex flex-col md:flex-row justify-center items-center"
                >
                    <button
                        className="px-8 py-3 bg-gold text-ink font-medium tracking-wide rounded-full hover:bg-goldSoft transition-colors duration-300 w-full md:w-auto"
                    >
                        {bridal.ctaMain}
                    </button>

                    <button
                        className="px-8 py-3 border border-gold/30 text-gold hover:border-gold hover:bg-gold/5 transition-all duration-300 rounded-full w-full md:w-auto"
                    >
                        {bridal.ctaSecondary}
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
