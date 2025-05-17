
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PhoneCall } from 'lucide-react';

export default function ConsultationSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 text-primary-foreground overflow-hidden">
      <Image
        src="https://placehold.co/1920x1080.png" 
        alt="Business professionals in a consultation meeting"
        layout="fill"
        objectFit="cover"
        quality={75}
        className="z-0"
        data-ai-hint="business presentation"
        priority={false} 
      />
      <div className="absolute inset-0 bg-primary/90 backdrop-blur-sm z-10"></div> {/* Adjusted overlay opacity */}
      
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block p-4 bg-accent/20 rounded-full mb-6 animate-pulse">
            <PhoneCall className="h-12 w-12 sm:h-16 sm:w-16 text-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Let’s Talk About Business Solutions With Us
          </h2>
          <p className="text-lg sm:text-xl mb-10 text-primary-foreground/90 max-w-2xl mx-auto">
            Ready to transform your business with innovative technology? Contact us today for a free consultation and let's discuss how we can help you achieve your goals.
          </p>
          <Link href="#contact-form" passHref legacyBehavior>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/80 text-accent-foreground px-10 py-7 text-lg font-semibold rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-accent/50 hover:shadow-2xl"
            >
              Contact Us Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
