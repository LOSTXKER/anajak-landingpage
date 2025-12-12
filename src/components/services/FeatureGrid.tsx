'use client';

import { CheckCircle2, Sparkles, LucideIcon } from 'lucide-react';
import type { FeatureItem } from '@/types';

interface FeatureGridProps {
  title: string;
  subtitle?: string;
  badge?: string;
  badgeIcon?: LucideIcon;
  features: FeatureItem[];
  color?: string; // Tailwind gradient classes
  columns?: 2 | 3 | 4;
}

export default function FeatureGrid({
  title,
  subtitle,
  badge,
  badgeIcon: BadgeIcon = Sparkles,
  features,
  color = 'from-ci-blue to-ci-blueDark',
  columns = 4,
}: FeatureGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          {badge && (
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${color} bg-opacity-10 text-ci-blue text-sm font-bold mb-4`}>
              <BadgeIcon className="w-4 h-4" />
              <span>{badge}</span>
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Grid */}
        <div className={`grid ${gridCols[columns]} gap-6`}>
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`group p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1`}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm mb-4">{feature.description}</p>
              
              {feature.price && (
                <p className="text-ci-blue font-bold text-sm">{feature.price}</p>
              )}
              
              {feature.features && feature.features.length > 0 && (
                <ul className="space-y-2 mt-4">
                  {feature.features.map((f, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
