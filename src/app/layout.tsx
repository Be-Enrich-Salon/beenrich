import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import GlobalBookingButton from "@/components/booking/GlobalBookingButton";
import { BookingProvider } from "@/context/BookingContext";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Be Enrich Salon & Spa",
  description:
    "Premium, elegant, and personalised salon & spa experiences crafted for discerning guests.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-paper text-ink antialiased">
        <BookingProvider>
          <Navbar />
          {children}
          <GlobalBookingButton />
          <Footer />
        </BookingProvider>
      </body>
    </html>
  );
}
