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
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-ink transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-ink transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-ink transition-all duration-300">
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

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white">{footer.support.title}</h3>
            <ul className="space-y-3 text-mist/70">
              {footer.support.links.map((link) => (
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
                <span>{footer.contact.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} style={{ color: colors.gold }} className="flex-shrink-0" />
                <span>{footer.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-mist/50">
          <p>&copy; {new Date().getFullYear()} {footer.copyright}</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span className="hover:text-white transition-colors cursor-pointer">{footer.designedBy}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
