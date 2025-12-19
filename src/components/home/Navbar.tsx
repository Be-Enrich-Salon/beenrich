import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Locations", href: "#locations" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="section-shell pt-6">
        <div className="flex items-center justify-between rounded-full border border-gold/20 bg-ink/70 px-6 py-1 shadow-card backdrop-blur">
          <Link href="#home" className="relative h-12 w-48 flex items-center">
            <Image
              src="/images/hero/logo.webp"
              alt="Be Enrich"
              fill
              className="object-contain"
              sizes="128px"
            />
          </Link>

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

          <Link
            href="#booking"
            className="inline-flex items-center justify-center rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-gold-soft"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
