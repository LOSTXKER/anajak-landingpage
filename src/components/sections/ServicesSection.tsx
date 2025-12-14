'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, ImageIcon } from 'lucide-react';

interface ServicesSectionProps {
  className?: string;
  showCTA?: boolean;
}

// Featured service (large card on left)
const featuredService = {
  id: 'printing',
  title: 'บริการสกรีน',
  description: 'DTG, DTF, Silk Screen',
  image: '/images/services/printing.jpg',
  badge: 'บริการยอดนิยม',
  link: '/services/printing',
};

// Right side services (2x2 grid)
const rightServices = [
  {
    id: 'blank',
    title: 'เสื้อเปล่า',
    description: 'พร้อมส่ง หลากหลายแบบ',
    image: '/images/services/blank.jpg',
    badge: 'พร้อมส่ง',
    link: '/products',
  },
  {
    id: 'photography',
    title: 'ถ่ายภาพสินค้า',
    description: 'Studio ในโรงงาน',
    image: '/images/services/photography.jpg',
    link: '/services#additional-services',
  },
  {
    id: 'design',
    title: 'ออกแบบกราฟิก',
    description: 'ทีมดีไซน์มืออาชีพ',
    image: '/images/services/design.jpg',
    badge: 'ฟรี!',
    link: '/services#additional-services',
  },
  {
    id: 'pattern',
    title: 'ทำแพทเทิร์น',
    description: 'ตัดเย็บตามแบบ',
    image: '/images/services/pattern.jpg',
    link: '/services/pattern',
  },
];

// Bottom services
const bottomServices = [
  {
    id: 'fabric',
    title: 'เนื้อผ้าหลากหลาย',
    description: '20+ ชนิดผ้า',
    image: '/images/services/fabric.jpg',
    link: '/services/fabric',
  },
  {
    id: 'qc',
    title: 'QC & แพ็ค',
    description: 'ตรวจสอบทุกตัว',
    image: '/images/services/qc.jpg',
    link: '/services#additional-services',
  },
];

// Image with fallback
function ServiceImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
        <ImageIcon className="w-12 h-12 text-white/20" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-105"
      onError={() => setHasError(true)}
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );
}

export default function ServicesSection({ className = '', showCTA = true }: ServicesSectionProps) {
  return (
    <section id="services" className={`py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden ${className}`}>
      {/* Background */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-ci-yellow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-ci-blue/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-ci-blue text-sm font-bold mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span>บริการครบวงจร</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            ทุกอย่างที่คุณต้องการ
            <span className="block gradient-text">จบในที่เดียว</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            ออกแบบ ผลิต ถ่ายภาพ แพ็คส่ง — เราดูแลให้ครบ
          </p>
        </div>

        {/* Main Grid: Featured + 4 small */}
        <div className="grid lg:grid-cols-3 gap-4 mb-4">
          {/* Featured Card (spans 1 col, full height) */}
          <a
            href={featuredService.link}
            className="group relative h-80 lg:h-auto lg:row-span-2 rounded-2xl overflow-hidden cursor-pointer"
          >
            <ServiceImage src={featuredService.image} alt={featuredService.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            {/* Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-ci-yellow text-slate-900 text-xs font-bold rounded-full">
                ⭐ {featuredService.badge}
              </span>
            </div>
            
            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-ci-yellow transition-colors">
                {featuredService.title}
              </h3>
              <p className="text-white/70">
                {featuredService.description}
              </p>
            </div>
          </a>

          {/* Right 4 Cards (2x2) */}
          {rightServices.map((service) => (
            <a
              key={service.id}
              href={service.link}
              className="group relative h-44 rounded-2xl overflow-hidden cursor-pointer"
            >
              <ServiceImage src={service.image} alt={service.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              {/* Badge */}
              {service.badge && (
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 bg-ci-yellow text-slate-900 text-xs font-bold rounded-full">
                    {service.badge}
                  </span>
                </div>
              )}
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-lg font-bold text-white group-hover:text-ci-yellow transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {service.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Row - 2 Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {bottomServices.map((service) => (
            <a
              key={service.id}
              href={service.link}
              className="group relative h-48 rounded-2xl overflow-hidden cursor-pointer"
            >
              <ServiceImage src={service.image} alt={service.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-xl font-bold text-white group-hover:text-ci-yellow transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70">
                  {service.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        {showCTA && (
          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-ci-blue to-ci-blueDark text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              ดูบริการทั้งหมด
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
