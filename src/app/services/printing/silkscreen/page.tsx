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
  TrendingDown,
  Building2,
  Trophy,
  PartyPopper,
  Gift,
  Store,
  GraduationCap,
  Factory,
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

export default function SilkScreenPage() {
  return (
    <PageLayout>
      {/* Hero Section - Silkscreen Character: Industrial, Mass Production, Value */}
      <section className="relative min-h-[70vh] pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        {/* Industrial warm background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50" />
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        
        {/* Bold industrial shapes */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-amber-400/30 to-orange-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-orange-400/30 to-yellow-400/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-8">
            <Link href="/services/printing" className="inline-flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>กลับไปบริการสกรีน</span>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            {/* Badge with factory icon */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10 backdrop-blur-md shadow-lg border border-amber-200/50 text-sm font-semibold mb-8 opacity-0 animate-fade-in-up">
              <TrendingDown className="w-4 h-4 text-amber-600" />
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">มาตรฐานอุตสาหกรรม • Industrial Standard</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in-up delay-100">
              <span className="block text-slate-900 mb-2">Silk Screen</span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">สกรีนซิลค์</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                  <path 
                    d="M2 10C50 2 100 2 150 6C200 10 250 2 298 6" 
                    stroke="url(#underline-gradient-silk)" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    className="animate-draw-line"
                  />
                  <defs>
                    <linearGradient id="underline-gradient-silk" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="50%" stopColor="#fb923c" />
                      <stop offset="100%" stopColor="#eab308" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed opacity-0 animate-fade-in-up delay-200 max-w-2xl mx-auto font-medium">
              เทคนิคดั้งเดิมมาตรฐานโลก <span className="text-amber-600 font-bold">ยิ่งสั่งเยอะ ยิ่งถูก</span> 
              สีสดชัดที่สุด ทนทานที่สุด เหมาะกับ<span className="text-orange-600 font-bold">งานจำนวนมาก</span> 
              ตั้งแต่ 50-1000+ ตัว ราคาโรงงาน
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8 opacity-0 animate-fade-in-up delay-300">
              <span className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full shadow-md border border-amber-100">
                <TrendingDown className="w-4 h-4 text-amber-600" />
                <span className="text-slate-700 font-bold">ยิ่งสั่งเยอะ ยิ่งถูก</span>
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full shadow-md border border-orange-100">
                <Shield className="w-4 h-4 text-orange-600" />
                <span className="text-slate-700 font-bold">ทนทานสุดในบรรดา</span>
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full shadow-md border border-yellow-100">
                <Factory className="w-4 h-4 text-yellow-600" />
                <span className="text-slate-700 font-bold">มาตรฐานโรงงาน</span>
              </span>
            </div>

            <div className="flex justify-center opacity-0 animate-fade-in-up delay-400">
              <a 
                href="/contact" 
                className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
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
                <div className="text-3xl md:text-4xl font-bold text-slate-900">50 ตัว</div>
                <div className="text-sm text-slate-600">ขั้นต่ำ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">80฿+</div>
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

      {/* What is Silk Screen */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-ci-blue text-sm font-bold mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Silk Screen คืออะไร?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                เทคนิคดั้งเดิม<br />
                ที่ทนทานและคุ้มค่าที่สุด
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                <strong>Silk Screen (สกรีนซิลค์)</strong> คือเทคนิคการสกรีนแบบดั้งเดิม 
                ที่ใช้ผ้าไนลอนตึงเป็นตาข่าย จากนั้นปิดส่วนที่ไม่ต้องการด้วยฟิล์ม 
                แล้วใช้ยางรีดผลักหมึกผ่านตาข่ายลงบนผ้า
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                เหมาะสำหรับ<strong>งานจำนวนมาก</strong> (50+ ตัว) เพราะยิ่งสั่งเยอะ 
                <strong>ราคาต่อตัวยิ่งถูก</strong> สีสดชัดและทนทานที่สุดในบรรดาเทคนิคทั้งหมด
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl group">
              <ServiceImage src="/images/printing/silkscreen-process.jpg" alt="Silk Screen Process" />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages & Limitations */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ข้อดี & ข้อควรรู้
            </h2>
            <p className="text-lg text-slate-600">
              ทำไม Silk Screen ถึงเป็นมาตรฐานอุตสาหกรรม
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
                    <strong className="text-slate-900">ราคาต่อตัวถูกที่สุด</strong>
                    <p className="text-slate-600 text-sm">ยิ่งสั่งเยอะ ราคายิ่งถูก เหมาะกับงานจำนวนมาก</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">ทนทานที่สุด</strong>
                    <p className="text-slate-600 text-sm">หมึกซึมลึกเข้าเนื้อผ้า ซักได้หลายพันครั้ง</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">สีสดชัดสุด</strong>
                    <p className="text-slate-600 text-sm">หมึกหนา สีเข้มและสดกว่าเทคนิคอื่น</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">มาตรฐานอุตสาหกรรม</strong>
                    <p className="text-slate-600 text-sm">เทคนิคที่แบรนด์ใหญ่ทั่วโลกใช้กัน</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">สัมผัสนุ่ม</strong>
                    <p className="text-slate-600 text-sm">หมึกซึมลงผ้า ไม่มีชั้นหนาทับ</p>
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
                    <strong className="text-slate-900">ต้องทำฟิล์ม</strong>
                    <p className="text-slate-600 text-sm">แต่ละสีต้องทำฟิล์มแยก มีค่าใช้จ่ายเริ่มต้น</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">มีขั้นต่ำ</strong>
                    <p className="text-slate-600 text-sm">ขั้นต่ำ 50 ตัว เพื่อให้คุ้มกับค่าทำฟิล์ม</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">จำกัดจำนวนสี</strong>
                    <p className="text-slate-600 text-sm">ยิ่งใช้สีเยอะ ต้นทุนยิ่งสูง ไม่เหมาะกับงานหลายสี</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">ใช้เวลานานกว่า</strong>
                    <p className="text-slate-600 text-sm">7-14 วันทำการ เพราะต้องทำฟิล์มก่อน</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Best Use Cases - Continue in next message due to length */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white">
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
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">งานองค์กร จำนวนมาก</h3>
              <p className="text-slate-600 text-sm">
                ยูนิฟอร์มพนักงาน เสื้อบริษัท สั่งเป็น 100-1000+ ตัว
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-100 shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">เสื้อทีม สโมสร</h3>
              <p className="text-slate-600 text-sm">
                ทีมกีฬา ชมรม สโมสร ที่ต้องการความทนทาน
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <PartyPopper className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">อีเว้นท์ งานใหญ่</h3>
              <p className="text-slate-600 text-sm">
                งานวิ่ง คอนเสิร์ต เทศกาล ที่มีผู้เข้าร่วมเยอะ
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-100 shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">ของที่ระลึก ของแจก</h3>
              <p className="text-slate-600 text-sm">
                สินค้าพรีเมียม ของแจกในงาน กิ๊ฟช็อป
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl border border-pink-100 shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <Store className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">ร้านค้า ขายปลีก</h3>
              <p className="text-slate-600 text-sm">
                เสื้อลายเดียวกัน สต็อกขาย จำนวนมาก ราคาถูก
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl border border-cyan-100 shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">เสื้อรุ่น โรงเรียน</h3>
              <p className="text-slate-600 text-sm">
                เสื้อรุ่นพี่ เสื้อนักเรียน ที่ต้องทนการซักบ่อย
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
              ขั้นตอนการผลิตของ <span className="text-ci-yellow">Silk Screen</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              เทคนิคดั้งเดิมที่ผ่านการพิสูจน์มาหลายทศวรรษ
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/printing/silk-film.jpg" alt="Making Film" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  <span className="text-ci-yellow mr-2">01</span>
                  ทำฟิล์ม (Film Making)
                </h3>
                <p className="text-white/80">
                  แยกสีออกเป็นชั้นๆ แล้วทำฟิล์มสำหรับแต่ละสี 
                  ฟิล์มจะเป็นแบบที่จะใช้อัดลงบนผ้าตาข่าย เพื่อสร้างส่วนที่หมึกจะผ่าน
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl group md:order-2">
                <ServiceImage src="/images/printing/silk-screen.jpg" alt="Screen Making" />
              </div>
              <div className="md:order-1">
                <h3 className="text-2xl font-bold text-white mb-3">
                  <span className="text-ci-yellow mr-2">02</span>
                  อัดผ้าตาข่าย (Screen Exposure)
                </h3>
                <p className="text-white/80">
                  เคลือบผ้าตาข่ายด้วยสารไวแสง แล้ววางฟิล์มทับ จากนั้นฉายแสง UV 
                  ส่วนที่ถูกแสงจะแข็งตัว ส่วนที่ถูกฟิล์มบังจะถูกล้างออก 
                  เหลือเป็นรูที่หมึกจะผ่าน
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/printing/silk-printing.jpg" alt="Screen Printing" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  <span className="text-ci-yellow mr-2">03</span>
                  สกรีนลงเสื้อ (Screen Printing)
                </h3>
                <p className="text-white/80">
                  วางผ้าตาข่ายลงบนเสื้อ เทหมึกลงบนผ้าตาข่าย 
                  แล้วใช้ยางรีดผลักหมึกให้ผ่านตาข่ายลงบนเสื้อ 
                  ทำซ้ำในแต่ละสี หากมีหลายสีต้องรอให้แห้งก่อนทับสีถัดไป
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl group md:order-2">
                <ServiceImage src="/images/printing/silk-curing.jpg" alt="Curing" />
              </div>
              <div className="md:order-1">
                <h3 className="text-2xl font-bold text-white mb-3">
                  <span className="text-ci-yellow mr-2">04</span>
                  อบให้แห้ง (Curing)
                </h3>
                <p className="text-white/80">
                  นำเสื้อที่สกรีนแล้วเข้าอบด้วยความร้อนสูง เพื่อให้หมึกแห้งสนิท 
                  และยึดเกาะกับเส้นใยผ้าอย่างถาวร ทำให้ลายสกรีนทนทานต่อการซักและใช้งาน
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
              <span className="gradient-text">ราคา</span>บริการสกรีนตะแกรงไหม
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              ยิ่งสั่งเยอะ ยิ่งคุ้ม! ราคาต่อตัวถูกที่สุดสำหรับงานจำนวนมาก
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                ตัวอย่างราคา (1 สี)
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <div className="text-4xl font-bold text-slate-900 mb-2">100฿</div>
                  <div className="text-slate-600 mb-1">50-99 ตัว</div>
                  <div className="text-xs text-slate-500">+ ค่าฟิล์ม 500฿/สี</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-ci-blue to-ci-blueDark rounded-xl shadow-lg transform scale-105">
                  <div className="text-4xl font-bold text-white mb-2">80฿</div>
                  <div className="text-white mb-1">100-499 ตัว</div>
                  <div className="text-xs text-white/80">ยอดนิยม!</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <div className="text-4xl font-bold text-slate-900 mb-2">60฿</div>
                  <div className="text-slate-600 mb-1">500+ ตัว</div>
                  <div className="text-xs text-slate-500">คุ้มที่สุด!</div>
                </div>
              </div>
              <p className="text-center text-slate-500 text-sm mt-6">
                * ราคาอาจแตกต่างตามขนาดลาย จำนวนสี และชนิดของเสื้อ
              </p>
            </div>

            <div className="text-center max-w-3xl mx-auto bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                ขอใบเสนอราคา<span className="gradient-text">ที่แม่นยำ</span>
              </h3>
              <p className="text-slate-600 mb-6">
                เพื่อให้ได้ราคาที่แม่นยำที่สุด กรุณาแจ้ง: จำนวนที่ต้องการ, จำนวนสี, 
                และขนาดลาย เราจะประเมินราคาให้ทันที
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-ci-blue to-ci-blueDark text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                <Phone className="w-5 h-5" />
                ขอใบเสนอราคา
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>CASE STUDY</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              กรณีศึกษางาน Silk Screen
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              เรื่องราวจริงจากลูกค้าที่เลือก Silk Screen เพื่อความคุ้มค่า
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {/* Case Study 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group order-2 md:order-1">
                <ServiceImage src="/images/case-study/silk-marathon.jpg" alt="Marathon Case" />
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full text-sm font-bold text-amber-700 mb-4">
                  <Trophy className="w-4 h-4" /> Marathon Event
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  งานวิ่งมาราธอน<br />1,500 คน ต้องการราคาประหยัด
                </h3>
                <div className="space-y-3 text-slate-600">
                  <p>
                    <strong className="text-slate-900">ปัญหา:</strong> งานวิ่งใหญ่ 1,500 คน 
                    งบจำกัด ต้องการเสื้อคุณภาพดีแต่ราคาถูก DTG/DTF ราคาสูงเกินไป
                  </p>
                  <p>
                    <strong className="text-slate-900">โซลูชั่น:</strong> Silk Screen ราคาต่อตัวถูกสุด 
                    สำหรับงานจำนวนมาก 1 สี สกรีนง่าย สีสดชัด ทนทาน
                  </p>
                  <p>
                    <strong className="text-slate-900">ผลลัพธ์:</strong> ประหยัดงบ 40% เทียบ DTF 
                    ผู้เข้าร่วมพอใจคุณภาพ จัดซ้ำปีถัดไปอีก 2,000 ตัว
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">1,500 ตัว</span>
                  <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium">1 สี</span>
                  <span className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium">ประหยัด 40%</span>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/case-study/silk-factory-uniform.jpg" alt="Factory Uniform Case" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full text-sm font-bold text-orange-700 mb-4">
                  <Factory className="w-4 h-4" /> Factory Uniform
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  ยูนิฟอร์มโรงงาน<br />ต้องการความทนทานสูง
                </h3>
                <div className="space-y-3 text-slate-600">
                  <p>
                    <strong className="text-slate-900">ปัญหา:</strong> โรงงาน 300 คน 
                    ซักทุกวัน ต้องทนทานมาก DTG/DTF ไม่ทนพอ ต้องเปลี่ยนบ่อย
                  </p>
                  <p>
                    <strong className="text-slate-900">โซลูชั่น:</strong> Silk Screen ทนทานที่สุด 
                    หมึกซึมลึกเข้าเนื้อผ้า ซักได้หลายพันครั้ง ราคาโรงงาน
                  </p>
                  <p>
                    <strong className="text-slate-900">ผลลัพธ์:</strong> ใช้งานได้ 2 ปีเต็ม 
                    ไม่ต้องเปลี่ยนบ่อย ประหยัดต้นทุนระยะยาว สั่งซ้ำเป็นประจำ
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">300 ตัว</span>
                  <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium">ซักทุกวัน</span>
                  <span className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium">ใช้งาน 2 ปี</span>
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
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-200 text-sm font-bold mb-6">
              <ImageIcon className="w-4 h-4 text-amber-600" />
              <span className="text-amber-700">ผลงานจริง</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ตัวอย่างงาน Silk Screen
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              ผลงานจริงจากโรงงานของเรา งานจำนวนมาก สีสดทนทาน
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
                <ServiceImage src="/images/gallery/silk-work-1.jpg" alt="Silk Work 1" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">ยูนิฟอร์มองค์กร</h3>
                    <p className="text-white/90 text-sm">500 ตัว สีสดคมชัด</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/silk-work-2.jpg" alt="Silk Work 2" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">งานอีเว้นท์</h3>
                    <p className="text-white/90 text-sm">1,000 ตัว ราคาถูก</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/silk-work-3.jpg" alt="Silk Work 3" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">เสื้อทีม</h3>
                    <p className="text-white/90 text-sm">ทนทาน ซักไม่จาง</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/silk-work-4.jpg" alt="Silk Work 4" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">เสื้อรุ่น</h3>
                    <p className="text-white/90 text-sm">200 ตัว ทนทานสูง</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/silk-work-5.jpg" alt="Silk Work 5" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">งานโรงงาน</h3>
                    <p className="text-white/90 text-sm">คุณภาพมาตรฐาน</p>
                  </div>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/silk-work-1.jpg" alt="Silk Work 1" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">ยูนิฟอร์มองค์กร</h3>
                    <p className="text-white/90 text-sm">500 ตัว สีสดคมชัด</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/silk-work-2.jpg" alt="Silk Work 2" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">งานอีเว้นท์</h3>
                    <p className="text-white/90 text-sm">1,000 ตัว ราคาถูก</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/silk-work-3.jpg" alt="Silk Work 3" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">เสื้อทีม</h3>
                    <p className="text-white/90 text-sm">ทนทาน ซักไม่จาง</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/silk-work-4.jpg" alt="Silk Work 4" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">เสื้อรุ่น</h3>
                    <p className="text-white/90 text-sm">200 ตัว ทนทานสูง</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl group">
                <ServiceImage src="/images/gallery/silk-work-5.jpg" alt="Silk Work 5" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">งานโรงงาน</h3>
                    <p className="text-white/90 text-sm">คุณภาพมาตรฐาน</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-200 text-sm font-bold mb-6">
              <Star className="w-4 h-4 text-amber-600 fill-current" />
              <span className="text-amber-700">รีวิวจากลูกค้า</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ลูกค้าพูดถึงเรา
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              ความประทับใจจากลูกค้าที่ใช้บริการ Silk Screen จริง
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
              <div className="flex-shrink-0 w-96 bg-white/90 backdrop-blur rounded-2xl border border-amber-100 shadow-lg p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "ทำยูนิฟอร์มพนักงาน 500 ตัว ราคาถูกมาก คุณภาพดีเกินคาด 
                  สีสดชัด ซักมา 1 ปีแล้วยังสวยเหมือนเดิม สั่งซ้ำทุกปี!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <ServiceImage src="/images/customers/customer-somchai.jpg" alt="คุณ สมชาย" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">คุณ สมชาย</div>
                    <div className="text-sm text-slate-500">บริษัทเอกชน, 500 ตัว</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 bg-white/90 backdrop-blur rounded-2xl border border-orange-100 shadow-lg p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "จัดงานวิ่ง 1,000 คน ต้องการเสื้อราคาถูกแต่คุณภาพดี 
                  Silk Screen ตอบโจทย์สุด ผู้เข้าร่วมชอบใจทุกคน"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <ServiceImage src="/images/customers/customer-noi.jpg" alt="คุณ น้อย" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">คุณ น้อย</div>
                    <div className="text-sm text-slate-500">Event Organizer, 1,000 ตัว</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 bg-white/90 backdrop-blur rounded-2xl border border-yellow-100 shadow-lg p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "ทำเสื้อรุ่น 200 ตัว ราคาถูก ทนทานมาก ซักบ่อยไม่ซีดจาง 
                  ใช้ได้ตลอดปีการศึกษา น้องๆ พอใจทุกคน"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <ServiceImage src="/images/customers/customer-teacher.jpg" alt="คุณครูอ้อม" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">คุณครู อ้อม</div>
                    <div className="text-sm text-slate-500">โรงเรียน, 200 ตัว</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 bg-white/90 backdrop-blur rounded-2xl border border-amber-100 shadow-lg p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "ทำเสื้อทีมกีฬา 100 ตัว ยิ่งสั่งเยอะยิ่งถูก 
                  ทนทานจริงๆ ซักมาแล้วหลายเดือนยังสดใหม่"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <ServiceImage src="/images/customers/customer-captain.jpg" alt="คุณ กัปตัน" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">คุณ กัปตัน</div>
                    <div className="text-sm text-slate-500">ทีมฟุตซอล, 100 ตัว</div>
                  </div>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex-shrink-0 w-96 bg-white/90 backdrop-blur rounded-2xl border border-amber-100 shadow-lg p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "ทำยูนิฟอร์มพนักงาน 500 ตัว ราคาถูกมาก คุณภาพดีเกินคาด 
                  สีสดชัด ซักมา 1 ปีแล้วยังสวยเหมือนเดิม สั่งซ้ำทุกปี!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <ServiceImage src="/images/customers/customer-somchai.jpg" alt="คุณ สมชาย" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">คุณ สมชาย</div>
                    <div className="text-sm text-slate-500">บริษัทเอกชน, 500 ตัว</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 bg-white/90 backdrop-blur rounded-2xl border border-orange-100 shadow-lg p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "จัดงานวิ่ง 1,000 คน ต้องการเสื้อราคาถูกแต่คุณภาพดี 
                  Silk Screen ตอบโจทย์สุด ผู้เข้าร่วมชอบใจทุกคน"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <ServiceImage src="/images/customers/customer-noi.jpg" alt="คุณ น้อย" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">คุณ น้อย</div>
                    <div className="text-sm text-slate-500">Event Organizer, 1,000 ตัว</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 bg-white/90 backdrop-blur rounded-2xl border border-yellow-100 shadow-lg p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "ทำเสื้อรุ่น 200 ตัว ราคาถูก ทนทานมาก ซักบ่อยไม่ซีดจาง 
                  ใช้ได้ตลอดปีการศึกษา น้องๆ พอใจทุกคน"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <ServiceImage src="/images/customers/customer-teacher.jpg" alt="คุณครูอ้อม" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">คุณครู อ้อม</div>
                    <div className="text-sm text-slate-500">โรงเรียน, 200 ตัว</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 bg-white/90 backdrop-blur rounded-2xl border border-amber-100 shadow-lg p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "ทำเสื้อทีมกีฬา 100 ตัว ยิ่งสั่งเยอะยิ่งถูก 
                  ทนทานจริงๆ ซักมาแล้วหลายเดือนยังสดใหม่"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <ServiceImage src="/images/customers/customer-captain.jpg" alt="คุณ กัปตัน" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">คุณ กัปตัน</div>
                    <div className="text-sm text-slate-500">ทีมฟุตซอล, 100 ตัว</div>
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
                q: 'ทำไมต้องมีขั้นต่ำ 50 ตัว?',
                a: 'เพราะต้องมีค่าใช้จ่ายในการทำฟิล์มและเตรียมผ้าตาข่ายก่อน (ประมาณ 500-1000 บาท/สี) ถ้าสั่งน้อยเกินไป ราคาต่อตัวจะสูงมาก ไม่คุ้มค่า แนะนำให้สั่งอย่างน้อย 50 ตัวขึ้นไป'
              },
              {
                q: 'ถ้าใช้หลายสี ราคาเป็นอย่างไร?',
                a: 'แต่ละสีจะมีค่าทำฟิล์มและค่าพิมพ์เพิ่มขึ้น ยิ่งใช้สีเยอะ ราคายิ่งสูง แต่ถ้าสั่งจำนวนมาก ราคาต่อตัวยังคุ้มค่า แนะนำให้ใช้ไม่เกิน 4-5 สีเพื่อควบคุมต้นทุน'
              },
              {
                q: 'Silk Screen ทนทานกว่า DTG/DTF จริงไหม?',
                a: 'จริงครับ! Silk Screen เป็นเทคนิคที่ทนทานที่สุด เพราะหมึกซึมลึกเข้าเนื้อผ้า ไม่ใช่แค่ติดผิวเหมือนเทคนิคอื่น จึงทนต่อการซักและใช้งานหนักได้หลายพันครั้ง เหมาะกับงานที่ต้องการความทนทานสูง'
              },
              {
                q: 'ทำไมใช้เวลานานกว่าเทคนิคอื่น?',
                a: 'เพราะต้องมีขั้นตอนการทำฟิล์มและอัดผ้าตาข่ายก่อน ซึ่งใช้เวลา 1-2 วัน หลังจากนั้นจึงจะสกรีนได้ ทั้งหมดรวมประมาณ 7-14 วันทำการ แต่คุณภาพและความคุ้มค่าที่ได้ก็มากกว่า'
              },
              {
                q: 'สั่งซ้ำรอบ 2 ถูกกว่าไหม?',
                a: 'ถูกกว่าครับ! ถ้าเก็บฟิล์มและผ้าตาข่ายไว้ การสั่งซ้ำจะไม่มีค่าทำฟิล์มอีก ทำให้ราคาถูกลงมาก'
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
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-50 text-amber-700 text-sm font-bold mb-6">
              <Shield className="w-4 h-4" />
              <span>ความคงทน</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ความทนทานของงานสกรีน Silk Screen
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              <strong>ทนทานที่สุด</strong> ในบรรดาเทคนิคสกรีนทั้งหมด
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-100 shadow-lg p-8">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <Factory className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">อายุการใช้งาน</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span><strong>500-1000+ ครั้ง</strong> การซัก ยังคงคุณภาพเกือบเหมือนเดิม</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span><strong>ทนทานกว่า DTF ถึง 2 เท่า</strong> และ<strong>กว่า DTG ถึง 5 เท่า</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>เหมาะกับ<strong>ยูนิฟอร์มโรงงาน งานอีเว้นท์ขนาดใหญ่</strong></span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100 shadow-lg p-8">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <Trophy className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">คุณภาพที่คงอยู่</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>สีไม่จางแม้ซักหนัก</strong> หมึกซึมลึกเข้าเนื้อผ้า</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>ไม่หลุดลอกเป็นแผ่น</strong> เพราะหมึกเป็นหนึ่งเดียวกับผ้า</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>ทนต่อแสงแดดและความร้อน</strong> มากกว่าเทคนิคอื่น</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl border border-yellow-200 p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">ทำไม Silk Screen ถึงทนทานที่สุด?</h3>
                  <p className="text-slate-600 leading-relaxed">
                    เพราะใช้<strong>หมึกพิเศษที่ซึมลึกเข้าเส้นใยผ้า</strong> ไม่ใช่แค่ติดผิวเหมือน DTG/DTF - 
                    หมึก<strong>กลายเป็นส่วนหนึ่งของผ้า</strong>จริงๆ ทำให้แทบไม่มีทางหลุดหรือลอก 
                    เหมาะกับงาน<strong>ยูนิฟอร์มที่ซักทุกวัน</strong>, <strong>เสื้อกีฬา</strong>ที่ใช้งานหนัก 
                    หรืองานที่ต้องการ<strong>ใช้นานหลายปี</strong> - 
                    เป็นเหตุผลที่ยี่ห้อใหญ่ๆ เลือกใช้ Silk Screen สำหรับงานผลิตจำนวนมาก
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
              ดูแลง่ายมาก ทนทุกสถานการณ์
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Silk Screen ดูแลง่ายที่สุด ซักได้แรง ใช้ได้หนัก แทบไม่ต้องระวัง
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2 text-lg">ซักได้แรงเท่าที่ต้องการ</h3>
                  <p className="text-white/70 text-sm">
                    ไม่ต้องกังวล ซักในเครื่องซักผ้าได้เลย แม้โหมดซักแรงก็ไม่เป็นไร
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
                  <h3 className="font-bold text-white mb-2 text-lg">ทนน้ำร้อนได้ดี</h3>
                  <p className="text-white/70 text-sm">
                    ซักน้ำร้อนได้ (ไม่เกิน 80°C) เหมาะกับงานที่ต้องฆ่าเชื้อ เช่น ยูนิฟอร์มโรงพยาบาล
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
                  <h3 className="font-bold text-white mb-2 text-lg">ใช้ฟอกขาวได้ (บางชนิด)</h3>
                  <p className="text-white/70 text-sm">
                    ถ้าใช้หมึกพิเศษสำหรับเสื้อขาว สามารถใช้ฟอกขาวได้โดยไม่กระทบสี
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
                  <h3 className="font-bold text-white mb-2 text-lg">ตากแดดได้</h3>
                  <p className="text-white/70 text-sm">
                    ทนแสงแดดได้ดี ไม่จางง่ายเหมือนเทคนิคอื่น ตากแดดจัดก็ไม่เป็นไร
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
                  <h3 className="font-bold text-white mb-2 text-lg">รีดได้ที่อุณหภูมิสูง</h3>
                  <p className="text-white/70 text-sm">
                    ทนความร้อนได้ดีมาก รีดที่อุณหภูมิสูงได้โดยไม่กระทบลาย
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
                  <h3 className="font-bold text-white mb-2 text-lg">อบแห้งได้</h3>
                  <p className="text-white/70 text-sm">
                    ใช้เครื่องอบได้ทุกอุณหภูมิ ไม่มีปัญหา ทนความร้อนได้ดีที่สุด
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <Factory className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-3">สรุป: ทนทานสุดขีด ดูแลง่ายสุด</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Silk Screen คือ<strong>แชมป์ความทนทาน</strong> - 
                  ซักได้แรง ใช้น้ำร้อน รีดได้ อบได้ ตากแดดได้ 
                  เหมาะกับงานที่ต้องการ<strong>ใช้งานหนัก</strong>และ<strong>ซักบ่อยมาก</strong>
                </p>
                <p className="text-white/60 text-sm flex items-start gap-2">
                  <Factory className="w-4 h-4 shrink-0 mt-0.5" />
                  <span><strong>ข้อได้เปรียบ:</strong> ทนทานที่สุด ดูแลง่ายที่สุด และคุ้มค่าที่สุดสำหรับงานจำนวนมาก!</span>
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
              <p className="text-slate-600 text-sm mb-4">เหมาะกับงานสั่งน้อย ความละเอียดสูง สีเยอะ</p>
              <span className="text-ci-blue font-medium flex items-center gap-2">
                ดูรายละเอียด <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link href="/services/printing/dtf" className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-ci-blue transition-colors">DTF - Direct to Film</h3>
              <p className="text-slate-600 text-sm mb-4">ทนทาน ใช้ได้กับผ้าทุกชนิด สั่งน้อยได้</p>
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

