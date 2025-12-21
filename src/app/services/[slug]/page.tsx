"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { servicesContent } from "@/content/servicesContent";
import { faqData } from "@/content/faqData";
import { detailedServicesContent } from "@/content/detailedServices";
import { ArrowLeft, CheckCircle2, ChevronRight, ShieldCheck, Leaf, ArrowRight as ArrowIcon, Wallet, Sparkles, Plus, Minus } from "lucide-react";
import { useRef, useMemo, useState } from "react";
import { cn } from "@/utils/cn";

const getPriceValue = (price: string) => {
    const numeric = price?.replace(/[^\d]/g, "");
    const value = Number.parseInt(numeric, 10);
    return Number.isFinite(value) ? value : null;
};

const getStartingPrice = (sections: any[], pricing?: any[]) => {
    const sectionPrices = sections.flatMap((section) => section.items?.map((item: any) => getPriceValue(item.price)) || []);
    const extraPrices = pricing?.map((item: any) => getPriceValue(item.price)) || [];
    const allPrices = [...sectionPrices, ...extraPrices].filter((val) => val !== null) as number[];
    const minPrice = Math.min(...allPrices);
    return Number.isFinite(minPrice) ? minPrice : null;
};

const formatPrice = (price: number | null) => price !== null ? `₹${price.toLocaleString("en-IN")}` : undefined;

