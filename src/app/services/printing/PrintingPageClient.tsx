'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ImagesBySection } from '@/types/admin';
import ImageSlotOverlay from '@/components/ImageSlotOverlay';
import PageLayout from '@/components/PageLayout';
import { FinalCTASection } from '@/components/sections';
import Breadcrumb from '@/components/Breadcrumb';
import { 
  Printer,
  ArrowRight,
  CheckCircle2,
  CheckCircle,
  ImageIcon,
  Star,
  Phone,
  MessageCircle,
  Zap,
} from 'lucide-react';

// Printing methods
const printingMethods = [
  {
    id: 'dtg',
    name: 'DTG',
    fullName: 'Direct to Garment',
    description: 'พิมพ์ลงบนผ้าโดยตรง เหมาะสำหรับงานที่ต้องการรายละเอียดสูง สีสันหลากหลาย',
    image: '', // Will be set dynamically
    features: ['รายละเอียดสูง', 'สีไม่จำกัด', 'ไม่มีขั้นต่ำ', 'ผ้าฝ้ายได้ดี'],
    minOrder: '1 ตัว',
    priceRange: 'เริ่มต้น 150 บาท/ตัว',
    useCases: [
      'งานออกแบบละเอียด มีหลายสี',
      'ทดสอบตลาด สั่งน้อย',
      'ของขวัญส่วนตัว Custom',
      'เสื้อแบรนด์คุณภาพสูง'
    ],
    bestFor: 'งานละเอียด สีเยอะ',
  },
  {
    id: 'dtf',
    name: 'DTF',
    fullName: 'Direct to Film',
    description: 'พิมพ์ลงบนฟิล์มแล้วรีดลงผ้า สีสดทนทาน ใช้ได้กับผ้าหลายชนิด',
    image: '', // Will be set dynamically
    features: ['สีสด ทนทาน', 'ผ้าได้หลายชนิด', 'ยืดหยุ่น', 'ซักไม่หลุด'],
    minOrder: '1 ตัว',
    priceRange: '30-250฿/ตัว (ตามขนาด)',
    useCases: [
      'ผ้ายืด ผ้ากีฬา',
      'สินค้าขายออนไลน์',
      'เสื้อทีม กิจกรรม',
      'ยูนิฟอร์มพนักงาน'
    ],
    bestFor: 'ทนทาน คุ้มค่า',
  },
  {
    id: 'silkscreen',
    name: 'Silk Screen',
    fullName: 'สกรีนซิลค์',
    description: 'การสกรีนแบบดั้งเดิมที่ให้สีสดและทนทานที่สุด เหมาะสำหรับงานจำนวนมาก',
    image: '', // Will be set dynamically
    features: ['ต้นทุนต่ำ', 'สีสด ทน', 'งานจำนวนมาก', 'คุณภาพสูง'],
    minOrder: '30 ตัว',
    priceRange: '20-70฿/ตัว (จำนวนมาก)',
    useCases: [
      'งานองค์กร จำนวนมาก',
      'เสื้อทีม สโมสร',
      'ของที่ระลึก อีเว้นท์',
      'สินค้าแจกจ่าย'
    ],
    bestFor: '💰 จำนวนมาก ราคาต่ำ',
  },
];

// Comparison data
const comparisonData = {
  headers: ['', 'DTG', 'DTF', 'Silk Screen'],
  rows: [
    { label: 'ขั้นต่ำ', values: ['1 ตัว', '1 ตัว', '30 ตัว'] },
    { label: 'ราคา/ตัว', values: ['150฿+', '30-250฿', '20-70฿'] },
    { label: 'ความละเอียด', values: ['★★★', '★★', '★★'] },
    { label: 'ความทนทาน', values: ['★★', '★★★', '★★★'] },
    { label: 'ผ้าที่รองรับ', values: ['ฝ้าย', 'ทุกชนิด', 'ทุกชนิด'] },
    { label: 'เวลาผลิต', values: ['7-14 วัน', '2-3 วัน', '7-14 วัน'] },
    { label: 'เหมาะกับ', values: ['ภาพถ่าย งานศิลปะ', 'โลโก้ ลายกราฟิก', 'โลโก้ 1-4 สี'] },
  ]
};

