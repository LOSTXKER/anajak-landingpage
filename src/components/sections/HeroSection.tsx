'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Phone, Package, Zap, ImageIcon, Factory, BadgeCheck, CheckCircle, Palette } from 'lucide-react';

interface HeroSectionProps {
  className?: string;
}

// Hero image with fallback
function HeroImage() {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-ci-blue to-ci-blueDark flex items-center justify-center rounded-3xl">
        <div className="text-center text-white/60">
          <ImageIcon className="w-16 h-16 mx-auto mb-4" />
          <p className="text-lg font-medium">รูปภาพผลงาน</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src="/images/hero/hero-main.jpg"
      alt="ผลงานเสื้อยืดคุณภาพ"
      fill
      className="object-cover rounded-3xl"
      onError={() => setHasError(true)}
      priority
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );
}

export default function HeroSection({ className = '' }: HeroSectionProps) {
  return (
    <section id="home" className={`relative min-h-screen pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden ${className}`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-animated-gradient" />
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-ci-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-ci-yellow/10 rounded-full blur-3xl" />

      {/* Main content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left - Content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-white/50 text-sm font-semibold mb-8 opacity-0 animate-fade-in-up">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <Factory className="w-4 h-4 text-ci-blue" />
              <span className="text-slate-700">
                โรงงานชั้นนำ • ประสบการณ์กว่า <span className="font-bold text-ci-blue">5 ปี</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in-up delay-100">
              <span className="block text-slate-900 mb-2">โรงงานผลิตเสื้อยืด</span>
              <span className="relative inline-block">
                <span className="gradient-text">คุณภาพระดับพรีเมียม</span>
                {/* Animated underline */}
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                  <path 
                    d="M2 10C50 2 100 2 150 6C200 10 250 2 298 6" 
                    stroke="url(#underline-gradient)" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    className="animate-draw-line"
                  />
                  <defs>
                    <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fec91b" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#fec91b" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-600 mb-6 leading-relaxed opacity-0 animate-fade-in-up delay-200">
              รับผลิตเสื้อยืด เสื้อโปโล Hoodie ด้วยเทคโนโลยี
              <span className="inline-flex items-center gap-2 mx-2 px-3 py-1 bg-slate-100 rounded-lg font-bold text-slate-800">
                <Zap className="w-4 h-4 text-ci-yellow" />
                DTG, DTF, Silk Screen
              </span>
            </p>

            {/* Checkmarks */}
            <div className="flex flex-wrap gap-4 mb-8 opacity-0 animate-fade-in-up delay-300">
              <span className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-ci-blue" /> ส่งตรงจากโรงงาน
              </span>
              <span className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-ci-blue" /> ราคาโรงงานตรง
              </span>
              <span className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-ci-blue" /> คุณภาพการันตี
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up delay-400">
              <a 
                href="/contact" 
                className="group relative px-8 py-4 bg-gradient-to-r from-ci-blue to-ci-blueDark text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  ขอใบเสนอราคา
                  <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs">ฟรี!</span>
                </span>
              </a>
              <a 
                href="/services" 
                className="group px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-2xl font-bold text-lg hover:border-ci-blue hover:text-ci-blue hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Package className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                ดูบริการของเรา
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 opacity-0 animate-fade-in-up delay-500">
              <div className="text-center sm:text-left">
                <div className="text-2xl md:text-3xl font-bold text-slate-900">5+</div>
                <div className="text-sm text-slate-600">ปีประสบการณ์</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl md:text-3xl font-bold text-slate-900">100K+</div>
                <div className="text-sm text-slate-600">เสื้อที่ผลิต</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl md:text-3xl font-bold text-slate-900">300+</div>
                <div className="text-sm text-slate-600">โปรเจกต์สำเร็จ</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl md:text-3xl font-bold text-slate-900">4.9⭐</div>
                <div className="text-sm text-slate-600">คะแนนรีวิว</div>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative opacity-0 animate-fade-in-up delay-300">
            {/* Main Image */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <HeroImage />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl" />
            </div>

            {/* Floating badges on image */}
            <div className="absolute -top-4 -left-4 px-4 py-2 bg-white rounded-xl shadow-lg border border-slate-100 animate-float-slow">
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-6 h-6 text-ci-blue" />
                <div>
                  <div className="font-bold text-slate-900 text-sm">คุณภาพมาตรฐาน</div>
                  <div className="text-xs text-slate-500">ตรวจสอบทุกชิ้น</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-white rounded-xl shadow-lg border border-slate-100 animate-float-slow" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <Zap className="w-6 h-6 text-ci-yellow" />
                <div>
                  <div className="font-bold text-slate-900 text-sm">ผลิตไว</div>
                  <div className="text-xs text-slate-500">7-14 วันทำการ</div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-4 px-4 py-2 bg-ci-yellow rounded-xl shadow-lg animate-float-slow" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-2">
                <Palette className="w-6 h-6 text-white" />
                <div>
                  <div className="font-bold text-slate-900 text-sm">ออกแบบฟรี!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
