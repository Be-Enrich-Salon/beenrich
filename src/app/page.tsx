import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero/Hero";
import Stats from "@/components/home/Stats";

// Lazy load below-the-fold components
const Features = dynamic(() => import("@/components/home/Features"), {
  loading: () => <div className="h-96 bg-paper" />,
});
const AboutSection = dynamic(() => import("@/components/home/AboutSection"), {
  loading: () => <div className="h-96 bg-charcoal" />,
});
const HospitalitySection = dynamic(() => import("@/components/home/HospitalitySection"), {
  loading: () => <div className="h-96 bg-paper" />,
});
const ServicesPreview = dynamic(() => import("@/components/home/ServicesPreview"), {
  loading: () => <div className="h-96 bg-paper" />,
});

const SignaturePackages = dynamic(() => import("@/components/home/SignaturePackages"), {
  loading: () => <div className="h-96 bg-charcoal" />,
});
const GallerySection = dynamic(() => import("@/components/home/GallerySection"), {
  loading: () => <div className="h-96 bg-paper" />,
});
const TestimonialsSection = dynamic(() => import("@/components/home/TestimonialsSection"), {
  loading: () => <div className="h-96 bg-ink" />,
});
const ContactSection = dynamic(() => import("@/components/contact/ContactSection"), {
  loading: () => <div className="h-96 bg-charcoal" />,
});
const Footer = dynamic(() => import("@/components/home/Footer"), {
  loading: () => <div className="h-24 bg-ink" />,
});

export default function HomePage() {
  return (
    <main className="bg-paper text-ink">
      <Hero />
      <Stats />
      <Features />
      <AboutSection />
      <HospitalitySection />
      <ServicesPreview />
      <SignaturePackages />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
