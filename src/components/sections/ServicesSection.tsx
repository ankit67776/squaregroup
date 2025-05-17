
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Lightbulb, Cloud, Layers, Smile, ShieldCheck, Code } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: Lightbulb,
    title: 'IT Strategy & Consulting',
    description: 'Expert guidance to align your IT infrastructure with your business goals for optimal performance and growth.',
  },
  {
    id: 2,
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud services, from migration to management, tailored to your operational needs.',
  },
  {
    id: 3,
    icon: Layers,
    title: 'Digital Transformation',
    description: 'Innovate and modernize your business processes with cutting-edge digital technologies and strategies.',
  },
  {
    id: 4,
    icon: Smile,
    title: 'Optimal Customer Experience',
    description: 'Enhance customer satisfaction and loyalty through personalized and seamless digital interactions.',
  },
  {
    id: 5,
    icon: ShieldCheck,
    title: 'Compliance and Governance',
    description: 'Ensure your business adheres to industry regulations and best practices with our robust compliance solutions.',
  },
  {
    id: 6,
    icon: Code,
    title: 'Application Development',
    description: 'Custom web and mobile application development to meet your specific business requirements and drive engagement.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Our Core Services
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Driving innovation and efficiency with our comprehensive suite of technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden group bg-card hover:-translate-y-2 transform text-center"
              style={{ animationDelay: `${index * 100}ms`, opacity: 0, animation: `fadeInUp 0.5s ease-out ${index * 0.1 + 0.2}s forwards` }}
            >
              <CardHeader className="pt-6 pb-4 items-center">
                <div className="p-4 bg-primary/10 rounded-full inline-block group-hover:bg-accent/10 transition-colors duration-300 mb-4">
                  <service.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-semibold text-primary transition-colors duration-300 group-hover:text-accent">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6 flex-grow flex flex-col">
                <CardDescription className="text-muted-foreground leading-relaxed flex-grow">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes fadeInUp {
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

