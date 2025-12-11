'use client';

import { Phone, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface FinalCTASectionProps {
  className?: string;
}

export default function FinalCTASection({ className = '' }: FinalCTASectionProps) {
  return (
    <section className={`relative py-24 overflow-hidden ${className}`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ci-blue via-ci-blueDark to-slate-900" />
      
      {/* Animated pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-ci-yellow/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-float-fast" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse-slow" />

      {/* Sparkles decoration */}
      <Sparkles className="absolute top-20 right-20 w-8 h-8 text-ci-yellow/30 animate-pulse-slow" />
      <Sparkles className="absolute bottom-20 left-20 w-6 h-6 text-white/20 animate-pulse-slow delay-500" />

      {/* Glowing orbs */}
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-ci-yellow rounded-full animate-ping" />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white rounded-full animate-ping delay-700" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            พร้อมให้บริการ 24/7
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
            พร้อมเริ่มผลิต
            <br />
            <span className="relative inline-block">
              <span className="text-ci-yellow">กับเราแล้วหรือยัง?</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 8" fill="none">
                <path d="M2 6C100 2 200 2 298 6" stroke="rgba(254, 201, 27, 0.5)" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            ติดต่อเราวันนี้เพื่อรับคำปรึกษาฟรี
            <br className="hidden md:block" />
            และใบเสนอราคาที่เหมาะกับคุณที่สุด
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href={siteConfig.phoneHref}
              className="group w-full sm:w-auto px-10 py-5 bg-white text-ci-blue rounded-2xl font-bold text-xl shadow-2xl hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden"
            >
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-ci-blue/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Phone className="w-6 h-6 group-hover:animate-wiggle" />
              <span className="relative">โทรเลย {siteConfig.phone}</span>
            </a>
            <a 
              href={siteConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto px-10 py-5 bg-green-500 text-white rounded-2xl font-bold text-xl hover:bg-green-600 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6 group-hover:animate-bounce-subtle" />
              แชทผ่าน LINE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-blue-200 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
              ปรึกษาฟรี
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
              ใบเสนอราคาใน 24 ชม.
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
              ไม่มีขั้นต่ำ
            </span>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-12">
          <path 
            d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 32.5C840 35 960 40 1080 42.5C1200 45 1320 45 1380 45L1440 45V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
