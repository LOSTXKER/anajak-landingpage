'use client';

import Link from 'next/link';
import { ArrowLeft, LucideIcon } from 'lucide-react';
import type { Stat } from '@/types';

interface ServicePageHeroProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
  color: string; // Tailwind gradient classes
  stats?: Stat[];
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  backLink?: string;
  backText?: string;
}

export default function ServicePageHero({
  title,
  subtitle,
  description,
  icon: Icon,
  badge,
  color,
  stats,
  primaryCta,
  secondaryCta,
  backLink = '/services',
  backText = 'กลับไปหน้าบริการ',
}: ServicePageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color}`} />
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      </div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Back Button */}
        <Link 
          href={backLink} 
          className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {backText}
        </Link>
        
        <div className="max-w-4xl">
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-bold mb-6 border border-white/20">
              <Icon className="w-4 h-4" />
              <span>{badge}</span>
            </div>
          )}
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
            <span className="block text-white/80 mt-2">{subtitle}</span>
          </h1>
          
          {/* Description */}
          <p className="text-xl text-white/80 mb-8 max-w-2xl">
            {description}
          </p>
          
          {/* CTAs */}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-4 mb-8">
              {primaryCta && (
                <a 
                  href={primaryCta.href} 
                  className="px-6 py-3 bg-white text-slate-900 font-bold rounded-xl hover:-translate-y-0.5 transition-all shadow-lg"
                >
                  {primaryCta.text}
                </a>
              )}
              {secondaryCta && (
                <a 
                  href={secondaryCta.href} 
                  className="px-6 py-3 bg-white/10 backdrop-blur text-white font-bold rounded-xl border border-white/30 hover:bg-white/20 transition-all"
                >
                  {secondaryCta.text}
                </a>
              )}
            </div>
          )}
          
          {/* Stats */}
          {stats && stats.length > 0 && (
            <div className="flex flex-wrap gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  {stat.icon && (
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <div>
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
