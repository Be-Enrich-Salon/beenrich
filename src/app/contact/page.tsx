"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import BookingForm from "@/components/contact/BookingForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { useBooking } from "@/context/BookingContext";
import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content/homeContent";

const locations = [
    {
        name: "Guntur",
        address: "D.No. 5-87-50/1 1'st Floor, Lakshmipuram Main Rd, opp. Seetharamaiah High School, Brindavan Gardens, Guntur, Andhra Pradesh 522007",
        overview: "Brindavan Gardens, Guntur",
        phone: "+91 81259 44445",
        mapEmbed: "https://maps.google.com/maps?q=D.No.+5-87-50/1+1'st+Floor,+Lakshmipuram+Main+Rd,+opp.+Seetharamaiah+High+School,+Brindavan+Gardens,+Guntur,+Andhra+Pradesh+522007&z=15&output=embed",
        mapLink: "https://www.google.com/maps/search/?api=1&query=D.No.+5-87-50/1+1'st+Floor,+Lakshmipuram+Main+Rd,+opp.+Seetharamaiah+High+School,+Brindavan+Gardens,+Guntur,+Andhra+Pradesh+522007"
    },
    {
        name: "Vijayawada",
        address: "2nd Floor, Shop No 12,13A, Trendset Mall, Sai Nagar, Kala Nagar, Acharya Ranga Nagar, Benz Circle, Vijayawada, Andhra Pradesh 520008",
        overview: "Trendset Mall, Benz Circle, Vijayawada",
        phone: "+91 81259 44445",
        mapEmbed: "https://maps.google.com/maps?q=2nd+Floor,+Shop+No+12,13A,+Trendset+Mall,+Sai+Nagar,+Kala+Nagar,+Acharya+Ranga+Nagar,+Benz+Circle,+Vijayawada,+Andhra+Pradesh+520008&z=15&output=embed",
        mapLink: "https://www.google.com/maps/search/?api=1&query=2nd+Floor,+Shop+No+12,13A,+Trendset+Mall,+Sai+Nagar,+Kala+Nagar,+Acharya+Ranga+Nagar,+Benz+Circle,+Vijayawada,+Andhra+Pradesh+520008"
    },
    {
        name: "Ongole",
        address: "M.K.R. Plaza, D.No. 7-1205, 2ND floor , upstairs Axis Bank, Manganmuru Road , ongole , ongole , Andhra Pradesh , 523002",
        overview: "M.K.R. Plaza, Manganmuru Road, Ongole",
        phone: "+91 81259 44445",
        mapEmbed: "https://maps.google.com/maps?q=M.K.R.+Plaza,+D.No.+7-1205,+2ND+floor+,+upstairs+Axis+Bank,+Manganmuru+Road+,+ongole+,+ongole+,+Andhra+Pradesh+,+523002&z=15&output=embed",
        mapLink: "https://www.google.com/maps/search/?api=1&query=M.K.R.+Plaza,+D.No.+7-1205,+2ND+floor+,+upstairs+Axis+Bank,+Manganmuru+Road+,+ongole+,+ongole+,+Andhra+Pradesh+,+523002"
    },
    {
        name: "Tenali",
        address: "Door No 19-15-47, Near Opo Saibaba Temple, Boss Road, Bazar, Tenali-522201, Andhra Pradesh",
        overview: "Near Saibaba Temple, Boss Road, Tenali",
        phone: "+91 81259 44445",
        mapEmbed: "https://maps.google.com/maps?q=Door+No+19-15-47,+Near+Opo+Saibaba+Temple,+Boss+Road,+Bazar,+Tenali-522201,+Andhra+Pradesh&z=15&output=embed",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Door+No+19-15-47,+Near+Opo+Saibaba+Temple,+Boss+Road,+Bazar,+Tenali-522201,+Andhra+Pradesh"
    }
];

