'use client';

import { Factory, BadgeCheck, Truck, ShieldCheck } from 'lucide-react';

const valuePropositions = [
  { icon: Factory, text: 'โรงงานผลิตเอง' },
  { icon: BadgeCheck, text: 'มาตรฐาน ISO' },
  { icon: Truck, text: 'ส่งทั่วไทย' },
  { icon: ShieldCheck, text: 'รับประกันคุณภาพ' },
];

interface ValuePropositionStripProps {
  className?: string;
}

export default function ValuePropositionStrip({ className = '' }: ValuePropositionStripProps) {
  return (
    <section className={`relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-6 overflow-hidden ${className}`}>
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>
      
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-64 h-32 bg-ci-blue/20 blur-3xl" />
      <div className="absolute top-0 right-1/4 w-64 h-32 bg-ci-yellow/10 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-16 gap-y-4 text-center">
          {valuePropositions.map((item, i) => (
            <div 
              key={i} 
              className="group flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-default"
            >
              <div className="relative">
                <item.icon className="w-5 h-5 text-ci-yellow group-hover:scale-110 transition-transform duration-300" />
                {/* Pulse effect */}
                <div className="absolute inset-0 bg-ci-yellow/30 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
              </div>
              <span className="font-semibold text-white/90 group-hover:text-white transition-colors">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom border with gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ci-blue/30 to-transparent" />
    </section>
  );
}
