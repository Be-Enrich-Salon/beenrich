"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { homeContent } from "@/content/homeContent";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const ServicesPreview = () => {
    const { servicesPreview } = homeContent;

    return (
        <section id="services" className="bg-paper pt-12 pb-24 md:pb-32 relative overflow-hidden">
            {/* Artistic Background Decor */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gold/[0.03] rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gold/[0.02] rounded-full blur-[100px] -z-10" />

            <div className="section-shell">
                <div className="mb-20 flex flex-col items-center text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                    >
                        <div className="h-px w-8 bg-gold/40" />
                        <span className="text-xs font-bold uppercase tracking-[0.4em] text-gold">{servicesPreview.badge}</span>
                        <div className="h-px w-8 bg-gold/40" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-display text-ink"
                    >
                        {servicesPreview.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="max-w-2xl text-xl text-charcoal/60 font-light leading-relaxed italic"
                    >
                        {servicesPreview.description}
                    </motion.p>
                </div>

                {/* ScrollStack Implementation */}
                <div className="w-full">
                    <ScrollStack
                        itemDistance={100}
                        itemStackDistance={30}
                        stackPosition="10%"
                        baseScale={0.94}
                        useWindowScroll={true}
                    >
                        {servicesPreview.items.map((service, index) => (
                            <ScrollStackItem key={service.title} itemClassName="max-w-5xl mx-auto">
                                <div className="group relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-[2.5rem] bg-stone shadow-xl border border-charcoal/5">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                                        sizes="(max-width: 1024px) 100vw, 80vw"
                                        style={{ objectPosition: (service as any).position || 'center' }}
                                    />

                                    {/* Glass Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 pointer-events-none" />

                                    {/* Content Area */}
                                    <div className="absolute inset-0 p-8 md:p-14 flex flex-col justify-end">
                                        <div className="max-w-2xl space-y-4">
                                            <div className="flex items-center gap-3">
                                                <Sparkles className="h-4 w-4 text-gold" />
                                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">Experience {index + 1}</span>
                                            </div>
                                            <h3 className="text-3xl md:text-5xl font-display text-paper leading-tight group-hover:text-gold transition-colors duration-500">
                                                {service.title}
                                            </h3>
                                            <p className="text-base md:text-lg text-paper/60 font-light leading-relaxed max-w-xl group-hover:text-paper transition-colors">
                                                {service.description}
                                            </p>

                                            <div className="pt-4">
                                                <Link
                                                    href={`/services/${(service as any).id}`}
                                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-ink text-xs font-bold uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                                                >
                                                    <span>View Details</span>
                                                    <ArrowRight className="h-4 w-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative Border */}
                                    <div className="absolute inset-6 border border-white/10 rounded-[2rem] pointer-events-none" />
                                </div>
                            </ScrollStackItem>
                        ))}
                    </ScrollStack>
                </div>

                {/* View All Services Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 flex justify-center"
                >
                    <Link
                        href="/services"
                        className="group relative inline-flex items-center gap-6 px-12 py-5 bg-ink text-paper rounded-full text-[11px] font-black uppercase tracking-[0.4em] transition-all hover:bg-gold hover:text-ink hover:shadow-[0_20px_40px_-10px_rgba(212,175,55,0.4)] hover:-translate-y-1 overflow-hidden"
                    >
                        <span className="relative z-10">{servicesPreview.viewAllText}</span>
                        <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-2" />
                        <div className="absolute inset-0 bg-gold translate-y-full transition-transform group-hover:translate-y-0 duration-500" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesPreview;
