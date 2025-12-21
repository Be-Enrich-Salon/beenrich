
'use client';

import { motion } from 'framer-motion';
import { aboutContent } from '@/content/aboutContent';
import Image from 'next/image';

const ChairmanMessage = () => {
    return (
        <section className="py-24 bg-stone/5">
            <div className="section-shell">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Chairman Image / Decoration */}
                    <div className="w-full lg:w-1/3 relative">
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone/20 relative shadow-2xl">
                            <Image
                                src="/images/about/chairman.webp"
                                alt="Chairman"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-2xl -z-10" />
                    </div>

                    {/* Message Content */}
                    <div className="w-full lg:w-2/3">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-4xl font-display mb-8 text-ink"
                        >
                            {aboutContent.chairmanMessage.title}
                        </motion.h2>

                        <div className="prose prose-lg text-stone max-w-none">
                            <h3 className="text-2xl font-serif italic text-gold mb-6">
                                &quot;{aboutContent.chairmanMessage.quote}&quot;
                            </h3>
                            {aboutContent.chairmanMessage.paragraphs.map((para, i) => (
                                <p key={i} className="mb-4 leading-relaxed mix-blend-multiply">
                                    {para}
                                </p>
                            ))}
                        </div>

                        <div className="mt-12 pt-8 border-t border-stone/20">
                            <p className="text-xl font-display text-ink whitespace-pre-line">
                                {aboutContent.chairmanMessage.signature}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChairmanMessage;
