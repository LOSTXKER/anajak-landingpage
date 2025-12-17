'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { FinalCTASection, RelatedPagesSection } from '@/components/sections';
import Breadcrumb from '@/components/Breadcrumb';
import {
  Layers,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  CheckCircle,
  Shirt,
  Trophy,
  Heart,
  Droplets,
  Sun,
  Wind,
  ImageIcon,
  Star,
  Phone,
  MessageCircle,
  Zap,
  Printer,
  Scissors,
} from 'lucide-react';

// Fabric categories
const fabricCategories = [
  {
    id: 'cotton',
    name: 'ผ้าฝ้าย',
    fullName: 'Cotton',
    description: 'ผ้าฝ้ายคุณภาพสูง นุ่มสบาย ระบายอากาศดี เหมาะสำหรับเสื้อยืดทั่วไป',
    image: '/images/fabric/cotton.jpg',
    types: ['Cotton 100%', 'Cotton Carded', 'Cotton Combed', 'Organic Cotton'],
    features: [
      { icon: Droplets, text: 'ซับเหงื่อดี' },
      { icon: Wind, text: 'ระบายอากาศ' },
      { icon: Heart, text: 'นุ่มสบาย' },
      { icon: Sun, text: 'ซักง่าย' },
    ],
  },
  {
    id: 'polyester',
    name: 'โพลีเอสเตอร์',
    fullName: 'Polyester',
    description: 'ผ้าที่มีความทนทานสูง ไม่ยับง่าย แห้งเร็ว เหมาะสำหรับชุดกีฬา',
    image: '/images/fabric/polyester.jpg',
    types: ['Polyester 100%', 'TC (65/35)', 'CVC (60/40)', 'Microfiber'],
    features: [
      { icon: Trophy, text: 'ทนทานมาก' },
      { icon: Wind, text: 'แห้งเร็ว' },
      { icon: Sun, text: 'ไม่ยับง่าย' },
      { icon: Droplets, text: 'ไม่หดตัว' },
    ],
  },
  {
    id: 'dryfit',
    name: 'ดรายฟิต',
    fullName: 'Dri-FIT',
    description: 'ผ้าเทคโนโลยีสูง ระบายเหงื่อและความชื้นได้ดี เหมาะสำหรับชุดกีฬา',
    image: '/images/fabric/dryfit.jpg',
    types: ['Coolmax', 'Drifit', 'Coolplus', 'Sports Mesh'],
    features: [
      { icon: Droplets, text: 'ระบายเหงื่อ' },
      { icon: Wind, text: 'เย็นสบาย' },
      { icon: Trophy, text: 'เหมาะกีฬา' },
      { icon: Sun, text: 'แห้งไว' },
    ],
  },
];

// Popular fabrics
const popularFabrics = [
  { name: 'Cotton 100%', weight: '160-180 gsm', use: 'เสื้อยืดทั่วไป' },
  { name: 'Cotton Combed', weight: '180-200 gsm', use: 'เสื้อคุณภาพสูง' },
  { name: 'TC 65/35', weight: '150-170 gsm', use: 'ยูนิฟอร์ม' },
  { name: 'CVC 60/40', weight: '160-180 gsm', use: 'เสื้อทั่วไป' },
  { name: 'Polyester', weight: '120-150 gsm', use: 'เสื้อกีฬา' },
  { name: 'Dri-FIT', weight: '130-160 gsm', use: 'ชุดออกกำลังกาย' },
  { name: 'Microfiber', weight: '110-140 gsm', use: 'เสื้อระบายเหงื่อ' },
  { name: 'Bamboo', weight: '160-180 gsm', use: 'เสื้อพรีเมียม' },
];

