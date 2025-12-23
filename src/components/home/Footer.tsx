import Link from "next/link";
import colors from "@/theme/colors";
import { Instagram, Facebook, Twitter, MapPin, Mail, Phone } from "lucide-react";
import { homeContent } from "@/content/homeContent";

const Footer = () => {
  const { footer } = homeContent;

  return (
    <footer className="bg-ink text-mist pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-white">
              {footer.brandName} <span style={{ color: colors.gold }}>.</span>
            </h2>
            <p className="text-mist/70 font-light leading-relaxed max-w-xs">
              {footer.tagline}
            </p>
            <div className="flex items-center space-x-4">
              <a href={footer.socials?.instagram || "#"} className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-ink transition-all duration-300" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram size={18} />
              </a>
              <a href={footer.socials?.facebook || "#"} className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-ink transition-all duration-300" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Facebook size={18} />
              </a>
              <a href={footer.socials?.twitter || "#"} className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-ink transition-all duration-300" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white">{footer.explore.title}</h3>
            <ul className="space-y-3 text-mist/70">
              {footer.explore.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-gold transition-colors duration-300">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white">{footer.services.title}</h3>
            <ul className="space-y-3 text-mist/70">
              {footer.services.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-gold transition-colors duration-300">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white">{footer.contact.title}</h3>
            <ul className="space-y-4 text-mist/70">
              <li className="flex items-start space-x-3">
                <MapPin size={18} style={{ color: colors.gold }} className="mt-1 flex-shrink-0" />
                <span>{footer.contact.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} style={{ color: colors.gold }} className="flex-shrink-0" />
                <a href={`tel:${footer.contact.phone.replace(/\s+/g, "")}`} className="hover:text-gold transition-colors">{footer.contact.phone}</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} style={{ color: colors.gold }} className="flex-shrink-0" />
                <a href={`mailto:${footer.contact.email}`} className="hover:text-gold transition-colors">{footer.contact.email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-mist/50">
          <p>&copy; {new Date().getFullYear()} {footer.copyright}</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span className="hover:text-white transition-colors">{footer.designedBy}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