// FAQ
const faqs = [
  {
    question: 'เลือกเทคนิคไหนดีสำหรับงานของฉัน?',
    answer: 'ถ้าสั่งน้อย (1-10 ตัว) แนะนำ DTG หรือ DTF / ถ้าสั่งเยอะ (30+ ตัว) แนะนำ Silk Screen ประหยัดกว่า / ถ้าเป็นผ้ายืด กีฬา แนะนำ DTF ทนทานสุด'
  },
  {
    question: 'ซักแล้วหลุดไหม?',
    answer: 'ไม่หลุดครับ! ทุกเทคนิคผ่านการทดสอบซักหลายครั้ง แต่ DTF และ Silk Screen จะทนทานกว่า DTG เล็กน้อย แนะนำซักในอุณหภูมิปกติ ไม่ใช้ฟอกขาว'
  },
  {
    question: 'ใช้เวลาทำนานแค่ไหน?',
    answer: 'DTG: 7-14 วันทำการ / DTF: 2-3 วันทำการ (งานด่วน 1 วัน) / Silk Screen: 7-14 วันทำการ (ต้องทำฟิล์มก่อน) / ขึ้นอยู่กับจำนวนและความซับซ้อนของงาน'
  },
  {
    question: 'ต้องส่งไฟล์แบบไหน?',
    answer: 'รับไฟล์ AI, PSD, PDF, PNG (ความละเอียดสูง) หรือถ้าไม่มีไฟล์ ส่งภาพมาได้เลย ทีมเราจะช่วยออกแบบให้ฟรี!'
  },
  {
    question: 'มีบริการออกแบบไหม?',
    answer: 'มีครับ! ออกแบบฟรี ไม่มีค่าใช้จ่าย แก้ไขได้จนกว่าพอใจ ใช้เวลาประมาณ 1-2 วัน'
  },
  {
    question: 'สั่งขั้นต่ำเท่าไหร่?',
    answer: 'DTG & DTF: ไม่มีขั้นต่ำ สั่ง 1 ตัวก็ได้ / Silk Screen: ขั้นต่ำ 50 ตัว (เพราะต้องทำฟิล์ม)'
  },
];

// Process steps
const processSteps = [
  { step: '01', title: 'ส่งแบบ', description: 'ส่งไฟล์ลายหรือให้เราออกแบบฟรี' },
  { step: '02', title: 'เลือกเทคนิค', description: 'ทีมงานแนะนำเทคนิคที่เหมาะสม' },
  { step: '03', title: 'ตรวจแบบ', description: 'ยืนยันแบบก่อนผลิตจริง' },
  { step: '04', title: 'ผลิต & ส่ง', description: '3-7 วันทำการ ส่งถึงมือ' },
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
      key={src}
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-105"
      onError={() => setHasError(true)}
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );
}

