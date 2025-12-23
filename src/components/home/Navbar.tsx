"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Locations", href: "/locations" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="section-shell pt-6">
        <div className="flex items-center justify-between rounded-full border border-gold/20 bg-ink/70 px-6 py-1 shadow-card backdrop-blur overflow-visible">
          <Link href="/" className="relative h-20 w-40 md:w-56 flex items-center z-50 -my-3">
            <Image
              src="/images/hero/logosig.png"
              alt="Be Enrich"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 150px, 224px"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm font-semibold text-mist/90 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Book Now Button */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center justify-center rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-gold-soft"
          >
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="lg:hidden z-50 p-2 text-gold"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-24 bg-ink/95 backdrop-blur-xl z-40 animate-in fade-in slide-in-from-top-4 duration-300">
            <nav className="flex flex-col items-center gap-8 pt-12 px-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-2xl font-semibold text-mist hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-gold px-8 py-3 text-lg font-semibold text-ink shadow-glow transition hover:bg-gold-soft"
              >
                Book Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
