"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { homeContent } from "@/content/homeContent";

const BrandsSection = () => {
    const { brands } = homeContent;

    return (
        <section className="relative w-full py-20 md:py-28 overflow-hidden bg-ink">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={brands.sideImage}
                    alt="Background"
                    fill
                    className="object-cover opacity-80"
                    sizes="100vw"
                    priority={false}
                />
                <div className="absolute inset-0 bg-ink/50" /> {/* Softer overlay so image shows through */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.12),transparent_40%),radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.1),transparent_35%)]" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-14 md:mb-20 text-center space-y-4"
                >
                    <div className="inline-flex items-center gap-3 rounded-full border border-gold/30 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.35em] text-gold backdrop-blur">
                        Trusted Formulations
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-paper leading-tight">
                        {brands.title}
                    </h2>
                    <p className="mx-auto max-w-2xl text-mist/80 text-base md:text-lg leading-relaxed">
                        {brands.subtitle}
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.3em] text-gold/80">
                        <span className="rounded-full bg-white/5 px-4 py-2 border border-white/10">14+ Global Houses</span>
                        <span className="rounded-full bg-white/5 px-4 py-2 border border-white/10">Derm-grade Care</span>
                        <span className="rounded-full bg-white/5 px-4 py-2 border border-white/10">Salon-Perfect Results</span>
                    </div>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {brands.items.map((brand, index) => {
                        const isO3 = brand.name === "O3+";
                        const cardClasses = isO3
                            ? "relative group rounded-2xl border border-white/10 bg-white/12 backdrop-blur-sm px-4 py-6 flex items-center justify-center shadow-[0_20px_60px_-25px_rgba(0,0,0,0.65)] hover:border-gold/40 hover:shadow-[0_25px_70px_-30px_rgba(212,175,55,0.35)] transition-all duration-300"
                            : "relative group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-6 flex items-center justify-center shadow-[0_20px_60px_-25px_rgba(0,0,0,0.65)] hover:border-gold/40 hover:shadow-[0_25px_70px_-30px_rgba(212,175,55,0.35)] transition-all duration-300";

                        const logoClasses = isO3
                            ? "object-contain w-full h-16 md:h-20 brightness-0 invert contrast-135 scale-115 md:scale-130 opacity-95 drop-shadow-[0_0_12px_rgba(255,255,255,0.45)] group-hover:opacity-100 group-hover:scale-140 transition-all duration-300"
                            : "object-contain w-full h-16 md:h-20 brightness-0 invert opacity-90 drop-shadow-[0_0_10px_rgba(255,255,255,0.35)] group-hover:opacity-100 group-hover:scale-105 transition-all duration-300";

                        return (
                        <motion.div
                            key={brand.name}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.03 }}
                            className={cardClasses}
                        >
                            <div className="absolute inset-px rounded-2xl border border-white/5 group-hover:border-gold/25 transition-colors" />
                            <Image
                                src={brand.logo}
                                alt={brand.name}
                                width={160}
                                height={80}
                                className={logoClasses}
                                sizes="(max-width: 768px) 120px, 180px"
                            />
                        </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BrandsSection;
