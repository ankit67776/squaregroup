"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, BriefcaseBusiness } from 'lucide-react'; // Using BriefcaseBusiness as a placeholder logo icon

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
            <BriefcaseBusiness className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">SquareTech Vista</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} legacyBehavior passHref>
                <Button variant="ghost" className="text-foreground hover:text-primary text-sm lg:text-base font-medium">
                  {item.label}
                </Button>
              </Link>
            ))}
             <Link href="#contact" legacyBehavior passHref>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Contact Us
                </Button>
              </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-foreground" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
                <div className="flex flex-col space-y-6">
                  <Link href="/" className="flex items-center gap-2 mb-6" onClick={closeMobileMenu}>
                     <BriefcaseBusiness className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold text-foreground">SquareTech Vista</span>
                  </Link>
                  {navItems.map((item) => (
                    <Link key={item.label} href={item.href} legacyBehavior passHref>
                      <a 
                        onClick={closeMobileMenu}
                        className="block py-2 text-lg font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.label}
                      </a>
                    </Link>
                  ))}
                  <Link href="#contact" legacyBehavior passHref>
                    <Button onClick={closeMobileMenu} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-4">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
