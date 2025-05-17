import Link from 'next/link';
import { BriefcaseBusiness, MapPin, Phone, Mail } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const servicesLinks = [
  { label: 'Finance & Banking', href: '#services' },
  { label: 'Business Development', href: '#services' },
  { label: 'Retail & E-commerce', href: '#services' },
  { label: 'Healthcare', href: '#services' },
  { label: 'Manufacturing', href: '#services' },
  { label: 'SMBs', href: '#services' },
  { label: 'Education', href: '#services' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 md:py-16 lg:py-20" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Overview */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <BriefcaseBusiness className="h-10 w-10 text-primary" />
              <span className="text-2xl font-bold">SquareTech Vista</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering businesses with cutting-edge technology solutions tailored to your unique needs. Your trusted partner for innovation and growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} legacyBehavior passHref>
                    <a className="hover:text-primary transition-colors text-sm">{link.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">Industries Served</h3>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} legacyBehavior passHref>
                    <a className="hover:text-primary transition-colors text-sm">{link.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <span className="text-sm">Ashburn, VA, 20147</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+12038937087" className="hover:text-primary transition-colors text-sm">+1 203-893-7087</a>
                  <a href="tel:+12015645025" className="hover:text-primary transition-colors text-sm">+1 201-564-5025</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <a href="mailto:info@squaregroupllc.com" className="hover:text-primary transition-colors text-sm">info@squaregroupllc.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary/20 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} SquareTech Vista. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
