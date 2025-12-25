"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { servicesContent } from "@/content/servicesContent";
import { faqData } from "@/content/faqData";
import { detailedServicesContent } from "@/content/detailedServices";
import { CheckCircle2, ChevronRight, ChevronLeft, ShieldCheck, Leaf, ArrowRight as ArrowIcon, Plus, Minus } from "lucide-react";
import { useRef, useState } from "react";
import { useBooking } from "@/context/BookingContext";

const ServiceDetail = () => {
    const params = useParams();
    const slug = params.slug as string;
    const containerRef = useRef(null);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
    const [activeSection, setActiveSection] = useState(0);
    const relatedScrollRef = useRef<HTMLDivElement>(null);
    const [relatedSlide, setRelatedSlide] = useState(0);
    const { openBooking } = useBooking();


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
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

    // Get all OTHER categories for the "Explore More" section
    const allCategories = servicesContent.categories.filter((cat: any) => cat.id !== slug);

    return (
        <main ref={containerRef} className="relative bg-paper min-h-screen selection:bg-gold/30 selection:text-ink font-sans">

            {/* 1. IMMERSIVE HERO */}
            <section className="relative min-h-[85vh] overflow-hidden bg-ink">
                <motion.div
                    style={{ opacity: heroOpacity, scale: heroScale }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={content.hero.image}
                        alt={content.hero.title}
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/70 to-ink/30" />
                </motion.div>

                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-gold/10 blur-[120px]" />
                    <div className="absolute right-10 bottom-16 h-80 w-80 rounded-full bg-gold/5 blur-[140px]" />
                </div>

                <div className="section-shell relative z-10 w-full pt-24 pb-16">
                    <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
                        <div className="space-y-8 text-paper">
                            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-mist/80 backdrop-blur">
                                Signature Ritual • {content.hero.title}
                            </div>

                            <div className="space-y-4">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.05] drop-shadow-xl text-gold">
                                    {content.hero.title}
                                </h1>
                                <p className="text-lg md:text-xl text-mist/80 max-w-2xl leading-relaxed">
                                    {content.hero.subtitle}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                                <button
                                    onClick={openBooking}
                                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-ink shadow-glow transition hover:-translate-y-0.5"
                                >
                                    {content.hero.cta || "Book Appointment"}
                                    <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl"
                            >
                                <div className="relative aspect-[4/5]">
                                    <Image
                                        src={content.detailedSections?.[0]?.image || content.hero.image}
                                        alt={content.hero.title}
                                        width={800}
                                        height={1000}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="h-full w-full object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3 text-paper">
                                        <div className="flex items-center gap-2 text-gold text-sm uppercase tracking-[0.25em]">
                                            <ShieldCheck className="h-5 w-5" />
                                            Curated by Experts
                                        </div>
                                        <p className="text-lg text-mist/90 leading-relaxed">
                                            Precision techniques, ritualised aromas, and thoughtful pacing designed around you.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 2. ORIGIN STORY */}
            <section className="py-20 md:py-24 bg-paper">
                <div className="section-shell">
                    <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-start">
                        <div className="space-y-6">
                            <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold">The Experience</span>
                            <h2 className="text-3xl md:text-5xl font-serif text-ink leading-tight">
                                {content.intro.heading}
                            </h2>
                            <div className="space-y-4 text-lg text-charcoal/80 leading-relaxed">
                                {content.intro.description.map((paragraph: string, idx: number) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {["Aroma-led welcome", "Temperature-perfect linens", "Artist-grade tools", "Mindful pacing"].map((note) => (
                                    <span key={note} className="pill bg-stone/10 text-ink border border-stone/20">
                                        {note}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[{
                                title: "Personalised", desc: "Consult-first rituals tailored to your skin, hair, and schedule."
                            }, {
                                title: "Clean formulations", desc: "Dermatologically trusted actives with spa-grade safety."
                            }, {
                                title: "Calibrated touch", desc: "Pressure, heat, and timing balanced for visible calm."
                            }, {
                                title: "Aftercare", desc: "Take-home guidance to extend results beyond the salon."
                            }].map((card, idx) => (
                                <motion.div
                                    key={card.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="rounded-2xl border border-stone/15 bg-white shadow-sm p-6"
                                >
                                    <div className="flex items-center gap-2 text-gold text-sm uppercase tracking-[0.25em] mb-3">
                                        <Leaf className="h-4 w-4" />
                                        {card.title}
                                    </div>
                                    <p className="text-charcoal/80 text-sm leading-relaxed">{card.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. IMMERSIVE JOURNEY RAIL - REDESIGNED */}
            <section className="py-24 bg-ink relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-paper/5 to-transparent opacity-10" />
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

                <div className="section-shell relative z-10 space-y-20">
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold">The Journey</span>
                        <h2 className="text-4xl md:text-6xl font-serif text-paper">Your Ritual Unfolds</h2>
                        <p className="text-mist/70 text-lg max-w-xl mx-auto">A carefully orchestrated sequence of care, designed to restore your balance.</p>
                    </div>

                    <div className="space-y-20 md:space-y-32">
                        {content.detailedSections.map((section: any, idx: number) => {
                            const isEven = idx % 2 === 0;
                            const isBridalSection = section.title.toLowerCase().includes("bridal");
                            const chips = (section.items || []).slice(0, 3).map((i: any) => i.name);

                            return (
                                <motion.div
                                    key={section.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.7 }}
                                    className={`relative grid md:grid-cols-2 gap-10 md:gap-24 items-center ${!isEven ? "md:grid-flow-dense" : ""}`}
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-ink shadow-[0_0_20px_rgba(212,172,104,0.6)] z-20 flex items-center justify-center top-0 md:top-1/2" >
                                        <div className="w-1.5 h-1.5 bg-paper rounded-full animate-pulse" />
                                    </div>

                                    {/* Image Side */}
                                    <div className={`pl-12 md:pl-0 relative ${isEven ? "md:order-1 md:pr-12" : "md:order-2 md:pl-12"}`}>
                                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-2xl group">
                                            <Image
                                                src={section.image}
                                                alt={section.title}
                                                fill
                                                sizes="(max-width: 768px) 90vw, 45vw"
                                                className="object-cover object-top transition duration-1000 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-ink/20 group-hover:bg-transparent transition duration-700" />

                                            {/* Number badge removed */}
                                        </div>
                                    </div>

                                    {/* Text Side */}
                                    <div className={`pl-12 md:pl-0 relative ${isEven ? "md:order-2 md:pl-12 md:text-left" : "md:order-1 md:pr-12 md:text-right"}`}>
                                        <div className={`space-y-6 ${!isEven ? "md:ml-auto" : ""}`}>
                                            <div className={`flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold ${!isEven ? "md:justify-end" : ""}`}>
                                                {/* Stage indicator removed */}
                                            </div>

                                            <h3 className="text-3xl md:text-5xl font-serif text-paper leading-tight">{section.title}</h3>
                                            <p className="text-mist/70 leading-relaxed text-lg max-w-md ml-0 mr-auto">{section.description}</p>

                                            <div className={`flex flex-wrap gap-3 ${!isEven ? "md:justify-end" : ""}`}>
                                                {chips.map((chip: string) => (
                                                    <span key={chip} className="px-4 py-2 rounded-full bg-white/5 text-mist text-sm border border-white/10 hover:bg-white/10 transition">
                                                        {chip}
                                                    </span>
                                                ))}
                                            </div>

                                            {isBridalSection && (
                                                <div className={`pt-4 ${!isEven ? "md:flex md:justify-end" : ""}`}>
                                                    <button
                                                        onClick={openBooking}
                                                        className="inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-ink shadow-glow transition hover:-translate-y-1"
                                                    >
                                                        Book Consultation
                                                        <ArrowIcon className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* 4. CURATED MENU */}
            {/* 4. CURATED MENU - REDESIGNED */}
            {content.popularServices && (
                <section id="services" className="py-24 bg-paper relative overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-stone/5 -skew-x-12 transform origin-top-right" />

                    <div className="section-shell relative z-10 space-y-12">
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                            <div className="space-y-4 max-w-2xl">
                                <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold">Curated Menu</span>
                                <h2 className="text-4xl md:text-5xl font-serif text-ink leading-tight">Must-try rituals</h2>
                                <p className="text-charcoal/70 text-lg">Handpicked experiences our regulars swear by.</p>
                            </div>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => document.getElementById('signature-menu')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="group inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-ink shadow-sm transition hover:bg-ink hover:text-paper"
                                >
                                    View Full Menu
                                    <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {content.popularServices.map((service: any, idx: number) => {
                                const sectionImage = content.detailedSections?.[idx]?.image;
                                const fallbackSectionImage = content.detailedSections?.[0]?.image;
                                const cardImage = service.image || sectionImage || fallbackSectionImage || content.hero.image;

                                // Create a staggered effect for visual interest
                                const isLarge = idx === 0 || idx === 3;

                                return (
                                    <motion.div
                                        key={service.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className={`group relative overflow-hidden rounded-[2rem] bg-ink text-paper shadow-xl ${isLarge ? "lg:col-span-2 aspect-[16/9]" : "aspect-[3/4] md:aspect-[4/5]"}`}
                                    >
                                        <Image
                                            src={cardImage}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-90 transition duration-500 group-hover:opacity-70" />

                                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                            <div className="transform transition duration-500">
                                                <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-gold/90">
                                                    <div className="h-px w-6 bg-gold" />
                                                    <span>Popular Choice</span>
                                                </div>
                                                <h3 className={`font-serif mb-2 leading-tight text-gold ${isLarge ? "text-3xl md:text-4xl" : "text-2xl"}`}>
                                                    {service.title}
                                                </h3>
                                                <p className="text-mist/80 text-sm leading-relaxed max-w-md line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                                                    {service.description}
                                                </p>

                                                <div className="flex items-center gap-3">
                                                    <button
                                                        onClick={openBooking}
                                                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-gold hover:text-ink transition duration-300"
                                                    >
                                                        <Plus className="h-5 w-5" />
                                                    </button>
                                                    <span className="text-xs font-semibold uppercase tracking-[0.2em] opacity-100 transition duration-300">
                                                        Book this
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* 5. SIGNATURE OFFERINGS (Tabbed) */}
            <section id="signature-menu" className="py-24 md:py-28 bg-ink text-paper relative overflow-hidden">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(212,172,104,0.12),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(212,172,104,0.08),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(212,172,104,0.1),transparent_40%)]" />
                <div className="section-shell relative space-y-10">
                    <div className="space-y-3 max-w-3xl">
                        <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold">Service Menu</span>
                        <h2 className="text-3xl md:text-5xl font-serif leading-tight text-gold">Signature offerings</h2>
                        <p className="text-mist/80 text-lg">Browse focused care paths and their curated pricing.</p>
                    </div>

                    {/* Tabs */}
                    <div className="overflow-x-auto">
                        <div className="flex gap-3 min-w-max">
                            {content.detailedSections.map((section: any, idx: number) => {
                                if (section.excludeFromMenu) return null;
                                return (
                                    <button
                                        key={section.title}
                                        onClick={() => setActiveSection(idx)}
                                        className={`rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] border ${idx === activeSection ? "bg-gold text-ink border-gold" : "bg-white/10 text-paper border-white/20"}`}
                                    >
                                        {section.title}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Active Content */}
                    {(() => {
                        const section = content.detailedSections[activeSection];
                        const isBridalSection = section.title.toLowerCase().includes("bridal");
                        const itemNames = (section.items || []).map((i: any) => i?.name).filter(Boolean);
                        const benefitTitles = ((detailedContent?.benefits || content.whyChooseUs) || []).map((b: any) => b?.title).filter(Boolean);
                        return (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.25 }}
                                className="grid lg:grid-cols-[1.1fr,0.9fr,0.8fr] gap-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 md:p-10 shadow-xl"
                            >
                                {/* Image showcase */}
                                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                                    <Image src={section.image} alt={section.title} fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 40vw" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
                                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                                        {activeSection + 1 < 10 ? `0${activeSection + 1}` : activeSection + 1} • Focused Care
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-3">
                                        {(section.items || []).slice(0, 3).map((i: any, idx: number) => (
                                            <span key={idx} className="pill bg-white/15 text-paper border border-white/25">
                                                {i.name}
                                            </span>
                                        ))}
                                    </div>
                                    {/* Price badge removed per request */}
                                </div>

                                {/* Info block */}
                                <div className="flex flex-col justify-center h-full">
                                    <div className="space-y-6 pr-6">
                                        <h3 className="text-2xl md:text-3xl font-serif text-gold">{section.title}</h3>
                                        <p className="text-mist/80 leading-relaxed">{section.description}</p>

                                        {/* Simplified content to fit height */}
                                        {Array.isArray(section.items) && section.items.length > 0 && (
                                            <div className="space-y-2">
                                                {section.items.slice(0, 1).map((it: any, i: number) => (
                                                    it?.description ? (
                                                        <p key={i} className="text-sm text-mist/70 leading-relaxed italic">&quot;{it.description}&quot;</p>
                                                    ) : null
                                                ))}
                                            </div>
                                        )}

                                        {/* Restored content to fill space */}
                                        {benefitTitles.length > 0 && (
                                            <p className="text-mist/70 leading-relaxed">
                                                Why it matters: {benefitTitles.slice(0, 2).join(" • ")}{benefitTitles.length > 2 ? " • more" : ""}.
                                            </p>
                                        )}
                                        <p className="text-mist/70 leading-relaxed">
                                            Expect a cleaner silhouette, softer edges, and finishes that hold without stiffness.
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                            {((detailedContent?.benefits || content.whyChooseUs) || []).slice(0, 2).map((b: any, i: number) => (
                                                <div key={i} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                                                    <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-[0.25em] mb-1">
                                                        <CheckCircle2 className="h-4 w-4" />
                                                        Highlight
                                                    </div>
                                                    <p className="text-sm text-mist/80 line-clamp-2">{b.title}</p>
                                                </div>
                                            ))}
                                        </div>
                                        {isBridalSection && (
                                            <button
                                                onClick={openBooking}
                                                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-ink shadow-md transition hover:-translate-y-0.5"
                                            >
                                                Book Bridal Block
                                                <ChevronRight className="h-4 w-4" />
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* Pricing panel */}
                                <div className="relative lg:h-full rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                                    <div className="lg:absolute lg:inset-0 lg:overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gold/50">
                                        <div className="sticky top-0 z-10 bg-[#0c0c0c]/95 backdrop-blur-md px-5 py-4 flex items-center justify-between border-b border-white/10">
                                            <span className="text-xs uppercase tracking-[0.25em] text-mist/80">Services</span>
                                            <ShieldCheck className="h-5 w-5 text-gold" />
                                        </div>
                                        <div className="divide-y divide-white/10">
                                            {section.items.map((item: any, i: number) => (
                                                <div key={i} className="flex items-center justify-between px-5 py-3 hover:bg-white/5 transition-colors">
                                                    <div className="space-y-1">
                                                        <p className="text-sm font-semibold text-paper leading-tight">{item.name}</p>
                                                        <p className="text-[10px] text-mist/60">{item.description || "Fine-tuned technique"}</p>
                                                    </div>
                                                    <span className="text-xs font-sans font-bold text-gold whitespace-nowrap ml-4">{item.price}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Removed extra Service Details block (reverting recent change) */}
                            </motion.div>
                        );
                    })()}
                </div>
            </section>

            {/* 6. BENEFITS */}
            <section className="py-20 bg-paper">
                <div className="section-shell space-y-10">
                    <div className="max-w-3xl space-y-3">
                        <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold">Premium Distinction</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-ink">What makes this different</h2>
                        <p className="text-charcoal/70 text-lg">Every touchpoint is engineered for calm, safety, and visible transformation.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(detailedContent?.benefits || content.whyChooseUs).map((benefit: any, idx: number) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.04 }}
                                className="relative overflow-hidden rounded-2xl border border-stone/15 bg-white p-6 shadow-sm"
                            >
                                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gold/10 blur-2xl" />
                                <div className="h-10 w-10 rounded-full bg-gold text-ink flex items-center justify-center mb-4">
                                    <CheckCircle2 className="h-5 w-5" />
                                </div>
                                <h3 className="text-xl font-serif text-ink mb-2">{benefit.title}</h3>
                                <p className="text-sm text-charcoal/70 leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. FAQ */}
            {faqs && (
                <section className="py-20 bg-stone/5">
                    <div className="section-shell max-w-4xl mx-auto space-y-8">
                        <div className="space-y-3 text-center">
                            <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold">Helpful Info</span>
                            <h2 className="text-3xl md:text-5xl font-serif text-ink">Common questions, answered</h2>
                        </div>
                        <div className="space-y-4">
                            {faqs.map((faq: any, idx: number) => (
                                <div key={idx} className="rounded-2xl border border-stone/20 bg-paper shadow-sm overflow-hidden">
                                    <button
                                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                                        className="w-full flex items-center justify-between px-6 py-5 text-left"
                                    >
                                        <span className="text-lg font-medium text-ink pr-6">{faq.question}</span>
                                        {openFaqIndex === idx ? (
                                            <Minus className="h-5 w-5 text-gold" />
                                        ) : (
                                            <Plus className="h-5 w-5 text-gold/60" />
                                        )}
                                    </button>
                                    <motion.div
                                        initial={false}
                                        animate={{ height: openFaqIndex === idx ? "auto" : 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-charcoal/70 leading-relaxed text-base">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 8. CTA STRIP */}
            <section className="relative overflow-hidden py-20 md:py-24">
                <div className="absolute inset-0 bg-ink">
                    <Image
                        src="/images/hero/hair-spa.webp"
                        alt="Book a ritual"
                        fill
                        className="object-cover opacity-20"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/60" />
                </div>

                <div className="section-shell relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-serif text-paper leading-tight">
                            {content.cta.headline}
                        </h2>
                        <p className="text-lg text-mist/80">{content.cta.subtext}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={openBooking}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-ink shadow-glow transition hover:-translate-y-0.5"
                        >
                            {content.cta.buttonText}
                            <ChevronRight className="h-4 w-4" />
                        </button>
                        <a
                            href="#services"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-paper hover:bg-white/15"
                        >
                            View menu
                        </a>
                    </div>
                </div>
            </section>

            {/* 9. RELATED SERVICES (Carousel) */}
            <section className="py-20 bg-paper border-t border-stone/10">
                <div className="section-shell">
                    <div className="text-center mb-10 space-y-3">
                        <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold">Complete Menu</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-ink">Explore more rituals</h2>
                        <p className="text-charcoal/60 max-w-2xl mx-auto">Move into another experience crafted by our lead artists.</p>
                    </div>

                    <div className="relative">
                        <div
                            ref={relatedScrollRef}
                            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 no-scrollbar"
                        >
                            {allCategories.map((cat: any, index: number) => (
                                <motion.div
                                    key={cat.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.04 }}
                                    className="flex-shrink-0 w-[260px] md:w-[300px] lg:w-[320px] snap-center"
                                >
                                    <Link href={`/services/${cat.id}`} className="group block relative overflow-hidden rounded-xl border border-stone/15 bg-white shadow-md">
                                        <div className="relative" style={{ aspectRatio: "16/10" }}>
                                            <Image
                                                src={cat.image}
                                                alt={cat.title}
                                                fill
                                                className="object-cover transition duration-500 group-hover:scale-105"
                                                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 320px, 360px"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                                            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                                                <h3 className="text-paper text-base md:text-lg font-serif line-clamp-1">{cat.title}</h3>
                                                <ArrowIcon className="h-4 w-4 text-gold" />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Nav Buttons */}
                        <button
                            onClick={() => {
                                const container = relatedScrollRef.current;
                                if (!container) return;
                                const page = container.clientWidth;
                                container.scrollBy({ left: -page, behavior: "smooth" });
                                setRelatedSlide((prev) => Math.max(prev - 1, 0));
                            }}
                            className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 z-10 p-4 bg-ink/70 hover:bg-gold text-gold hover:text-ink rounded-full transition-all duration-300 shadow-lg backdrop-blur-sm"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => {
                                const container = relatedScrollRef.current;
                                if (!container) return;
                                const page = container.clientWidth;
                                container.scrollBy({ left: page, behavior: "smooth" });
                                setRelatedSlide((prev) => Math.min(prev + 1, allCategories.length - 1));
                            }}
                            className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 z-10 p-4 bg-ink/70 hover:bg-gold text-gold hover:text-ink rounded-full transition-all duration-300 shadow-lg backdrop-blur-sm"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default ServiceDetail;
