'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { FinalCTASection } from '@/components/sections';
import { 
  Printer,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Star,
  Phone,
  Zap,
  ImageIcon,
  Shield,
  Sparkles,
  Shirt,
  Building2,
  ShoppingCart,
  PartyPopper,
  Palette,
  Baby,
  Layers,
  RefreshCw,
  Trophy,
} from 'lucide-react';

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

export default function DTFPage() {
  return (
    <PageLayout>
      {/* Hero Section - DTF Character: Strong, Durable, Flexible */}
      <section className="relative min-h-[70vh] pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        {/* Strong & Durable background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" />
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        
        {/* Bold geometric shapes for strength */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-teal-400/30 to-cyan-400/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-8">
            <Link href="/services/printing" className="inline-flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>กลับไปบริการสกรีน</span>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            {/* Badge with shield icon */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 backdrop-blur-md shadow-lg border border-emerald-200/50 text-sm font-semibold mb-8 opacity-0 animate-fade-in-up">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">ทนทานสุดแกร่ง • Durable & Flexible</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in-up delay-100">
              <span className="block text-slate-900 mb-2">DTF</span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">Direct to Film</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                  <path 
                    d="M2 10C50 2 100 2 150 6C200 10 250 2 298 6" 
                    stroke="url(#underline-gradient-dtf)" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    className="animate-draw-line"
                  />
                  <defs>
                    <linearGradient id="underline-gradient-dtf" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="50%" stopColor="#14b8a6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed opacity-0 animate-fade-in-up delay-200 max-w-2xl mx-auto font-medium">
              พิมพ์ลงฟิล์มแล้วรีดลงผ้า <span className="text-emerald-600 font-bold">ทนทานกว่าการพิมพ์ตรง</span>
              สีไม่จาง ไม่แตกร้าว <span className="text-teal-600 font-bold">ใช้ได้กับผ้าทุกชนิด</span>
              แม้ผ้ายืด โพลี ซักได้เป็นพันครั้ง
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8 opacity-0 animate-fade-in-up delay-300">
              <span className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full shadow-md border border-emerald-100">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span className="text-slate-700 font-bold">ทนทานกว่า 2 เท่า</span>
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full shadow-md border border-teal-100">
                <Layers className="w-4 h-4 text-teal-600" />
                <span className="text-slate-700 font-bold">ผ้าทุกชนิด แม้ผ้ายืด</span>
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full shadow-md border border-cyan-100">
                <RefreshCw className="w-4 h-4 text-cyan-600" />
                <span className="text-slate-700 font-bold">ซักได้หลายพันครั้ง</span>
              </span>
            </div>

            <div className="flex justify-center opacity-0 animate-fade-in-up delay-400">
              <a 
                href="/contact" 
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  ขอใบเสนอราคา
                </span>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12 opacity-0 animate-fade-in-up delay-500">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">1 ตัว</div>
                <div className="text-sm text-slate-600">ขั้นต่ำ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">120฿+</div>
                <div className="text-sm text-slate-600">เริ่มต้น/ตัว</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">2-3 วัน</div>
                <div className="text-sm text-slate-600">เวลาผลิต</div>
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

      {/* What is DTF */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-ci-blue text-sm font-bold mb-6">
                <Sparkles className="w-4 h-4" />
                <span>DTF คืออะไร?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                พิมพ์บนฟิล์ม<br />
                แล้วรีดลงผ้า
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                <strong>DTF (Direct to Film)</strong> คือเทคนิคที่พิมพ์ลายลงบนฟิล์มพิเศษก่อน 
                จากนั้นโรยผงกาวและอบให้แห้ง แล้วนำมารีดด้วยความร้อนลงบนผ้า
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                เทคนิคนี้ให้<strong>สีสดทนทาน</strong>กว่า DTG และ<strong>ใช้ได้กับผ้าทุกชนิด</strong> 
                ทั้งฝ้าย โพลี และผ้ายืด จึงเป็นที่นิยมมากสำหรับเสื้อกีฬาและยูนิฟอร์ม
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl group">
              <ServiceImage src="/images/printing/dtf-process.jpg" alt="DTF Process" />
            </div>
          </div>
        </div>
      </section>

      {/* Epson Technology */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-ci-blue/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl group order-2 lg:order-1">
              <ServiceImage src="/images/printing/epson-i3200.jpg" alt="Epson PrecisionCore i3200" />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-ci-blue text-sm font-bold mb-6">
                <Zap className="w-4 h-4" />
                <span>เทคโนโลยี</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                <span className="gradient-text">หัวใจ</span>ของความคมชัด
              </h2>
              <p className="text-lg text-slate-900 font-semibold mb-4">
                Epson PrecisionCore i3200 Printhead
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                เราเลือกใช้เทคโนโลยีหัวพิมพ์ที่ดีที่สุด เพื่อให้งานสกรีนของคุณมีคุณภาพสูงสุด 
                ด้วยหัวพิมพ์ Epson i3200 ที่สามารถควบคุมการหยดหมึกได้อย่างแม่นยำ 
                ให้ทุกรายละเอียดคมชัด สดใส และสม่ำเสมอทั่วทั้งชิ้นงาน
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-ci-blue mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">ความละเอียดสูง คมชัดทุกพิกเซล</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-ci-blue mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">ความเร็วในการพิมพ์ที่เหนือกว่า</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-ci-blue mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">การไล่เฉดสีที่เรียบเนียนสมจริง</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages & Limitations */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ข้อดี & ข้อควรรู้
            </h2>
            <p className="text-lg text-slate-600">
              ทำไม DTF ถึงเป็นที่นิยม?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Advantages */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-8">
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">ข้อดี</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">ทนทานสูง</strong>
                    <p className="text-slate-600 text-sm">ซักได้หลายครั้ง ไม่หลุด ไม่ลอก ทนทานกว่า DTG</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">ใช้ได้กับผ้าทุกชนิด</strong>
                    <p className="text-slate-600 text-sm">ฝ้าย โพลี ผ้ายืด ผ้ากีฬา ใช้ได้หมด</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">สีสดใส</strong>
                    <p className="text-slate-600 text-sm">สีสดชัด คมคายกว่า DTG โดยเฉพาะบนผ้าเข้ม</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">ยืดหยุ่น</strong>
                    <p className="text-slate-600 text-sm">ยืดตามตัวผ้า เหมาะสำหรับเสื้อกีฬา</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">ไม่มีขั้นต่ำ</strong>
                    <p className="text-slate-600 text-sm">สั่ง 1 ตัวก็ทำได้</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">คุ้มค่า</strong>
                    <p className="text-slate-600 text-sm">ราคาดี ทนทาน เหมาะกับงานส่วนใหญ่</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Limitations */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-8">
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                <XCircle className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">ข้อควรรู้</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">สัมผัสเล็กน้อย</strong>
                    <p className="text-slate-600 text-sm">มีความหนาของฟิล์มเล็กน้อย แต่ไม่มาก</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">ต้องรีดอย่างถูกต้อง</strong>
                    <p className="text-slate-600 text-sm">ถ้ารีดไม่ดีอาจหลุดได้ (แต่ช่างเรามีประสบการณ์)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">ความละเอียดน้อยกว่า DTG เล็กน้อย</strong>
                    <p className="text-slate-600 text-sm">แต่ส่วนใหญ่แล้วไม่สังเกตเห็นความต่าง</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Best Use Cases */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-ci-blue text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>เหมาะกับงาน</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              เทคนิคนี้เหมาะกับงานแบบไหน?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Shirt className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">เสื้อกีฬา</h3>
              <p className="text-slate-600 text-sm">
                เหมาะกับผ้ายืด ผ้ากีฬา Dri-FIT เพราะยืดตามผ้า
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-100 shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">ยูนิฟอร์มพนักงาน</h3>
              <p className="text-slate-600 text-sm">
                ทนทาน ซักได้เยอะ เหมาะกับใช้งานประจำวัน
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">สินค้าขายออนไลน์</h3>
              <p className="text-slate-600 text-sm">
                คุ้มค่า ทนทาน ลูกค้าซักได้นาน ไม่มีขั้นต่ำ
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-100 shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <PartyPopper className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">เสื้อทีม กิจกรรม</h3>
              <p className="text-slate-600 text-sm">
                ราคาดี ทนทาน เหมาะกับงานบริษัท อีเว้นท์
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl border border-pink-100 shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">ผ้าสีเข้ม</h3>
              <p className="text-slate-600 text-sm">
                สีสดชัดบนผ้าสีเข้ม ไม่จำเป็นต้อง pre-treat
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl border border-cyan-100 shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <Baby className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">เสื้อเด็ก</h3>
              <p className="text-slate-600 text-sm">
                ยืดหยุ่น ปลอดภัย ทนการซักบ่อยๆ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-ci-blue/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-white text-sm font-bold mb-6">
              <Zap className="w-4 h-4" />
              <span>ขั้นตอนการผลิต</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ขั้นตอนการผลิตของ <span className="text-ci-yellow">DTF</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              กระบวนการที่ทำให้ลายสกรีนทนทานและสีสดใสที่สุด
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/printing/dtf-printing.jpg" alt="DTF Printing" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  <span className="text-ci-yellow mr-2">01</span>
                  พิมพ์ลงฟิล์ม (Print to Film)
                </h3>
                <p className="text-white/80">
                  พิมพ์ลายที่คุณต้องการลงบนฟิล์มพิเศษด้วยหัวพิมพ์ Epson i3200 ความละเอียดสูง 
                  โดยพิมพ์หมึกสีขาวเป็นฐานก่อน จากนั้นตามด้วยหมึกสี CMYK 
                  เพื่อให้ได้สีที่สดใสและคมชัดที่สุด
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl group md:order-2">
                <ServiceImage src="/images/printing/dtf-powder.jpg" alt="DTF Powder" />
              </div>
              <div className="md:order-1">
                <h3 className="text-2xl font-bold text-white mb-3">
                  <span className="text-ci-yellow mr-2">02</span>
                  โรยผงกาว (Apply Adhesive Powder)
                </h3>
                <p className="text-white/80">
                  หลังจากพิมพ์เสร็จ จะโรยผงกาวพิเศษทับบนหมึกที่ยังเปียก 
                  ผงกาวนี้จะช่วยให้ลายสกรีนยึดเกาะกับเนื้อผ้าได้แน่นหนา 
                  และทนทานต่อการซักและใช้งาน
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/printing/dtf-curing.jpg" alt="DTF Curing" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  <span className="text-ci-yellow mr-2">03</span>
                  อบฟิล์ม (Cure the Film)
                </h3>
                <p className="text-white/80">
                  นำฟิล์มที่พิมพ์และโรยผงแล้วไปอบด้วยความร้อน 
                  เพื่อให้ผงกาวละลายและยึดเกาะกับหมึก สร้างชั้นที่แข็งแรงและทนทาน 
                  พร้อมสำหรับรีดลงบนเสื้อ
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl group md:order-2">
                <ServiceImage src="/images/printing/dtf-transfer.jpg" alt="DTF Transfer" />
              </div>
              <div className="md:order-1">
                <h3 className="text-2xl font-bold text-white mb-3">
                  <span className="text-ci-yellow mr-2">04</span>
                  รีดลงผ้า (Heat Transfer)
                </h3>
                <p className="text-white/80">
                  นำฟิล์มที่พร้อมแล้ววางบนเสื้อและรีดด้วยเครื่อง Heat Press 
                  ในอุณหภูมิและเวลาที่เหมาะสม เพื่อให้ลายติดกับผ้าอย่างสมบูรณ์ 
                  หลังจากนั้นลอกฟิล์มออก ก็จะได้ลายสกรีนที่สวยงามและทนทาน
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-ci-yellow/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-ci-blue text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>ราคาบริการ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              <span className="gradient-text">ราคา</span>บริการพิมพ์บนฟิล์ม
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              ราคาเริ่มต้นที่คุ้มค่า ทนทานยาวนาน ใช้ได้กับผ้าทุกชนิด
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-100 shadow-lg p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Layers className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">คุ้มค่า ทนทาน ใช้ได้กับทุกผ้า</h3>
            <p className="text-slate-600 mb-6">
              เหมาะกับทุกชนิดผ้า ไม่ว่าจะฝ้าย โพลี ผ้ายืด หรือผ้ากีฬา 
              ราคาคิดตามขนาดและจำนวนสี
            </p>
            <div className="mt-6 px-6 py-4 bg-gradient-to-r from-ci-blue/10 to-ci-blueDark/10 rounded-xl">
              <span className="text-3xl font-bold text-ci-blue">120฿+</span>
              <span className="text-slate-600 text-sm ml-2">/ตัว</span>
            </div>
          </div>

          <div className="text-center mt-12 max-w-3xl mx-auto bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              ราคาคิดตาม<span className="gradient-text">ขนาดลาย</span>
            </h3>
            <p className="text-slate-600 mb-6">
              เพื่อให้ได้ราคาที่แม่นยำและยุติธรรมที่สุดสำหรับงานของคุณ 
              กรุณาส่งไฟล์ Artwork พร้อมแจ้งขนาดและจำนวนที่ต้องการมาให้เราประเมินราคา
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-ci-blue to-ci-blueDark text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              <Phone className="w-5 h-5" />
              ประเมินราคาเฉพาะลายของคุณ
            </a>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>CASE STUDY</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              กรณีศึกษางาน DTF
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              เรื่องราวจริงจากลูกค้าที่เลือก DTF เพราะความทนทาน
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {/* Case Study 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group order-2 md:order-1">
                <ServiceImage src="/images/case-study/dtf-gym-brand.jpg" alt="Gym Brand Case" />
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-sm font-bold text-emerald-700 mb-4">
                  <Shield className="w-4 h-4" /> Fitness Brand
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  แบรนด์เสื้อฟิตเนส<br />ต้องการความทนทานสูง
                </h3>
                <div className="space-y-3 text-slate-600">
                  <p>
                    <strong className="text-slate-900">ปัญหา:</strong> ผลิตเสื้อออกกำลังกาย 
                    ผ้ายืด Dry-fit ลูกค้าซักบ่อยมาก DTG ไม่ทนพอ Silk Screen ทำบนผ้ายืดไม่ได้
                  </p>
                  <p>
                    <strong className="text-slate-900">โซลูชั่น:</strong> ใช้ DTF ทนทานกว่า DTG 
                    ติดได้ดีบนผ้ายืด ยืดหยุ่นตามผ้า สีสดไม่จาง ซักได้หลายพันครั้ง
                  </p>
                  <p>
                    <strong className="text-slate-900">ผลลัพธ์:</strong> ไม่มีเคลมเรื่องสีหลุด 
                    ลูกค้าชอบใจ สั่งซ้ำทุกเดือน ขยายไลน์สินค้าเพิ่ม
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">Dry-fit</span>
                  <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">500+ ตัว/เดือน</span>
                  <span className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium">ทนทาน</span>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/case-study/dtf-uniform.jpg" alt="Uniform Case" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full text-sm font-bold text-teal-700 mb-4">
                  <Building2 className="w-4 h-4" /> Corporate Uniform
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  ยูนิฟอร์มบริษัท<br />ผ้าโพลีเอสเตอร์
                </h3>
                <div className="space-y-3 text-slate-600">
                  <p>
                    <strong className="text-slate-900">ปัญหา:</strong> ต้องการสกรีนโลโก้บนผ้าโพลี 
                    DTG สีจาง Silk Screen ทำไม่ได้เพราะผ้าไม่ซับหมึก
                  </p>
                  <p>
                    <strong className="text-slate-900">โซลูชั่น:</strong> DTF ใช้ได้กับผ้าโพลี 
                    สีติดดี ไม่จาง ทนการซัก เหมาะกับยูนิฟอร์มที่ต้องซักบ่อย
                  </p>
                  <p>
                    <strong className="text-slate-900">ผลลัพธ์:</strong> พนักงาน 200 คนใส่มาแล้ว 6 เดือน 
                    โลโก้ยังสวยเหมือนเดิม บริษัทสั่งเพิ่มสำหรับพนักงานใหม่
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">Polyester</span>
                  <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">200 ตัว</span>
                  <span className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium">Logo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery - Real Work Examples */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200 text-sm font-bold mb-6">
              <ImageIcon className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700">ผลงานจริง</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ตัวอย่างงาน DTF
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              ผลงานจริงจากโรงงานของเรา ทนทาน ยืดหยุ่น ใช้ได้กับทุกผ้า
            </p>
          </div>

          {/* Image Carousel */}
          <div className="relative">
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes scroll-images {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-scroll-images {
                animation: scroll-images 40s linear infinite;
              }
              .animate-scroll-images:hover {
                animation-play-state: paused;
              }
            `}} />
            
            <div className="flex gap-6 animate-scroll-images">
              {/* First set */}
              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/dtf-work-1.jpg" alt="DTF Work 1" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">เสื้อกีฬา</h3>
                    <p className="text-white/90 text-sm">ผ้ายืด ทนทาน ซักได้บ่อย</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/dtf-work-2.jpg" alt="DTF Work 2" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">ผ้าโพลี</h3>
                    <p className="text-white/90 text-sm">ติดได้ดี สีสดชัด</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/dtf-work-3.jpg" alt="DTF Work 3" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">ผ้าสีเข้ม</h3>
                    <p className="text-white/90 text-sm">สีโดดเด่น คมชัด</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/dtf-work-4.jpg" alt="DTF Work 4" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">งานยูนิฟอร์ม</h3>
                    <p className="text-white/90 text-sm">ทนทาน คุณภาพสูง</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/dtf-work-5.jpg" alt="DTF Work 5" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">ลายละเอียด</h3>
                    <p className="text-white/90 text-sm">สีเยอะ ความคมชัด</p>
                  </div>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/dtf-work-1.jpg" alt="DTF Work 1" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">เสื้อกีฬา</h3>
                    <p className="text-white/90 text-sm">ผ้ายืด ทนทาน ซักได้บ่อย</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/dtf-work-2.jpg" alt="DTF Work 2" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">ผ้าโพลี</h3>
                    <p className="text-white/90 text-sm">ติดได้ดี สีสดชัด</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/dtf-work-3.jpg" alt="DTF Work 3" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">ผ้าสีเข้ม</h3>
                    <p className="text-white/90 text-sm">สีโดดเด่น คมชัด</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/dtf-work-4.jpg" alt="DTF Work 4" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">งานยูนิฟอร์ม</h3>
                    <p className="text-white/90 text-sm">ทนทาน คุณภาพสูง</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/dtf-work-5.jpg" alt="DTF Work 5" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">ลายละเอียด</h3>
                    <p className="text-white/90 text-sm">สีเยอะ ความคมชัด</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200 text-sm font-bold mb-6">
              <Star className="w-4 h-4 text-emerald-600 fill-current" />
              <span className="text-emerald-700">รีวิวจากลูกค้า</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ลูกค้าพูดถึงเรา
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              ความประทับใจจากลูกค้าที่ใช้บริการ DTF จริง
            </p>
          </div>

          {/* Reviews Carousel */}
          <div className="relative mb-16">
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes scroll-left {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-scroll {
                animation: scroll-left 30s linear infinite;
              }
              .animate-scroll:hover {
                animation-play-state: paused;
              }
            `}} />
            
            <div className="flex gap-6 animate-scroll">
              {/* First set */}
              <div className="flex-shrink-0 w-96 bg-white/90 backdrop-blur rounded-2xl border border-emerald-100 shadow-lg p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "ทำเสื้อทีมฟุตบอล ผ้า Dry-fit ซักทุกวัน มาแล้ว 3 เดือน 
                  ยังสวยเหมือนเดิม ไม่จางไม่แตก ทนทานจริงๆ คุ้มค่าสุด!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <ServiceImage src="/images/customers/customer-coach.jpg" alt="คุณ โค้ชเก่ง" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">คุณ โค้ชเก่ง</div>
                    <div className="text-sm text-slate-500">ทีมฟุตบอล, 25 ตัว</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 bg-white/90 backdrop-blur rounded-2xl border border-teal-100 shadow-lg p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "ทำเสื้อโพลีเอสเตอร์ เทคนิคอื่นบอกทำไม่ได้ DTF ทำได้ 
                  สีติดดี สวยงาม ลูกค้าพอใจมาก สั่งซ้ำแล้ว 3 รอบ"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <ServiceImage src="/images/customers/customer-p.jpg" alt="คุณ พี" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">คุณ พี</div>
                    <div className="text-sm text-slate-500">ร้านขายเสื้อ, 200+ ตัว</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 bg-white/90 backdrop-blur rounded-2xl border border-cyan-100 shadow-lg p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "สั่งเสื้อยูนิฟอร์มพนักงาน ผ้าโพลี DTF ทนทานมาก 
                  ซักมา 6 เดือนยังไม่หลุด สียังสวย คุ้มค่าจริงๆ"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <ServiceImage src="/images/customers/customer-som.jpg" alt="คุณ ส้ม" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">คุณ ส้ม</div>
                    <div className="text-sm text-slate-500">HR Manager, 100 ตัว</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 bg-white/90 backdrop-blur rounded-2xl border border-emerald-100 shadow-lg p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "ทำเสื้อออกกำลังกาย ผ้ายืด DTF ติดได้ดีมาก 
                  ยืดหยุ่นตามตัว ไม่แตกร้าว ใส่สบาย ซักบ่อยไม่เป็นไร"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <ServiceImage src="/images/customers/customer-gym.jpg" alt="คุณ เบิ้ล" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">คุณ เบิ้ล</div>
                    <div className="text-sm text-slate-500">Gym Owner, 50 ตัว</div>
                  </div>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex-shrink-0 w-96 bg-white/90 backdrop-blur rounded-2xl border border-emerald-100 shadow-lg p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "ทำเสื้อทีมฟุตบอล ผ้า Dry-fit ซักทุกวัน มาแล้ว 3 เดือน 
                  ยังสวยเหมือนเดิม ไม่จางไม่แตก ทนทานจริงๆ คุ้มค่าสุด!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <ServiceImage src="/images/customers/customer-coach.jpg" alt="คุณ โค้ชเก่ง" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">คุณ โค้ชเก่ง</div>
                    <div className="text-sm text-slate-500">ทีมฟุตบอล, 25 ตัว</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 bg-white/90 backdrop-blur rounded-2xl border border-teal-100 shadow-lg p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "ทำเสื้อโพลีเอสเตอร์ เทคนิคอื่นบอกทำไม่ได้ DTF ทำได้ 
                  สีติดดี สวยงาม ลูกค้าพอใจมาก สั่งซ้ำแล้ว 3 รอบ"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <ServiceImage src="/images/customers/customer-p.jpg" alt="คุณ พี" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">คุณ พี</div>
                    <div className="text-sm text-slate-500">ร้านขายเสื้อ, 200+ ตัว</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 bg-white/90 backdrop-blur rounded-2xl border border-cyan-100 shadow-lg p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "สั่งเสื้อยูนิฟอร์มพนักงาน ผ้าโพลี DTF ทนทานมาก 
                  ซักมา 6 เดือนยังไม่หลุด สียังสวย คุ้มค่าจริงๆ"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <ServiceImage src="/images/customers/customer-som.jpg" alt="คุณ ส้ม" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">คุณ ส้ม</div>
                    <div className="text-sm text-slate-500">HR Manager, 100 ตัว</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 bg-white/90 backdrop-blur rounded-2xl border border-emerald-100 shadow-lg p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "ทำเสื้อออกกำลังกาย ผ้ายืด DTF ติดได้ดีมาก 
                  ยืดหยุ่นตามตัว ไม่แตกร้าว ใส่สบาย ซักบ่อยไม่เป็นไร"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <ServiceImage src="/images/customers/customer-gym.jpg" alt="คุณ เบิ้ล" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">คุณ เบิ้ล</div>
                    <div className="text-sm text-slate-500">Gym Owner, 50 ตัว</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-50 text-amber-600 text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>คำถามที่พบบ่อย</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              คำถามที่พบบ่อย
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              คำตอบสำหรับคำถามที่ลูกค้าถามบ่อย
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: 'DTF ทนทานกว่า DTG จริงไหม?',
                a: 'จริงครับ DTF มีความทนทานสูงกว่า DTG เพราะใช้ผงกาวพิเศษที่ทำให้ลายยึดเกาะกับผ้าได้แน่นขึ้น ซักได้หลายร้อยครั้งโดยไม่หลุด ไม่ลอก เหมาะสำหรับงานที่ต้องการความทนทานสูง เช่น เสื้อกีฬา ยูนิฟอร์ม'
              },
              {
                q: 'DTF ใช้ได้กับผ้าทุกชนิดจริงไหม?',
                a: 'ใช่ครับ DTF เป็นเทคนิคที่หลากหลายที่สุด ใช้ได้กับผ้าเกือบทุกชนิด ทั้งฝ้าย โพลี ผ้ายืด ผ้ากีฬา Dri-FIT และแม้แต่หนัง เพราะการยึดเกาะอาศัยผงกาวพิเศษที่รีดด้วยความร้อน ไม่ต้องพึ่งการซึมของหมึกเข้าเนื้อผ้าเหมือน DTG'
              },
              {
                q: 'สัมผัสของ DTF เป็นอย่างไร?',
                a: 'จะมีความหนาของฟิล์มเล็กน้อย แต่ไม่รู้สึกกระด้างหรือหนักอึดอัด ยืดหยุ่นไปกับผ้าได้ดี สวมใส่สบาย และระบายอากาศได้ปกติ'
              },
              {
                q: 'ต้องสั่งจำนวนขั้นต่ำเท่าไหร่?',
                a: 'ไม่มีขั้นต่ำครับ สั่ง 1 ตัวก็ทำได้ แต่ถ้าสั่งเยอะจะได้ราคาที่คุ้มค่ากว่า'
              },
              {
                q: 'ใช้เวลาผลิตนานแค่ไหน?',
                a: '2-3 วันทำการสำหรับงานปริมาณน้อย ถ้าเป็นงานด่วนสามารถทำได้ใน 1 วัน (มีค่าบริการเพิ่ม)'
              }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl border border-slate-100 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-slate-50 transition-colors">
                  <h3 className="font-bold text-slate-900 pr-4">{faq.q}</h3>
                  <span className="text-ci-blue flex-shrink-0">
                    <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Durability */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold mb-6">
              <Shield className="w-4 h-4" />
              <span>ความคงทน</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ความทนทานของงานสกรีน DTF
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              <strong>ทนทานสูง</strong> เหมาะกับงานที่ต้องซักบ่อยและใช้งานหนัก
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100 shadow-lg p-8">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">อายุการใช้งาน</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span><strong>200-300+ ครั้ง</strong> การซัก ยังคงสีสันสดใสและไม่หลุด</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span><strong>ทนทานกว่า DTG ถึง 2-3 เท่า</strong> เพราะใช้ผงกาวพิเศษ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>เหมาะกับ<strong>เสื้อกีฬา ยูนิฟอร์ม</strong> ที่ต้องซักบ่อย</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl border border-teal-100 shadow-lg p-8">
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">คุณภาพที่คงอยู่</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span><strong>สีไม่จางง่าย</strong> ยึดเกาะกับผ้าแน่นด้วยผงกาว</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span><strong>ไม่หลุดลอก</strong> แม้ใช้งานหนักหรือยืดผ้าบ่อย</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span><strong>ยืดหยุ่นสูง</strong> เหมาะกับผ้ายืดและผ้ากีฬา</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200 p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">ทำไม DTF ถึงทนทาน?</h3>
                  <p className="text-slate-600 leading-relaxed">
                    DTF ใช้<strong>ผงกาวพิเศษ (Adhesive Powder)</strong> ที่หลอมติดกับเส้นใยผ้าด้วยความร้อนสูง 
                    ทำให้ยึดเกาะแน่นกว่า DTG ที่หมึกซึมเข้าผ้าเพียงอย่างเดียว - 
                    เหมาะกับ<strong>งานที่ต้องซักบ่อย</strong> เช่น เสื้อกีฬา ชุดฟิตเนส ยูนิฟอร์มโรงเรียน 
                    หรืองานที่ต้องการความทนทานระยะยาว
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-white text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>วิธีการดูแลรักษา</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ดูแลง่าย ทนทานนาน
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              DTF ดูแลง่ายกว่า DTG ซักได้ตามปกติ แต่ถ้าปฏิบัติตามคำแนะนำจะยิ่งทนทานขึ้น
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2 text-lg">ซักได้ตามปกติ</h3>
                  <p className="text-white/70 text-sm">
                    DTF ทนทานมาก ซักในเครื่องซักผ้าได้เลย ไม่ต้องระมัดระวังมากเท่า DTG
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2 text-lg">น้ำอุณหภูมิปกติ</h3>
                  <p className="text-white/70 text-sm">
                    ซักได้ทั้งน้ำเย็นและน้ำอุ่น (ไม่เกิน 60°C) ทนความร้อนได้ดีกว่า DTG
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2 text-lg">หลีกเลี่ยงฟอกขาว</h3>
                  <p className="text-white/70 text-sm">
                    แม้ DTF จะทนทาน แต่สารฟอกขาวก็ยังทำลายสีได้ ควรหลีกเลี่ยง
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2 text-lg">ซักด้านในออก (ถ้าอยากดูแลพิเศษ)</h3>
                  <p className="text-white/70 text-sm">
                    ไม่จำเป็น แต่ถ้าทำจะช่วยยืดอายุให้นานยิ่งขึ้น
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2 text-lg">รีดได้ (ที่อุณหภูมิปานกลาง)</h3>
                  <p className="text-white/70 text-sm">
                    DTF ทนความร้อนได้ดี รีดได้เลย แต่ไม่ควรใช้ความร้อนสูงเกินไป
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2 text-lg">อบแห้งได้ (อุณหภูมิต่ำ)</h3>
                  <p className="text-white/70 text-sm">
                    ใช้เครื่องอบได้ แต่ควรตั้งอุณหภูมิต่ำ-กลาง เพื่อความทนทานสูงสุด
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-3">สรุป: ดูแลง่าย ทนทานพิเศษ</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  DTF เป็นเทคนิคที่<strong>ดูแลง่าย</strong>และ<strong>ทนทานมาก</strong> - 
                  ซักได้ตามปกติ ไม่ต้องระมัดระวังมากเหมือน DTG 
                  เหมาะกับงานที่ต้อง<strong>ซักบ่อย</strong>หรือ<strong>ใช้งานหนัก</strong>
                </p>
                <p className="text-white/60 text-sm">
                  💪 <strong>ข้อได้เปรียบ:</strong> ทนทานกว่า DTG ถึง 2-3 เท่า และดูแลรักษาง่ายกว่ามาก!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Methods */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              เทคนิคอื่นๆ
            </h2>
            <p className="text-slate-600">เปรียบเทียบกับเทคนิคอื่นเพื่อเลือกที่เหมาะสมที่สุด</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link href="/services/printing/dtg" className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-ci-blue transition-colors">DTG - Direct to Garment</h3>
              <p className="text-slate-600 text-sm mb-4">ความละเอียดสูงกว่า เหมาะกับภาพถ่ายและงานศิลปะ</p>
              <span className="text-ci-blue font-medium flex items-center gap-2">
                ดูรายละเอียด <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link href="/services/printing/silkscreen" className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-ci-blue transition-colors">Silk Screen</h3>
              <p className="text-slate-600 text-sm mb-4">ราคาถูกกว่าสำหรับงานจำนวนมาก (50+ ตัว)</p>
              <span className="text-ci-blue font-medium flex items-center gap-2">
                ดูรายละเอียด <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/services/printing" 
              className="inline-flex items-center gap-2 text-ci-blue font-bold hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              ดูเทคนิคทั้งหมด
            </Link>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </PageLayout>
  );
}

