"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Clock3, CheckCircle2 } from "lucide-react";
import { servicesContent } from "@/content/servicesContent";

const categoryHighlights: Record<string, string[]> = {
  "men-hair-care": [
    "Signature director and stylist cuts",
    "Beard design, trims, and shaves",
    "Scalp spa and head massage add-ons",
  ],
  "women-hair-care": [
    "Precision cuts and blow-dry styling",
    "Spa and repair rituals for hair health",
    "Global, ammonia-free, and fashion color options",
  ],
  "chemical-treatments": [
    "Smoothening, straightening, and perms",
    "Keratin and bonding-first repair routines",
    "Consult-first approach to protect hair integrity",
  ],
  "grooming-makeup": [
    "Bridal, party, and HD makeup artistry",
    "Full-body waxing and threading essentials",
    "Event-ready hair styling and draping",
  ],
  "skin-care": [
    "Hydra facial, clean-ups, and detan",
    "Brightening and hydration therapies",
    "Skin polishing for face, hands, and body",
  ],
  "pedicure-manicure": [
    "Spa pedicure and manicure rituals",
    "Heel peel and targeted foot care",
    "Gel polish and creative nail art",
  ],
  "body-spa-reflexology": [
    "Swedish and deep-tissue massages",
    "Foot reflexology for quick relief",
    "Body polishing and full-body scrubs",
  ],
};

const ServicesOverview = () => {
  const { categories } = servicesContent;

  return (
    <section id="services-overview" className="bg-paper py-16 md:py-24 border-b border-stone/50">
      <div className="section-shell">
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-14">
          <div className="flex items-center justify-center gap-3 text-gold text-[10px] font-bold uppercase tracking-[0.4em]">
            <span className="h-px w-8 bg-gold/40" />
            <span>Services Overview</span>
            <span className="h-px w-8 bg-gold/40" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-ink leading-tight">
            More than images--what working with us feels like
          </h2>
          <p className="text-lg text-charcoal/70 font-light leading-relaxed">
            A concise look at how we deliver grooming, hair, skin, and spa experiences with clarity on what is included and how to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-ink text-paper p-8 md:p-10 shadow-card"
          >
            <div className="flex items-center gap-3 text-gold mb-6">
              <ShieldCheck className="h-6 w-6" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em]">Our Promise</span>
            </div>
            <div className="space-y-4 text-mist/80">
              {[
                "Consult-first recommendations tailored to hair, skin, and event needs.",
                "Premium products (L'Oreal Professionnel, Kerastase, Algotherm, Keune) for predictable results.",
                "Hygiene-led setup: sterilized tools, fresh disposables, and sanitized stations.",
                "Clear pricing and upgrades explained before we begin--no surprises.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold mt-0.5" />
                  <p className="text-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border border-charcoal/10 bg-white shadow-sm p-8 md:p-10"
          >
            <div className="flex items-center gap-3 text-gold mb-6">
              <Clock3 className="h-6 w-6" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">How your visit flows</span>
            </div>
            <ol className="space-y-4 text-charcoal/80 text-base">
              {[
                "Arrival & consult: share your goal, past treatments, and timelines.",
                "Plan & price: we outline options, durations, and after-care before starting.",
                "Service delivery: executed by specialists matched to your requirement.",
                "Finishing & guidance: styling tips, maintenance intervals, and product advice.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="h-8 w-8 rounded-full bg-gold/15 text-gold font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <p className="leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-display text-ink">Category snapshots</h3>
              <p className="text-charcoal/70">Quick clarity on what each service line covers.</p>
            </div>
            <a
              href="/#booking"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gold text-ink text-xs font-bold uppercase tracking-[0.2em] hover:shadow-glow transition"
            >
              Book a consultation
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="h-full rounded-2xl border border-charcoal/10 bg-white/80 p-6 shadow-sm hover:border-gold/30 transition"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2 text-gold text-sm font-semibold uppercase tracking-[0.2em]">
                    <Sparkles className="h-4 w-4" />
                    <span>{category.title}</span>
                  </div>
                  <a
                    href={`/services/${category.id}`}
                    className="text-xs font-semibold text-ink/70 hover:text-gold transition uppercase tracking-[0.2em]"
                  >
                    View
                  </a>
                </div>
                <p className="text-sm text-charcoal/80 leading-relaxed mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {(categoryHighlights[category.id] || []).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink/80">
                      <CheckCircle2 className="h-4 w-4 text-gold mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
