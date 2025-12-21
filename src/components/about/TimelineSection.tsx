
'use client';

import { motion } from 'framer-motion';
import { aboutContent } from '@/content/aboutContent';

const TimelineSection = () => {
    return (
        <section className="bg-ink text-paper py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-stone/10 to-transparent opacity-30" />

            <div className="section-shell relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-display mb-6 text-gold">{aboutContent.timeline.title}</h2>
                    <p className="text-gold/60 max-w-2xl mx-auto text-lg">{aboutContent.timeline.description}</p>
                </div>

                <div className="relative border-l-2 border-gold/30 ml-4 md:ml-1/2 space-y-12 md:space-y-0">
                    {aboutContent.timeline.milestones.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative pl-8 md:pl-0 flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Dot on the line */}
                                <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-[9px] w-4 h-4 rounded-full bg-gold shadow-[0_0_15px_rgba(212,175,55,0.6)] z-20" />

                                {/* Content Box */}
                                <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-gold/50 transition-colors duration-300">
                                        <span className="text-4xl font-display text-gold/80 block mb-2">{item.year}</span>
                                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                        <p className="text-mist/80 leading-relaxed font-light">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="text-center mt-16 max-w-2xl mx-auto">
                    <p className="text-lg italic text-gold/80">{aboutContent.timeline.footer}</p>
                </div>

                {/* Experience Legacy Block */}
                <div className="mt-24 bg-gradient-to-br from-gold/10 to-transparent p-12 rounded-3xl border border-gold/20 text-center">
                    <h3 className="text-3xl font-display mb-6 text-gold">{aboutContent.experience.title}</h3>
                    <p className="text-lg text-mist leading-relaxed max-w-4xl mx-auto">
                        {aboutContent.experience.description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
