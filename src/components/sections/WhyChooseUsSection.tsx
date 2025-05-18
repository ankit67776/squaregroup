
"use client"; // Keeping 'use client' for potential future animations or if IntersectionObserver is needed for list items

import Image from 'next/image';
import { UsersRound, Rocket, Lightbulb, LifeBuoy, ShieldCheck, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface WhyChooseUsPoint {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const whyChooseUsPoints: WhyChooseUsPoint[] = [
  {
    id: 1,
    icon: UsersRound,
    title: 'Client-First Approach',
    description: 'We work closely with every client to deliver personalized, impactful solutions tailored to your unique needs.',
  },
  {
    id: 2,
    icon: Rocket,
    title: 'Startup Energy, Enterprise Mindset',
    description: "We're agile and innovative, focused on helping your business grow with the right technology and strategic thinking.",
  },
  {
    id: 3,
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description: 'We leverage cutting-edge tools and creative strategies to solve complex challenges and drive your business forward.',
  },
  {
    id: 4,
    icon: LifeBuoy,
    title: 'Dedicated Support',
    description: 'From initial planning to post-deployment, our team is committed to providing ongoing support and partnership.',
  },
  {
    id: 5,
    icon: ShieldCheck,
    title: 'Security & Scalability Focused',
    description: 'Our solutions are built with robust security and future growth in mind, ensuring they adapt as your business evolves.',
  },
  {
    id: 6,
    icon: TrendingUp,
    title: 'Results-Driven Focus',
    description: "We are committed to delivering measurable results that contribute directly to your business success and objectives."
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 text-foreground overflow-hidden">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Modern business team collaborating"
        layout="fill"
        objectFit="cover"
        className="z-0"
        data-ai-hint="business team success"
        priority={false}
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10"></div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Why Choose SquareTech Vista
          </h2>
          <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto">
            Small team. Big impact. We're dedicated to your success by focusing on what truly matters for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsPoints.map((point, index) => (
            <div
              key={point.id}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-card/70 backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ animation: `fadeInUpShort 0.5s ease-out ${index * 0.1 + 0.2}s forwards`, opacity: 0 }}
            >
              <div className="mb-4 inline-block p-3 rounded-full bg-primary/10 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-300">
                <point.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                {point.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes fadeInUpShort {
          from {
            opacity: 0;
            transform: translateY(20px);
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
