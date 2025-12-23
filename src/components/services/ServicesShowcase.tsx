"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { servicesContent } from "@/content/servicesContent";
import { homeContent } from "@/content/homeContent";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

const categoryHighlights: Record<string, string[]> = {
  "men-hair-care": [
    "Director and stylist-led cuts",
    "Beard design, trims, and shaves",
    "Scalp spa and head massage add-ons",
  ],
  "women-hair-care": [
    "Creative cuts with blow-dry styling",
    "Spa and repair rituals for hair health",
    "Color options: global, ammonia-free, highlights",
  ],
  "chemical-treatments": [
    "Smoothening, straightening, and perms",
    "Keratin with bonding-first approach",
    "Consult-first plan to protect hair integrity",
  ],
  "grooming-makeup": [
    "Bridal, party, and HD looks",
    "Full-body waxing and threading",
    "Event-ready hair styling and draping",
  ],
  "skin-care": [
    "Hydra facial, clean-ups, and detan",
    "Brightening and hydration therapies",
    "Skin polishing for face and body",
  ],
  "pedicure-manicure": [
    "Spa pedicure and manicure rituals",
    "Heel peel and targeted foot care",
    "Gel polish and creative nail art",
  ],
  "body-spa-reflexology": [
    "Swedish and deep-tissue massage",
    "Foot reflexology for quick relief",
    "Body polishing and scrubs",
  ],
};

const categoryTags: Record<string, string[]> = {
  "men-hair-care": ["Hair", "Grooming"],
  "women-hair-care": ["Hair", "Style"],
  "chemical-treatments": ["Texture", "Color"],
  "grooming-makeup": ["Makeup", "Waxing"],
  "skin-care": ["Skin", "Glow"],
  "pedicure-manicure": ["Nails", "Spa"],
  "body-spa-reflexology": ["Spa", "Wellness"],
};

const ServicesShowcase = () => {
  const categories = servicesContent.categories;
  const { openBooking } = useBooking();

  return (
    <section id="services-menu" className="bg-paper py-16 md:py-20">
      <div className="section-shell space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3 text-gold text-[10px] font-bold uppercase tracking-[0.4em]">
            <span className="h-px w-8 bg-gold/40" />
            <span>Our Services</span>
            <span className="h-px w-8 bg-gold/40" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-ink leading-tight">
            See what each ritual includes
          </h2>
          <p className="text-lg text-charcoal/70 font-light leading-relaxed">
            A clear, text-first walkthrough of our menu so guests know what to expect before booking.
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((category, idx) => {
            const detail = (servicesContent as Record<string, any>)[category.id] || {};
            const preview = homeContent.servicesPreview.items.find((item: any) => item.id === category.id);
            const heroImage = preview?.image || category.image;
            const subservices = detail.popularServices || detail.detailedSections?.[0]?.items || [];

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="overflow-hidden rounded-3xl bg-white shadow-card border border-gold/10"
              >
                <div className="flex flex-col lg:flex-row">
                  <div
                    className={`relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto lg:min-h-full order-1 ${idx % 2 === 0 ? "lg:order-2" : "lg:order-1"
                      }`}
                  >
                    <Image
                      src={heroImage}
                      alt={category.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {(categoryTags[category.id] || ["Signature"]).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-white/80 text-ink text-xs font-semibold uppercase tracking-[0.2em]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`w-full lg:w-1/2 p-8 md:p-10 space-y-6 order-2 ${idx % 2 === 0 ? "lg:order-1" : "lg:order-2"
                      }`}
                  >

                    <h3 className="text-2xl md:text-3xl font-display text-ink leading-tight">{category.title}</h3>
                    <p className="text-charcoal/80 text-base leading-relaxed">{category.description}</p>
                    {detail.hero?.subtitle && (
                      <p className="text-sm text-charcoal/70 leading-relaxed">{detail.hero.subtitle}</p>
                    )}

                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">What you get</p>
                      <ul className="space-y-2">
                        {(categoryHighlights[category.id] || []).map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-ink/80">
                            <CheckCircle2 className="h-4 w-4 text-gold mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {subservices.length > 0 && (
                      <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Popular picks</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {subservices.slice(0, 4).map((item: any, i: number) => (
                            <div
                              key={item.title || item.name || i}
                              className="rounded-xl border border-charcoal/10 bg-white/80 p-3 flex items-start gap-2"
                            >
                              <CheckCircle2 className="h-4 w-4 text-gold mt-0.5" />
                              <div className="text-sm text-ink/80 leading-relaxed">
                                <div className="font-semibold text-ink">{item.title || item.name}</div>
                                {item.description && (
                                  <p className="text-xs text-charcoal/70">{item.description}</p>
                                )}
                                {item.price && (
                                  <p className="text-xs text-gold font-semibold mt-1">{item.price}</p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3 pt-2">
                      <Link
                        href={`/services/${category.id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-ink text-xs font-bold uppercase tracking-[0.3em] hover:shadow-glow transition"
                      >
                        View details
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <button
                        onClick={openBooking}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink/10 text-ink text-xs font-bold uppercase tracking-[0.3em] hover:border-gold hover:text-gold transition"
                      >
                        Book this service
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;