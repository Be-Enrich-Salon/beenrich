"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import BookingForm from "@/components/contact/BookingForm";

export default function ContactPage() {
    return (
        <main className="bg-paper text-ink">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-b from-ink to-charcoal text-paper overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gold/30 rounded-full blur-[150px]" />
                    <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gold-soft/20 rounded-full blur-[150px]" />
                </div>

                <div className="section-shell relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <span className="inline-block text-gold text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-6">
                            Get in Touch
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display text-paper mb-6 leading-tight">
                            Visit Our <span className="text-gold italic">Salon</span>
                        </h1>
                        <p className="text-lg md:text-xl text-mist/80 font-light leading-relaxed">
                            Experience premium beauty services at our luxurious location in Vijayawada
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info & Form Section */}
            <section className="py-20 bg-paper">
                <div className="section-shell">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Left: Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl md:text-4xl font-display text-ink mb-8">
                                    Visit Us at <span className="text-gold">Vijayawada</span>
                                </h2>

                                {/* Address */}
                                <div className="mb-8 p-6 rounded-2xl bg-mist/10 border border-gold/10">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                                            <MapPin className="h-5 w-5 text-gold" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-ink mb-2">Our Location</h3>
                                            <p className="text-stone leading-relaxed">
                                                2nd Floor, Shop No 12,13A, Trendset Mall,<br />
                                                Sai Nagar, Kala Nagar,<br />
                                                Acharya Ranga Nagar, Benz Circle,<br />
                                                Vijayawada, Andhra Pradesh 520008
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="mb-8 p-6 rounded-2xl bg-mist/10 border border-gold/10">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                                            <Phone className="h-5 w-5 text-gold" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-ink mb-2">Call Us</h3>
                                            <a href="tel:+918125944445" className="text-stone hover:text-gold transition-colors">
                                                +91 81259 44445
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="mb-8 p-6 rounded-2xl bg-mist/10 border border-gold/10">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                                            <Mail className="h-5 w-5 text-gold" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-ink mb-2">Email Us</h3>
                                            <a href="mailto:enrich.ap@gmail.com" className="text-stone hover:text-gold transition-colors">
                                                enrich.ap@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="p-6 rounded-2xl bg-mist/10 border border-gold/10">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                                            <Clock className="h-5 w-5 text-gold" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-ink mb-2">Business Hours</h3>
                                            <div className="text-stone space-y-1">
                                                <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                                                <p>Sunday: 11:00 AM - 6:00 PM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Booking Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="bg-charcoal/5 p-8 rounded-3xl border border-gold/10">
                                <h3 className="text-2xl font-display text-ink mb-6">Book Your Appointment</h3>
                                <BookingForm />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-0 bg-paper">
                <div className="section-shell">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="rounded-3xl overflow-hidden shadow-2xl border border-gold/10"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.5!2d80.6466!3d16.5062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDMwJzIyLjMiTiA4MMKwMzgnNDcuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="500"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full"
                        />
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-b from-paper to-mist/20">
                <div className="section-shell text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-5xl font-display text-ink mb-6">
                            Ready to Experience <span className="text-gold italic">Luxury?</span>
                        </h2>
                        <p className="text-lg text-stone mb-8">
                            Book your appointment today and discover the Be Enrich difference
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+918125944445"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-ink rounded-full font-bold uppercase tracking-wider text-sm transition-all hover:shadow-glow hover:scale-105"
                            >
                                <Phone className="h-5 w-5" />
                                Call Now
                            </a>
                            <a
                                href="https://wa.me/918125944445"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-gold/30 text-ink rounded-full font-bold uppercase tracking-wider text-sm transition-all hover:bg-gold/10 hover:border-gold"
                            >
                                WhatsApp Us
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
