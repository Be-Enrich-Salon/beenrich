"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import colors from "@/theme/colors";
import { homeContent } from "@/content/homeContent";

export default function SignaturePackages() {
    const { signaturePackages } = homeContent;

    return (
        <section id="packages" className="relative w-full py-20 bg-charcoal text-paper overflow-hidden">
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
                        {signaturePackages.badge}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-serif mb-6 leading-tight"
                    >
                        {signaturePackages.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-mist/80 font-light"
                    >
                        {signaturePackages.description}
                    </motion.p>
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {signaturePackages.items.map((pkg, index) => (
                        <motion.div
                            key={pkg.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-stone/50 border border-white/5 rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5 flex flex-col h-full"
                        >
                            {/* Image Section */}
                            <div className="h-72 relative overflow-hidden">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-500" />

                                <div className="absolute inset-0 flex items-center justify-center p-4 text-center z-10">
                                    <div className="border-y border-white/30 py-3 px-6 backdrop-blur-[2px] group-hover:backdrop-blur-[0px] duration-500 group-hover:border-gold/50 transition-all">
                                        <h3 className="text-2xl md:text-3xl font-serif text-white tracking-[0.15em] uppercase drop-shadow-lg group-hover:scale-105 transition-transform duration-500">
                                            {pkg.name}
                                        </h3>
                                    </div>
                                </div>

                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-4 py-1 rounded-full border border-gold/30 z-20">
                                    <span style={{ color: colors.gold }} className="font-medium">{pkg.price}</span>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 flex flex-col flex-grow relative">
                                <div
                                    className="absolute inset-x-0 bottom-0 h-[1px] w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                                    style={{ background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }}
                                />

                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-[1px] w-8 bg-gold/50" />
                                    <span className="text-gold text-sm tracking-wider uppercase font-medium">
                                        {pkg.includes.length} Services Included
                                    </span>
                                </div>

                                <ul className="space-y-2 mb-8 flex-grow">
                                    {pkg.includes.map((item, i) => (
                                        <li key={i} className="flex items-start text-mist/80 text-sm font-light">
                                            <span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-gold/70 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className="w-full px-6 py-3 border border-white/20 rounded-full text-sm tracking-wider uppercase hover:bg-gold hover:text-ink hover:border-gold transition-all duration-300"
                                >
                                    Book Appointment
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
