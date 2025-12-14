'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Building2, GraduationCap, Trophy, ShoppingBag, 
  Heart, Calendar, Star, ImageIcon, ArrowRight, ChevronRight
} from 'lucide-react';

interface UseCaseSectionProps {
  className?: string;
}

const useCases = [
  {
    id: 'corporate',
    icon: Building2,
    title: 'บริษัท & องค์กร',
    subtitle: 'เสื้อยูนิฟอร์มพนักงาน',
    description: 'สร้างความเป็นหนึ่งเดียวให้ทีมงาน เสริมภาพลักษณ์องค์กร',
    examples: ['เสื้อโปโลพนักงาน', 'เสื้อ Outing ประจำปี', 'เสื้อทีม HR, IT, Sales', 'เสื้อต้อนรับพนักงานใหม่'],
    stats: '100+ องค์กรไว้วางใจ',
    images: ['/images/usecases/corporate-1.jpg', '/images/usecases/corporate-2.jpg', '/images/usecases/corporate-3.jpg'],
  },
  {
    id: 'school',
    icon: GraduationCap,
    title: 'โรงเรียน & มหาวิทยาลัย',
    subtitle: 'เสื้อรุ่น เสื้อกิจกรรม',
    description: 'สร้างความทรงจำดีๆ ให้นักเรียน นักศึกษา',
    examples: ['เสื้อรุ่นจบการศึกษา', 'เสื้อกีฬาสี', 'เสื้อชมรม/ชุมนุม', 'เสื้อค่ายอาสา'],
    stats: '80+ โรงเรียนเลือกใช้',
    images: ['/images/usecases/school-1.jpg', '/images/usecases/school-2.jpg', '/images/usecases/school-3.jpg'],
  },
  {
    id: 'sports',
    icon: Trophy,
    title: 'ทีมกีฬา & สโมสร',
    subtitle: 'เสื้อแข่งขัน เสื้อซ้อม',
    description: 'ออกแบบเสื้อทีมที่โดดเด่น สร้างความเป็นหนึ่ง',
    examples: ['เสื้อฟุตบอล/ฟุตซอล', 'เสื้อบาสเก็ตบอล', 'เสื้อวิ่งมาราธอน', 'เสื้อทีม E-Sports'],
    stats: '1,000+ ทีมสั่งผลิต',
    images: ['/images/usecases/sports-1.jpg', '/images/usecases/sports-2.jpg', '/images/usecases/sports-3.jpg'],
  },
  {
    id: 'brand',
    icon: ShoppingBag,
    title: 'แบรนด์ & ร้านค้าออนไลน์',
    subtitle: 'สินค้าพร้อมขาย Merch',
    description: 'ผลิตเสื้อแบรนด์ของคุณเอง พร้อมบริการ Fulfillment',
    examples: ['เสื้อแบรนด์ตัวเอง', 'Merchandise ขายออนไลน์', 'Limited Edition', 'Dropshipping'],
    stats: '300+ แบรนด์เติบโตกับเรา',
    images: ['/images/usecases/brand-1.jpg', '/images/usecases/brand-2.jpg', '/images/usecases/brand-3.jpg'],
  },
  {
    id: 'event',
    icon: Calendar,
    title: 'งานอีเวนต์ & คอนเสิร์ต',
    subtitle: 'เสื้อ Staff เสื้อที่ระลึก',
    description: 'เสื้อสำหรับงานพิเศษ ผลิตไวทันใช้',
    examples: ['เสื้อ Staff งาน', 'เสื้อคอนเสิร์ต', 'เสื้อ Workshop/Seminar', 'เสื้อ Hackathon'],
    stats: '200+ อีเวนต์ที่ร่วมงาน',
    images: ['/images/usecases/event-1.jpg', '/images/usecases/event-2.jpg', '/images/usecases/event-3.jpg'],
  },
  {
    id: 'fanclub',
    icon: Heart,
    title: 'แฟนคลับ & Community',
    subtitle: 'เสื้อกลุ่ม เสื้อ Fandom',
    description: 'แสดงความรักและความเป็นหนึ่งของกลุ่ม',
    examples: ['เสื้อ FC ศิลปิน', 'เสื้อ Cosplay Group', 'เสื้อชมรมรถยนต์', 'เสื้อกลุ่มเพื่อน'],
    stats: '400+ กลุ่มที่สั่งผลิต',
    images: ['/images/usecases/fanclub-1.jpg', '/images/usecases/fanclub-2.jpg', '/images/usecases/fanclub-3.jpg'],
  },
];

