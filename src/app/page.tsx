"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero/Hero";
import Stats from "@/components/home/Stats";
// Floating booking handled globally via GlobalBookingButton

// Lazy load below-the-fold components with optimized loading
const Features = dynamic(() => import("@/components/home/Features"), {
  loading: () => <div className="h-96 bg-paper" />,
  ssr: false,
});
const AboutSection = dynamic(() => import("@/components/home/AboutSection"), {
  loading: () => <div className="h-96 bg-charcoal" />,
  ssr: false,
});
const HospitalitySection = dynamic(() => import("@/components/home/HospitalitySection"), {
  loading: () => <div className="h-96 bg-paper" />,
  ssr: false,
});
const ServicesPreview = dynamic(() => import("@/components/home/ServicesPreview"), {
  loading: () => <div className="h-96 bg-paper" />,
  ssr: false,
});

const SignaturePackages = dynamic(() => import("@/components/home/SignaturePackages"), {
  loading: () => <div className="h-96 bg-charcoal" />,
  ssr: false,
});
const GallerySection = dynamic(() => import("@/components/home/GallerySection"), {
  loading: () => <div className="h-96 bg-paper" />,
  ssr: false,
});
const TestimonialsSection = dynamic(() => import("@/components/home/TestimonialsSection"), {
  loading: () => <div className="h-96 bg-ink" />,
  ssr: false,
});
const BrandsSection = dynamic(() => import("@/components/home/BrandsSection"), {
  loading: () => <div className="h-48 bg-ink" />,
  ssr: false,
});
const ContactSection = dynamic(() => import("@/components/contact/ContactSection"), {
  loading: () => <div className="h-96 bg-charcoal" />,
  ssr: false,
});


export default function HomePage() {

  return (
    <>
      <main className="bg-paper text-ink">
        <Hero />
        <Stats />
        <Features />
        <AboutSection />
        <BrandsSection />
        <HospitalitySection />
        <ServicesPreview />
        <SignaturePackages />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Global booking button renders via RootLayout */}
    </>
  );
}
