import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Settings2, Cloud, BarChartBig, HeartHandshake, ShieldCheck, Code2 } from 'lucide-react';
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
    icon: Settings2,
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
    icon: BarChartBig,
    title: 'Digital Transformation',
    description: 'Innovate and modernize your business processes with cutting-edge digital technologies and strategies.',
  },
  {
    id: 4,
    icon: HeartHandshake,
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
    icon: Code2,
    title: 'Application Development',
    description: 'Custom web and mobile application development to meet your specific business requirements and drive engagement.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            What We Do – Our Services
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of technology services designed to empower your business and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden group bg-card hover:-translate-y-1.5"
            >
              <CardHeader className="items-center text-center p-6 bg-card"> {/* Removed bg-primary/5 for cleaner card look */}
                <div className="p-4 bg-primary text-primary-foreground rounded-full mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                  <service.icon className="h-10 w-10" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary transition-colors duration-300 group-hover:text-accent">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardDescription className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
