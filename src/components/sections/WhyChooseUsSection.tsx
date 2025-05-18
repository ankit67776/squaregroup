
"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
    <section className="py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Why Choose SquareTech Vista
          </h2>
          <p className="text-lg sm:text-xl text-secondary-foreground max-w-3xl mx-auto">
            Small team. Big impact. We're dedicated to your success by focusing on what truly matters for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {whyChooseUsPoints.map((point, index) => (
            <Card 
              key={point.id} 
              className="flex flex-col text-center shadow-lg hover:shadow-xl transition-all duration-300 bg-card hover:-translate-y-1.5 group"
              style={{ animationDelay: `${index * 100}ms`, opacity: 0, animation: `fadeInUpShort 0.5s ease-out ${index * 0.1 + 0.2}s forwards` }}
            >
              <CardHeader className="pb-3 pt-6 items-center">
                <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-fit mb-3 transition-colors duration-300 group-hover:bg-accent/10 group-hover:text-accent">
                  <point.icon className="h-10 w-10 transform transition-transform duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary transition-colors duration-300 group-hover:text-accent">
                  {point.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6 flex-grow">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </CardContent>
            </Card>
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
