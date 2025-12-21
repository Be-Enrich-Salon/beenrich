"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { homeContent } from "@/content/homeContent";

const BrandsSection = () => {
    const { brands } = homeContent;

    return (
        <section className="relative w-full bg-paper overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[600px] lg:h-[800px]">

                {/* Left Side: Product Image */}
                <div className="relative w-full lg:w-1/2 h-[400px] lg:h-auto overflow-hidden">
                    <Image
                        src={brands.sideImage}
                        alt="Premium Beauty Products"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={false}
                    />
                    {/* Overlay for depth */}
                    <div className="absolute inset-0 bg-black/10 mx-blend-overlay" />
                </div>

                {/* Right Side: Logos & Content */}
                <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-16 md:p-16 lg:p-24 text-center lg:text-left bg-paper">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 max-w-lg mx-auto lg:mx-0 text-center"
                    >
                        <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                            Global Partnerships
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-ink mb-6">
                            {brands.title}
                        </h2>
                        <p className="text-charcoal/60 text-lg font-light leading-relaxed">
                            {brands.subtitle}
                        </p>
                    </motion.div>

                    {/* Logo Grid */}
                    <div className="w-full max-w-2xl grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center">
                        {brands.items.map((brand, index) => (
                            <motion.div
                                key={brand.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="relative w-28 h-16 md:w-32 md:h-20 group"
                            >
                                <Image
                                    src={brand.logo}
                                    alt={brand.name}
                                    fill
                                    className="object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100 group-hover:scale-110 mix-blend-multiply"
                                    sizes="128px"
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-tl-[100px] -z-0 pointer-events-none" />
                </div>
            </div>
        </section>
    );
};

export default BrandsSection;
