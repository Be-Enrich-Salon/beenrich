
import AboutHero from "@/components/about/AboutHero";
import PhilosophySection from "@/components/about/PhilosophySection";
import TimelineSection from "@/components/about/TimelineSection";
import ChairmanMessage from "@/components/about/ChairmanMessage";
import InvestorVision from "@/components/about/InvestorVision";
import Script from "next/script";

export const metadata = {
    title: "About Us | Be Enrich Beauty Salon",
    description: "Learn about our journey, philosophy, and commitment to excellence at Be Enrich Beauty Salon.",
};
// this is the baout componet 

export default function AboutPage() {
    return (
        <main className="">
            <Script
                id="about-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "name": "About Be Enrich Beauty Salon",
                        "description": "Premium destination for beauty, hair, and wellness services.",
                        "url": "https://beenrich.com/about",
                    }),
                }}
            />
            <AboutHero />
            <PhilosophySection />
            <TimelineSection />
            <ChairmanMessage />
            <InvestorVision />
        </main>
    );
}
