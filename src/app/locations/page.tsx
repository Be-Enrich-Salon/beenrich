"use client";

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";
import { motion } from "framer-motion";

const locations = [
  {
    name: "Guntur",
    description: "Located in the heart of Brindavan Gardens, our Guntur branch combines accessibility with tranquility. This intimate studio specializes in personalized consultations and bridal services, perfect for your special occasions.",
    address: "D.No. 5-87-50/1 1'st Floor, Lakshmipuram Main Rd, opp. Seetharamaiah High School, Brindavan Gardens, Guntur, Andhra Pradesh 522007",
    image: "/images/saloon/guntur1.webp",
    mapEmbed: "https://maps.google.com/maps?q=D.No.+5-87-50/1+1'st+Floor,+Lakshmipuram+Main+Rd,+opp.+Seetharamaiah+High+School,+Brindavan+Gardens,+Guntur,+Andhra+Pradesh+522007&z=15&output=embed",
    mapLink: "https://www.google.com/maps/search/?api=1&query=D.No.+5-87-50/1+1'st+Floor,+Lakshmipuram+Main+Rd,+opp.+Seetharamaiah+High+School,+Brindavan+Gardens,+Guntur,+Andhra+Pradesh+522007",
    staticMap: "/images/locations/guntur.png",
    pinPosition: { left: "50%", top: "50%" },
  },
  {
    name: "Vijayawada",
    description: "Our flagship studio at Trendset Mall offers a spacious, modern salon experience with premium facilities and ample parking. Experience the full range of Be Enrich services in a luxurious setting designed for your comfort.",
    address: "2nd Floor, Shop No 12,13A, Trendset Mall, Kala Nagar, Benz Circle, Vijayawada, Andhra Pradesh 520008.",
    image: "/images/saloon/vijayawada.webp",
    mapEmbed: "https://maps.google.com/maps?q=2nd+Floor,+Shop+No+12,13A,+Trendset+Mall,+Kala+Nagar,+Benz+Circle,+Vijayawada,+Andhra+Pradesh+520008&z=15&output=embed",
    mapLink: "https://www.google.com/maps/search/?api=1&query=2nd+Floor,+Shop+No+12,13A,+Trendset+Mall,+Kala+Nagar,+Benz+Circle,+Vijayawada,+Andhra+Pradesh+520008",
    staticMap: "/images/locations/vijayawada.png",
    pinPosition: { left: "60%", top: "50%" },
  },
  {
    name: "Ongole",
    description: "Conveniently situated at M.K.R. Plaza on Manganmuru Road, our Ongole location provides easy access to world-class grooming services. The studio features state-of-the-art equipment and a relaxing ambience.",
    address: "M.K.R. Plaza, D.No. 7-1205, 2ND floor , upstairs Axis Bank, Manganmuru Road , ongole , ongole , Andhra Pradesh , 523002",
    image: "/images/saloon/tenali.webp",
    mapEmbed: "https://maps.google.com/maps?q=M.K.R.+Plaza,+D.No.+7-1205,+2ND+floor+,+upstairs+Axis+Bank,+Manganmuru+Road+,+ongole+,+ongole+,+Andhra+Pradesh+,+523002&z=15&output=embed",
    mapLink: "https://www.google.com/maps/search/?api=1&query=M.K.R.+Plaza,+D.No.+7-1205,+2ND+floor+,+upstairs+Axis+Bank,+Manganmuru+Road+,+ongole+,+ongole+,+Andhra+Pradesh+,+523002",
    staticMap: "/images/locations/ongole.png",
    pinLabel: "Be Enrich Salon and Spa",
    pinPosition: { left: "55%", top: "50%" },
  },
  {
    name: "Tenali",
    description: "Our newest branch near Saibaba Temple brings premium salon and spa services to Tenali. Enjoy a serene atmosphere with dedicated specialists offering personalized hair, skin, and wellness treatments.",
    address: "4th Floor, Door No 19-15-47, shiridi squre, Near Opo Saibaba Temple, Boss Road, Tenali, Andhra Pradesh 522201.",
    image: "/images/saloon/ongole.webp",
    mapEmbed: "https://maps.google.com/maps?q=4th+Floor,+Door+No+19-15-47,+shiridi+squre,+Near+Opo+Saibaba+Temple,+Boss+Road,+Tenali,+Andhra+Pradesh+522201&z=15&output=embed",
    mapLink: "https://www.google.com/maps/search/?api=1&query=4th+Floor,+Door+No+19-15-47,+shiridi+squre,+Near+Opo+Saibaba+Temple,+Boss+Road,+Tenali,+Andhra+Pradesh+522201",
    staticMap: "/images/locations/tenali.png",
    pinLabel: "Be Enrich Signature Salon",
    pinPosition: { left: "45%", top: "45%" },
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

        <div className="section-shell relative z-10 pt-32 pb-20 md:py-28">
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
            <div className="flex flex-wrap gap-3 text-sm text-mist/80 pt-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-paper/10 px-4 py-2 backdrop-blur">
                <Clock className="h-4 w-4 text-gold" />
                Mon–Sun: 9:00 AM – 9:00 PM
              </span>
              <a href="tel:+918125944445" className="inline-flex items-center gap-2 rounded-full bg-paper/10 px-4 py-2 backdrop-blur hover:bg-paper/20 transition-colors">
                <Phone className="h-4 w-4 text-gold" />
                +91 81259 44445
              </a>
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
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-paper via-mist to-white shadow-card"
          >
            <div className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full bg-gold/10 blur-[80px]" />
            <div className="pointer-events-none absolute -right-24 -bottom-10 h-52 w-52 rounded-full bg-gold-soft/15 blur-[90px]" />

            <div className="p-6 md:p-8 lg:p-10 space-y-6 relative z-10">
              {/* Meta chips */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-3 py-2 text-xs font-semibold shadow-card">
                  <MapPin className="h-4 w-4 text-gold" />
                  {location.name}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/80 text-ink px-3 py-2 text-xs font-semibold border border-gold/30">
                  <Clock className="h-4 w-4 text-gold" />
                  Mon–Sun: 9:00 AM – 9:00 PM
                </span>
              </div>

              {/* Media row: image + map */}
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="relative overflow-hidden rounded-2xl shadow-card border border-white/40 bg-ink/80 aspect-[4/3]">
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                  <Image
                    src={location.image}
                    alt={`Be Enrich ${location.name} Branch`}
                    fill
                    className={`object-cover hover:scale-105 transition-transform duration-700 ${location.name === "Guntur" ? "opacity-50 object-center" : ""}`}
                    sizes="(max-width: 1024px) 100vw, 900px"
                  />
                  {location.name === "Guntur" && (
                    <>
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="px-4 py-2 rounded-full bg-ink/80 text-paper border border-gold/40 text-sm font-semibold">
                          Guntur (Under Renovation)
                        </span>
                      </div>
                    </>
                  )}
                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 text-xs text-paper">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1">
                      Luxury Salon & Spa
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-end text-sm text-charcoal/70">
                    <span className="text-black">Live map</span>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gold/25 shadow-inner bg-paper group">
                    <Image
                      src={location.staticMap}
                      alt={`Map location of ${location.name}`}
                      fill
                      className="object-cover"
                    />
                    {/* Centered Map Pin */}
                    {/* Map Pin Container - Anchored */}
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
              </div>

              {/* Full-width content */}
              <div className="space-y-3 bg-white/80 backdrop-blur rounded-2xl border border-gold/25 p-5 shadow-card">
                <h2 className="text-3xl md:text-4xl font-display text-ink">{location.name}</h2>
                <p className="text-base md:text-lg text-charcoal/80 leading-relaxed">{location.description}</p>
                <div className="flex items-start gap-3 text-charcoal/80">
                  <MapPin className="h-5 w-5 text-gold shrink-0 mt-1" />
                  <p className="leading-relaxed">{location.address}</p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href={location.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition hover:bg-gold hover:text-ink hover:shadow-glow"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </Link>

                  <button
                    type="button"
                    onClick={() => window.dispatchEvent(new Event("open-booking"))}
                    className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink transition hover:bg-paper hover:shadow-glow"
                  >
                    Book Now
                  </button>
                </div>
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
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event("open-booking"))}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wider text-ink transition hover:bg-paper hover:shadow-glow"
              >
                Book Now
              </button>
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
