import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PhoneCall } from 'lucide-react';

export default function ConsultationSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground"> {/* Updated background to primary */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <PhoneCall className="h-16 w-16 mx-auto mb-6 text-accent" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Let’s Talk About Business Solutions With Us
          </h2>
          <p className="text-lg sm:text-xl mb-10 text-primary-foreground/90">
            Ready to transform your business with innovative technology? Contact us today for a free consultation and let's discuss how we can help you achieve your goals.
          </p>
          <Link href="#contact" passHref legacyBehavior>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-7 text-lg font-semibold rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-accent/50 hover:shadow-2xl"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
