"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero/Hero";
import Stats from "@/components/home/Stats";
import BookingContainer from "@/components/booking/BookingContainer";
import { Calendar } from "lucide-react";

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
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const toggleBooking = () => {
    setIsBookingOpen(!isBookingOpen);
  };

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

      {/* Floating Book Button */}
      <button
        onClick={toggleBooking}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 bg-gold text-ink rounded-full font-bold uppercase tracking-wider text-sm shadow-2xl hover:shadow-glow hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
        aria-label="Book Appointment"
      >
        <Calendar className="h-5 w-5" />
        <span className="hidden sm:inline">Book Now</span>
      </button>

      {/* Booking Modal */}
      {isBookingOpen && <BookingContainer toggleBooking={toggleBooking} />}
    </>
  );
}