const ServiceDetail = () => {
    const params = useParams();
    const slug = params.slug as string;
    const containerRef = useRef(null);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    // Fetch content based on slug
    // @ts-ignore
    const content = servicesContent[slug];
    // @ts-ignore
    const faqs = faqData[slug];
    // @ts-ignore
    const detailedContent = detailedServicesContent[slug];

    if (!content) {
        notFound();
    }

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.08]);

    const stats = useMemo(() => {
        const totalLines = content.detailedSections?.reduce((total: number, section: any) => total + (section.items?.length || 0), 0) || 0;
        const startingPriceValue = getStartingPrice(content.detailedSections, content.pricing);
        return {
            totalLines,
            startingPriceValue,
            startingPriceLabel: formatPrice(startingPriceValue)
        };
    }, [content]);

    return (
        <main ref={containerRef} className="relative bg-paper min-h-screen selection:bg-gold/30 selection:text-ink">

            {/* 1. HERO SECTION */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-ink">
                <motion.div
                    style={{ opacity: heroOpacity, scale: heroScale }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={content.hero.image}
                        alt={content.hero.title}
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                </motion.div>

                <div className="section-shell relative z-10 w-full pt-28 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl mx-auto space-y-6"
                    >
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-gold/80 hover:text-gold transition-colors mb-6 group"
                        >
                            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em]">Back to Services</span>
                        </Link>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-paper leading-[1.1]">
                            {content.hero.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-mist/90 font-light max-w-2xl mx-auto leading-relaxed">
                            {content.hero.subtitle}
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-sm uppercase tracking-[0.2em] text-gold font-bold">
                            {stats.startingPriceLabel && (
                                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                                    <Wallet className="h-4 w-4" />
                                    Starting {stats.startingPriceLabel}
                                </span>
                            )}
                            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                                <Sparkles className="h-4 w-4" />
                                {stats.totalLines} menu lines
                            </span>
                        </div>

                        <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/#booking"
                                className="px-8 py-4 bg-gold text-ink font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white hover:scale-105 transition-all duration-300"
                            >
                                {content.hero.cta || "Book Appointment"}
                            </Link>
                            <a href="https://wa.me/918125944445" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-white/20 text-paper font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white/10 transition-all duration-300">
                                WhatsApp Now
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. INTRO / AUTHORITY SECTION */}
            <section className="py-20 md:py-28 bg-paper relative z-10">
                <div className="section-shell">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <span className="text-gold font-display text-2xl md:text-3xl">The Experience</span>
                        <h2 className="text-3xl md:text-5xl font-display text-ink leading-tight">
                            {content.intro.heading}
                        </h2>
                        <div className="space-y-6 text-lg md:text-xl text-charcoal/80 font-light leading-relaxed">
                            {content.intro.description.map((paragraph: string, idx: number) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>
                        <div className="pt-8 flex justify-center gap-8 text-gold/60">
                            {[ShieldCheck, Sparkles, Leaf].map((Icon, idx) => (
                                <Icon key={idx} className="h-8 w-8" />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. POPULAR SERVICES OVERVIEW */}
            {content.popularServices && (
                <section className="py-20 bg-stone/30">
                    <div className="section-shell space-y-12">
                        <div className="text-center max-w-3xl mx-auto space-y-3">
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Highlights</h3>
                            <h2 className="text-3xl md:text-5xl font-display text-ink">Popular Rituals</h2>
                            {stats.startingPriceLabel && (
                                <p className="text-charcoal/70">Guest favorites curated with transparent pricing, starting {stats.startingPriceLabel}.</p>
                            )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {content.popularServices.map((service: any, idx: number) => {
                                const sectionImage = content.detailedSections?.[idx]?.image;
                                const fallbackSectionImage = content.detailedSections?.[0]?.image;
                                const cardImage = service.image || sectionImage || fallbackSectionImage || content.hero.image;

                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.08 }}
                                        className="group bg-paper rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <div className="relative h-48 w-full overflow-hidden rounded-xl mb-6">
                                            <Image
                                                src={cardImage}
                                                alt={service.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-xl font-display text-ink group-hover:text-gold transition-colors">
                                                {service.title}
                                            </h3>
                                            {stats.startingPriceLabel && (
                                                <span className="text-xs font-bold uppercase tracking-widest text-gold/80 bg-stone/60 px-3 py-1 rounded-full">From {stats.startingPriceLabel}</span>
                                            )}
                                        </div>
                                        <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
                                            {service.description}
                                        </p>
                                        <div className="flex items-center text-gold text-xs font-bold uppercase tracking-wider">
                                            <span>View Menu</span>
                                            <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* 4. DETAILED SERVICE SECTIONS */}
            <section className="py-24 md:py-32 bg-paper space-y-24 md:space-y-32">
                <div className="section-shell max-w-5xl text-center space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-[0.35em] text-gold">Service Menu</h3>
                    <h2 className="text-3xl md:text-5xl font-display text-ink">What&apos;s inside this service</h2>
                    <p className="text-charcoal/70">Explore every category with clear price cues and quick comparisons.</p>
                </div>

                {content.detailedSections.map((section: any, idx: number) => {
                    const sectionMinPrice = getStartingPrice([section]);
                    const fromLabel = formatPrice(sectionMinPrice);

                    return (
                        <div key={idx} className="section-shell">
                            <div className={cn(
                                "flex flex-col gap-12 lg:gap-20 items-center",
                                idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                            )}>
                                <div className="w-full lg:w-1/2">
                                    <div className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-[2rem]">
                                        <Image
                                            src={section.image}
                                            alt={section.title}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-ink/10" />
                                        {fromLabel && (
                                            <div className="absolute bottom-4 left-4 bg-paper/90 text-ink px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
                                                From {fromLabel}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 space-y-6">
                                    <div className="space-y-3">
                                        <h3 className="text-3xl md:text-4xl font-display text-ink">{section.title}</h3>
                                        <p className="text-lg text-charcoal/70 leading-relaxed font-light">
                                            {section.description}
                                        </p>
                                    </div>

                                    <div className="space-y-4 pt-2">
                                        {section.items.map((item: any, i: number) => (
                                            <div key={i} className="group rounded-2xl border border-stone/80 bg-white/60 px-4 py-3 flex items-center justify-between">
                                                <div className="space-y-1">
                                                    <span className="text-base font-medium text-ink group-hover:text-gold transition-colors">
                                                        {item.name}
                                                    </span>
                                                    {fromLabel && getPriceValue(item.price) === sectionMinPrice && (
                                                        <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold">Best value</span>
                                                    )}
                                                </div>
                                                <span className="text-lg font-display text-ink">{item.price}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>

            {/* 5. SERVICE BENEFITS */}
            <section className="py-24 bg-ink text-paper relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="section-shell proportional-nums">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold mb-3 block">Premium Distinction</span>
                        <h2 className="text-3xl md:text-5xl font-display text-paper mb-6">Service Benefits</h2>
                        <p className="text-mist/60 text-lg font-light">
                            Experience the unique advantages and premium care included in every session.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {(detailedContent?.benefits || content.whyChooseUs).map((benefit: any, idx: number) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-gold/30 transition-colors duration-300">
                                <div className="h-12 w-12 bg-gold text-ink rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-display text-paper mb-3">{benefit.title}</h3>
                                <p className="text-mist/60 text-sm leading-relaxed first-letter:uppercase">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FAQ SECTION */}
            {faqs && (
                <section className="py-24 bg-stone/20">
                    <div className="section-shell max-w-3xl mx-auto">
                        <div className="text-center mb-12 space-y-3">
                            <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold">Common Queries</span>
                            <h2 className="text-3xl md:text-5xl font-display text-ink">Frequently Asked Questions</h2>
                        </div>
                        <div className="space-y-4">
                            {faqs.map((faq: any, idx: number) => (
                                <div key={idx} className="bg-paper rounded-2xl overflow-hidden border border-stone/50 transition-all duration-300 hover:border-gold/30 hover:shadow-lg">
                                    <button
                                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                                        className="w-full flex items-center justify-between p-6 text-left"
                                    >
                                        <span className="text-lg font-medium text-ink pr-8">{faq.question}</span>
                                        {openFaqIndex === idx ? (
                                            <Minus className="h-5 w-5 text-gold shrink-0" />
                                        ) : (
                                            <Plus className="h-5 w-5 text-gold shrink-0 text-gold/50" />
                                        )}
                                    </button>
                                    <motion.div
                                        initial={false}
                                        animate={{ height: openFaqIndex === idx ? "auto" : 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-charcoal/70 leading-relaxed text-base border-t border-stone/20">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}            {/* 7. CALL TO ACTION */}
            <section className="py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-ink z-0">
                    <Image
                        src="/images/hero/hair-spa.webp"
                        alt="Booking"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-transparent" />
                </div>

                <div className="section-shell relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-2xl space-y-6">
                        <h2 className="text-4xl md:text-6xl font-display text-paper">
                            {content.cta.headline}
                        </h2>
                        <p className="text-xl text-mist/80 font-light max-w-lg">
                            {content.cta.subtext}
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6 shrink-0">
                        <Link
                            href="/#booking"
                            className="px-10 py-5 bg-gold text-ink font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_40px_-10px_rgba(212,175,55,0.5)]"
                        >
                            {content.cta.buttonText}
                        </Link>
                        <a href="https://wa.me/918125944445" className="px-10 py-5 border border-white/20 text-paper font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/10 transition-all duration-300">
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* 8. RELATED SERVICES */}
            <section className="py-24 bg-paper border-t border-stone">
                <div className="section-shell">
                    <div className="flex justify-between items-end mb-12">
                        <h2 className="text-3xl md:text-4xl font-display text-ink">Explore More Rituals</h2>
                        <Link href="/services" className="hidden md:flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-xs group">
                            View All Services
                            <ArrowIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {content.related.map((item: any, idx: number) => (
                            <Link href={`/services/${item.id}`} key={idx} className="group block relative overflow-hidden rounded-2xl aspect-[4/3]">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-8">
                                    <h3 className="text-2xl font-display text-paper mb-2">{item.title}</h3>
                                    <span className="text-gold text-xs font-bold uppercase tracking-wider group-hover:underline decoration-gold/50 underline-offset-4">Discover</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link href="/services" className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-xs">
                            View All Services
                            <ArrowIcon className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default ServiceDetail;
