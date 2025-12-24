"use client";

import { useEffect, useState } from "react";
import BookingContainer from "@/components/booking/BookingContainer";
import { Calendar } from "lucide-react";

export default function GlobalBookingButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBooking = () => setIsOpen((prev) => !prev);
  const openBooking = () => setIsOpen(true);

  useEffect(() => {
    const handler = () => openBooking();
    window.addEventListener("open-booking", handler);
    return () => window.removeEventListener("open-booking", handler);
  }, []);

  return (
    <>
      <button
        onClick={toggleBooking}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 bg-gold text-ink rounded-full font-bold uppercase tracking-wider text-sm shadow-2xl hover:shadow-glow hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none cursor-pointer"
        aria-label="Book Appointment"
      >
        <Calendar className="h-5 w-5" />
        <span className="hidden sm:inline">Book Now</span>
      </button>

      {isOpen && <BookingContainer toggleBooking={toggleBooking} />}
    </>
  );
}
