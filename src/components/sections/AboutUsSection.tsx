
"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 animate-slide-in-left animation-delay-200">
                About Us
              </h2>
              <p className="text-lg sm:text-xl text-foreground mb-6 font-semibold animate-slide-in-left animation-delay-400">
                We Are Increasing Business Success With Technology
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg animate-slide-in-left animation-delay-600">
              In today’s fast-paced digital world, staying ahead requires more than just technology—it requires the right strategy, expertise, and innovation. At Square Group Technologies, we empower businesses with cutting-edge solutions tailored to your unique needs.
            </p>
             <p className="text-muted-foreground leading-relaxed text-base sm:text-lg animate-slide-in-left animation-delay-800">
              Our team of skilled experts is dedicated to understanding your challenges and delivering impactful results that drive growth and efficiency. We believe in building long-term partnerships based on trust, transparency, and a shared vision for success.
            </p>
          </div>
          <div className="order-1 md:order-2 group animate-slide-in-right animation-delay-200">
            <Card className="overflow-hidden shadow-xl rounded-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 transform hover:scale-105">
              <CardContent className="p-0">
                <Image
                  src="https://placehold.co/600x450.png"
                  alt="Diverse team collaborating in a modern office"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint="team collaboration business discussion"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .animate-slide-in-left {
          animation: slideInLeft 0.7s ease-out forwards;
          opacity: 0;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.7s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
