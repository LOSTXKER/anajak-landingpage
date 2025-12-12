'use client';

import { LucideIcon, CheckCircle2 } from 'lucide-react';
import type { Benefit } from '@/types';

interface BenefitsSectionProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  benefits: (string | Benefit)[];
  color?: string;
}

export default function BenefitsSection({
  title,
  description,
  icon: Icon,
  benefits,
  color = 'from-ci-blue to-ci-blueDark',
}: BenefitsSectionProps) {
  // Check if benefits are strings or objects
  const isStringArray = typeof benefits[0] === 'string';

  return (
    <section className={`py-20 bg-gradient-to-br ${color}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center text-white">
          {Icon && <Icon className="w-16 h-16 mx-auto mb-6 text-white/80" />}
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {title}
          </h2>
          
          {description && (
            <p className="text-xl text-white/90 mb-8">
              {description}
            </p>
          )}
          
          {isStringArray ? (
            // Simple string list
            <div className="flex flex-wrap justify-center gap-4">
              {(benefits as string[]).map((item) => (
                <div key={item} className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-white/80" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          ) : (
            // Benefit objects with icons
            <div className="grid md:grid-cols-3 gap-6">
              {(benefits as Benefit[]).map((benefit, idx) => (
                <div key={idx} className="p-6 bg-white/10 backdrop-blur rounded-2xl">
                  <benefit.icon className="w-10 h-10 text-white/80 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-white/80 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
