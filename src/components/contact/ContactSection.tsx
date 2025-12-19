"use client";

import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import BookingForm from "./BookingForm";
import WhatsAppCTA from "./WhatsAppCTA";
import MapEmbed from "./MapEmbed";
import colors from "@/theme/colors";
import { homeContent } from "@/content/homeContent";

export default function ContactSection() {
    const { contact } = homeContent;

    return (
        <section className="py-24 bg-stone text-paper relative overflow-hidden">
            {/* Delicate background accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-50" />

            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-serif mb-4"
                    >
                        {contact.title} <span style={{ color: colors.gold }}>{contact.titleAccent}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl font-light text-mist/80"
                    >
                        {contact.subtitle}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Column: Info + WhatsApp + Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <ContactInfo />

                        <div className="pt-4">
                            <WhatsAppCTA />
                        </div>

                        <div className="h-64 md:h-80 w-full pt-4">
                            <MapEmbed />
                        </div>
                    </motion.div>

                    {/* Right Column: Booking Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-paper/5 p-8 md:p-10 rounded-2xl border border-white/5 backdrop-blur-sm"
                    >
                        <h3 className="text-2xl font-serif mb-8 text-white">Request an Appointment</h3>
                        <BookingForm />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
