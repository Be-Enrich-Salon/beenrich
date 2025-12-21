import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="booking" className="relative overflow-hidden bg-gradient-to-r from-ink via-charcoal to-ink py-16 text-paper">
      <div className="absolute inset-y-0 right-[-20%] h-[140%] w-1/2 rotate-6 rounded-full bg-gold/10 blur-3xl" aria-hidden />
      <div className="section-shell">
        <div className="relative isolate overflow-hidden rounded-3xl border border-gold/25 bg-ink/70 px-8 py-10 shadow-card backdrop-blur lg:px-12 lg:py-14">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-gold">Premium care, always</p>
              <h2 className="text-4xl leading-tight">Reserve your signature Be Enrich experience today.</h2>
              <p className="max-w-2xl text-lg text-mist/85">
                From the first consultation to the final touch, our concierge ensures every detail is perfected for you.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#booking"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gold px-6 py-3 text-base font-semibold text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-gold-soft"
              >
                Book Now
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-gold px-6 py-3 text-base font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-gold/10"
              >
                Call Concierge
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
