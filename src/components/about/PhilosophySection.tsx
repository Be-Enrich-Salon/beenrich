
'use client';

import { motion } from 'framer-motion';
import { aboutContent } from '@/content/aboutContent';
import Image from 'next/image';

const PhilosophySection = () => {
    return (
        <section className="relative bg-paper py-24 text-ink">
            <div className="section-shell">

                {/* Introduction */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl font-display mb-6">{aboutContent.introduction.title}</h2>
                            <p className="text-lg text-stone leading-relaxed mb-6">
                                {aboutContent.introduction.description}
                            </p>
                            <div className="p-8 border-l-4 border-gold bg-mist/10 italic text-xl text-ink/80 font-display">
                                &quot;{aboutContent.philosophy.quote}&quot;
                            </div>
                            <p className="mt-6 text-stone">
                                {aboutContent.philosophy.description}
                            </p>
                        </motion.div>
                    </div>
                    <div className="order-1 lg:order-2 relative h-[500px] w-full overflow-hidden rounded-2xl shadow-xl">
                        <Image
                            src="/images/about/aboutpage.webp" // Using existing image from homeContent link
                            alt="Salon Interior"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </div>

                {/* Offerings and Why Choose Us Grid */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                    {/* What We Offer */}
                    <div className="space-y-8">
                        <h3 className="text-3xl font-display border-b border-gold/30 pb-4 inline-block">
                            {aboutContent.offerings.title}
                        </h3>
                        <ul className="space-y-4">
                            {aboutContent.offerings.items.map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-4 text-lg text-ink/80"
                                >
                                    <span className="h-2 w-2 rounded-full bg-gold" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                        <p className="text-stone italic text-sm mt-4">{aboutContent.offerings.note}</p>
                    </div>

                    {/* Why Choose Us */}
                    <div className="bg-ink text-paper p-10 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
                        <h3 className="text-3xl font-display mb-8 text-gold">
                            {aboutContent.whyChooseUs.title}
                        </h3>
                        <ul className="space-y-5">
                            {aboutContent.whyChooseUs.items.map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <span className="text-gold text-xl">✦</span>
                                    <span className="text-lg font-light tracking-wide">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                        <p className="mt-8 pt-8 border-t border-white/10 text-mist/80 font-light">
                            {aboutContent.whyChooseUs.goal}
                        </p>
                    </div>
                </div>

                {/* Vision & Commitment */}
                <div className="mt-24 grid md:grid-cols-2 gap-12 text-center md:text-left">
                    <div className="bg-mist/10 p-10 rounded-2xl border border-stone/10">
                        <h4 className="text-2xl font-display mb-4">{aboutContent.vision.title}</h4>
                        <p className="text-lg text-stone">{aboutContent.vision.statement}</p>
                    </div>
                    <div className="bg-mist/10 p-10 rounded-2xl border border-stone/10">
                        <h4 className="text-2xl font-display mb-4">{aboutContent.commitment.title}</h4>
                        <p className="text-lg text-stone">{aboutContent.commitment.statement}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;
