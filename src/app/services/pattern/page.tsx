'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { FinalCTASection } from '@/components/sections';
import { 
  Scissors,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  CheckCircle,
  Shirt,
  Building2,
  Trophy,
  Sparkles,
  ImageIcon,
  Star,
  Phone,
  Zap,
  PenTool,
  Ruler,
} from 'lucide-react';

// Pattern services
const patternServices = [
  {
    id: 'new',
    name: 'ทำแพทเทิร์นใหม่',
    description: 'ออกแบบแพทเทิร์นใหม่จากไอเดียของคุณ ไม่ว่าจะเป็นเสื้อยืด โปโล Hoodie หรือแจ็คเก็ต',
    icon: PenTool,
    image: '/images/pattern/new-pattern.jpg',
    features: ['ออกแบบจากศูนย์', 'ปรับทรงได้', 'ทดลองตัวอย่างก่อน', 'แก้ไขได้'],
  },
  {
    id: 'modify',
    name: 'ปรับจากแบบเดิม',
    description: 'มีแบบเสื้อที่ชอบอยู่แล้ว? เราปรับแต่งให้ตรงใจคุณได้ ไม่ว่าจะเปลี่ยนทรง ปรับไซส์',
    icon: Scissors,
    image: '/images/pattern/modify-pattern.jpg',
    features: ['ปรับจากต้นแบบ', 'เพิ่มรายละเอียด', 'เปลี่ยนทรง', 'ปรับไซส์'],
  },
  {
    id: 'grading',
    name: 'Grading ไซส์',
    description: 'บริการ Grading ไซส์จาก S-3XL หรือมากกว่า พร้อมตารางไซส์มาตรฐานหรือปรับตามความต้องการ',
    icon: Ruler,
    image: '/images/pattern/grading.jpg',
    features: ['S-3XL ขึ้นไป', 'ตารางไซส์มาตรฐาน', 'ปรับตามต้องการ', 'ไซส์พิเศษได้'],
  },
];

// Product types
const productTypes = [
  { icon: Shirt, name: 'เสื้อยืด', desc: 'คอกลม คอวี ทรงต่างๆ' },
  { icon: Shirt, name: 'เสื้อโปโล', desc: 'คอปก ทรงสลิม ทรงปกติ' },
  { icon: Shirt, name: 'Hoodie', desc: 'สวมหัว มีซิป ทรงต่างๆ' },
  { icon: Shirt, name: 'แจ็คเก็ต', desc: 'ทุกแบบ ทุกทรง' },
];

// Process steps
const processSteps = [
  { step: '01', title: 'บอกความต้องการ', description: 'อธิบายแบบที่ต้องการ หรือส่งภาพอ้างอิง' },
  { step: '02', title: 'ออกแบบแพทเทิร์น', description: 'ทีมงานออกแบบและส่งให้ตรวจ' },
  { step: '03', title: 'ทำตัวอย่าง', description: 'ตัดเย็บตัวอย่างก่อนผลิตจริง' },
  { step: '04', title: 'ยืนยัน & ผลิต', description: 'เมื่อพอใจ สั่งผลิตได้เลย' },
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

export default function PatternServicePage() {
  const [activeService, setActiveService] = useState(0);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-animated-gradient" />
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-ci-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ci-yellow/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="text-center mb-8">
            <Link href="/services" className="inline-flex items-center gap-2 text-slate-600 hover:text-ci-blue transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>กลับไปหน้าบริการ</span>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-white/50 text-sm font-semibold mb-8 animate-fade-in-up">
              <Scissors className="w-4 h-4 text-ci-blue" />
              <span className="text-slate-700">บริการหลัก</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up delay-100">
              <span className="block text-slate-900 mb-2">ทำแพทเทิร์น</span>
              <span className="relative inline-block">
                <span className="gradient-text">ตัดเย็บตามแบบ</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                  <path 
                    d="M2 10C50 2 100 2 150 6C200 10 250 2 298 6" 
                    stroke="url(#underline-gradient-pattern)" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    className="animate-draw-line"
                  />
                  <defs>
                    <linearGradient id="underline-gradient-pattern" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fec91b" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#fec91b" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed animate-fade-in-up delay-200 max-w-2xl mx-auto">
              รับทำแพทเทิร์นและตัดเย็บเสื้อตามแบบที่คุณต้องการ 
              ทั้งแบบมาตรฐานและแบบ Custom สำหรับแบรนด์ของคุณ
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up delay-200">
              <span className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-ci-blue" /> ทำแพทเทิร์นใหม่
              </span>
              <span className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-ci-blue" /> ปรับจากแบบเดิม
              </span>
              <span className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-ci-blue" /> Grading ไซส์
              </span>
            </div>

            <div className="flex justify-center animate-fade-in-up delay-300">
              <a 
                href="#contact" 
                className="group relative px-8 py-4 bg-gradient-to-r from-ci-blue to-ci-blueDark text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  ปรึกษาฟรี
                </span>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12 animate-fade-in-up delay-400">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">10+</div>
                <div className="text-sm text-slate-600">ปีประสบการณ์</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">1000+</div>
                <div className="text-sm text-slate-600">แพทเทิร์นที่ทำ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">S-5XL</div>
                <div className="text-sm text-slate-600">ไซส์รองรับ</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path 
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Pattern Services */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-ci-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-ci-blue/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-ci-blue text-sm font-bold mb-6">
              <Zap className="w-4 h-4" />
              <span>บริการแพทเทิร์น</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              เลือกบริการที่เหมาะกับคุณ
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {patternServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                    activeService === index
                      ? 'bg-gradient-to-r from-ci-blue to-ci-blueDark text-white shadow-lg'
                      : 'bg-white text-slate-600 border-2 border-slate-200 hover:border-ci-blue hover:text-ci-blue'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {service.name}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-72 lg:h-auto min-h-[350px] group">
                <ServiceImage 
                  src={patternServices[activeService].image} 
                  alt={patternServices[activeService].name}
                />
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  {patternServices[activeService].name}
                </h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  {patternServices[activeService].description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {patternServices[activeService].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-ci-blue to-ci-blueDark text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all w-fit"
                >
                  สอบถามเพิ่มเติม
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Types */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-ci-blue/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-ci-blue text-sm font-bold mb-6">
              <Shirt className="w-4 h-4" />
              <span>รับทำทุกประเภท</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              เสื้อประเภทไหน เราทำได้หมด
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productTypes.map((product, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <product.icon className="w-8 h-8 text-ci-blue" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{product.name}</h3>
                <p className="text-slate-600 text-sm">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-ci-blue/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-white text-sm font-bold mb-6">
              <Zap className="w-4 h-4" />
              <span>ขั้นตอนการทำงาน</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              จากไอเดียสู่เสื้อจริง
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all">
                  <div className="text-4xl font-bold text-ci-yellow mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-ci-yellow" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              บริการที่เกี่ยวข้อง
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link href="/services/printing" className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-ci-blue transition-colors">บริการสกรีน</h3>
              <p className="text-slate-600 text-sm mb-4">DTG, DTF, Silk Screen</p>
              <span className="text-ci-blue font-medium flex items-center gap-2">
                ดูรายละเอียด <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/services/fabric" className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-ci-blue transition-colors">เนื้อผ้าหลากหลาย</h3>
              <p className="text-slate-600 text-sm mb-4">20+ ชนิดผ้าให้เลือก</p>
              <span className="text-ci-blue font-medium flex items-center gap-2">
                ดูรายละเอียด <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </PageLayout>
  );
}
