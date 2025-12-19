import { Heart, ShieldCheck, Star } from "lucide-react";
import { homeContent } from "@/content/homeContent";

const featuresData = [
  {
    icon: <Star className="h-8 w-8 text-gold" />,
    ...homeContent.features.items[0],
  },
  {
    icon: <Heart className="h-8 w-8 text-gold" />,
    ...homeContent.features.items[1],
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-gold" />,
    ...homeContent.features.items[2],
  },
];

const Features = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-paper py-12 lg:py-20">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full bg-gold/5 blur-[100px]" />

      <div className="section-shell relative z-10">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
            {homeContent.features.badge}
          </span>

          <h2 className="mt-4 text-3xl font-light tracking-wide text-ink md:text-4xl lg:text-5xl">
            {homeContent.features.title} <span className="font-serif italic text-gold">{homeContent.features.titleAccent}</span>
          </h2>

          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-charcoal/80">
            {homeContent.features.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
          {featuresData.map((feature, idx) => (
            <div
              key={feature.title}
              className={`group relative flex flex-col items-center rounded-3xl p-6 text-center transition-all duration-500 hover:-translate-y-2
                ${feature.featured
                  ? "bg-white shadow-[0_20px_60px_-15px_rgba(212,175,55,0.15)] ring-1 ring-gold/20"
                  : "bg-white/50 ring-1 ring-mist/50 hover:bg-white hover:shadow-xl hover:ring-gold/30"
                }
              `}
            >
              {/* Icon Container */}
              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3
                  ${feature.featured
                    ? "bg-gradient-to-br from-gold/20 to-gold/5 text-gold shadow-inner"
                    : "bg-paper text-gold shadow-sm ring-1 ring-black/5"
                  }
                `}
              >
                {feature.icon}
              </div>

              <h3 className="mb-4 text-xl font-medium tracking-wide text-ink">
                {feature.title}
              </h3>

              <p className="leading-relaxed text-charcoal/70">
                {feature.description}
              </p>

              {/* Decorative corner accent on hover */}
              <div className="absolute top-0 right-0 h-16 w-16 translate-x-2 -translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                <svg viewBox="0 0 100 100" className="h-full w-full fill-gold/10">
                  <path d="M0 0 L100 0 L100 100 A100 100 0 0 1 0 0 Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
