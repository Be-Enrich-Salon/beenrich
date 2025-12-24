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
        mapLink: "https://www.google.com/maps/search/?api=1&query=D.No.+5-87-50/1+1'st+Floor,+Lakshmipuram+Main+Rd,+opp.+Seetharamaiah+High+School,+Brindavan+Gardens,+Guntur,+Andhra+Pradesh+522007",
        staticMap: "/images/locations/guntur.png",
        pinPosition: { left: "50%", top: "50%" }
    },
    {
        name: "Vijayawada",
        address: "2nd Floor, Shop No 12,13A, Trendset Mall, Sai Nagar, Kala Nagar, Acharya Ranga Nagar, Benz Circle, Vijayawada, Andhra Pradesh 520008",
        overview: "Trendset Mall, Benz Circle, Vijayawada",
        phone: "+91 81259 44445",
        mapEmbed: "https://maps.google.com/maps?q=2nd+Floor,+Shop+No+12,13A,+Trendset+Mall,+Sai+Nagar,+Kala+Nagar,+Acharya+Ranga+Nagar,+Benz+Circle,+Vijayawada,+Andhra+Pradesh+520008&z=15&output=embed",
        mapLink: "https://www.google.com/maps/search/?api=1&query=2nd+Floor,+Shop+No+12,13A,+Trendset+Mall,+Sai+Nagar,+Kala+Nagar,+Acharya+Ranga+Nagar,+Benz+Circle,+Vijayawada,+Andhra+Pradesh+520008",
        staticMap: "/images/locations/vijayawada.png",
        pinPosition: { left: "60%", top: "50%" }
    },
    {
        name: "Ongole",
        address: "M.K.R. Plaza, D.No. 7-1205, 2ND floor , upstairs Axis Bank, Manganmuru Road , ongole , ongole , Andhra Pradesh , 523002",
        overview: "M.K.R. Plaza, Manganmuru Road, Ongole",
        phone: "+91 81259 44445",
        mapEmbed: "https://maps.google.com/maps?q=M.K.R.+Plaza,+D.No.+7-1205,+2ND+floor+,+upstairs+Axis+Bank,+Manganmuru+Road+,+ongole+,+ongole+,+Andhra+Pradesh+,+523002&z=15&output=embed",
        mapLink: "https://www.google.com/maps/search/?api=1&query=M.K.R.+Plaza,+D.No.+7-1205,+2ND+floor+,+upstairs+Axis+Bank,+Manganmuru+Road+,+ongole+,+ongole+,+Andhra+Pradesh+,+523002",
        staticMap: "/images/locations/ongole.png",
        pinPosition: { left: "55%", top: "50%" }
    },
    {
        name: "Tenali",
        address: "Door No 19-15-47, Near Opo Saibaba Temple, Boss Road, Bazar, Tenali-522201, Andhra Pradesh",
        overview: "Near Saibaba Temple, Boss Road, Tenali",
        phone: "+91 81259 44445",
        mapEmbed: "https://maps.google.com/maps?q=Door+No+19-15-47,+Near+Opo+Saibaba+Temple,+Boss+Road,+Bazar,+Tenali-522201,+Andhra+Pradesh&z=15&output=embed",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Door+No+19-15-47,+Near+Opo+Saibaba+Temple,+Boss+Road,+Bazar,+Tenali-522201,+Andhra+Pradesh",
        staticMap: "/images/locations/tenali.png",
        pinPosition: { left: "45%", top: "45%" }
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
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
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

            {/* Locations List */}
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
                                <div className="space-y-3 p-4">
                                    <div className="flex items-center justify-end text-sm text-charcoal/70">
                                        <span className="text-mist/60 text-xs">Live map</span>
                                    </div>
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gold/25 shadow-inner bg-paper group">
                                        <Image
                                            src={location.staticMap}
                                            alt={`Map location of ${location.name}`}
                                            fill
                                            className="object-cover"
                                        />
                                        {/* Centered Map Pin */}
                                        <div
                                            className="absolute transform -translate-x-1/2 -translate-y-full flex flex-col items-center"
                                            style={{
                                                left: (location as any).pinPosition?.left || "50%",
                                                top: (location as any).pinPosition?.top || "50%",
                                                zIndex: 20
                                            }}
                                        >
                                            <motion.div
                                                initial={{ scale: 0, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 200,
                                                    damping: 15,
                                                    delay: 0.3,
                                                }}
                                                className="flex flex-col items-center origin-bottom scale-[0.65] md:scale-100"
                                            >
                                                <motion.div
                                                    animate={{
                                                        y: [0, -8, 0],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                    }}
                                                    className="flex flex-col items-center"
                                                >
                                                    {/* Custom two-line label for all locations */}
                                                    <div className="flex flex-col items-center mb-1">
                                                        <div className="bg-white text-black text-[13px] font-bold px-3 py-1 rounded shadow-lg whitespace-nowrap border border-gray-300 leading-tight text-center">
                                                            Be Enrich<br />
                                                            <span className="font-normal text-[11px] tracking-wide">Signature Salon</span>
                                                        </div>
                                                        <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-white drop-shadow" />
                                                    </div>

                                                    {/* Map Pin */}
                                                    <div className="flex justify-center filter drop-shadow-lg">
                                                        <MapPin className="h-9 w-9 text-gold fill-gold/20 stroke-[2.5px]" />
                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between pt-0">
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
