import Link from "next/link";
import Image from "next/image";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import { ArrowRight } from "lucide-react";
import { homeContent } from "@/content/homeContent";

const ServicesPreview = () => {
  const { servicesPreview } = homeContent;

  return (
    <section id="services" className="bg-paper py-10">
      <div className="section-shell">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gold">{servicesPreview.badge}</p>
            <h2 className="mt-3 text-4xl font-light text-ink">{servicesPreview.title}</h2>
            <p className="mt-3 max-w-2xl text-lg text-charcoal/80">
              {servicesPreview.description}
            </p>
          </div>
          <Link
            href="#services"
            className="inline-flex items-center gap-2 self-start rounded-full border border-gold px-5 py-2 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold/10"
          >
            {servicesPreview.viewAllText}
          </Link>
        </div>

        <div className="w-full">
          <ScrollStack
            itemDistance={40}
            itemScale={0.05}
            itemStackDistance={30}
            stackPosition="10%"
            scaleEndPosition="5%"
            baseScale={0.95}
            useWindowScroll={true}
          >
            {servicesPreview.items.map((service, index) => (
              <ScrollStackItem
                key={service.title}
                itemClassName="bg-stone border border-gold/20 shadow-2xl overflow-hidden"
              >
                <div className="flex h-full w-full flex-row">
                  <div className="relative h-full w-2/5">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 40vw, 30vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-stone/20 to-stone/5" />
                  </div>

                  <div className="flex flex-1 flex-col justify-center p-4 md:p-6 relative z-10 w-3/5">
                    <h3 className="mb-2 text-lg font-light text-paper md:text-xl lg:text-2xl leading-none">
                      {service.title}
                    </h3>
                    <p className="mb-3 text-xs leading-relaxed text-mist/80 md:text-sm font-light line-clamp-3">
                      {service.description}
                    </p>
                    <Link
                      href="#contact"
                      className="group inline-flex items-center justify-center gap-2 self-start rounded-full bg-gold px-4 py-1.5 text-[10px] uppercase tracking-wider text-ink transition-all duration-300 hover:bg-goldSoft hover:shadow-[0_0_15px_rgba(197,164,109,0.2)]"
                    >
                      <span className="font-semibold">View</span>
                      <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
