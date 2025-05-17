import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
                About Us
              </h2>
              <p className="text-lg sm:text-xl text-foreground mb-6 font-semibold">
                We Are Increasing Business Success With Technology
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              In today’s fast-paced digital world, staying ahead requires more than just technology—it requires the right strategy, expertise, and innovation. At Square Group Technologies, we empower businesses with cutting-edge solutions tailored to your unique needs.
            </p>
             <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              Our team of skilled experts is dedicated to understanding your challenges and delivering impactful results that drive growth and efficiency. We believe in building long-term partnerships based on trust, transparency, and a shared vision for success.
            </p>
          </div>
          <div className="order-1 md:order-2 group">
            <Card className="overflow-hidden shadow-xl rounded-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
              <CardContent className="p-0">
                <Image
                  src="https://placehold.co/600x450.png" // Slightly adjusted ratio for a common image size
                  alt="Team collaborating in a modern office"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint="modern office collaboration"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
