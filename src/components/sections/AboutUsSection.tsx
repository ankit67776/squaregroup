
"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 animate-slide-in-left animation-delay-200">
                About SquareTech Vista
              </h2>
              <p className="text-lg sm:text-xl text-primary mb-6 font-semibold animate-slide-in-left animation-delay-400">
                Empowering Your Business Through Innovative Technology Solutions
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg animate-slide-in-left animation-delay-600">
              At SquareTech Vista, we believe in the transformative power of technology. Our mission is to provide businesses with cutting-edge IT services and strategic consulting that drive growth, efficiency, and a competitive edge in today’s dynamic market.
            </p>
             <p className="text-muted-foreground leading-relaxed text-base sm:text-lg animate-slide-in-left animation-delay-800">
              Our team of seasoned experts is dedicated to understanding your unique challenges and crafting tailored solutions. We foster long-term partnerships built on trust, transparency, and a shared commitment to achieving your business objectives.
            </p>
          </div>
          <div className="order-1 md:order-2 group animate-slide-in-right animation-delay-200">
            <Card className="overflow-hidden shadow-xl rounded-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 transform hover:scale-105 bg-card">
              <CardContent className="p-0">
                <div className="relative w-full aspect-[4/3]"> {/* Aspect ratio 600/450 = 4/3 */}
                  <Image
                    src="https://placehold.co/600x450.png"
                    alt="Diverse team engaged in a collaborative business discussion in a modern office setting."
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint="team collaboration business"
                  />
                </div>
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

