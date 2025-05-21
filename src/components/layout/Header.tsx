
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, BriefcaseBusiness } from 'lucide-react'; 
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact-form' }, 
  ];


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group" onClick={closeMobileMenu}>
            {/* <BriefcaseBusiness className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-accent" />
            <span className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">SquareGroup Technologies</span> */}
            <Image 
              src="/images/logo.png" 
              alt="SquareGroup Technologies Logo" 
              width={170} 
              height={34} 
              className="object-contain h-20 w-20" // Adjust height as needed, width will scale
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} legacyBehavior passHref>
                <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-primary/10 text-sm lg:text-base font-medium transition-colors duration-300">
                  {item.label}
                </Button>
              </Link>
            ))}
             <Link href="#contact-form" legacyBehavior passHref>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:shadow-md">
                  Get A Quote
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
                <div className="flex flex-col space-y-4">
                  <Link href="/" className="flex items-center gap-2 mb-4 group" onClick={closeMobileMenu}>
                     <Image 
                      src="/images/logo.png" 
                      alt="SquareGroup Technologies Logo" 
                      width={150} 
                      height={30} 
                      className="object-contain"
                    />
                  </Link>
                  {navItems.map((item) => (
                    <Link key={item.label} href={item.href} legacyBehavior passHref>
                      <a 
                        onClick={closeMobileMenu}
                        className="block py-2 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/10 rounded-md px-3 transition-all duration-300"
                      >
                        {item.label}
                      </a>
                    </Link>
                  ))}
                  <Link href="#contact-form" legacyBehavior passHref>
                    <Button onClick={closeMobileMenu} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-4 transition-all duration-300 hover:shadow-md">
                      Get A Quote
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
