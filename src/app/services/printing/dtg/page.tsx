'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { FinalCTASection, RelatedPagesSection } from '@/components/sections';
import Breadcrumb from '@/components/Breadcrumb';
import { 
  Printer,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Star,
  Phone,
  MessageCircle,
  Zap,
  ImageIcon,
  Palette,
  Sparkles,
  Brush,
  Layers,
  User,
  Gift,
  FlaskConical,
  Shirt,
  Camera,
  Shield,
  Trophy,
  AlertCircle,
  Calculator,
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

export default function DTGPage() {
  return (
    <PageLayout>
      {/* Hero Section - DTG Character: Creative, Colorful, Artistic */}
      <section className="relative min-h-[70vh] pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        {/* Colorful artistic background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-blue-50" />
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        
        {/* Multiple colorful blobs for artistic feel */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-cyan-300/30 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-br from-yellow-300/20 to-orange-300/20 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1s'}} />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Breadcrumb
            items={[
              { label: 'บริการของเรา', href: '/services' },
              { label: 'บริการสกรีน', href: '/services/printing' }
            ]}
            currentPage="DTG (Direct to Garment)"
          />

          <div className="max-w-4xl mx-auto text-center">
            {/* Badge with artistic icon */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 backdrop-blur-md shadow-lg border border-purple-200/50 text-sm font-semibold mb-8 opacity-0 animate-fade-in-up">
              <Palette className="w-4 h-4 text-purple-600" />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">ศิลปะบนเสื้อผ้า • Artistic Printing</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in-up delay-100">
              <span className="block text-slate-900 mb-2">DTG</span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Direct to Garment</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                  <path 
                    d="M2 10C50 2 100 2 150 6C200 10 250 2 298 6" 
                    stroke="url(#underline-gradient-dtg)" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    className="animate-draw-line"
                  />
                  <defs>
                    <linearGradient id="underline-gradient-dtg" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="50%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed opacity-0 animate-fade-in-up delay-200 max-w-2xl mx-auto font-medium">
              พิมพ์เสื้อ DTG (Direct to Garment) พิมพ์หมึกลงบนเนื้อผ้าโดยตรง <span className="text-purple-600 font-bold">ความละเอียดสูงสุด</span> 
              เหมือนพิมพ์ภาพถ่าย <span className="text-pink-600 font-bold">สีสันสดใส</span> ไล่เฉดสีได้อย่างสมบูรณ์แบบ 
              <span className="text-emerald-600 font-bold">สกรีนเสื้อไม่มีขั้นต่ำ สั่งได้ตั้งแต่ 1 ตัว ราคาเริ่มต้น 150฿</span>
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8 opacity-0 animate-fade-in-up delay-300">
              <span className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full shadow-md border border-purple-100">
                <Camera className="w-4 h-4 text-purple-600" />
                <span className="text-slate-700 font-bold">ความละเอียดระดับภาพถ่าย</span>
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full shadow-md border border-pink-100">
                <Palette className="w-4 h-4 text-pink-600" />
                <span className="text-slate-700 font-bold">สีสันสดใส ไล่เฉดได้</span>
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full shadow-md border border-blue-100">
                <User className="w-4 h-4 text-blue-600" />
                <span className="text-slate-700 font-bold">สั่งได้ตั้งแต่ 1 ตัว</span>
              </span>
            </div>

            <div className="flex justify-center gap-4 opacity-0 animate-fade-in-up delay-400">
              <a 
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  ขอใบเสนอราคา
                </span>
              </a>
              <a 
                href="/calculator"
                className="group px-8 py-4 bg-white text-purple-600 border-2 border-purple-200 rounded-2xl font-bold text-lg hover:border-purple-600 hover:bg-purple-50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>คำนวณราคา</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12 opacity-0 animate-fade-in-up delay-500">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">1 ตัว</div>
                <div className="text-sm text-slate-600">ขั้นต่ำ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">150฿+</div>
                <div className="text-sm text-slate-600">เริ่มต้น/ตัว</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">7-14 วัน</div>
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

      {/* What is DTG */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-ci-blue text-sm font-bold mb-6">
                <Sparkles className="w-4 h-4" />
                <span>DTG คืออะไร?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                สกรีน DTG พิมพ์ลงบนผ้าโดยตรง<br />
                เหมือนพิมพ์เอกสาร
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                <strong>สกรีน DTG (Direct to Garment)</strong> คือเทคโนโลยีการพิมพ์เสื้อที่ใช้เครื่องพิมพ์พิเศษ 
                พิมพ์หมึกลงบนเนื้อผ้าโดยตรง คล้ายกับการพิมพ์กระดาษ แต่ใช้หมึกพิเศษที่ออกแบบมาสำหรับผ้า
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                เหมาะสำหรับงานที่ต้องการ <strong>ความละเอียดสูง</strong> มี<strong>สีเยอะ ไม่จำกัดสี</strong> 
                หรือ<strong>สกรีนเสื้อ 1 ตัว สั่งจำนวนน้อย ไม่มีขั้นต่ำ</strong> เพราะไม่มีค่าใช้จ่ายเริ่มต้น (ไม่ต้องทำฟิล์ม)
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl group">
              <ServiceImage src="/images/printing/dtg-process.jpg" alt="DTG Process" />
            </div>
          </div>
        </div>
      </section>

      {/* Brother GTX PRO Technology */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-ci-blue/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl group order-2 lg:order-1">
              <ServiceImage src="/images/printing/brother-gtx.jpg" alt="Brother GTX PRO BULK" />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-ci-blue text-sm font-bold mb-6">
                <Zap className="w-4 h-4" />
                <span>เทคโนโลยี</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                <span className="gradient-text">เครื่อง Brother GTX PRO BULK</span>
              </h2>
              <p className="text-lg text-slate-900 font-semibold mb-4">
                มาตรฐานระดับอุตสาหกรรมระดับโลก
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                เรายกระดับงาน DTG ด้วยเครื่องพิมพ์มาตรฐานอุตสาหกรรมจาก Brother 
                ที่แบรนด์ชั้นนำทั่วโลกไว้วางใจ ด้วยเทคโนโลยีหัวพิมพ์ที่ล้ำสมัยและหมึกพิมพ์ 
                Innobella Textile ให้สีสันที่สดใสสมจริงทุกเฉดสี
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-ci-blue mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">ขอบเขตสี (Color Gamut) กว้างกว่า สีตรงจริง</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-ci-blue mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">หมึกพิมพ์ปลอดภัย ผ่านมาตรฐาน OEKO-TEX®</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-ci-blue mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">คุณภาพสม่ำเสมอทุกชิ้นงานด้วยระบบ Bulk ink</span>
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
              เข้าใจข้อดีและข้อจำกัดเพื่อเลือกใช้งานให้เหมาะสม
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
                    <strong className="text-slate-900">ไม่มีขั้นต่ำ</strong>
                    <p className="text-slate-600 text-sm">สั่ง 1 ตัวก็ทำได้ ไม่มีค่าใช้จ่ายเริ่มต้น</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">สีไม่จำกัด</strong>
                    <p className="text-slate-600 text-sm">พิมพ์ได้ทุกสี รวมถึงการไล่สีและรายละเอียดซับซ้อน</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">ความละเอียดสูง</strong>
                    <p className="text-slate-600 text-sm">พิมพ์ได้ละเอียดมาก เหมาะกับภาพถ่ายและลายซับซ้อน</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">ผลิตเร็ว</strong>
                    <p className="text-slate-600 text-sm">7-14 วันทำการ สำหรับงานปริมาณน้อย</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">เหมาะกับ Custom</strong>
                    <p className="text-slate-600 text-sm">แต่ละตัวลายต่างกันได้ เหมาะสำหรับของขวัญส่วนตัว</p>
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
                    <strong className="text-slate-900">เหมาะกับผ้าฝ้าย</strong>
                    <p className="text-slate-600 text-sm">ได้ผลดีบนผ้าฝ้าย 100% ผ้าโพลีไม่ค่อยติด</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">ราคาต่อตัวสูงกว่า</strong>
                    <p className="text-slate-600 text-sm">ถ้าสั่งเยอะ (100+ ตัว) Silk Screen จะถูกกว่า</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">ความทนทานปานกลาง</strong>
                    <p className="text-slate-600 text-sm">ทนทานดี แต่ยังไม่เท่า DTF หรือ Silk Screen</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">ผ้าสีเข้มต้อง Pre-treat</strong>
                    <p className="text-slate-600 text-sm">ผ้าสีเข้มต้องพ่นสารเคลือบก่อนพิมพ์</p>
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
                <Brush className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">งานออกแบบละเอียด</h3>
              <p className="text-slate-600 text-sm">
                ลายที่มีรายละเอียดสูง มีการไล่สี หรือภาพถ่าย
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">ของขวัญ Custom</h3>
              <p className="text-slate-600 text-sm">
                เสื้อพิมพ์ชื่อ ภาพส่วนตัว หรือข้อความพิเศษ
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <FlaskConical className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">ทดสอบตลาด</h3>
              <p className="text-slate-600 text-sm">
                ทดลองผลิตสินค้าจำนวนน้อยก่อนสั่งผลิตจริง
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-100 shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <Shirt className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">แบรนด์เริ่มต้น</h3>
              <p className="text-slate-600 text-sm">
                แบรนด์เสื้อที่เน้นคุณภาพ Limited Edition
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl border border-pink-100 shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">งานศิลปะ</h3>
              <p className="text-slate-600 text-sm">
                พิมพ์งานศิลปะ ภาพวาด หรือ Artwork ต่างๆ
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl border border-cyan-100 shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">พิมพ์ภาพถ่าย</h3>
              <p className="text-slate-600 text-sm">
                ภาพถ่ายที่ต้องการความละเอียดและสีสันที่แม่นยำ
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
              ขั้นตอนการผลิตของ <span className="text-ci-yellow">DTG</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              เบื้องหลังความพิถีพิถันของงานสกรีนระดับพรีเมียม
            </p>
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/printing/dtg-pretreatment.jpg" alt="Pre-treatment" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  <span className="text-ci-yellow mr-2">01</span>
                  เตรียมผ้า (Pre-treatment)
                </h3>
                <p className="text-white/80">
                  เราเริ่มต้นด้วยการพ่นน้ำยา Pre-treatment สูตรพิเศษลงบนเสื้ออย่างสม่ำเสมอ 
                  แล้วนำไปอบด้วยความร้อน เพื่อสร้างชั้นฟิล์มบางๆ ที่ช่วยให้หมึกพิมพ์สามารถยึดเกาะกับเส้นใยฝ้ายได้อย่างสมบูรณ์แบบ 
                  นี่คือเคล็ดลับที่ทำให้สีสดและทนทาน
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl group md:order-2">
                <ServiceImage src="/images/printing/dtg-printing.jpg" alt="Printing" />
              </div>
              <div className="md:order-1">
                <h3 className="text-2xl font-bold text-white mb-3">
                  <span className="text-ci-yellow mr-2">02</span>
                  พิมพ์ลาย (Printing)
                </h3>
                <p className="text-white/80">
                  เสื้อที่เตรียมไว้จะถูกนำเข้าเครื่อง Brother GTX PRO BULK ซึ่งจะพิมพ์หมึก Innobella Textile inks ลงบนเสื้อโดยตรง 
                  หากเป็นเสื้อสีเข้ม เครื่องจะพิมพ์หมึกขาวรองพื้นก่อน แล้วจึงตามด้วยหมึกสี CMYK 
                  เพื่อให้ได้สีสันที่ถูกต้องและสดใสที่สุด
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/printing/dtg-curing.jpg" alt="Curing" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  <span className="text-ci-yellow mr-2">03</span>
                  อบสี (Curing)
                </h3>
                <p className="text-white/80">
                  หลังจากพิมพ์เสร็จ เสื้อจะถูกนำไปอบด้วยเครื่อง Heat Press ในอุณหภูมิและเวลาที่เหมาะสม 
                  เพื่อให้หมึกแห้งสนิทและเกิดปฏิกิริยาเคมี ยึดเกาะกับเส้นใยผ้าอย่างถาวร 
                  ทำให้ลายสกรีนทนทานต่อการซักและใช้งานยาวนาน
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl group md:order-2">
                <ServiceImage src="/images/printing/dtg-qc.jpg" alt="Quality Control" />
              </div>
              <div className="md:order-1">
                <h3 className="text-2xl font-bold text-white mb-3">
                  <span className="text-ci-yellow mr-2">04</span>
                  ตรวจสอบคุณภาพ (QC)
                </h3>
                <p className="text-white/80">
                  ก่อนการจัดส่ง ทีมงานของเราจะตรวจสอบคุณภาพงานทุกตัวอย่างละเอียด 
                  ทั้งความถูกต้องของสี ความคมชัดของลาย และความเรียบร้อยของเสื้อ 
                  เพื่อให้คุณมั่นใจว่าจะได้รับสินค้าที่ดีที่สุดจากเรา
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
              <span className="gradient-text">ราคา</span>บริการพิมพ์ลงผ้าโดยตรง
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
              ราคาของเราโปร่งใส คิดตามปริมาณการใช้หมึกจริง เพื่อให้คุณได้ราคาที่คุ้มค่าที่สุด
            </p>
            
            {/* Highlight: Color-based Pricing */}
            <div className="max-w-3xl mx-auto mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-ci-blue rounded-2xl p-6 shadow-lg text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-ci-blue rounded-xl flex items-center justify-center">
                    <Palette className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">คิดราคาตามสีที่ใช้</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  <strong className="text-ci-blue">DTG คำนวณราคาตามจำนวนหมึกที่ใช้จริง</strong> ลายที่มีสีน้อย ราคาถูกกว่า 
                  ลายที่มีสีเยอะ หรือพื้นที่สีเต็ม ราคาจะสูงขึ้น <span className="text-slate-900 font-semibold">เป็นราคาที่ยุติธรรมและคุ้มค่าที่สุด</span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* White Shirts */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-white border-2 border-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shirt className="w-8 h-8 text-ci-blue" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">สำหรับเสื้อขาว / สีอ่อน</h3>
              <p className="text-slate-600 mb-4">
                ใช้เพียงหมึกพิมพ์สี CMYK โดยตรงลงบนเสื้อ ทำให้ได้ราคาเริ่มต้นที่เข้าถึงง่าย 
                เหมาะกับงานดีไซน์สีสันสดใสบนพื้นสว่าง
              </p>
              <div className="mt-6 px-6 py-3 bg-blue-50 rounded-xl">
                <span className="text-2xl font-bold text-ci-blue">150฿+</span>
                <span className="text-slate-600 text-sm ml-2">/ตัว</span>
              </div>
            </div>

            {/* Dark Shirts */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">สำหรับเสื้อสีเข้ม</h3>
              <p className="text-slate-600 mb-4">
                ต้องมีการพิมพ์หมึกสีขาวเพื่อเป็นรองพื้นก่อน 1 ชั้น เพื่อให้สีจริงลอยเด่น คมชัด 
                ทำให้มีต้นทุนหมึกพิมพ์ที่สูงขึ้น
              </p>
              <div className="mt-6 px-6 py-3 bg-amber-50 rounded-xl">
                <span className="text-2xl font-bold text-amber-600">200฿+</span>
                <span className="text-slate-600 text-sm ml-2">/ตัว</span>
              </div>
            </div>
          </div>

          {/* DTG Promotion */}
          <div className="mt-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-50 to-white border-b border-slate-200 p-4 md:p-5">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-7 h-7 bg-ci-yellow/20 rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 fill-ci-yellow text-ci-yellow" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">สกรีน DTG โปรโมชั่น</h3>
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-600 text-sm">
                  <Palette className="w-3.5 h-3.5 text-ci-blue" />
                  <p className="text-center"><strong className="text-ci-blue">คิดตามสีที่ใช้</strong> • ส่วนลดตามจำนวน</p>
                </div>
              </div>

              <div className="p-5 md:p-8">
                {/* Discount Cards */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {/* 30 pieces */}
                  <div className="text-center p-4 bg-blue-50/50 rounded-xl border border-blue-200 hover:shadow-md hover:-translate-y-1 transition-all">
                    <div className="w-10 h-10 bg-ci-blue rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Gift className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-ci-blue mb-1">5%</div>
                    <div className="text-slate-600 text-sm">สั่งผลิต <strong className="text-ci-blue">30 ตัว</strong></div>
                  </div>
                  
                  {/* 50 pieces */}
                  <div className="text-center p-4 bg-blue-50/50 rounded-xl border-2 border-ci-blue hover:shadow-lg hover:-translate-y-1 transition-all">
                    <div className="w-10 h-10 bg-gradient-to-br from-ci-blue to-ci-blueDark rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Gift className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-ci-blue mb-1">10%</div>
                    <div className="text-slate-600 text-sm mb-2">สั่งผลิต <strong className="text-ci-blue">50 ตัว</strong></div>
                    <span className="inline-block px-2.5 py-0.5 bg-ci-yellow text-slate-900 text-xs font-bold rounded-full">แนะนำ</span>
                  </div>
                  
                  {/* 100 pieces */}
                  <div className="text-center p-4 bg-blue-50/50 rounded-xl border border-blue-200 hover:shadow-md hover:-translate-y-1 transition-all">
                    <div className="w-10 h-10 bg-ci-blue rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Trophy className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-ci-blue mb-1">15%</div>
                    <div className="text-slate-600 text-sm">สั่งผลิต <strong className="text-ci-blue">100 ตัว</strong></div>
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-3">
                  {/* Color-based pricing reminder */}
                  <div className="text-center p-3 bg-blue-50 rounded-lg border border-ci-blue">
                    <div className="flex items-center justify-center gap-2">
                      <Palette className="w-4 h-4 text-ci-blue" />
                      <p className="text-ci-blue font-bold text-sm">คำนวณราคาตามสีที่ใช้</p>
                    </div>
                    <p className="text-slate-600 text-xs mt-1">
                      ลายที่มีสีน้อย ราคาถูกกว่า • ลายที่มีสีเต็มพื้นที่ ราคาสูงขึ้น
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <p className="text-slate-700 text-xs">
                        <strong className="text-slate-900">หมายเหตุ:</strong> ส่วนลดเฉพาะค่าสกรีน แบบเดียวกัน
                      </p>
                    </div>
                    
                    {/* Warning Card */}
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <p className="text-amber-800 text-xs">
                          <strong>เสื้อสีดำแพงกว่าสีขาวเกือบ 2 เท่า</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 max-w-3xl mx-auto bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              ต้องการคำปรึกษา หรือราคาพิเศษ?
            </h3>
            <p className="text-slate-600 mb-6">
              ติดต่อเราเพื่อขอคำปรึกษาและรับใบเสนอราคาที่เหมาะสมกับงานของคุณ
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-ci-blue to-ci-blueDark text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              <MessageCircle className="w-5 h-5" />
              สอบถามราคาพิเศษ
            </a>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>CASE STUDY</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              กรณีศึกษางาน DTG
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              เรื่องราวจริงจากลูกค้าที่เลือกใช้ DTG เพื่องานสร้างสรรค์
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {/* Case Study 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group order-2 md:order-1">
                <ServiceImage src="/images/case-study/dtg-artist-brand.jpg" alt="Artist Brand Case" />
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full text-sm font-bold text-purple-700 mb-4">
                  <Palette className="w-4 h-4" /> Artist Brand
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  แบรนด์เสื้อศิลปิน<br />สร้างคอลเลคชั่นพิเศษ
                </h3>
                <div className="space-y-3 text-slate-600">
                  <p>
                    <strong className="text-slate-900">ปัญหา:</strong> ศิลปินต้องการทำเสื้อคอลเลคชั่นใหม่ 
                    ทุกตัวลายไม่เหมือนกัน จำนวนตัวละ 20-30 ตัว เทคนิคอื่นไม่คุ้ม
                  </p>
                  <p>
                    <strong className="text-slate-900">โซลูชั่น:</strong> ใช้ DTG พิมพ์ 5 ดีไซน์ ละเอียดสูง 
                    สีสดตามแบบ ไม่ต้องทำฟิล์ม ทำได้ทุกลาย จำนวนน้อยก็คุ้ม
                  </p>
                  <p>
                    <strong className="text-slate-900">ผลลัพธ์:</strong> ขายหมดใน 2 สัปดาห์ 
                    ลูกค้าชอบใจความละเอียด สามารถสั่งผลิตเพิ่มได้ทันที
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">5 ดีไซน์</span>
                  <span className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm font-medium">ละ 25 ตัว</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Full Color HD</span>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/case-study/dtg-wedding-gift.jpg" alt="Wedding Gift Case" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 rounded-full text-sm font-bold text-pink-700 mb-4">
                  <Gift className="w-4 h-4" /> Personal Gift
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  เสื้อของขวัญงานแต่ง<br />พิมพ์ภาพคู่ที่ระลึก
                </h3>
                <div className="space-y-3 text-slate-600">
                  <p>
                    <strong className="text-slate-900">ปัญหา:</strong> ต้องการทำเสื้อของขวัญงานแต่ง 
                    พิมพ์ภาพถ่ายคู่บนเสื้อ สั่งแค่ 2 ตัว เทคนิคอื่นรับทำไม่ได้
                  </p>
                  <p>
                    <strong className="text-slate-900">โซลูชั่น:</strong> DTG รับทำตั้งแต่ 1 ตัว 
                    พิมพ์ภาพถ่าย HD ได้ทุกรายละเอียด สีสันสมจริง เหมือนภาพจริง
                  </p>
                  <p>
                    <strong className="text-slate-900">ผลลัพธ์:</strong> ของขวัญที่มีความหมาย 
                    เจ้าบ่าวเจ้าสาวประทับใจมาก กลายเป็นเสื้อคู่ที่ใส่ได้จริง
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm font-medium">2 ตัว</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">Photo HD</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">1 วันเสร็จ</span>
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
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-200 text-sm font-bold mb-6">
              <ImageIcon className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700">ผลงานจริง</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ตัวอย่างงาน DTG
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              ผลงานจริงจากโรงงานของเรา ความละเอียดสูง สีสันสดใส
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
                <ServiceImage src="/images/gallery/dtg-work-1.jpg" alt="DTG Work 1" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">ภาพวาดดิจิทัล</h3>
                    <p className="text-white/90 text-sm">ความละเอียดสูง สีสันสดใส</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/dtg-work-2.jpg" alt="DTG Work 2" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">ภาพถ่าย HD</h3>
                    <p className="text-white/90 text-sm">คมชัด ได้ทุกรายละเอียด</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/dtg-work-3.jpg" alt="DTG Work 3" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">ลายกราฟิก</h3>
                    <p className="text-white/90 text-sm">สีไล่เฉดสวยงาม</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/dtg-work-4.jpg" alt="DTG Work 4" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">ดีไซน์แบรนด์</h3>
                    <p className="text-white/90 text-sm">งานสร้างสรรค์เฉพาะตัว</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/dtg-work-5.jpg" alt="DTG Work 5" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">ลายอาร์ต</h3>
                    <p className="text-white/90 text-sm">ละเอียดทุกเส้นสาย</p>
                  </div>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/dtg-work-1.jpg" alt="DTG Work 1" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">ภาพวาดดิจิทัล</h3>
                    <p className="text-white/90 text-sm">ความละเอียดสูง สีสันสดใส</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/dtg-work-2.jpg" alt="DTG Work 2" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">ภาพถ่าย HD</h3>
                    <p className="text-white/90 text-sm">คมชัด ได้ทุกรายละเอียด</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/dtg-work-3.jpg" alt="DTG Work 3" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">ลายกราฟิก</h3>
                    <p className="text-white/90 text-sm">สีไล่เฉดสวยงาม</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/dtg-work-4.jpg" alt="DTG Work 4" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">ดีไซน์แบรนด์</h3>
                    <p className="text-white/90 text-sm">งานสร้างสรรค์เฉพาะตัว</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/dtg-work-5.jpg" alt="DTG Work 5" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">ลายอาร์ต</h3>
                    <p className="text-white/90 text-sm">ละเอียดทุกเส้นสาย</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-200 text-sm font-bold mb-6">
              <Star className="w-4 h-4 text-purple-600 fill-current" />
              <span className="text-purple-700">รีวิวจากลูกค้า</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ลูกค้าพูดถึงเรา
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              ความประทับใจจากลูกค้าที่ใช้บริการ DTG จริง
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
              <div className="flex-shrink-0 w-96 bg-white/90 backdrop-blur rounded-2xl border border-purple-100 shadow-lg p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "สั่งเสื้อลายภาพวาดของตัวเองมา ออกมาสวยมาก สีสดใส ความละเอียดเห็นทุกเส้น 
                  ทีมงานให้คำแนะนำดีมาก แนะนำให้ปรับไฟล์เพื่อผลลัพธ์ดีที่สุด"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <ServiceImage src="/images/customers/customer-art.jpg" alt="คุณ อาร์ท" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">คุณ อาร์ท</div>
                    <div className="text-sm text-slate-500">Art Shirt, 1 ตัว</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 bg-white/90 backdrop-blur rounded-2xl border border-pink-100 shadow-lg p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "ทำเสื้อให้แฟนคลับไอดอล พิมพ์ภาพถ่าย HD ลงไป ออกมาคมชัดมาก 
                  ไม่มีขั้นต่ำก็ดี สั่งได้ทีละน้อย คุณภาพดีจริง"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <ServiceImage src="/images/customers/customer-mint.jpg" alt="คุณ มิ้นท์" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">คุณ มิ้นท์</div>
                    <div className="text-sm text-slate-500">Fan Shirt, 3 ตัว</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 bg-white/90 backdrop-blur rounded-2xl border border-blue-100 shadow-lg p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "พิมพ์ภาพถ่ายคู่ลงเสื้อเป็นของขวัญ ความละเอียดสูงมาก สีสวยเหมือนภาพจริง 
                  ได้เสื้อคู่ที่มีความหมาย ประทับใจมากครับ"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <ServiceImage src="/images/customers/customer-tom.jpg" alt="คุณ ต้อม" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">คุณ ต้อม</div>
                    <div className="text-sm text-slate-500">Couple Shirt, 2 ตัว</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 bg-white/90 backdrop-blur rounded-2xl border border-purple-100 shadow-lg p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "ทำเสื้อแบรนด์เล็กๆ ของตัวเอง ต้องการความละเอียดสูง DTG ตอบโจทย์มาก 
                  สีออกมาสวยตามที่ต้องการ ลูกค้าชอบกันทุกคน"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <ServiceImage src="/images/customers/customer-jane.jpg" alt="คุณ เจน" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">คุณ เจน</div>
                    <div className="text-sm text-slate-500">Brand Owner, 20 ตัว</div>
                  </div>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex-shrink-0 w-96 bg-white/90 backdrop-blur rounded-2xl border border-purple-100 shadow-lg p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "สั่งเสื้อลายภาพวาดของตัวเองมา ออกมาสวยมาก สีสดใส ความละเอียดเห็นทุกเส้น 
                  ทีมงานให้คำแนะนำดีมาก แนะนำให้ปรับไฟล์เพื่อผลลัพธ์ดีที่สุด"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <ServiceImage src="/images/customers/customer-art.jpg" alt="คุณ อาร์ท" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">คุณ อาร์ท</div>
                    <div className="text-sm text-slate-500">Art Shirt, 1 ตัว</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 bg-white/90 backdrop-blur rounded-2xl border border-pink-100 shadow-lg p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "ทำเสื้อให้แฟนคลับไอดอล พิมพ์ภาพถ่าย HD ลงไป ออกมาคมชัดมาก 
                  ไม่มีขั้นต่ำก็ดี สั่งได้ทีละน้อย คุณภาพดีจริง"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <ServiceImage src="/images/customers/customer-mint.jpg" alt="คุณ มิ้นท์" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">คุณ มิ้นท์</div>
                    <div className="text-sm text-slate-500">Fan Shirt, 3 ตัว</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 bg-white/90 backdrop-blur rounded-2xl border border-blue-100 shadow-lg p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "พิมพ์ภาพถ่ายคู่ลงเสื้อเป็นของขวัญ ความละเอียดสูงมาก สีสวยเหมือนภาพจริง 
                  ได้เสื้อคู่ที่มีความหมาย ประทับใจมากครับ"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <ServiceImage src="/images/customers/customer-tom.jpg" alt="คุณ ต้อม" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">คุณ ต้อม</div>
                    <div className="text-sm text-slate-500">Couple Shirt, 2 ตัว</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 bg-white/90 backdrop-blur rounded-2xl border border-purple-100 shadow-lg p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "ทำเสื้อแบรนด์เล็กๆ ของตัวเอง ต้องการความละเอียดสูง DTG ตอบโจทย์มาก 
                  สีออกมาสวยตามที่ต้องการ ลูกค้าชอบกันทุกคน"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <ServiceImage src="/images/customers/customer-jane.jpg" alt="คุณ เจน" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">คุณ เจน</div>
                    <div className="text-sm text-slate-500">Brand Owner, 20 ตัว</div>
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
                q: 'สกรีน DTG บนเสื้อสีเข้มได้ไหม?',
                a: 'ได้ครับ โดยเครื่องจะพิมพ์หมึกสีขาวเพื่อเป็นสีรองพื้นก่อน 1 ชั้น แล้วจึงพิมพ์สีอื่นๆ ทับ ทำให้สีลอยเด่นขึ้นมาบนผ้าสีเข้ม สัมผัสบริเวณลายอาจจะหนากว่าการพิมพ์บนผ้าขาวเล็กน้อย แต่ยังคงนุ่มสบายและระบายอากาศได้ดี'
              },
              {
                q: 'ทำไมราคาของ DTG ถึงสูงกว่าเทคนิคอื่น?',
                a: 'เนื่องจากปัจจัยหลายอย่างครับ ทั้งราคาเครื่องพิมพ์และหมึกพิมพ์ที่สูงกว่า, ขั้นตอนการเตรียมผ้า (Pre-treatment) ที่ซับซ้อนกว่า, และใช้เวลาในการพิมพ์ต่อตัวนานกว่า DTF ทำให้ต้นทุนการผลิตโดยรวมสูงขึ้น แต่คุณภาพและความละเอียดก็สูงกว่าด้วย'
              },
              {
                q: 'ต้องสั่งจำนวนขั้นต่ำเท่าไหร่?',
                a: 'ไม่มีขั้นต่ำครับ DTG เหมาะสำหรับงานจำนวนน้อย สามารถสั่งทำเพียง 1 ตัวเพื่อเป็นของขวัญ หรือทำเป็นตัวอย่างก่อนการผลิตจริงก็ได้'
              },
              {
                q: 'DTG เหมาะกับผ้าชนิดไหน?',
                a: 'DTG เหมาะกับผ้าฝ้าย 100% มากที่สุด จะให้ผลลัพธ์ที่ดีที่สุดทั้งความสดของสีและความทนทาน ผ้าโพลีหรือผ้าผสมอาจได้ผลไม่ดีเท่า'
              },
              {
                q: 'ใช้เวลาผลิตนานแค่ไหน?',
                a: '7-14 วันทำการสำหรับงานปริมาณน้อย'
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
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-ci-blue text-sm font-bold mb-6">
              <Shield className="w-4 h-4" />
              <span>ความคงทน</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ความทนทานของงานสกรีน DTG
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              ทนทานระดับกลาง เหมาะกับการใช้งานทั่วไป
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 shadow-lg p-8">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-ci-blue" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">อายุการใช้งาน</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-ci-blue mt-0.5 flex-shrink-0" />
                    <span><strong>50-100 ครั้ง</strong> การซัก ก่อนสีจะเริ่มจางเล็กน้อย</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-ci-blue mt-0.5 flex-shrink-0" />
                    <span>ทนทาน<strong>กว่า DTG แบบธรรมดา</strong> เพราะใช้หมึกและเครื่องคุณภาพสูง</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-ci-blue mt-0.5 flex-shrink-0" />
                    <span>เหมาะกับ<strong>งานที่ไม่ต้องซักบ่อยมาก</strong> เช่น เสื้อคอลเลคชั่น ของขวัญ</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 shadow-lg p-8">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">คุณภาพที่คงอยู่</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>ความละเอียดคงอยู่</strong> ไม่เบลอหรือหลุดลอก</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>สีค่อยๆ จางเท่าๆ กัน</strong> ไม่มีปัญหาสีหลุดเป็นจุด</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>ยืดหยุ่นตามผ้า</strong> ไม่แตกหรือหลุดเมื่อยืดผ้า</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200 p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">เปรียบเทียบความทนทาน</h3>
                  <p className="text-slate-600 leading-relaxed">
                    DTG มีความทนทาน<strong>ปานกลาง</strong> - ดีกว่าสติ๊กเกอร์ แต่<strong>น้อยกว่า DTF และ Silk Screen</strong> 
                    เหมาะกับงานที่ให้ความสำคัญกับความละเอียดและสีสันมากกว่าความทนทานสูงสุด 
                    ถ้าต้องการความทนทานระดับพรีเมียม แนะนำ DTF หรือ Silk Screen
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
              ดูแลอย่างไร ให้ลายอยู่นานขึ้น
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              ปฏิบัติตามคำแนะนำนี้ จะช่วยให้งานสกรีนของคุณทนทานและสวยงามยาวนานขึ้น
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2 text-lg">ซักด้านในออก</h3>
                  <p className="text-white/70 text-sm">
                    พลิกเสื้อด้านที่มีลายเข้าข้างใน ก่อนซัก จะช่วยลดการเสียดสีโดยตรง
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
                  <h3 className="font-bold text-white mb-2 text-lg">ใช้น้ำเย็นหรืออุ่น</h3>
                  <p className="text-white/70 text-sm">
                    หลีกเลี่ยงน้ำร้อนเกิน 40°C เพราะอาจทำให้หมึกจางเร็วขึ้น
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2 text-lg">ห้ามใช้ฟอกขาว</h3>
                  <p className="text-white/70 text-sm">
                    สารฟอกขาว (Bleach) จะทำลายหมึกพิมพ์ ทำให้สีซีดและจางอย่างรวดเร็ว
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
                  <h3 className="font-bold text-white mb-2 text-lg">ตากในที่ร่ม</h3>
                  <p className="text-white/70 text-sm">
                    หลีกเลี่ยงแดดจัด เพราะแสง UV จะทำให้สีจางเร็วขึ้น ตากในร่มหรือที่มีแสงน้อย
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
                  <h3 className="font-bold text-white mb-2 text-lg">รีดด้านหลังลาย</h3>
                  <p className="text-white/70 text-sm">
                    ถ้าต้องรีด ให้รีดด้านหลังของผ้า หรือคลุมผ้าบางๆ ไว้ก่อนรีด
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2 text-lg">ไม่แนะนำเครื่องอแห้ง</h3>
                  <p className="text-white/70 text-sm">
                    ความร้อนสูงจากเครื่องอบอาจทำให้หมึกแตกหรือหลุดลอกได้ ควรตากธรรมชาติ
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <Sparkles className="w-8 h-8 text-ci-yellow flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-3">สรุป: ดูแลง่าย ได้ผลดี</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  งานสกรีน DTG ดูแลไม่ยาก แค่<strong>ซักด้านในออก</strong>, <strong>ใช้น้ำเย็น</strong>, 
                  <strong>ไม่ใช้ฟอกขาว</strong> และ<strong>ตากในที่ร่ม</strong> ก็จะช่วยให้ลายสวยงามอยู่ได้นานขึ้น
                </p>
                <p className="text-white/60 text-sm">
                  💡 <strong>เคล็ดลับ:</strong> การดูแลที่ถูกต้องสามารถยืดอายุงานสกรีนได้ถึง 2-3 เท่า!
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
            <Link href="/services/printing/dtf" className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-ci-blue transition-colors">DTF - Direct to Film</h3>
              <p className="text-slate-600 text-sm mb-4">ทนทานกว่า ใช้ได้กับผ้าหลายชนิด รวมถึงผ้ายืด</p>
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

      {/* Related Pages */}
      <RelatedPagesSection
        title="ขั้นตอนต่อไปคืออะไร?"
        description="พร้อมสกรีนเสื้อแล้ว หรือต้องการสำรวจเพิ่มเติม?"
        pages={[
          {
            title: 'เลือกเสื้อเปล่า',
            description: 'ดูเสื้อคุณภาพหลากหลายรุ่นให้เลือก',
            href: '/products',
            icon: Shirt,
          },
          {
            title: 'คำนวณราคา',
            description: 'ประมาณการราคาเบื้องต้นได้ด้วยตัวเอง',
            href: '/calculator',
            icon: Calculator,
          },
          {
            title: 'ผลงานของเรา',
            description: 'ชมตัวอย่างผลงาน DTG คุณภาพจากโปรเจกต์จริง',
            href: '/portfolio',
            icon: Sparkles,
          },
        ]}
      />

      <FinalCTASection />
    </PageLayout>
  );
}

