
"use client";

import Image from 'next/image';
import { UsersRound, Rocket, Lightbulb, LifeBuoy, ShieldCheck, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface WhyChooseUsPoint {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  imageHint: string;
}

const whyChooseUsPoints: WhyChooseUsPoint[] = [
  {
    id: 1,
    icon: UsersRound,
    title: 'Client-First Approach',
    description: 'We work closely with every client to deliver personalized, impactful solutions tailored to your unique needs.',
    imageHint: 'client meeting handshake',
  },
  {
    id: 2,
    icon: Rocket,
    title: 'Startup Energy, Enterprise Mindset',
    description: "We're agile and innovative, focused on helping your business grow with the right technology and strategic thinking.",
    imageHint: 'innovation lightbulb idea',
  },
  {
    id: 3,
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description: 'We leverage cutting-edge tools and creative strategies to solve complex challenges and drive your business forward.',
    imageHint: 'creative solution puzzle',
  },
  {
    id: 4,
    icon: LifeBuoy,
    title: 'Dedicated Support',
    description: 'From initial planning to post-deployment, our team is committed to providing ongoing support and partnership.',
    imageHint: 'customer support friendly',
  },
  {
    id: 5,
    icon: ShieldCheck,
    title: 'Security & Scalability Focused',
    description: 'Our solutions are built with robust security and future growth in mind, ensuring they adapt as your business evolves.',
    imageHint: 'data security lock',
  },
  {
    id: 6,
    icon: TrendingUp,
    title: 'Results-Driven Focus',
    description: "We are committed to delivering measurable results that contribute directly to your business success and objectives.",
    imageHint: 'business growth chart arrow',
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 text-foreground overflow-hidden">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Modern business team collaborating with an abstract background"
        layout="fill"
        objectFit="cover"
        className="z-0 opacity-30" // Reduced opacity for better text contrast if needed
        data-ai-hint="business team success abstract"
        priority={false}
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10"></div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Why Choose SquareGroup Technologies 
          </h2>
          <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto">
            Small team. Big impact. We're dedicated to your success by focusing on what truly matters for your business.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
        >
          <CarouselContent>
            {whyChooseUsPoints.map((point) => (
              <CarouselItem key={point.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col h-full shadow-lg bg-card/80 backdrop-blur-md overflow-hidden">
                    <div className="relative w-full aspect-video">
                       <Image
                        src={`https://placehold.co/600x338.png`} // 16:9 aspect ratio
                        alt={point.title}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={point.imageHint}
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                      <div className="mb-4 inline-block p-3 rounded-full bg-primary/10 text-primary">
                        <point.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {point.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {point.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex bg-primary/80 text-primary-foreground hover:bg-primary" />
          <CarouselNext className="hidden sm:flex bg-primary/80 text-primary-foreground hover:bg-primary" />
        </Carousel>
      </div>
    </section>
  );
}
