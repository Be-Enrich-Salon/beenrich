"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { servicesContent } from "@/content/servicesContent";
import { ArrowRight, Sparkles, CheckCircle, Eye, Heart, Scissors } from "lucide-react";

const ServicesList = () => {
    const { categories } = servicesContent;
    const highlights: Record<string, string[]> = {
        "men-hair-care": [
            "Precision cuts, beard design, and head spa",
            "Global and ammonia-free color options",
            "Director, stylist, and kids tiers",
        ],
        "women-hair-care": [
            "Creative cuts with blow-dry styling",
            "Spa, repair, and scalp rituals",
            "Global, root touch-up, and highlights",
        ],
        "chemical-treatments": [
            "Smoothening, straightening, and perms",
            "Keratin with bonding-first approach",
            "Consult-led planning to protect hair",
        ],
        "grooming-makeup": [
            "Bridal, party, and HD makeup looks",
            "Full-body waxing and threading",
            "Hair styling and saree draping",
        ],
        "skin-care": [
            "Hydra facial, clean-ups, and detan",
            "Brightening and hydration therapies",
            "Skin polishing for face and body",
        ],
        "pedicure-manicure": [
            "Spa pedicure and manicure rituals",
            "Heel peel and targeted foot care",
            "Gel polish and nail art",
        ],
        "body-spa-reflexology": [
            "Swedish and deep-tissue massage",
            "Foot reflexology for quick relief",
            "Body polishing and scrubs",
        ],
    };

    return (
        <section id="services-menu" className="bg-paper py-16 md:py-24 relative overflow-hidden">
            {/* Subtle Decorative Background */}
            <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-gold/[0.03] blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-gold-soft/[0.02] blur-[180px] rounded-full pointer-events-none" />

            <div className="section-shell">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center max-w-4xl mx-auto"
                >
                    <div className="space-y-4">
                        <div className="flex items-center justify-center gap-3">
                            <div className="h-px w-8 bg-gold/40" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gold">
                                Service Menu
                            </span>
                            <div className="h-px w-8 bg-gold/40" />
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-ink leading-tight">
                            Our Signature <span className="text-gold italic">Services</span>
                        </h2>

                        <p className="text-base md:text-lg text-charcoal/70 font-light leading-relaxed max-w-2xl mx-auto">
                            Discover our comprehensive range of premium grooming and wellness treatments designed to elevate your beauty experience.
                        </p>
                    </div>
                </motion.div>

                {/* Clean Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <ServiceCard key={category.id} category={category} index={index} highlights={highlights} />
                    ))}
                </div>

                {/* Feature Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-20 max-w-5xl mx-auto"
                >
                    <div className="rounded-3xl bg-gradient-to-br from-ink to-charcoal p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold/10 blur-[100px] rounded-full" />
                        
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-paper">
                            {[
                                { icon: Scissors, title: "Premium Products", desc: "L'Oreal Professionnel, Kerastase, and world-class brands" },
                                { icon: Heart, title: "Expert Specialists", desc: "Certified professionals with 20+ years experience" },
                                { icon: Eye, title: "Hygiene Standards", desc: "Sterilized tools and strict sanitation protocols" }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    whileHover={{ y: -3 }}
                                    className="space-y-3"
                                >
                                    <div className="h-12 w-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center">
                                        <feature.icon className="h-6 w-6 text-gold" />
                                    </div>
                                    <h4 className="text-lg font-display">{feature.title}</h4>
                                    <p className="text-mist/70 text-sm leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ServiceCard = ({ category, index, highlights }: { category: any; index: number; highlights: Record<string, string[]> }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group"
        >
            <Link href={`/services/${category.id}`} className="block">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-card border border-gold/10 transition-all duration-300 hover:shadow-xl hover:border-gold/30 hover:-translate-y-2">
                    {/* Image Section */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                            src={category.image}
                            alt={category.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                        
                        {/* Number Badge */}
                        <div className="absolute top-4 left-4 h-10 w-10 rounded-xl bg-gold/90 backdrop-blur-sm flex items-center justify-center border border-white/20">
                            <span className="text-ink font-display font-bold text-base">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                        </div>

                        {/* Sparkle Icon */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Sparkles className="h-5 w-5 text-gold" />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 space-y-3">
                        <h3 className="text-xl md:text-2xl font-display text-ink group-hover:text-gold transition-colors duration-300">
                            {category.title}
                        </h3>
                        <p className="text-charcoal/70 text-sm leading-relaxed line-clamp-3">
                            {category.description}
                        </p>

                        <ul className="space-y-2">
                            {(highlights[category.id] || []).map((item) => (
                                <li key={item} className="flex items-start gap-2 text-charcoal/80 text-sm">
                                    <CheckCircle className="h-4 w-4 text-gold mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-gold font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                            <span className="uppercase tracking-wider">View Details</span>
                            <ArrowRight className="h-4 w-4" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ServicesList;