// Process steps
const processSteps = [
  { step: '01', title: 'เลือกผ้า', description: 'ปรึกษาทีมงานเลือกผ้าที่เหมาะ' },
  { step: '02', title: 'ขอตัวอย่าง', description: 'รับตัวอย่างผ้าก่อนตัดสินใจ' },
  { step: '03', title: 'ทดสอบ', description: 'ทดสอบคุณภาพก่อนผลิตจริง' },
  { step: '04', title: 'ผลิต', description: 'เริ่มผลิตด้วยผ้าคุณภาพ' },
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

export default function FabricServicePage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const activeFabric = fabricCategories[activeCategory];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-animated-gradient" />
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-ci-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ci-yellow/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Breadcrumb
            items={[{ label: 'บริการของเรา', href: '/services' }]}
            currentPage="เนื้อผ้า"
          />

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-white/50 text-sm font-semibold mb-8 opacity-0 animate-fade-in-up">
              <Layers className="w-4 h-4 text-ci-blue" />
              <span className="text-slate-700">บริการหลัก</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in-up delay-100">
              <span className="block text-slate-900 mb-2">เนื้อผ้าหลากหลาย</span>
              <span className="relative inline-block">
                <span className="gradient-text">20+ ชนิดผ้า</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                  <path 
                    d="M2 10C50 2 100 2 150 6C200 10 250 2 298 6" 
                    stroke="url(#underline-gradient-fabric)" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    className="animate-draw-line"
                  />
                  <defs>
                    <linearGradient id="underline-gradient-fabric" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fec91b" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#fec91b" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed opacity-0 animate-fade-in-up delay-200 max-w-2xl mx-auto">
              เลือกเนื้อผ้าได้ตามความต้องการ มีทั้งผ้าฝ้าย ผ้าโพลี ผ้าดรายฟิต
              และอื่นๆ อีกมากมาย นำเข้าคุณภาพจากแหล่งผลิตชั้นนำ
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8 opacity-0 animate-fade-in-up delay-300">
              <span className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-ci-blue" /> 20+ ชนิดผ้า
              </span>
              <span className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-ci-blue" /> 50+ สี
              </span>
              <span className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-ci-blue" /> นำเข้าคุณภาพ
              </span>
            </div>

            <div className="flex justify-center opacity-0 animate-fade-in-up delay-400">
              <a 
                href="/contact" 
                className="group relative px-8 py-4 bg-gradient-to-r from-ci-blue to-ci-blueDark text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  ติดต่อเรา
                </span>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12 opacity-0 animate-fade-in-up delay-500">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">20+</div>
                <div className="text-sm text-slate-600">ชนิดผ้า</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">50+</div>
                <div className="text-sm text-slate-600">สีให้เลือก</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">100%</div>
                <div className="text-sm text-slate-600">นำเข้าคุณภาพ</div>
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

      {/* Fabric Categories */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-ci-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-ci-blue/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-ci-blue text-sm font-bold mb-6">
              <Zap className="w-4 h-4" />
              <span>ประเภทผ้า</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              เลือกประเภทผ้าที่ต้องการ
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {fabricCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-xl font-bold transition-all ${
                  activeCategory === index
                    ? 'bg-gradient-to-r from-ci-blue to-ci-blueDark text-white shadow-lg'
                    : 'bg-white text-slate-600 border-2 border-slate-200 hover:border-ci-blue hover:text-ci-blue'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-72 lg:h-auto min-h-[350px] group">
                <ServiceImage 
                  src={activeFabric.image} 
                  alt={activeFabric.name}
                />
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  {activeFabric.name}
                </h3>
                <p className="text-lg text-ci-blue font-medium mb-4">
                  {activeFabric.fullName}
                </p>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  {activeFabric.description}
                </p>

                {/* Fabric Types */}
                <div className="mb-6">
                  <p className="text-sm font-bold text-slate-900 mb-3">ชนิดที่มี:</p>
                  <div className="flex flex-wrap gap-2">
                    {activeFabric.types.map((type, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-50 text-ci-blue text-sm font-medium rounded-full">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {activeFabric.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-700">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-ci-blue" />
                      </div>
                      {feature.text}
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-ci-blue to-ci-blueDark text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all w-fit"
                >
                  ขอตัวอย่างผ้า
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Fabrics Grid */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-ci-blue/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-ci-blue text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>เนื้อผ้ายอดนิยม</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              ผ้าที่ลูกค้าเลือกใช้มากที่สุด
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularFabrics.map((fabric, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Shirt className="w-6 h-6 text-ci-blue" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{fabric.name}</h3>
                <p className="text-slate-500 text-sm mb-1">น้ำหนัก: {fabric.weight}</p>
                <p className="text-ci-blue text-sm font-medium">เหมาะสำหรับ: {fabric.use}</p>
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
              <span>ขั้นตอนเลือกผ้า</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              เราช่วยคุณเลือกผ้าที่เหมาะที่สุด
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
            <Link href="/services/pattern" className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-ci-blue transition-colors">ทำแพทเทิร์น</h3>
              <p className="text-slate-600 text-sm mb-4">ตัดเย็บตามแบบที่คุณต้องการ</p>
              <span className="text-ci-blue font-medium flex items-center gap-2">
                ดูรายละเอียด <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPagesSection
        title="บริการที่เกี่ยวข้อง"
        description="สำรวจบริการอื่นๆ ที่เราเตรียมไว้สำหรับคุณ"
        pages={[
          {
            title: 'เทคนิคการสกรีน',
            description: 'DTG, DTF และ Silk Screen สำหรับผ้าทุกชนิด',
            href: '/services/printing',
            icon: Printer,
          },
          {
            title: 'ออกแบบแพทเทิร์น',
            description: 'บริการออกแบบและตัดแพทเทิร์นเสื้อมืออาชีพ',
            href: '/services/pattern',
            icon: Scissors,
          },
          {
            title: 'ติดต่อเรา',
            description: 'ปรึกษาและขอตัวอย่างผ้าได้ฟรี',
            href: '/contact',
            icon: MessageCircle,
          },
        ]}
      />

      <FinalCTASection />
    </PageLayout>
  );
}
