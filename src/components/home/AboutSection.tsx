import Link from "next/link";
import Image from "next/image";
import { homeContent } from "@/content/homeContent";

const AboutSection = () => {
    const { about } = homeContent;

    return (
        <section className="relative bg-ink py-24 lg:py-32 overflow-hidden text-paper">
            <div className="section-shell relative z-10">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                    {/* Left Column: Image Collage */}
                    <div className="relative h-[500px] w-full lg:h-[600px]">
                        {/* Main Anchor Image */}
                        <div className="absolute top-0 left-0 h-[85%] w-[75%] overflow-hidden rounded-[2rem] shadow-2xl border border-white/10">
                            <Image
                                src={about.images.main}
                                alt="Stylist cutting hair"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>

                        {/* Overlapping Secondary Image (Bottom Right) */}
                        <div className="absolute bottom-0 right-4 h-[55%] w-[60%] overflow-hidden rounded-[2rem] shadow-glow border-4 border-ink">
                            <Image
                                src={about.images.secondary}
                                alt="Luxury salon interior"
                                fill
                                sizes="(max-width: 768px) 50vw, 33vw"
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>

                        {/* Small Detail Image (Floating) */}
                        <div className="absolute top-12 -right-4 lg:-right-8 h-32 w-32 overflow-hidden rounded-full border-4 border-ink shadow-lg animate-pulse-slow hidden md:block">
                            <Image
                                src={about.images.detail}
                                alt="Barber tools"
                                fill
                                sizes="128px"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <span className="mb-6 inline-block rounded-full bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
                            {about.badge}
                        </span>

                        <h2 className="text-4xl font-light tracking-wide text-paper md:text-5xl lg:text-6xl leading-tight">
                            {about.title} <br />
                            <span className="font-serif italic text-gold">{about.titleAccent}</span>
                        </h2>

                        <div className="mt-8 h-px w-24 bg-gold/50 lg:mx-0 mx-auto" />

                        <p className="mt-8 text-lg leading-relaxed text-mist/80">
                            {about.description1}
                        </p>
                        <p className="mt-4 text-lg leading-relaxed text-mist/80">
                            {about.description2}
                        </p>

                        <div className="mt-10">
                            <Link
                                href={about.ctaLink}
                                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-paper px-8 py-3 text-sm font-medium uppercase tracking-widest text-ink transition-all hover:bg-gold hover:text-ink hover:shadow-glow"
                            >
                                <span className="relative z-10">{about.ctaText}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
