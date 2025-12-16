'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { FinalCTASection } from '@/components/sections';
import Breadcrumb from '@/components/Breadcrumb';
import { 
  Hand,
  Shirt,
  Palette,
  Shield,
  FileImage,
  Star,
  CheckCircle2,
  XCircle,
  Leaf,
  Layers,
  ShoppingBag,
  Gem,
  Zap,
  Info,
  Sparkles,
  Factory,
  Droplets,
  ThermometerSun,
  Wind,
  BadgeDollarSign,
  TrendingUp,
  Users,
  Lightbulb,
  BarChart3,
} from 'lucide-react';

export default function DTFvsDTGPage() {

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        {/* Gradient background with blobs */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50" />
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        
        {/* Animated blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-ci-blue/20 to-blue-300/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-ci-yellow/20 to-amber-300/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-br from-slate-300/20 to-slate-400/20 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1s'}} />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Breadcrumb currentPage="เปรียบเทียบ DTF vs DTG" />
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-ci-blue/10 to-slate-500/10 backdrop-blur-md shadow-lg border border-ci-blue/30 text-sm font-semibold mb-8 opacity-0 animate-fade-in-up">
              <span className="bg-gradient-to-r from-ci-blue to-slate-700 bg-clip-text text-transparent">เปรียบเทียบเทคโนโลยี • Comparison Guide</span>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-4 opacity-0 animate-fade-in-up delay-100">
              <span className="text-ci-blue">DTF</span> vs <span className="text-slate-700">DTG</span> vs <span className="text-slate-600">Silk Screen</span>
            </h1>
            <p className="text-xl md:text-3xl font-bold text-slate-900 mt-2 mb-6 opacity-0 animate-fade-in-up delay-200">เลือกเทคนิคที่ใช่สำหรับคุณ</p>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed opacity-0 animate-fade-in-up delay-300 max-w-3xl mx-auto font-medium">
              เจาะลึกทุกความแตกต่างระหว่าง 3 เทคนิคสกรีน เพื่อค้นพบเทคโนโลยีที่ตอบโจทย์โปรเจกต์ของคุณได้อย่างสมบูรณ์แบบที่สุด
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in-up delay-400">
              <a 
                href="#comparison" 
                className="btn-primary"
              >
                ดูตารางเปรียบเทียบ
              </a>
              <a 
                href="#scenarios" 
                className="btn-secondary"
              >
                ดูสถานการณ์ใช้งาน
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Comparison Section */}
      <section id="comparison" className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              เปรียบเทียบ<span className="text-ci-blue">ทั้ง</span> 3 <span className="text-slate-700">เทคนิค</span>
            </h2>
            <p className="text-lg text-slate-600 mt-4">
              เราแยกคุณสมบัติเด่นของแต่ละเทคโนโลยีออกมาให้เห็นภาพชัดเจน เพื่อง่ายต่อการตัดสินใจของคุณ
            </p>
          </div>

          {/* Mobile Scroll Hint */}
          <div className="md:hidden mb-6 flex items-center justify-center gap-2 text-sm text-slate-700 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 px-5 py-3 rounded-xl border-2 border-amber-200 shadow-sm animate-pulse">
            <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span className="font-semibold text-amber-900">💡 ปัดซ้าย-ขวาเพื่อดูตาราง</span>
            <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>

          {/* Comparison Grid Wrapper */}
          <div className="md:max-w-7xl md:mx-auto overflow-x-auto scrollbar-hide">
            <div className="min-w-[800px] md:min-w-0 grid grid-cols-4 gap-0.5 bg-slate-200 shadow-2xl rounded-2xl overflow-hidden">
            {/* Headers */}
            <div className="p-4 md:p-6 bg-slate-100 flex items-center justify-center">
              <h3 className="text-lg md:text-xl font-bold text-slate-900">คุณสมบัติ</h3>
            </div>
            <div className="p-4 md:p-6 bg-slate-100 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-ci-blue">DTF</h3>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Direct to Film</p>
            </div>
            <div className="p-4 md:p-6 bg-slate-800 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-white">DTG</h3>
              <p className="text-xs font-semibold text-slate-300 uppercase tracking-widest">Direct to Garment</p>
            </div>
            <div className="p-4 md:p-6 bg-slate-700 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-white">Silk Screen</h3>
              <p className="text-xs font-semibold text-slate-300 uppercase tracking-widest">Screen Printing</p>
            </div>

            {/* Row: Feel */}
            <div className="p-4 md:p-6 bg-white font-bold text-slate-900 flex items-center">
              <Hand className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-4 text-ci-yellow flex-shrink-0" />
              <span className="text-sm md:text-base">สัมผัส (Feel)</span>
            </div>
            <div className="p-4 md:p-6 bg-white text-center">
              <p className="font-semibold text-base md:text-lg text-slate-900">เรียบเนียน ยืดหยุ่น</p>
              <p className="text-xs md:text-sm text-slate-600 mt-1">ลายสกรีนเป็นชั้นฟิล์มบางๆ บนผิวผ้า มีความยืดหยุ่นสูง</p>
            </div>
            <div className="p-4 md:p-6 bg-slate-800 text-center text-white">
              <p className="font-semibold text-base md:text-lg">นุ่ม เป็นเนื้อเดียวกับผ้า</p>
              <p className="text-xs md:text-sm text-slate-400 mt-1">หมึกซึมลงในเส้นใยผ้าโดยตรง ระบายอากาศได้ดีเยี่ยม</p>
            </div>
            <div className="p-4 md:p-6 bg-slate-700 text-center text-white">
              <p className="font-semibold text-base md:text-lg">แข็งกว่าเล็กน้อย แต่ทนทาน</p>
              <p className="text-xs md:text-sm text-slate-300 mt-1">หมึกติดเป็นชั้นบางๆ แข็งกว่าเล็กน้อย แต่ทนทานที่สุด</p>
            </div>

            {/* Row: Fabric */}
            <div className="p-4 md:p-6 bg-white font-bold text-slate-900 flex items-center">
              <Shirt className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-4 text-ci-blue flex-shrink-0" />
              <span className="text-sm md:text-base">ชนิดผ้าที่เหมาะสม</span>
            </div>
            <div className="p-4 md:p-6 bg-white text-center">
              <p className="font-semibold text-base md:text-lg text-slate-900">หลากหลายมาก</p>
              <p className="text-xs md:text-sm text-slate-600 mt-1">Cotton, Polyester, TC, CVC, ยีนส์, หนัง, ผ้าใบ, ไนลอน</p>
            </div>
            <div className="p-4 md:p-6 bg-slate-800 text-center text-white">
              <p className="font-semibold text-base md:text-lg">จำกัด</p>
              <p className="text-xs md:text-sm text-slate-400 mt-1">Cotton 100% ดีที่สุด, ผ้าฝ้ายผสมที่เปอร์เซ็นต์สูง</p>
            </div>
            <div className="p-4 md:p-6 bg-slate-700 text-center text-white">
              <p className="font-semibold text-base md:text-lg">ดีมาก</p>
              <p className="text-xs md:text-sm text-slate-300 mt-1">Cotton, Polyester, TC ใช้ได้ดี ผ้าส่วนใหญ่เหมาะสม</p>
            </div>

            {/* Row: Color & Sharpness */}
            <div className="p-4 md:p-6 bg-white font-bold text-slate-900 flex items-center">
              <Palette className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-4 text-pink-500 flex-shrink-0" />
              <span className="text-sm md:text-base">สีและความคมชัด</span>
            </div>
            <div className="p-4 md:p-6 bg-white text-center">
              <p className="font-semibold text-base md:text-lg text-slate-900">สีสด อิ่มตัว คมกริบ</p>
              <p className="text-xs md:text-sm text-slate-600 mt-1">สีลอยเด่นออกจากผ้า เหมาะกับโลโก้, ตัวอักษร, ลายเส้น</p>
            </div>
            <div className="p-4 md:p-6 bg-slate-800 text-center text-white">
              <p className="font-semibold text-base md:text-lg">สีสวย เป็นธรรมชาติ</p>
              <p className="text-xs md:text-sm text-slate-400 mt-1">ไล่เฉดสีได้เนียน เหมาะกับงานภาพถ่าย, ภาพวาด</p>
            </div>
            <div className="p-4 md:p-6 bg-slate-700 text-center text-white">
              <p className="font-semibold text-base md:text-lg">สีสดที่สุด แต่จำกัดสี</p>
              <p className="text-xs md:text-sm text-slate-300 mt-1">สีทึบแน่น คมชัด แต่สีละแผ่นตาข่าย (1-4 สี)</p>
            </div>

            {/* Row: Durability */}
            <div className="p-4 md:p-6 bg-white font-bold text-slate-900 flex items-center">
              <Shield className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-4 text-green-500 flex-shrink-0" />
              <span className="text-sm md:text-base">ความทนทาน</span>
            </div>
            <div className="p-4 md:p-6 bg-white text-center">
              <p className="font-semibold text-base md:text-lg text-slate-900">ทนทานสูง (200-300 ครั้ง)</p>
              <p className="text-xs md:text-sm text-slate-600 mt-1">ไม่แตกลอกง่าย ทนต่อการซักและการขีดข่วน</p>
            </div>
            <div className="p-4 md:p-6 bg-slate-800 text-center text-white">
              <p className="font-semibold text-base md:text-lg">ทนทานปานกลาง (50-100 ครั้ง)</p>
              <p className="text-xs md:text-sm text-slate-400 mt-1">สีจะซีดจางลงตามกาลเวลาและการซัก เหมือนเสื้อพิมพ์แบรนด์</p>
            </div>
            <div className="p-4 md:p-6 bg-slate-700 text-center text-white">
              <p className="font-semibold text-base md:text-lg">ทนทานที่สุด (500-1000+ ครั้ง)</p>
              <p className="text-xs md:text-sm text-slate-300 mt-1">ทนทานสุดในบรรดา หมึกซึมลึกเข้าผ้า แทบไม่จาง</p>
            </div>

            {/* Row: File Limitations */}
            <div className="p-4 md:p-6 bg-white font-bold text-slate-900 flex items-center">
              <FileImage className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-4 text-red-500 flex-shrink-0" />
              <span className="text-sm md:text-base">ข้อจำกัดไฟล์งาน</span>
            </div>
            <div className="p-4 md:p-6 bg-white text-center">
              <p className="font-semibold text-base md:text-lg text-slate-900">ไม่เหมาะกับขอบฟุ้ง</p>
              <p className="text-xs md:text-sm text-slate-600 mt-1">ทำภาพขอบเบลอ, เงาฟุ้ง, หรือลายน้ำโปร่งใสไล่สีไม่ได้</p>
            </div>
            <div className="p-4 md:p-6 bg-slate-800 text-center text-white">
              <p className="font-semibold text-base md:text-lg">ยืดหยุ่นสูง</p>
              <p className="text-xs md:text-sm text-slate-400 mt-1">รองรับไฟล์ภาพทุกประเภท ทั้งภาพถ่ายและกราฟิกไล่สี</p>
            </div>
            <div className="p-4 md:p-6 bg-slate-700 text-center text-white">
              <p className="font-semibold text-base md:text-lg">จำกัดจำนวนสี</p>
              <p className="text-xs md:text-sm text-slate-300 mt-1">1-4 สี ไม่เหมาะกับภาพซับซ้อน แต่สีสดมาก</p>
            </div>

            {/* Row: Ideal For */}
            <div className="p-4 md:p-6 bg-white font-bold text-slate-900 flex items-center">
              <Star className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-4 text-purple-500 flex-shrink-0" />
              <span className="text-sm md:text-base">เหมาะสำหรับ</span>
            </div>
            <div className="p-4 md:p-6 bg-white text-center">
              <p className="font-semibold text-base md:text-lg text-slate-900">เสื้อทีม, เสื้อบริษัท, สินค้าโปรโมชั่น</p>
              <p className="text-xs md:text-sm text-slate-600 mt-1">คุ้มค่าเมื่อผลิตจำนวนมาก</p>
            </div>
            <div className="p-4 md:p-6 bg-slate-800 text-center text-white">
              <p className="font-semibold text-base md:text-lg">แบรนด์แฟชั่น, ของขวัญ, งานพรีเมียม</p>
              <p className="text-xs md:text-sm text-slate-400 mt-1">เหมาะกับงานจำนวนน้อย, ไม่มีขั้นต่ำ</p>
            </div>
            <div className="p-4 md:p-6 bg-slate-700 text-center text-white">
              <p className="font-semibold text-base md:text-lg">ยูนิฟอร์มโรงงาน, อีเว้นท์ขนาดใหญ่</p>
              <p className="text-xs md:text-sm text-slate-300 mt-1">จำนวนมาก 50+ ตัว ยิ่งสั่งเยอะยิ่งถูก</p>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fabric Suitability Section */}
      <section id="fabric-types" className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              ประเภทของ<span className="text-ci-blue">เนื้อผ้า</span>ที่เหมาะสม
            </h2>
            <p className="text-lg text-slate-600 mt-4">
              ข้อจำกัดและความยืดหยุ่นของแต่ละเทคนิค คือปัจจัยสำคัญในการเลือกใช้ให้เหมาะกับสินค้าของคุณ
            </p>
          </div>

          {/* Mobile Scroll Hint */}
          <div className="md:hidden mb-6 flex items-center justify-center gap-2 text-sm text-slate-700 bg-gradient-to-r from-green-50 via-blue-50 to-green-50 px-5 py-3 rounded-xl border-2 border-green-200">
            <span className="font-semibold">👈 ปัดเพื่อดูผ้าชนิดอื่น 👉</span>
          </div>
          
          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Cotton */}
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">ผ้าคอตตอน (Cotton)</h3>
              <div className="space-y-2 text-left text-sm mx-auto w-fit">
                <p><strong className="font-semibold">DTG:</strong> <span className="font-bold text-slate-900">ดีที่สุด</span></p>
                <p><strong className="font-semibold">DTF:</strong> <span className="font-semibold text-slate-700">ดีมาก</span></p>
                <p><strong className="font-semibold">Silk Screen:</strong> <span className="font-semibold text-slate-700">ดีมาก</span></p>
              </div>
            </div>

            {/* Polyester */}
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">โพลีเอสเตอร์ (Polyester)</h3>
              <div className="space-y-2 text-left text-sm mx-auto w-fit">
                <p><strong className="font-semibold">DTG:</strong> <span className="text-slate-500">ไม่แนะนำ</span></p>
                <p><strong className="font-semibold">DTF:</strong> <span className="font-bold text-slate-900">ดีที่สุด</span></p>
                <p><strong className="font-semibold">Silk Screen:</strong> <span className="font-semibold text-slate-700">ดีมาก</span></p>
              </div>
            </div>

            {/* TC/CVC */}
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Layers className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">ผ้าผสม (TC/CVC)</h3>
              <div className="space-y-2 text-left text-sm mx-auto w-fit">
                <p><strong className="font-semibold">DTG:</strong> <span className="text-slate-600">พอใช้ (อาจจาง)</span></p>
                <p><strong className="font-semibold">DTF:</strong> <span className="font-semibold text-slate-700">ดีมาก</span></p>
                <p><strong className="font-semibold">Silk Screen:</strong> <span className="font-semibold text-slate-700">ดีมาก</span></p>
              </div>
            </div>

            {/* Denim */}
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Layers className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">ผ้ายีนส์ (Denim)</h3>
              <div className="space-y-2 text-left text-sm mx-auto w-fit">
                <p><strong className="font-semibold">DTG:</strong> <span className="text-slate-500">ไม่แนะนำ</span></p>
                <p><strong className="font-semibold">DTF:</strong> <span className="font-semibold text-slate-700">ดีมาก</span></p>
                <p><strong className="font-semibold">Silk Screen:</strong> <span className="text-slate-600">พอใช้</span></p>
              </div>
            </div>

            {/* Leather */}
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Gem className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">หนัง (Leather)</h3>
              <div className="space-y-2 text-left text-sm mx-auto w-fit">
                <p><strong className="font-semibold">DTG:</strong> <span className="font-bold text-slate-500">ไม่ได้</span></p>
                <p><strong className="font-semibold">DTF:</strong> <span className="font-semibold text-slate-700">ดีมาก</span></p>
                <p><strong className="font-semibold">Silk Screen:</strong> <span className="text-slate-600">พอใช้</span></p>
              </div>
            </div>

            {/* Canvas */}
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">ผ้าใบ (Canvas)</h3>
              <div className="space-y-2 text-left text-sm mx-auto w-fit">
                <p><strong className="font-semibold">DTG:</strong> <span className="text-slate-500">ไม่แนะนำ</span></p>
                <p><strong className="font-semibold">DTF:</strong> <span className="font-semibold text-slate-700">ดีมาก</span></p>
                <p><strong className="font-semibold">Silk Screen:</strong> <span className="font-semibold text-slate-700">ดีมาก</span></p>
              </div>
            </div>
          </div>
          
          {/* Mobile: Carousel */}
          <div className="md:hidden overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            <div className="flex gap-4 pb-4 px-4" style={{width: 'max-content'}}>
              {[
                { icon: Leaf, bg: 'green', title: 'ผ้าคอตตอน (Cotton)', dtg: 'ดีที่สุด', dtf: 'ดีมาก', silk: 'ดีมาก' },
                { icon: Zap, bg: 'blue', title: 'โพลีเอสเตอร์ (Polyester)', dtg: 'ไม่แนะนำ', dtf: 'ดีที่สุด', silk: 'ดีมาก' },
                { icon: Layers, bg: 'purple', title: 'ผ้าผสม (TC/CVC)', dtg: 'พอใช้ (อาจจาง)', dtf: 'ดีมาก', silk: 'ดีมาก' },
                { icon: Layers, bg: 'indigo', title: 'ผ้ายีนส์ (Denim)', dtg: 'ไม่แนะนำ', dtf: 'ดีมาก', silk: 'พอใช้' },
                { icon: Gem, bg: 'amber', title: 'หนัง (Leather)', dtg: 'ไม่ได้', dtf: 'ดีมาก', silk: 'พอใช้' },
                { icon: ShoppingBag, bg: 'orange', title: 'ผ้าใบ (Canvas)', dtg: 'ไม่แนะนำ', dtf: 'ดีมาก', silk: 'ดีมาก' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="card p-6 text-center snap-center flex-shrink-0" style={{width: '280px'}}>
                    <div className={`w-12 h-12 bg-${item.bg}-100 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`w-6 h-6 text-${item.bg}-600`} />
                    </div>
                    <h3 className="text-lg font-bold mb-4 text-slate-900">{item.title}</h3>
                    <div className="space-y-2 text-left text-sm mx-auto w-fit">
                      <p><strong className="font-semibold">DTG:</strong> <span className={item.dtg.includes('ดีที่สุด') ? 'font-bold text-slate-900' : item.dtg.includes('ไม่') ? 'text-slate-500' : 'text-slate-600'}>{item.dtg}</span></p>
                      <p><strong className="font-semibold">DTF:</strong> <span className={item.dtf.includes('ดีที่สุด') ? 'font-bold text-slate-900' : 'font-semibold text-slate-700'}>{item.dtf}</span></p>
                      <p><strong className="font-semibold">Silk Screen:</strong> <span className={item.silk.includes('ดีมาก') ? 'font-semibold text-slate-700' : 'text-slate-600'}>{item.silk}</span></p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Summary */}
          <div className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-2xl border border-slate-200 shadow-lg flex items-start gap-4">
            <Info className="w-6 h-6 text-slate-500 flex-shrink-0 mt-0.5" />
            <p className="font-semibold text-slate-900">
              <strong>สรุปง่ายๆ:</strong> DTG เหมาะที่สุดกับ Cotton 100%, DTF มีความยืดหยุ่นสูงสุด สามารถสกรีนลงบนผ้าแทบทุกชนิด, 
              ส่วน Silk Screen เหมาะกับ Cotton และ Polyester งานจำนวนมาก
            </p>
          </div>
        </div>
      </section>

      {/* Durability & Peeling Section */}
      <section id="durability" className="py-20 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              <span className="text-ci-blue">ความทนทาน</span>และการ<span className="text-slate-700">ลอกหลุด</span>
            </h2>
            <p className="text-lg text-slate-600 mt-4">
              หนึ่งในคำถามที่พบบ่อยที่สุดคือ ลายสกรีนจะอยู่ได้นานแค่ไหน? ทั้ง 3 เทคนิคมีความทนทานที่ยอดเยี่ยม แต่มีลักษณะการเสื่อมสภาพที่แตกต่างกัน
            </p>
          </div>
          
          {/* Mobile Scroll Hint */}
          <div className="lg:hidden mt-8 mb-6 flex items-center justify-center gap-2 text-sm text-slate-700 bg-gradient-to-r from-blue-50 via-green-50 to-blue-50 px-5 py-3 rounded-xl border-2 border-blue-200">
            <span className="font-semibold">👈 ปัดดูความทนทาน 👉</span>
          </div>
          
          <div className="mobile-scroll-grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
            <div className="card p-8 lg:p-10">
              <h3 className="text-3xl font-bold mb-6 text-slate-900">DTF: ทนทานและยืดหยุ่น</h3>
              <ul className="list-none space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>ไม่แตกลอก:</strong> ชั้นฟิล์มมีความยืดหยุ่นสูงมาก สามารถยืดไปกับเนื้อผ้าได้โดยไม่เกิดรอยแตก
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>ทนต่อการซัก:</strong> ผ่านการทดสอบซักเครื่องได้หลายสิบครั้งโดยที่สีและความคมชัดยังคงเดิม
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>ทนการขีดข่วน:</strong> ผิวของลายสกรีนมีความทนทานต่อการขีดข่วนในชีวิตประจำวัน
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 lg:p-10 rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-3xl font-bold mb-6 text-white">DTG: จางลงอย่างเป็นธรรมชาติ</h3>
              <ul className="list-none space-y-4 text-lg text-white">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <strong>ไม่ลอกเป็นแผ่น:</strong> เนื่องจากหมึกซึมลงในผ้า จึงไม่มีการลอกหลุดออกมาเป็นชั้นฟิล์ม
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <strong>สีซีดลง (Fading):</strong> เมื่อผ่านการซักไปนานๆ สีจะค่อยๆ จางลงอย่างช้าๆและสม่ำเสมอ ให้ลุคแบบวินเทจ
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <strong>เหมือนเสื้อแบรนด์:</strong> ลักษณะการซีดจางจะคล้ายกับเสื้อยืดพิมพ์ลายจากแบรนด์ชั้นนำทั่วไป
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-slate-700 p-8 lg:p-10 rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-3xl font-bold mb-6 text-white">Silk Screen: ทนทานสุดขีด</h3>
              <ul className="list-none space-y-4 text-lg text-white">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-300 mt-1 flex-shrink-0" />
                  <div>
                    <strong>ทนทานที่สุด:</strong> หมึกซึมลึกเข้าเส้นใยผ้า ทนการซักได้ 500-1000+ ครั้ง
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-300 mt-1 flex-shrink-0" />
                  <div>
                    <strong>สีไม่จาง:</strong> สีทึบแน่น ไม่ซีดจางง่าย แม้ซักบ่อยหรือใช้งานหนัก
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-300 mt-1 flex-shrink-0" />
                  <div>
                    <strong>เหมาะงานหนัก:</strong> ยูนิฟอร์มโรงงานที่ต้องซักทุกวัน หรืองานอีเว้นท์ขนาดใหญ่
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* File Limitations Section */}
      <section id="file-limitations" className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              ข้อจำกัดของ<span className="text-ci-blue">ไฟล์</span>และ<span className="text-slate-700">ประเภทงาน</span>
            </h2>
            <p className="text-lg text-slate-600 mt-4">
              ไฟล์งานบางประเภทอาจไม่เหมาะกับเทคนิคการพิมพ์บางชนิด การเลือกให้ถูกต้องจะทำให้งานออกมาสวยงามที่สุด
            </p>
          </div>
          
          {/* Mobile Scroll Hint */}
          <div className="lg:hidden mt-8 mb-6 flex items-center justify-center gap-2 text-sm text-slate-700 bg-gradient-to-r from-red-50 via-orange-50 to-red-50 px-5 py-3 rounded-xl border-2 border-red-200">
            <span className="font-semibold">👈 ปัดดูข้อจำกัด 👉</span>
          </div>
          
          <div className="mobile-scroll-grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
            <div className="card p-8 lg:p-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
                งานที่ไม่เหมาะกับ <span className="text-ci-blue">DTF</span>
              </h3>
              <ul className="list-none space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>ภาพฟุ้ง, ขอบเบลอ:</strong> ไม่สามารถทำขอบของลายให้จางหายไปกับเสื้อได้
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>ลายน้ำ หรือ เงา (Drop Shadow):</strong> เงาที่ฟุ้งๆ จะมีขอบที่ชัดเจนเมื่อพิมพ์ออกมา
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Transparent ไล่เฉดสี:</strong> ความโปร่งใสที่ไล่ระดับสีจะไม่สามารถทำได้
                  </div>
                </li>
              </ul>
              <p className="mt-6 text-sm text-slate-600 bg-slate-100 p-4 rounded-md">
                <strong>เหตุผล:</strong> DTF ต้องใช้ผงกาวในการยึดติด ทำให้ขอบของลายพิมพ์มีความคมชัดเสมอ ไม่สามารถทำเอฟเฟกต์ขอบฟุ้งได้
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 lg:p-10 rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                งานที่ <span className="text-white">DTG</span> ทำได้ดี
              </h3>
              <ul className="list-none space-y-4 text-lg text-white">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <strong>ภาพถ่ายบุคคล, สัตว์เลี้ยง:</strong> ให้สีที่เป็นธรรมชาติ เก็บรายละเอียดได้ดี
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <strong>ภาพวาดสีน้ำ, สีน้ำมัน:</strong> ไล่เฉดสีและแสดงเท็กซ์เจอร์ของลายเส้นได้สวยงาม
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <strong>กราฟิกที่ไล่สีซับซ้อน:</strong> ทำงานประเภท Gradient หรือมีความโปร่งใสได้ดีเยี่ยม
                  </div>
                </li>
              </ul>
              <p className="mt-6 text-sm text-slate-300 bg-slate-900 p-4 rounded-md">
                <strong>เหตุผล:</strong> หมึกของ DTG ซึมลงบนใยผ้าโดยตรง ทำให้ไล่เฉดสีและความโปร่งใสได้อย่างเป็นธรรมชาติ
              </p>
            </div>
            <div className="bg-slate-700 p-8 lg:p-10 rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                <span className="text-white">Silk Screen</span> เหมาะกับงาน
              </h3>
              <ul className="list-none space-y-4 text-lg text-white">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-300 mt-1 flex-shrink-0" />
                  <div>
                    <strong>โลโก้ 1-4 สี:</strong> เหมาะกับลายที่ใช้สีน้อย สีทึบแน่น คมชัด
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-300 mt-1 flex-shrink-0" />
                  <div>
                    <strong>ตัวอักษรและโลโก้ธรรมดา:</strong> งานที่ไม่ซับซ้อน เน้นความคมชัดและทนทาน
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <strong>ไม่เหมาะกับ:</strong> ภาพถ่าย ภาพไล่เฉดสี หรืองานที่มีสีเยอะ (ต้นทุนสูง)
                  </div>
                </li>
              </ul>
              <p className="mt-6 text-sm text-slate-300 bg-slate-800 p-4 rounded-md">
                <strong>เหตุผล:</strong> แต่ละสีต้องทำแผ่นตาข่ายแยก ยิ่งสีเยอะยิ่งแพง แต่เหมาะกับงานจำนวนมากที่ใช้สีน้อย
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section id="scenarios" className="py-20 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              สถานการณ์ไหนที่<span className="text-ci-blue">เหมาะ</span>กับ<span className="text-slate-700">คุณ?</span>
            </h2>
            <p className="text-lg text-slate-600 mt-4">
              เราได้สรุปสถานการณ์การใช้งานจริง เพื่อช่วยให้การตัดสินใจของคุณง่ายและชัดเจนยิ่งขึ้น
            </p>
          </div>
          
          {/* Mobile Scroll Hint */}
          <div className="md:hidden mt-8 mb-4 flex items-center justify-center gap-2 text-sm text-slate-700 bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 px-5 py-3 rounded-xl border-2 border-blue-200 shadow-sm">
            <span className="font-semibold">👈 ปัดซ้าย-ขวาเพื่อดูเทคนิคอื่นๆ 👉</span>
          </div>
          
          {/* Desktop Grid / Mobile Carousel */}
          <div className="mt-16 max-w-7xl mx-auto">
            {/* Desktop: Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8">
            {/* DTF Card */}
            <div className="card p-6 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-slate-900">
                เลือก <span className="text-ci-blue">DTF</span> เมื่อ...
              </h3>
              <ul className="list-none space-y-2 md:space-y-3 text-sm lg:text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-ci-blue mt-0.5 flex-shrink-0" />
                  <div>
                    คุณต้องการทำ <strong className="font-semibold text-slate-900">เสื้อทีม, เสื้อบริษัท, เสื้ออีเวนต์</strong> ที่มีโลโก้สีสันสดใสและคมชัด
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-ci-blue mt-0.5 flex-shrink-0" />
                  <div>
                    เสื้อที่คุณใช้เป็น <strong className="font-semibold text-slate-900">ผ้า Polyester</strong>, เสื้อกีฬา หรือผ้าชนิดอื่นๆ ที่หลากหลาย
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-ci-blue mt-0.5 flex-shrink-0" />
                  <div>
                    คุณต้องการงานที่ <strong className="font-semibold text-slate-900">ทนทานเป็นพิเศษ</strong> และผลิตในจำนวนมากด้วยราคาที่คุ้มค่า
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-ci-blue mt-0.5 flex-shrink-0" />
                  <div>
                    ลายสกรีนของคุณเน้น <strong className="font-semibold text-slate-900">ตัวอักษรและลายเส้น</strong> ที่ต้องการความคมชัดสูงสุด
                  </div>
                </li>
              </ul>
              <div className="mt-6">
                <Link 
                  href="/services/printing/dtf" 
                  className="btn-secondary inline-flex text-sm"
                >
                  เรียนรู้เกี่ยวกับ DTF เพิ่มเติม
                </Link>
              </div>
            </div>
            {/* DTG Card */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 lg:p-8 rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-white">
                เลือก <span className="text-white">DTG</span> เมื่อ...
              </h3>
              <ul className="list-none space-y-2 md:space-y-3 text-sm lg:text-base text-white">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" />
                  <div>
                    คุณต้องการสร้าง <strong className="font-semibold text-white">แบรนด์เสื้อผ้าแฟชั่น</strong> ที่ให้ความรู้สึกพรีเมียม สัมผัสนุ่ม
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" />
                  <div>
                    ลายสกรีนเป็น <strong className="font-semibold text-white">ภาพถ่ายบุคคล</strong> หรือภาพวาดที่มีการไล่สีซับซ้อน
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" />
                  <div>
                    เสื้อที่คุณเลือกใช้เป็น <strong className="font-semibold text-white">Cotton 100% คุณภาพสูง</strong> และต้องการความสบายในการสวมใส่สูงสุด
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" />
                  <div>
                    คุณต้องการสั่งทำ <strong className="font-semibold text-white">เพียงตัวเดียว</strong> เพื่อเป็นของขวัญหรือทดลองทำตัวอย่าง
                  </div>
                </li>
              </ul>
              <div className="mt-6">
                <Link 
                  href="/services/printing/dtg" 
                  className="inline-flex px-4 py-2 text-sm bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 hover:-translate-y-0.5 transition-all duration-300"
                >
                  เรียนรู้เกี่ยวกับ DTG เพิ่มเติม
                </Link>
              </div>
            </div>
            {/* Silk Screen Card */}
            <div className="bg-slate-700 p-6 lg:p-8 rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-white">
                เลือก <span className="text-white">Silk Screen</span> เมื่อ...
              </h3>
              <ul className="list-none space-y-2 md:space-y-3 text-sm lg:text-base text-white">
                <li className="flex items-start gap-2 md:gap-3">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-slate-300 mt-1 flex-shrink-0" />
                  <div>
                    คุณต้องการทำ <strong className="font-semibold text-white">ยูนิฟอร์มโรงงาน งานอีเว้นท์</strong> จำนวนมาก 50+ ตัว
                  </div>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-slate-300 mt-1 flex-shrink-0" />
                  <div className="text-sm md:text-base">
                    ต้องการ <strong className="font-semibold text-white">ราคาถูกที่สุด</strong> เมื่อผลิตจำนวนมาก ยิ่งสั่งเยอะยิ่งคุ้ม
                  </div>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-slate-300 mt-1 flex-shrink-0" />
                  <div className="text-sm md:text-base">
                    ลายสกรีนเป็น <strong className="font-semibold text-white">โลโก้ 1-4 สี</strong> ที่ต้องการความทนทานสูงสุด
                  </div>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-slate-300 mt-1 flex-shrink-0" />
                  <div className="text-sm md:text-base">
                    ต้องการงานที่ <strong className="font-semibold text-white">ทนทานที่สุด</strong> ซักได้หลายร้อย-พันครั้ง
                  </div>
                </li>
              </ul>
              <div className="mt-6">
                <Link 
                  href="/services/printing/silkscreen" 
                  className="inline-flex px-4 py-2 text-sm bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 hover:-translate-y-0.5 transition-all duration-300"
                >
                  เรียนรู้เกี่ยวกับ Silk Screen เพิ่มเติม
                </Link>
              </div>
            </div>
            </div>
            
            {/* Mobile: Horizontal Scroll */}
            <div className="md:hidden relative">
              <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory">
                <div className="flex gap-4 pb-4" style={{width: 'max-content'}}>
                  {/* DTF Card */}
                  <div className="card p-6 snap-center" style={{width: '85vw', maxWidth: '400px'}}>
                    <h3 className="text-xl font-bold mb-4 text-slate-900">
                      เลือก <span className="text-ci-blue">DTF</span> เมื่อ...
                    </h3>
                    <ul className="list-none space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-ci-blue mt-0.5 flex-shrink-0" />
                        <div>
                          คุณต้องการทำ <strong className="font-semibold text-slate-900">เสื้อทีม, เสื้อบริษัท, เสื้ออีเวนต์</strong> ที่มีโลโก้สีสันสดใสและคมชัด
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-ci-blue mt-0.5 flex-shrink-0" />
                        <div>
                          เสื้อที่คุณใช้เป็น <strong className="font-semibold text-slate-900">ผ้า Polyester</strong>, เสื้อกีฬา หรือผ้าชนิดอื่นๆ ที่หลากหลาย
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-ci-blue mt-0.5 flex-shrink-0" />
                        <div>
                          คุณต้องการงานที่ <strong className="font-semibold text-slate-900">ทนทานเป็นพิเศษ</strong> และผลิตในจำนวนมากด้วยราคาที่คุ้มค่า
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-ci-blue mt-0.5 flex-shrink-0" />
                        <div>
                          ลายสกรีนของคุณเน้น <strong className="font-semibold text-slate-900">ตัวอักษรและลายเส้น</strong> ที่ต้องการความคมชัดสูงสุด
                        </div>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link 
                        href="/services/printing/dtf" 
                        className="btn-secondary inline-flex text-sm"
                      >
                        เรียนรู้เกี่ยวกับ DTF เพิ่มเติม
                      </Link>
                    </div>
                  </div>
                  
                  {/* DTG Card */}
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl snap-center" style={{width: '85vw', maxWidth: '400px'}}>
                    <h3 className="text-xl font-bold mb-4 text-white">
                      เลือก <span className="text-white">DTG</span> เมื่อ...
                    </h3>
                    <ul className="list-none space-y-2 text-sm text-white">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" />
                        <div>
                          คุณต้องการสร้าง <strong className="font-semibold text-white">แบรนด์เสื้อผ้าแฟชั่น</strong> ที่ให้ความรู้สึกพรีเมียม สัมผัสนุ่ม
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" />
                        <div>
                          ลายสกรีนเป็น <strong className="font-semibold text-white">ภาพถ่ายบุคคล</strong> หรือภาพวาดที่มีการไล่สีซับซ้อน
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" />
                        <div>
                          เสื้อที่คุณเลือกใช้เป็น <strong className="font-semibold text-white">Cotton 100% คุณภาพสูง</strong> และต้องการความสบายในการสวมใส่สูงสุด
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" />
                        <div>
                          คุณต้องการสั่งทำ <strong className="font-semibold text-white">เพียงตัวเดียว</strong> เพื่อเป็นของขวัญหรือทดลองทำตัวอย่าง
                        </div>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link 
                        href="/services/printing/dtg" 
                        className="inline-flex px-4 py-2 text-sm bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all duration-300"
                      >
                        เรียนรู้เกี่ยวกับ DTG เพิ่มเติม
                      </Link>
                    </div>
                  </div>
                  
                  {/* Silk Screen Card */}
                  <div className="bg-slate-700 p-6 rounded-2xl snap-center" style={{width: '85vw', maxWidth: '400px'}}>
                    <h3 className="text-xl font-bold mb-4 text-white">
                      เลือก <span className="text-white">Silk Screen</span> เมื่อ...
                    </h3>
                    <ul className="list-none space-y-2 text-sm text-white">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" />
                        <div>
                          คุณต้องการผลิตเสื้อ <strong className="font-semibold text-white">จำนวนมาก (50+ ตัว)</strong> ในราคาที่คุ้มค่าที่สุด
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" />
                        <div>
                          ลายสกรีนเป็น <strong className="font-semibold text-white">โลโก้หรือตัวอักษร</strong> สูงสุด 2-3 สี (ไม่ซับซ้อน)
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" />
                        <div>
                          คุณต้องการสีสันที่ <strong className="font-semibold text-white">สดใสที่สุด</strong> และเส้นขอบที่คมชัด
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" />
                        <div>
                          ต้องการงานที่ <strong className="font-semibold text-white">ทนทานที่สุด</strong> ซักได้หลายร้อย-พันครั้ง
                        </div>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link 
                        href="/services/printing/silkscreen" 
                        className="inline-flex px-4 py-2 text-sm bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all duration-300"
                      >
                        เรียนรู้เกี่ยวกับ Silk Screen เพิ่มเติม
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Scroll Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                <div className="w-2 h-2 rounded-full bg-ci-blue"></div>
                <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                <div className="w-2 h-2 rounded-full bg-slate-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Work Comparison Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              ภาพงานจริง<span className="text-ci-blue">เทียบกัน</span>ชัดๆ
            </h2>
            <p className="text-lg text-slate-600 mt-4">
              เห็นความแตกต่างอย่างชัดเจนระหว่างทั้ง 3 เทคนิค จากงานจริงที่ผลิตด้วยมือเรา
            </p>
          </div>

          {/* Mobile Scroll Hint */}
          <div className="md:hidden mb-6 flex items-center justify-center gap-2 text-sm text-slate-700 bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 px-5 py-3 rounded-xl border-2 border-purple-200">
            <span className="font-semibold">👈 ปัดดูภาพงาน 👉</span>
          </div>

          <div className="mobile-scroll-grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* DTF Image */}
            <div className="card overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-ci-blue/10 to-ci-blue/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <Sparkles className="w-16 h-16 text-ci-blue mx-auto mb-4" />
                  <p className="text-slate-500">ภาพงาน DTF จริง</p>
                  <p className="text-sm text-slate-400 mt-2">รอภาพจากทีมงาน</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-ci-blue mb-3">DTF: สีสดใส คมชัด</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ci-blue mt-0.5 flex-shrink-0" />
                    <span>ลายเส้นคมชัดสุด เหมาะกับโลโก้</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ci-blue mt-0.5 flex-shrink-0" />
                    <span>สีสดใส ทนทาน 200-300+ ครั้ง</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ci-blue mt-0.5 flex-shrink-0" />
                    <span>ผิวสัมผัสเรียบนุ่ม ยืดหยุ่นดี</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* DTG Image */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <div className="text-center p-8">
                  <Palette className="w-16 h-16 text-white mx-auto mb-4" />
                  <p className="text-slate-300">ภาพงาน DTG จริง</p>
                  <p className="text-sm text-slate-400 mt-2">รอภาพจากทีมงาน</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">DTG: สัมผัสนุ่ม เป็นธรรมชาติ</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <span>ไล่เฉดสีสวยงาม เหมาะกับภาพถ่าย</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <span>สัมผัสนุ่มที่สุด ไม่รู้สึกว่ามีลาย</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <span>สีจางลงตามธรรมชาติ ลุควินเทจ</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Silk Screen Image */}
            <div className="bg-slate-700 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-square bg-slate-600 flex items-center justify-center">
                <div className="text-center p-8">
                  <Factory className="w-16 h-16 text-white mx-auto mb-4" />
                  <p className="text-slate-300">ภาพงาน Silk Screen จริง</p>
                  <p className="text-sm text-slate-400 mt-2">รอภาพจากทีมงาน</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Silk Screen: ทนทานสุดขีด</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <span>สีทึบแน่น ไม่ซีดจาง 500-1000+ ครั้ง</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <span>เหมาะกับโลโก้ 1-4 สี จำนวนมาก</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <span>ราคาถูกสุดเมื่อผลิตจำนวนมาก</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Comparison Tips */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 rounded-2xl p-6 md:p-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-ci-blue" />
                  เคล็ดลับในการเลือกดู
                </h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li><strong>ความคมชัดของลายเส้น:</strong> DTF ให้ความคมชัดสูงสุด เหมาะกับโลโก้และตัวอักษร</li>
                  <li><strong>การไล่เฉดสี:</strong> DTG ไล่เฉดสีได้สวยงามที่สุด เหมาะกับภาพถ่ายและงานศิลปะ</li>
                  <li><strong>ความทนทาน:</strong> Silk Screen ทนทานที่สุด เหมาะกับงานที่ต้องซักบ่อยหรือใช้งานหนัก</li>
                  <li><strong>สัมผัสของผ้า:</strong> DTG นุ่มที่สุด DTF นุ่มปานกลาง Silk Screen แข็งเล็กน้อย</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Instructions Section */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              วิธีการ<span className="text-ci-blue">ดูแลรักษา</span>ที่เหมาะสม
            </h2>
            <p className="text-lg text-slate-600 mt-4">
              การดูแลที่ถูกวิธีจะช่วยให้งานสกรีนของคุณสวยงามและทนทานยาวนานขึ้น
            </p>
          </div>

          {/* Mobile Scroll Hint */}
          <div className="md:hidden mb-6 flex items-center justify-center gap-2 text-sm text-slate-700 bg-gradient-to-r from-cyan-50 via-blue-50 to-cyan-50 px-5 py-3 rounded-xl border-2 border-cyan-200">
            <span className="font-semibold">👈 ปัดดูวิธีดูแล 👉</span>
          </div>

          <div className="mobile-scroll-grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* DTF Care */}
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-ci-blue/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-ci-blue" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">DTF</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Droplets className="w-5 h-5 text-ci-blue mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">น้ำเย็น-อุ่น:</strong>
                    <p className="text-sm text-slate-600 mt-1">ซักด้วยน้ำเย็นหรืออุ่น (ไม่เกิน 40°C)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Wind className="w-5 h-5 text-ci-blue mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">พลิกด้านใน:</strong>
                    <p className="text-sm text-slate-600 mt-1">พลิกเสื้อด้านในก่อนซักเพื่อป้องกันลาย</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ThermometerSun className="w-5 h-5 text-ci-blue mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">รีดไอน้ำต่ำ:</strong>
                    <p className="text-sm text-slate-600 mt-1">รีดด้านหลังลายด้วยความร้อนต่ำ-กลาง</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">หลีกเลี่ยง:</strong>
                    <p className="text-sm text-slate-600 mt-1">ไม่ควรใช้น้ำยาฟอกขาวหรือเครื่องอบแห้งอุณหภูมิสูง</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-ci-blue/5 rounded-xl">
                <p className="text-xs text-slate-600">
                  <strong className="text-ci-blue">สรุป:</strong> ดูแลง่าย ทนทาน 200-300+ ครั้ง
                </p>
              </div>
            </div>

            {/* DTG Care */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">DTG</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Droplets className="w-5 h-5 text-slate-300 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">น้ำเย็นเท่านั้น:</strong>
                    <p className="text-sm text-slate-300 mt-1">ซักด้วยน้ำเย็น (ไม่เกิน 30°C) เพื่อรักษาสีสัน</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Wind className="w-5 h-5 text-slate-300 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">ระมัดระวัง:</strong>
                    <p className="text-sm text-slate-300 mt-1">พลิกด้านในและซักเบาๆ ไม่ควรซักแรง</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ThermometerSun className="w-5 h-5 text-slate-300 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">รีดอุณหภูมิต่ำ:</strong>
                    <p className="text-sm text-slate-300 mt-1">รีดด้านหลังเท่านั้น ด้วยความร้อนต่ำ</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">ห้ามใช้:</strong>
                    <p className="text-sm text-slate-300 mt-1">ห้ามฟอกขาว ห้ามอบแห้ง ห้ามรีดตรงลาย</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-slate-700 rounded-xl">
                <p className="text-xs text-slate-300">
                  <strong className="text-white">สรุป:</strong> ต้องดูแลอย่างระมัดระวัง ทนทาน 50-100 ครั้ง
                </p>
              </div>
            </div>

            {/* Silk Screen Care */}
            <div className="bg-slate-700 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Factory className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Silk Screen</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">ดูแลง่ายที่สุด:</strong>
                    <p className="text-sm text-slate-300 mt-1">ซักได้ทุกอุณหภูมิ แม้น้ำร้อน</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">รีดได้สบาย:</strong>
                    <p className="text-sm text-slate-300 mt-1">รีดได้แม้อุณหภูมิสูง ไม่กระทบลาย</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">อบแห้งได้:</strong>
                    <p className="text-sm text-slate-300 mt-1">ใช้เครื่องอบแห้งได้ตามปกติ</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">ฟอกขาวได้:</strong>
                    <p className="text-sm text-slate-300 mt-1">บางหมึกทนน้ำยาฟอกขาวได้ (ขึ้นกับชนิดหมึก)</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-slate-600 rounded-xl">
                <p className="text-xs text-slate-300">
                  <strong className="text-white">สรุป:</strong> ดูแลง่ายมาก ทนทาน 500-1000+ ครั้ง
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              เปรียบเทียบ<span className="text-ci-blue">ราคา</span>และความคุ้มค่า
            </h2>
            <p className="text-lg text-slate-600 mt-4">
              ราคาแตกต่างกันตามจำนวน เทคนิค และความซับซ้อนของงาน
            </p>
          </div>

          {/* Mobile Scroll Hint */}
          <div className="md:hidden mb-6 flex items-center justify-center gap-2 text-sm text-slate-700 bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 px-5 py-3 rounded-xl border-2 border-green-200">
            <span className="font-semibold">👈 ปัดดูราคา 👉</span>
          </div>

          <div className="mobile-scroll-grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
            {/* DTF Pricing */}
            <div className="card p-8 border-2 border-ci-blue/20">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-ci-blue/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-ci-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">DTF</h3>
                </div>
                <div className="px-3 py-1 bg-ci-blue/10 text-ci-blue text-xs font-bold rounded-full">
                  ยอดนิยม
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <BadgeDollarSign className="w-6 h-6 text-ci-blue" />
                  <span className="text-3xl font-bold text-slate-900">฿฿</span>
                  <span className="text-slate-600">ปานกลาง</span>
                </div>
                <p className="text-sm text-slate-600">ราคาต่อตัว: 80-200 บาท</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-ci-blue mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700"><strong>10-50 ตัว:</strong> ราคาปานกลาง คุ้มค่า</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-ci-blue mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700"><strong>50+ ตัว:</strong> ลดราคาต่อตัว ยิ่งสั่งเยอะยิ่งคุ้ม</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-ci-blue mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700"><strong>ไม่มีค่าตั้งต้น:</strong> ไม่มีค่าแผ่นพิมพ์</span>
                </li>
              </ul>

              <div className="p-4 bg-gradient-to-r from-ci-blue/5 to-ci-blue/10 rounded-xl">
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-ci-blue mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-slate-700">
                    <strong>คุ้มที่สุดเมื่อ:</strong> สั่งทำ 10-100+ ตัว ลายมีหลายสี ต้องการความทนทาน
                  </p>
                </div>
              </div>
            </div>

            {/* DTG Pricing */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">DTG</h3>
                </div>
                <div className="px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-full">
                  พรีเมียม
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <BadgeDollarSign className="w-6 h-6 text-white" />
                  <span className="text-3xl font-bold text-white">฿฿฿</span>
                  <span className="text-slate-300">ค่อนข้างสูง</span>
                </div>
                <p className="text-sm text-slate-300">ราคาต่อตัว: 150-400 บาท</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white"><strong>1-10 ตัว:</strong> ราคาคงที่ เหมาะงานน้อย</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white"><strong>ไม่มีขั้นต่ำ:</strong> สั่งแค่ตัวเดียวก็ได้</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white"><strong>งานละเอียด:</strong> ราคาแพงกว่าเล็กน้อย</span>
                </li>
              </ul>

              <div className="p-4 bg-slate-700 rounded-xl">
                <div className="flex items-start gap-2">
                  <Gem className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-slate-300">
                    <strong>คุ้มที่สุดเมื่อ:</strong> สั่งทำ 1-20 ตัว ลายมีหลายสี งานคุณภาพสูง แบรนด์แฟชั่น
                  </p>
                </div>
              </div>
            </div>

            {/* Silk Screen Pricing */}
            <div className="bg-slate-700 p-8 rounded-2xl border-2 border-green-500/20">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Factory className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Silk Screen</h3>
                </div>
                <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">
                  คุ้มสุด
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <BadgeDollarSign className="w-6 h-6 text-green-400" />
                  <span className="text-3xl font-bold text-white">฿</span>
                  <span className="text-slate-300">ถูกที่สุด*</span>
                </div>
                <p className="text-sm text-slate-300">ราคาต่อตัว: 30-100 บาท</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white"><strong>50-100 ตัว:</strong> ราคาลดลงมาก</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white"><strong>100+ ตัว:</strong> ถูกที่สุด 30-60 บาท/ตัว</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white"><strong>มีค่าตั้งต้น:</strong> ค่าแผ่นพิมพ์ต่อสี</span>
                </li>
              </ul>

              <div className="p-4 bg-slate-600 rounded-xl">
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-slate-300">
                    <strong>คุ้มที่สุดเมื่อ:</strong> สั่งทำ 100+ ตัว ลาย 1-4 สี ต้องการราคาถูกและทนทานสุด
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Note */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 rounded-2xl p-6 md:p-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-ci-blue" />
                  ปัจจัยที่มีผลต่อราคา
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
                  <div>
                    <strong className="text-slate-900">• จำนวนที่สั่งทำ:</strong> ยิ่งสั่งมากยิ่งถูก (โดยเฉพาะ DTF และ Silk Screen)
                  </div>
                  <div>
                    <strong className="text-slate-900">• จำนวนสี:</strong> Silk Screen ยิ่งสีเยอะยิ่งแพง, DTF/DTG ราคาเท่ากันทุกสี
                  </div>
                  <div>
                    <strong className="text-slate-900">• ขนาดลาย:</strong> ลายใหญ่ราคาแพงกว่าลายเล็ก
                  </div>
                  <div>
                    <strong className="text-slate-900">• ตำแหน่งสกรีน:</strong> สกรีนหลายตำแหน่งเพิ่มราคา
                  </div>
                </div>
                <p className="mt-4 text-xs text-slate-600 italic">
                  * ราคาเป็นเพียงประมาณการ ราคาจริงขึ้นอยู่กับรายละเอียดงาน กรุณาติดต่อสอบถามเพื่อรับใบเสนอราคาที่แม่นยำ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTASection />
    </PageLayout>
  );
}
