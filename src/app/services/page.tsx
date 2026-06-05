"use client";

import dynamic from "next/dynamic";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesShowcase from "@/components/services/ServicesShowcase";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

const SignaturePackages = dynamic(() => import("@/components/home/SignaturePackages"), {
    loading: () => <div className="h-96 bg-paper" />,
});

const ServicesPage = () => {
    const { openBooking } = useBooking();

    return (
        <main className="min-h-screen bg-paper">
            <ServicesHero />
            <ServicesShowcase />
            <SignaturePackages />

            {/* Enhanced Call to Action Section */}
            <section className="section-shell pb-24 md:pb-32 pt-32 md:pt-48 lg:pt-56">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[3rem] bg-gradient-to-br from-ink via-charcoal to-stone px-8 py-16 md:px-16 md:py-20 overflow-hidden shadow-2xl"
                >
                    {/* Artistic Background Decor */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.08] blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-soft/[0.06] blur-[100px] pointer-events-none" />

                    <div className="relative z-10 max-w-5xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-12 space-y-6">
                            <div className="flex items-center justify-center gap-4">
                                <div className="h-px w-12 bg-gold/50" />
                                <span className="text-gold font-bold uppercase tracking-[0.5em] text-[10px]">Get Started</span>
                                <div className="h-px w-12 bg-gold/50" />
                            </div>

                            <h3 className="text-3xl md:text-5xl lg:text-6xl font-display text-paper leading-tight">
                                Ready for Your <span className="text-gold-dim italic">Transformation?</span>
                            </h3>

                            <p className="text-base md:text-lg text-mist/70 font-light leading-relaxed max-w-2xl mx-auto">
                                Connect with our expert consultants to design a personalized grooming plan that perfectly reflects your style and needs.
                            </p>
                        </div>

                        {/* Action Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            <motion.div
                                whileHover={{ y: -4 }}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-gold/30 transition-all duration-300"
                            >
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="h-14 w-14 rounded-full bg-gold/10 flex items-center justify-center">
                                        <Phone className="h-6 w-6 text-gold" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-display text-paper mb-2">Call Direct</h4>
                                        <p className="text-sm text-mist/60 mb-4">Speak with our team</p>
                                        <a
                                            href="tel:+919885614445"
                                            className="text-gold text-sm font-semibold hover:underline"
                                        >
                                            +91 98856 14445
                                        </a>
                                    </div>
                                </div>
                            </motion.div>



                            <motion.div
                                whileHover={{ y: -4 }}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-gold/30 transition-all duration-300"
                            >
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="h-14 w-14 rounded-full bg-gold/10 flex items-center justify-center">
                                        <Calendar className="h-6 w-6 text-gold" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-display text-paper mb-2">Book Online</h4>
                                        <p className="text-sm text-mist/60 mb-4">Instant confirmation</p>
                                        <button
                                            onClick={openBooking}
                                            className="text-gold text-sm font-semibold hover:underline"
                                        >
                                            Reserve Slot
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Primary CTA */}
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <button
                                onClick={openBooking}
                                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-gold text-ink rounded-full font-bold uppercase tracking-wider text-sm transition-all hover:shadow-glow hover:-translate-y-1 overflow-hidden"
                            >
                                <span className="relative z-10">Book Appointment</span>
                                <Calendar className="h-5 w-5 relative z-10" />
                                <div className="absolute inset-0 bg-paper translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                            </button>
                            <Link
                                href="/locations"
                                className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-white/20 text-paper rounded-full font-bold uppercase tracking-wider text-sm transition-all hover:bg-white/10 hover:border-gold"
                            >
                                Find Location
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
};

export default ServicesPage;
