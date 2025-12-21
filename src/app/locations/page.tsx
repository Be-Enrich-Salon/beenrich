"use client";

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";
import { motion } from "framer-motion";

const locations = [
  {
    name: "Vijayawada",
    description: "Our flagship studio at Trendset Mall offers a spacious, modern salon experience with premium facilities and ample parking. Experience the full range of Be Enrich services in a luxurious setting designed for your comfort.",
    address: "2nd Floor, Shop No 12,13A, Trendset Mall, Sai Nagar, Kala Nagar, Acharya Ranga Nagar, Benz Circle, Vijayawada, Andhra Pradesh 520008",
    image: "/images/locations/vijayawada.webp",
    mapEmbed: "https://maps.google.com/maps?q=2nd+Floor,+Shop+No+12,13A,+Trendset+Mall,+Sai+Nagar,+Kala+Nagar,+Acharya+Ranga+Nagar,+Benz+Circle,+Vijayawada,+Andhra+Pradesh+520008&z=15&output=embed",
    mapLink: "https://www.google.com/maps/search/?api=1&query=2nd+Floor,+Shop+No+12,13A,+Trendset+Mall,+Sai+Nagar,+Kala+Nagar,+Acharya+Ranga+Nagar,+Benz+Circle,+Vijayawada,+Andhra+Pradesh+520008",
  },
  {
    name: "Guntur",
    description: "Located in the heart of Brindavan Gardens, our Guntur branch combines accessibility with tranquility. This intimate studio specializes in personalized consultations and bridal services, perfect for your special occasions.",
    address: "D.No. 5-87-50/1 1'st Floor, Lakshmipuram Main Rd, opp. Seetharamaiah High School, Brindavan Gardens, Guntur, Andhra Pradesh 522007",
    image: "/images/locations/guntur.webp",
    mapEmbed: "https://maps.google.com/maps?q=D.No.+5-87-50/1+1'st+Floor,+Lakshmipuram+Main+Rd,+opp.+Seetharamaiah+High+School,+Brindavan+Gardens,+Guntur,+Andhra+Pradesh+522007&z=15&output=embed",
    mapLink: "https://www.google.com/maps/search/?api=1&query=D.No.+5-87-50/1+1'st+Floor,+Lakshmipuram+Main+Rd,+opp.+Seetharamaiah+High+School,+Brindavan+Gardens,+Guntur,+Andhra+Pradesh+522007",
  },
  {
    name: "Ongole",
    description: "Conveniently situated at M.K.R. Plaza on Manganmuru Road, our Ongole location provides easy access to world-class grooming services. The studio features state-of-the-art equipment and a relaxing ambience.",
    address: "M.K.R. Plaza, D.No. 7-1205, 2ND floor , upstairs Axis Bank, Manganmuru Road , ongole , ongole , Andhra Pradesh , 523002",
    image: "/images/locations/ongole.webp",
    mapEmbed: "https://maps.google.com/maps?q=M.K.R.+Plaza,+D.No.+7-1205,+2ND+floor+,+upstairs+Axis+Bank,+Manganmuru+Road+,+ongole+,+ongole+,+Andhra+Pradesh+,+523002&z=15&output=embed",
    mapLink: "https://www.google.com/maps/search/?api=1&query=M.K.R.+Plaza,+D.No.+7-1205,+2ND+floor+,+upstairs+Axis+Bank,+Manganmuru+Road+,+ongole+,+ongole+,+Andhra+Pradesh+,+523002",
  },
  {
    name: "Tenali",
    description: "Our newest branch near Saibaba Temple brings premium salon and spa services to Tenali. Enjoy a serene atmosphere with dedicated specialists offering personalized hair, skin, and wellness treatments.",
    address: "Door No 19-15-47, Near Opo Saibaba Temple, Boss Road, Bazar, Tenali-522201, Andhra Pradesh",
    image: "/images/locations/tenali.webp",
    mapEmbed: "https://maps.google.com/maps?q=Door+No+19-15-47,+Near+Opo+Saibaba+Temple,+Boss+Road,+Bazar,+Tenali-522201,+Andhra+Pradesh&z=15&output=embed",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Door+No+19-15-47,+Near+Opo+Saibaba+Temple,+Boss+Road,+Bazar,+Tenali-522201,+Andhra+Pradesh",
  },
];

export default function LocationsPage() {
  return (
    <main className="bg-paper text-ink">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-charcoal to-stone" />
        <div className="absolute top-[-10%] right-[5%] h-80 w-80 rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute bottom-[-15%] left-[0%] h-96 w-96 rounded-full bg-gold-soft/10 blur-[140px]" />

        <div className="section-shell relative z-10 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl space-y-6"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-gold/30 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-gold backdrop-blur">
              Our Locations
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display leading-tight text-white">
              Visit Be Enrich across{" "}
              <span className="text-gold italic">Andhra Pradesh</span>
            </h1>
            <p className="text-lg md:text-xl text-mist/80 max-w-3xl leading-relaxed">
              Experience world-class salon and spa services at any of our four premium studios. Each location maintains our signature standards of hygiene, hospitality, and expert care.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-mist/80 pt-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-paper/10 px-4 py-2 backdrop-blur">
                <Clock className="h-4 w-4 text-gold" />
                Mon–Sun: 10:00 AM – 9:00 PM
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-paper/10 px-4 py-2 backdrop-blur">
                <Phone className="h-4 w-4 text-gold" />
                +91 81259 44445
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="section-shell py-20 md:py-32 space-y-24">
        {locations.map((location, index) => (
          <motion.div
            key={location.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`flex flex-col gap-8 lg:gap-16 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
                <Image
                  src={location.image}
                  alt={`Be Enrich ${location.name} Branch`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.35em] text-gold">
                  <Image src="/favicon.png" alt="Pin" width={16} height={16} className="object-contain" />
                  Studio {index + 1}
                </span>
                <h2 className="text-3xl md:text-5xl font-display text-ink">
                  {location.name}
                </h2>
              </div>

              <p className="text-lg text-charcoal/80 leading-relaxed">
                {location.description}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <Image src="/favicon.png" alt="Pin" width={20} height={20} className="shrink-0 mt-1 object-contain" />
                  <p className="text-base text-charcoal/70 leading-relaxed">
                    {location.address}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href={location.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition hover:bg-gold hover:text-ink hover:shadow-glow"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </Link>
                <Link
                  href="tel:+918125944445"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-gold/30 px-6 py-3 text-sm font-semibold text-ink transition hover:border-gold hover:bg-gold/5"
                >
                  <Phone className="h-4 w-4" />
                  Call Branch
                </Link>
              </div>

              {/* Embedded Map */}
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-gold/20 shadow-sm mt-4">
                <iframe
                  src={location.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of Be Enrich ${location.name}`}
                  className="absolute inset-0"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="section-shell pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[3rem] border border-gold/20 bg-ink text-paper shadow-card px-8 py-12 md:px-16 md:py-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/[0.07] blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/[0.05] blur-[80px] pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-gold">
                Ready to Visit?
              </p>
              <h3 className="text-3xl md:text-5xl font-display leading-tight text-gold">
                Book Your Appointment Today
              </h3>
              <p className="text-mist/80 text-base md:text-lg leading-relaxed">
                Choose your preferred branch and secure your slot for an unforgettable grooming experience. Walk-ins welcome, but appointments are recommended.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                href="/#booking"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wider text-ink transition hover:bg-paper hover:shadow-glow"
              >
                Book Now
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wider text-paper transition hover:bg-white/10"
              >
                View Services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
