"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-5rem)] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Technology Innovation Background"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="z-0"
        data-ai-hint="technology abstract"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight animate-fade-in-up animation-delay-200">
          Welcome To Your Trusted Technology Partner
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-light mb-10 max-w-3xl animate-fade-in-up animation-delay-400">
          Square Group Technologies
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
          <Link href="#about" passHref legacyBehavior>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-accent/50"
            >
              Learn More
            </Button>
          </Link>
          <Link href="#contact" passHref legacyBehavior>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-primary px-10 py-6 text-lg font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-white/50"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
      <style jsx global>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