export default function ContactPage() {
    const { contact } = homeContent;

    return (
        <main className="bg-[#111111] text-paper min-h-screen">
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
                            Visit Our <span className="text-gold italic">Salons</span>
                        </h1>
                        <p className="text-lg md:text-xl text-mist/80 font-light leading-relaxed">
                            Experience premium beauty services at our luxurious locations across Andhra Pradesh
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-10">
                <div className="section-shell">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Left: Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col justify-between"
                        >
                            <ContactInfo />

                            {/* WhatsApp Button - Green */}
                            <div className="mt-8">
                                <button
                                    onClick={() => window.dispatchEvent(new Event("open-booking"))}
                                    className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-[#25D366]/20"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-2.846-.828-.907-.372-1.527-.962-1.586-1.036-.058-.075-.602-.802-.602-1.529 0-.728.375-1.093.51-1.228.149-.149.349-.19.481-.19.131 0 .22.001.323.003.103.002.22.002.329.271.121.29.418 1.021.454 1.096.036.075.06.166.012.261-.048.095-.083.159-.151.244-.055.068-.112.138-.174.204-.067.071-.137.149-.06.284.075.131.334.552.72.896.496.442.923.585 1.056.649.134.065.217.06.291-.018.077-.08.319-.372.404-.5.086-.129.176-.107.294-.064.12.043.766.36 0.899.426.133.065.22.097.251.152.031.055.031.321-.113.726z" />
                                    </svg>
                                    Book on WhatsApp
                                </button>
                            </div>
                        </motion.div>

                        {/* Right: Booking Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-[#1a1a1a] p-8 md:p-10 rounded-xl border border-white/5 shadow-2xl"
                        >
                            <h3 className="text-2xl font-display text-white mb-8">Request an Appointment</h3>
                            <BookingForm />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Locations List (Optional but requested kept in earlier turns, user said "same section", implies main design) 
                 Keeping locations below but matching dark theme 
             */}
            <section className="py-20 bg-gradient-to-b from-charcoal to-ink">
                <div className="section-shell">
                    <div className="text-center mb-12">
                        <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Find Us</span>
                        <h2 className="text-3xl md:text-5xl font-display text-paper">Our Locations</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {locations.map((location, index) => (
                            <motion.div
                                key={location.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gradient-to-br from-charcoal to-stone/30 rounded-xl overflow-hidden shadow-lg border border-gold/10 flex flex-col group hover:border-gold/30 transition-all"
                            >
                                <div className="h-64 w-full relative">
                                    <iframe
                                        src={location.mapEmbed}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="absolute inset-0 transition-all duration-500"
                                    />
                                </div>
                                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-2xl font-display text-paper">{location.name}</h3>
                                            <Link
                                                href={location.mapLink}
                                                target="_blank"
                                                className="p-2 bg-gold/10 rounded-full text-gold hover:bg-gold hover:text-ink transition-colors"
                                            >
                                                <Navigation size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="pt-6 border-t border-white/10 flex justify-between items-center gap-4">
                                        <p className="text-xs text-mist/70 flex items-start gap-2 flex-1">
                                            <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                                            <span>{location.overview}</span>
                                        </p>
                                        <Link href="/locations" className="text-xs font-bold uppercase tracking-wider text-gold hover:underline whitespace-nowrap">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-gold/10 to-gold-soft/5 py-20 border-t border-gold/10">
                <div className="section-shell text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-5xl font-display text-gold mb-6">
                            Ready to Experience Luxury?
                        </h2>
                        <p className="text-lg md:text-xl text-mist/90 font-light mb-10 leading-relaxed">
                            Book your appointment today and discover the Be Enrich difference
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <button
                                onClick={() => window.dispatchEvent(new Event("open-booking"))}
                                className="inline-flex items-center gap-2 bg-gold text-ink px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-paper transition-all shadow-lg transform hover:-translate-y-1"
                            >
                                Book Now
                            </button>
                            <a
                                href="tel:+918125944445"
                                className="inline-flex items-center gap-2 border border-white text-white bg-transparent px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white/10 transition-all shadow-lg transform hover:-translate-y-1"
                            >
                                <Phone className="h-5 w-5 fill-current" />
                                Call +91 81259 44445
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
