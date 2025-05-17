"use client";

import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UsersRound, Briefcase, Smile, Users, Award, TrendingUp, CheckCircle2 } from 'lucide-react';

const stats = [
  { id: 1, icon: UsersRound, value: 10000, label: 'Clients Active' },
  { id: 2, icon: Briefcase, value: 986, label: 'Projects Completed' },
  { id: 3, icon: Smile, value: 100, label: 'Happy Clients' },
  { id: 4, icon: Users, value: 396, label: 'Skilled Experts' },
  { id: 5, icon: Award, value: 496, label: 'Awards Won' },
];

const percentageStats = [
  { id: 6, icon: TrendingUp, value: 90, label: 'Business Growth', isPercentage: true },
  { id: 7, icon: CheckCircle2, value: 95, label: 'Quality Products', isPercentage: true },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg sm:text-xl text-secondary-foreground max-w-2xl mx-auto">
            Discover the reasons why businesses trust Square Group Technologies to drive their success and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <Card key={stat.id} className="text-center shadow-lg hover:shadow-xl transition-all duration-300 bg-card hover:-translate-y-1.5 group">
              <CardHeader className="pb-2">
                <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-fit mb-3 transition-colors duration-300 group-hover:bg-accent/10 group-hover:text-accent">
                  <stat.icon className="h-10 w-10 transform transition-transform duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-4xl md:text-5xl font-extrabold text-primary transition-colors duration-300 group-hover:text-accent">
                  <AnimatedCounter endValue={stat.value} />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
          {percentageStats.map((stat) => (
             <Card key={stat.id} className="text-center shadow-lg hover:shadow-xl transition-all duration-300 bg-card hover:-translate-y-1.5 group">
              <CardHeader className="pb-2">
                 <div className="mx-auto bg-accent/10 text-accent rounded-full p-4 w-fit mb-3 transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                  <stat.icon className="h-10 w-10 transform transition-transform duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-4xl md:text-5xl font-extrabold text-accent transition-colors duration-300 group-hover:text-primary">
                  <AnimatedCounter endValue={stat.value} isPercentage={stat.isPercentage} />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
