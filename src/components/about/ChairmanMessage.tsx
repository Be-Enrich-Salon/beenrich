
'use client';

import { motion } from 'framer-motion';
import { aboutContent } from '@/content/aboutContent';
import Image from 'next/image';

const ChairmanMessage = () => {
    return (
        <section className="py-24 bg-paper relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="section-shell relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Chairman Image / Decoration */}
                    <div className="w-full lg:w-5/12 relative">
                        <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-2xl border border-gold/20">
                            <Image
                                src="/images/about/chairman.jpg"
                                alt="Chairman"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-gold/30 rounded-full -z-10" />
                        <div className="absolute -top-8 -right-8 w-32 h-32 bg-gold/10 rounded-full blur-xl -z-10" />
                    </div>

                    {/* Message Content */}
                    <div className="w-full lg:w-7/12 space-y-8">
                        <div>
                            <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Leadership</span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-5xl font-display text-ink leading-tight"
                            >
                                {aboutContent.chairmanMessage.title}
                            </motion.h2>
                        </div>

                        <div className="relative pl-8 border-l-2 border-gold/30">
                            <h3 className="text-2xl md:text-3xl font-display italic text-ink/90 leading-relaxed">
                                &quot;{aboutContent.chairmanMessage.quote}&quot;
                            </h3>
                        </div>

                        <div className="space-y-6 text-lg text-charcoal/80 font-light leading-relaxed">
                            {aboutContent.chairmanMessage.paragraphs.slice(0, 2).map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>

                        <div className="pt-8 flex items-center gap-6">
                            <div className="h-px flex-1 bg-gold/20" />
                            <div className="text-right">
                                <p className="text-2xl font-handwriting text-gold mb-1">
                                    Signature
                                </p>
                                <p className="text-sm font-bold uppercase tracking-widest text-ink">
                                    Chairman & Founder
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChairmanMessage;
