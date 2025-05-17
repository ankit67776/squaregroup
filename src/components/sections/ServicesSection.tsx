
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';

interface Service {
  id: number;
  imageSrc: string; // Using placeholder for now
  imageAlt: string;
  dataAiHint: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    imageSrc: 'https://placehold.co/80x80.png',
    imageAlt: 'IT Strategy and Consulting icon',
    dataAiHint: 'strategy meeting',
    title: 'IT Strategy & Consulting',
    description: 'Expert guidance to align your IT infrastructure with your business goals for optimal performance and growth.',
  },
  {
    id: 2,
    imageSrc: 'https://placehold.co/80x80.png',
    imageAlt: 'Cloud Solutions icon',
    dataAiHint: 'cloud network',
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud services, from migration to management, tailored to your operational needs.',
  },
  {
    id: 3,
    imageSrc: 'https://placehold.co/80x80.png',
    imageAlt: 'Digital Transformation icon',
    dataAiHint: 'digital abstract',
    title: 'Digital Transformation',
    description: 'Innovate and modernize your business processes with cutting-edge digital technologies and strategies.',
  },
  {
    id: 4,
    imageSrc: 'https://placehold.co/80x80.png',
    imageAlt: 'Optimal Customer Experience icon',
    dataAiHint: 'customer satisfaction',
    title: 'Optimal Customer Experience',
    description: 'Enhance customer satisfaction and loyalty through personalized and seamless digital interactions.',
  },
  {
    id: 5,
    imageSrc: 'https://placehold.co/80x80.png',
    imageAlt: 'Compliance and Governance icon',
    dataAiHint: 'data security',
    title: 'Compliance and Governance',
    description: 'Ensure your business adheres to industry regulations and best practices with our robust compliance solutions.',
  },
  {
    id: 6,
    imageSrc: 'https://placehold.co/80x80.png',
    imageAlt: 'Application Development icon',
    dataAiHint: 'coding interface',
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
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden group bg-card hover:-translate-y-2 transform"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="items-center text-center p-6 bg-card">
                <div className="mb-4 p-3 rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/20">
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    width={64} // Adjusted size for icon-like images
                    height={64}
                    className="rounded-md object-contain" // Ensure image fits well
                    data-ai-hint={service.dataAiHint}
                  />
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
