'use client';

import type { ProcessStep } from '@/types';

interface ProcessStepsProps {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
  variant?: 'light' | 'dark';
}

export default function ProcessSteps({
  title,
  subtitle,
  steps,
  variant = 'dark',
}: ProcessStepsProps) {
  const isDark = variant === 'dark';
  
  return (
    <section className={`py-20 relative overflow-hidden ${
      isDark 
        ? 'bg-slate-900' 
        : 'bg-slate-50'
    }`}>
      {/* Background decorations */}
      {isDark && (
        <>
          <div className="absolute top-10 right-10 w-72 h-72 bg-ci-blue/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-ci-yellow/10 rounded-full blur-3xl" />
        </>
      )}
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`text-lg ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
              {subtitle}
            </p>
          )}
        </div>
        
        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center relative">
              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className={`hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 ${
                  isDark 
                    ? 'bg-gradient-to-r from-ci-blue to-ci-yellow/50' 
                    : 'bg-gradient-to-r from-slate-300 to-slate-200'
                }`} />
              )}
              
              <div className={`relative inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full text-xl font-bold ${
                isDark 
                  ? 'bg-gradient-to-br from-ci-blue to-ci-blueDark text-white shadow-glow' 
                  : 'bg-gradient-to-br from-ci-blue to-ci-blueDark text-white shadow-lg'
              }`}>
                {step.step}
              </div>
              <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {step.title}
              </h3>
              <p className={`text-sm ${isDark ? 'text-white/60' : 'text-slate-600'}`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