export default function PrintingPageClient({ images }: { images: Record<string, ImagesBySection> }) {
  const img = (slot: string, fallback: string) => images['printing-main']?.[slot]?.url || fallback;

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
            currentPage="บริการสกรีน"
          />

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-white/50 text-sm font-semibold mb-8 opacity-0 animate-fade-in-up">
              <Printer className="w-4 h-4 text-ci-blue" />
              <span className="text-slate-700">บริการหลัก</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in-up delay-100">
              <span className="block text-slate-900 mb-2">บริการสกรีน</span>
              <span className="relative inline-block">
                <span className="gradient-text">DTG, DTF, Silk Screen</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                  <path 
                    d="M2 10C50 2 100 2 150 6C200 10 250 2 298 6" 
                    stroke="url(#underline-gradient-printing)" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    className="animate-draw-line"
                  />
                  <defs>
                    <linearGradient id="underline-gradient-printing" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fec91b" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#fec91b" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed opacity-0 animate-fade-in-up delay-200 max-w-2xl mx-auto">
              เทคโนโลยีการพิมพ์หลากหลายรูปแบบ เลือกได้ตามความเหมาะสมของงาน
              ไม่ว่าจะงานละเอียดหรืองานจำนวนมาก
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8 opacity-0 animate-fade-in-up delay-300">
              <span className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-ci-blue" /> 3+ เทคนิคสกรีน
              </span>
              <span className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-ci-blue" /> ไม่มีขั้นต่ำ
              </span>
              <span className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-ci-blue" /> QC ทุกตัว
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in-up delay-400">
              <a 
                href="#printing-methods" 
                className="group relative px-8 py-4 bg-gradient-to-r from-ci-blue to-ci-blueDark text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-2">
                  เลือกเทคนิคที่เหมาะสม
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href="/contact" 
                className="group px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-2xl font-bold text-lg hover:border-ci-blue hover:text-ci-blue hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                ติดต่อเรา
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12 opacity-0 animate-fade-in-up delay-500">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">3+</div>
                <div className="text-sm text-slate-600">เทคนิคสกรีน</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">1</div>
                <div className="text-sm text-slate-600">ตัวขึ้นไป</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">100%</div>
                <div className="text-sm text-slate-600">QC ทุกตัว</div>
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

      {/* Printing Methods - Alternating Rows */}
      <section id="printing-methods" className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-ci-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-ci-blue/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-ci-blue text-sm font-bold mb-6">
              <Zap className="w-4 h-4" />
              <span>เทคนิคการสกรีน</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              3 เทคนิคสกรีน เลือกได้ตามงาน
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              แต่ละเทคนิคมีข้อดีและการใช้งานต่างกัน เราแนะนำให้เหมาะกับงานของคุณ
            </p>
          </div>

          {/* Methods - Alternating Layout */}
          <div className="space-y-20">
            {printingMethods.map((method, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={method.id}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <ImageSlotOverlay sectionId="printing-main" slotId={`print-${method.id === 'silkscreen' ? 'silkscreen' : method.id}`}>
                      <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl group">
                        <ServiceImage src={
                          method.id === 'dtg' ? img('print-dtg', '/images/printing/dtg.jpg') :
                          method.id === 'dtf' ? img('print-dtf', '/images/printing/dtf.jpg') :
                          img('print-silkscreen', '/images/printing/silkscreen.jpg')
                        } alt={method.name} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        
                        {/* Badge on Image */}
                        <div className="absolute top-6 left-6">
                          <div className="px-4 py-2 bg-ci-yellow rounded-xl shadow-lg">
                            <div className="text-sm font-bold text-slate-900">{method.bestFor}</div>
                          </div>
                        </div>
                      </div>
                    </ImageSlotOverlay>
                  </div>
                  
                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="text-5xl md:text-6xl font-bold text-ci-blue/20 leading-none">0{index + 1}</span>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
                        {method.name}
                      </h3>
                    </div>
                    <p className="text-lg font-medium text-ci-blue mb-4">
                      {method.fullName}
                    </p>
                    
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      {method.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase">คุณสมบัติ</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {method.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-slate-700">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase">เหมาะกับงาน</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {method.useCases.map((useCase, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-slate-700">
                            <span className="text-ci-blue mt-0.5">→</span>
                            <span className="text-sm">{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Min Order & Price */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-xl">
                        <Star className="w-5 h-5 text-ci-yellow fill-ci-yellow" />
                        <span className="text-slate-700 text-sm">
                          ขั้นต่ำ: <strong className="text-slate-900">{method.minOrder}</strong>
                        </span>
                      </div>
                      <div className="px-4 py-2 bg-green-50 rounded-xl">
                        <span className="text-green-700 text-sm font-bold">
                          💰 {method.priceRange}
                        </span>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={`/services/printing/${method.id}`}
                        className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-ci-blue to-ci-blueDark text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                      >
                        ดูรายละเอียด
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-2xl font-bold text-lg hover:border-ci-blue hover:text-ci-blue hover:-translate-y-1 hover:shadow-lg transition-all"
                      >
                        <Phone className="w-5 h-5" />
                        ติดต่อเรา
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-ci-blue/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-ci-blue text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>เปรียบเทียบ</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              เลือกเทคนิคที่ใช่สำหรับคุณ
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              เปรียบเทียบเทคนิคทั้ง 3 แบบ เพื่อช่วยตัดสินใจได้ง่ายขึ้น
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-ci-blue to-ci-blueDark text-white">
                    {comparisonData.headers.map((header, idx) => (
                      <th key={idx} className="py-4 px-6 text-left font-bold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.rows.map((row, rowIdx) => (
                    <tr key={rowIdx} className={`border-b border-slate-100 ${rowIdx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}`}>
                      <td className="py-4 px-6 font-bold text-slate-900">{row.label}</td>
                      {row.values.map((value, valIdx) => (
                        <td key={valIdx} className="py-4 px-6 text-slate-700">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-6">
            {printingMethods.map((method, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-ci-blue text-white rounded-lg flex items-center justify-center text-sm">
                    {idx + 1}
                  </span>
                  {method.name}
                </h3>
                <div className="space-y-3">
                  {comparisonData.rows.map((row, rowIdx) => (
                    <div key={rowIdx} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                      <span className="text-sm font-medium text-slate-600">{row.label}</span>
                      <span className="text-sm font-bold text-slate-900">{row.values[idx]}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Help Text */}
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">ยังไม่แน่ใจว่าควรเลือกเทคนิคไหน?</p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-ci-blue text-white rounded-xl font-bold hover:bg-ci-blueDark transition-colors"
            >
              <Phone className="w-4 h-4" />
              ปรึกษาทีมงาน ฟรี!
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-ci-yellow/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-50 text-amber-600 text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>คำถามที่พบบ่อย</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              สิ่งที่ลูกค้าสงสัย
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              คำตอบสำหรับคำถามที่ลูกค้าถามบ่อยเกี่ยวกับบริการสกรีน
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-slate-50 transition-colors">
                    <h3 className="font-bold text-slate-900 pr-4">{faq.question}</h3>
                    <span className="text-ci-blue flex-shrink-0">
                      <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>

          {/* CTA after FAQ */}
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">ยังมีคำถามอื่นอีกไหม?</p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-ci-blue to-ci-blueDark text-white rounded-2xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <Phone className="w-5 h-5" />
              ติดต่อเราเลย
            </a>
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
              ง่ายๆ เพียง 4 ขั้นตอน
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
            <Link href="/services/pattern" className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-ci-blue transition-colors">ทำแพทเทิร์น</h3>
              <p className="text-slate-600 text-sm mb-4">ตัดเย็บตามแบบที่คุณต้องการ</p>
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
