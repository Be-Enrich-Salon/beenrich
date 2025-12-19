import { homeContent } from "@/content/homeContent";

const stats = homeContent.stats.items;

const Stats = () => {
  return (
    <section id="locations" className="relative z-10 -mt-20 pb-10 text-paper">
      <div className="section-shell">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 rounded-full border border-gold/30 bg-ink/80 px-6 py-6 shadow-card backdrop-blur-md lg:flex-row lg:py-5">
          {stats.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center lg:flex-1 lg:border-l lg:border-gold/20 lg:pl-8 first:lg:border-l-0 first:lg:pl-0"
            >
              <span className="text-3xl font-semibold text-gold">{item.value}</span>
              <span className="mt-1 text-sm uppercase tracking-[0.25em] text-mist/80">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
