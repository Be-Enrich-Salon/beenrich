
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { aboutContent } from '@/content/aboutContent';

const AboutHero = () => {
    return (
        <section className="relative h-[60vh] w-full overflow-hidden bg-ink items-center flex justify-center">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={aboutContent.hero.image}
                    // Fallback to a hero image if specific one is missing in build, but assuming it exists or handled
                    alt={aboutContent.hero.title}
                    fill
                    className="object-cover opacity-50"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="section-shell relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-display text-5xl md:text-7xl text-paper tracking-tight"
                >
                    {aboutContent.hero.title}
                    <span className="block text-2xl md:text-3xl mt-2 font-display italic text-gold">{aboutContent.hero.subtitle}</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-6 text-xl text-mist max-w-2xl mx-auto font-light leading-relaxed"
                >
                    {aboutContent.hero.description}
                </motion.p>
            </div>
        </section>
    );
};

export default AboutHero;