// Image with fallback
function UseCaseImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-ci-blue to-ci-blueDark flex flex-col items-center justify-center">
        <ImageIcon className="w-8 h-8 text-white/40 mb-2" />
        <span className="text-xs text-white/40 text-center px-2">{alt}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      onError={() => setHasError(true)}
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );
}

export default function UseCaseSection({ className = '' }: UseCaseSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const activeCase = useCases[activeIndex];

  // Auto-rotate
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % useCases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className={`py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden ${className}`}>
      {/* Background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-ci-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-ci-yellow/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-ci-blue text-sm font-bold mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span>เหมาะกับทุกความต้องการ</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            ไม่ว่าคุณจะต้องการเสื้อแบบไหน
            <span className="block gradient-text">เราทำให้ได้</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            ลูกค้าของเรามาจากหลากหลายวงการ แต่ละคนมีความต้องการที่แตกต่าง
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Left - Tabs */}
            <div className="lg:col-span-2 space-y-2">
              {useCases.map((useCase, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={useCase.id}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setActiveIndex(index);
                    }}
                    className={`
                      w-full text-left p-4 rounded-2xl transition-all duration-300
                      ${isActive 
                        ? 'bg-gradient-to-r from-ci-blue to-ci-blueDark text-white shadow-lg' 
                        : 'bg-white hover:bg-slate-50 border border-slate-200'
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`
                        w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                        ${isActive ? 'bg-white/20' : 'bg-ci-blue/10'}
                      `}>
                        <useCase.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-ci-blue'}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`font-bold text-sm ${isActive ? 'text-white' : 'text-slate-900'}`}>
                          {useCase.title}
                        </div>
                        <div className={`text-xs ${isActive ? 'text-white/70' : 'text-slate-500'}`}>
                          {useCase.subtitle}
                        </div>
                      </div>
                      {isActive && (
                        <ChevronRight className="w-4 h-4 text-white shrink-0" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                {/* Image Gallery */}
                <div className="p-3 bg-slate-50">
                  <div className="flex gap-2 h-48 md:h-64">
                    {/* Main Image */}
                    <div className="flex-[2] relative rounded-2xl overflow-hidden">
                      <UseCaseImage src={activeCase.images[0]} alt={activeCase.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <span className="px-3 py-1 bg-ci-yellow text-slate-900 text-xs font-bold rounded-full">
                          {activeCase.stats}
                        </span>
                      </div>
                    </div>
                    {/* Side Images */}
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex-1 relative rounded-xl overflow-hidden">
                        <UseCaseImage src={activeCase.images[1]} alt={`${activeCase.title} 2`} />
                      </div>
                      <div className="flex-1 relative rounded-xl overflow-hidden">
                        <UseCaseImage src={activeCase.images[2]} alt={`${activeCase.title} 3`} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title & Description */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-ci-blue/10 flex items-center justify-center shrink-0">
                      <activeCase.icon className="w-6 h-6 text-ci-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{activeCase.title}</h3>
                      <p className="text-slate-600">{activeCase.description}</p>
                    </div>
                  </div>

                  {/* Examples */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {activeCase.examples.map((example, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 bg-slate-100 rounded-full text-sm text-slate-600"
                      >
                        {example}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a 
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-ci-blue text-white rounded-xl font-bold hover:bg-ci-blueDark transition-colors"
                  >
                    สั่งผลิตเลย
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Dots indicator */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {useCases.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setActiveIndex(i);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeIndex 
                        ? 'w-8 bg-ci-blue' 
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <p className="text-center text-slate-500 mt-10">
          ไม่เห็นประเภทที่คุณต้องการ? <a href="/contact" className="text-ci-blue font-medium hover:underline">ติดต่อเราได้เลย</a> เราทำให้ได้ทุกแบบ
        </p>
      </div>
    </section>
  );
}
