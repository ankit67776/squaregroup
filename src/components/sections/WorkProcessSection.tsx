import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MousePointerSquareDashed, SearchCode, ClipboardList, Rocket, ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ProcessStep {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    icon: MousePointerSquareDashed,
    title: 'Select a Project',
    description: 'We start by understanding your vision, goals, and specific project requirements through detailed consultation.',
  },
  {
    id: 2,
    icon: SearchCode,
    title: 'Project Analysis',
    description: 'Our experts conduct a thorough analysis to identify challenges, opportunities, and the best technological approach.',
  },
  {
    id: 3,
    icon: ClipboardList,
    title: 'Plan & Execute',
    description: 'We develop a comprehensive project plan and execute it with precision, ensuring milestones are met on time.',
  },
  {
    id: 4,
    icon: Rocket,
    title: 'Deliver Results',
    description: 'We deliver high-quality solutions, followed by support and optimization to ensure long-term success.',
  },
];

export default function WorkProcessSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            How We Work
          </h2>
          <p className="text-lg sm:text-xl text-secondary-foreground max-w-2xl mx-auto">
            Our streamlined process ensures efficiency, transparency, and exceptional outcomes for every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center">
              <Card className="w-full text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card flex flex-col h-full">
                <CardHeader className="pb-4">
                  <div className="mx-auto bg-accent/10 text-accent rounded-full p-5 w-fit mb-4">
                    <step.icon className="h-12 w-12" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-primary">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              {index < processSteps.length -1 && (
                <ChevronRight className="h-10 w-10 text-primary mt-6 hidden lg:block transform -rotate-90 md:rotate-0" />
              )}
            </div>
          ))}
        </div>
        
        {/* Mobile/Tablet view for connectors */}
        <div className="mt-8 flex flex-col items-center space-y-8 md:hidden">
           {processSteps.slice(0, -1).map((step) => (
             <ChevronRight key={`connector-${step.id}`} className="h-8 w-8 text-primary transform rotate-90" />
           ))}
        </div>

      </div>
    </section>
  );
}
