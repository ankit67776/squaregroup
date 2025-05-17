
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';

interface Service {
  id: number;
  imageSrc: string;
  imageAlt: string;
  dataAiHint: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    imageSrc: 'https://placehold.co/300x200.png',
    imageAlt: 'IT Strategy and Consulting illustration',
    dataAiHint: 'strategy meeting',
    title: 'IT Strategy & Consulting',
    description: 'Expert guidance to align your IT infrastructure with your business goals for optimal performance and growth.',
  },
  {
    id: 2,
    imageSrc: 'https://placehold.co/300x200.png',
    imageAlt: 'Cloud Solutions illustration',
    dataAiHint: 'cloud network',
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud services, from migration to management, tailored to your operational needs.',
  },
  {
    id: 3,
    imageSrc: 'https://placehold.co/300x200.png',
    imageAlt: 'Digital Transformation illustration',
    dataAiHint: 'digital abstract',
    title: 'Digital Transformation',
    description: 'Innovate and modernize your business processes with cutting-edge digital technologies and strategies.',
  },
  {
    id: 4,
    imageSrc: 'https://placehold.co/300x200.png',
    imageAlt: 'Optimal Customer Experience illustration',
    dataAiHint: 'customer satisfaction',
    title: 'Optimal Customer Experience',
    description: 'Enhance customer satisfaction and loyalty through personalized and seamless digital interactions.',
  },
  {
    id: 5,
    imageSrc: 'https://placehold.co/300x200.png',
    imageAlt: 'Compliance and Governance illustration',
    dataAiHint: 'data security',
    title: 'Compliance and Governance',
    description: 'Ensure your business adheres to industry regulations and best practices with our robust compliance solutions.',
  },
  {
    id: 6,
    imageSrc: 'https://placehold.co/300x200.png',
    imageAlt: 'Application Development illustration',
    dataAiHint: 'software development',
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
              className="flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden group bg-card hover:-translate-y-2 transform"
              style={{ animationDelay: `${index * 100}ms`, opacity: 0, animation: `fadeInUp 0.5s ease-out ${index * 0.1 + 0.2}s forwards` }}
            >
              <CardHeader className="p-0">
                <div className="relative w-full aspect-[3/2]">
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={service.dataAiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                 <CardTitle className="text-xl font-semibold text-primary transition-colors duration-300 group-hover:text-accent mb-3 text-center">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-center leading-relaxed flex-grow">
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
