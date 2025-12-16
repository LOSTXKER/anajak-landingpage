'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { 
  Check, 
  Star, 
  Share2, 
  ChevronLeft, 
  ChevronRight,
  Palette,
  Feather,
  ShoppingBag,
  GitCompare,
  MessageCircle,
  Shirt,
  Thermometer,
  Wind,
  Ban,
  ChevronDown,
  Facebook,
  Send,
  Layers,
  Home,
  Award,
  Weight,
  Ruler,
  Target,
  Sparkles
} from 'lucide-react';

// Product images data
const productImages = [
  { id: 'front', url: 'https://placehold.co/800x800/1f2937/ffffff?text=Front', label: 'ด้านหน้า' },
  { id: 'back', url: 'https://placehold.co/800x800/1f2937/ffffff?text=Back', label: 'ด้านหลัง' },
  { id: 'side', url: 'https://placehold.co/800x800/1f2937/ffffff?text=Side', label: 'ด้านข้าง' },
  { id: 'detail', url: 'https://placehold.co/800x800/1f2937/ffffff?text=Detail', label: 'รายละเอียด' },
];

// Colors data
const colors = [
  { name: 'ดำ', hex: '#1f2937', image: 'https://placehold.co/800x800/1f2937/ffffff?text=Black' },
  { name: 'ขาว', hex: '#ffffff', image: 'https://placehold.co/800x800/ffffff/000000?text=White' },
  { name: 'เทา', hex: '#6b7280', image: 'https://placehold.co/800x800/6b7280/ffffff?text=Gray' },
  { name: 'น้ำเงินกรม', hex: '#1e3a8a', image: 'https://placehold.co/800x800/1e3a8a/ffffff?text=Navy' },
  { name: 'แดง', hex: '#dc2626', image: 'https://placehold.co/800x800/dc2626/ffffff?text=Red' },
  { name: 'เขียว', hex: '#16a34a', image: 'https://placehold.co/800x800/16a34a/ffffff?text=Green' },
  { name: 'เหลือง', hex: '#ca8a04', image: 'https://placehold.co/800x800/ca8a04/ffffff?text=Yellow' },
  { name: 'ชมพู', hex: '#ec4899', image: 'https://placehold.co/800x800/ec4899/ffffff?text=Pink' },
];

// Reviews data
const reviews = [
  {
    id: 1,
    rating: 5,
    comment: 'เนื้อผ้าดีมากครับ ไม่หนาไม่บางเกินไป สกรีนลายออกมาสวยคมชัด ลูกค้าชอบมากครับ สั่งรอบที่สามแล้ว',
    author: 'K. อาทิตย์',
    role: 'เจ้าของแบรนด์ Streetwear'
  },
  {
    id: 2,
    rating: 4.5,
    comment: 'ใช้ทำเสื้อทีมสำหรับงานวิ่งของบริษัท คุณภาพดีเกินราคามากครับ ใส่สบาย ระบายอากาศได้ดีจริง',
    author: 'P. จิราพร',
    role: 'ฝ่ายบุคคลบริษัท Tech Startup'
  }
];

// FAQ data
const faqs = [
  {
    question: 'ผ้าจะหดหรือไม่หลังจากซัก?',
    answer: 'ผ้า Cotton Semi จะมีการหดเล็กน้อยในการซักครั้งแรก ประมาณ 2-3% ซึ่งเป็นเรื่องปกติของผ้าฝ้าย แนะนำให้ซักด้วยน้ำเย็นและตากในที่ร่มเพื่อลดการหด'
  },
  {
    question: 'เหมาะสำหรับสกรีนด้วยเทคนิคอะไรบ้าง?',
    answer: 'เหมาะกับทุกเทคนิคสกรีนครับ ทั้ง DTF, DTG, Screen Print และ Heat Transfer แต่จะแนะนำ DTF และ Screen Print เป็นพิเศษเพราะให้ผลลัพธ์ที่คมชัดสวยงาม'
  },
  {
    question: 'มีขั้นต่ำในการสั่งไหมครับ?',
    answer: 'ไม่มีครับ! เราไม่มีขั้นต่ำสำหรับเสื้อรุ่นนี้ สามารถสั่งได้ตั้งแต่ 1 ตัวขึ้นไป แต่ยิ่งสั่งมากราคายิ่งถูกครับ'
  },
  {
    question: 'ใช้เวลาผลิตนานแค่ไหน?',
    answer: 'ระยะเวลาการผลิตขึ้นอยู่กับจำนวนและเทคนิคสกรีน โดยเฉลี่ย 7-14 วันทำการหลังจากยืนยันออเดอร์ หากต้องการด่วนสามารถปรึกษาได้ครับ'
  }
];

export default function ProductDetailPage() {
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [thumbnailIndex, setThumbnailIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <PageLayout>
      {/* Product Detail Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-ci-blue/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-ci-yellow/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ci-blue/3 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-600 mb-8">
            <Link href="/" className="hover:text-ci-blue transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              หน้าหลัก
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products" className="hover:text-ci-blue transition-colors">
              สินค้า
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 font-semibold">เสื้อยืด Cotton Semi</span>
          </nav>

          {/* Product Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            
            {/* Image Gallery */}
            <div className="lg:sticky lg:top-24">
              {/* Main Image */}
              <div className="mb-4 rounded-3xl bg-white flex items-center justify-center aspect-square shadow-lg border border-slate-100 overflow-hidden group">
                <img 
                  src={selectedImage.url}
                  alt={selectedImage.label}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-ci-blue/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    New Arrival
                  </div>
                </div>
              </div>
              
              {/* Thumbnails */}
              <div className="relative px-10">
                <div className="overflow-hidden">
                  <div className="flex gap-3">
                    {productImages.map((img) => (
                      <button
                        key={img.id}
                        onClick={() => setSelectedImage(img)}
                        className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                          selectedImage.id === img.id
                            ? 'border-ci-blue shadow-lg scale-105'
                            : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-ci-blue/50'
                        }`}
                      >
                        <img src={img.url} alt={img.label} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-100">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-ci-blue/10 text-ci-blue rounded-full text-xs font-semibold mb-3">
                <Award className="w-3.5 h-3.5" />
                เสื้อยืดคุณภาพมาตรฐาน
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                เสื้อยืด Cotton 100% Semi No.32
              </h1>
              
              {/* Price & Badge */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <p className="text-sm text-slate-500 mb-1">ราคาเริ่มต้น</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-ci-blue to-blue-600 bg-clip-text text-transparent">
                    100.-
                  </p>
                </div>
                <span className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                  <Check className="w-4 h-4" />
                  ไม่มีขั้นต่ำ
                </span>
              </div>

              {/* Specifications */}
              <div className="mt-6">
                <h3 className="text-base font-bold mb-3 text-slate-900 flex items-center gap-2">
                  <div className="w-1 h-4 bg-gradient-to-b from-ci-blue to-blue-600 rounded-full" />
                  คุณสมบัติและรายละเอียด
                </h3>
                <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-xl p-4 border border-blue-100">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <Shirt className="w-3 h-3 text-ci-blue" />
                        ทรงเสื้อ
                      </span>
                      <span className="text-slate-900 font-medium">คอกลม / Unisex</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <Sparkles className="w-3 h-3 text-ci-blue" />
                        สัมผัสเนื้อผ้า
                      </span>
                      <span className="text-slate-900 font-medium">นุ่มปานกลาง</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <Target className="w-3 h-3 text-ci-blue" />
                        การตัดเย็บ
                      </span>
                      <span className="text-slate-900 font-medium">ตะเข็บคู่ แข็งแรง</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <Star className="w-3 h-3 text-ci-blue" />
                        ความนุ่ม
                      </span>
                      <div className="flex text-amber-400">
                        {[1, 2, 3].map((i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                        {[4, 5].map((i) => <Star key={i} className="w-3 h-3" />)}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <Layers className="w-3 h-3 text-ci-blue" />
                        ประเภทเส้นใย
                      </span>
                      <span className="text-slate-900 font-medium">ฝ้าย 100%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <Wind className="w-3 h-3 text-ci-blue" />
                        การระบายอากาศ
                      </span>
                      <div className="flex text-amber-400">
                        {[1, 2, 3, 4].map((i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                        <Star className="w-3 h-3" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <Award className="w-3 h-3 text-ci-blue" />
                        เกรดผ้า
                      </span>
                      <span className="text-ci-blue font-bold">Semi-combed</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <Check className="w-3 h-3 text-ci-blue" />
                        ความทนทาน
                      </span>
                      <span className="text-slate-900 font-medium">ปานกลาง</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <Ruler className="w-3 h-3 text-ci-blue" />
                        เบอร์ผ้า
                      </span>
                      <span className="text-slate-900 font-medium">No. 32</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <Shirt className="w-3 h-3 text-ci-blue" />
                        ความยับยาก
                      </span>
                      <span className="text-slate-900 font-medium">ยับง่ายกว่า Comb</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <Weight className="w-3 h-3 text-ci-blue" />
                        ความหนา
                      </span>
                      <span className="text-slate-900 font-medium">155-165 gsm</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <Target className="w-3 h-3 text-ci-blue" />
                        เหมาะสำหรับ
                      </span>
                      <span className="text-slate-900 font-medium">เสื้อทีม, แบรนด์</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Printing Techniques */}
              <div className="mt-6">
                <h3 className="text-base font-bold mb-3 text-slate-900 flex items-center gap-2">
                  <div className="w-1 h-4 bg-gradient-to-b from-ci-blue to-blue-600 rounded-full" />
                  เทคนิคสกรีนที่แนะนำ
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative overflow-hidden p-3 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <Palette className="w-10 h-10 text-ci-blue" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-900 text-sm mb-0.5">DTF (Direct to Film)</p>
                      <p className="text-xs text-slate-600">สีสด คมชัด ติดทนทาน</p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden p-3 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <Feather className="w-10 h-10 text-purple-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-900 text-sm mb-0.5">DTG (Direct to Garment)</p>
                      <p className="text-xs text-slate-600">สัมผัสนุ่ม พิมพ์ลงเนื้อผ้า</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Color Selection */}
              <div className="mt-6">
                <h3 className="text-base font-bold mb-3 text-slate-900 flex items-center gap-2">
                  <div className="w-1 h-4 bg-gradient-to-b from-ci-blue to-blue-600 rounded-full" />
                  เลือกเฉดสี
                  <span className="text-xs font-normal text-slate-500">({colors.length} สี)</span>
                </h3>
                <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-200">
                  <div className="grid grid-cols-8 gap-1.5">
                    {colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={`group relative w-full aspect-square rounded-md border-2 transition-all ${
                          selectedColor.name === color.name
                            ? 'border-ci-blue scale-105 shadow-md ring-2 ring-ci-blue/20'
                            : 'border-slate-300 hover:scale-105 hover:border-ci-blue/50'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      >
                        {selectedColor.name === color.name && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 text-white drop-shadow-lg" strokeWidth={3} />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <Link
                  href="/contact"
                  className="group relative w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-ci-blue via-blue-600 to-blue-700 text-white font-bold rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>ติดต่อเพื่อสั่งผลิต</span>
                </Link>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="#price-table"
                    className="group flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-ci-blue hover:text-ci-blue transition-all text-sm"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    ตารางราคา
                  </a>
                  <Link
                    href="/compare-fabrics"
                    className="group flex items-center justify-center gap-1.5 px-4 py-2.5 bg-slate-50 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-ci-blue hover:text-ci-blue transition-all text-sm"
                  >
                    <GitCompare className="w-4 h-4" />
                    เปรียบเทียบ
                  </Link>
                </div>
              </div>

              {/* Share */}
              <div className="mt-6 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600">แชร์สินค้า:</span>
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-50 text-green-600 hover:bg-green-500 hover:text-white transition-all">
                      <Send className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white transition-all">
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Care Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            เกี่ยวกับเสื้อยืดและวิธีดูแล
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card h-full p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">เกี่ยวกับเสื้อยืดรุ่นนี้</h3>
              <p className="text-slate-600 leading-relaxed">
                เสื้อยืดรุ่นยอดนิยมของเรา ผลิตจากผ้าฝ้าย Semi-combed เบอร์ 32 ที่ให้สัมผัสนุ่มสบายแต่ยังคงรูปทรงสวยงาม 
                เนื้อผ้ามีความหนากำลังดี ไม่บางเกินไป ระบายอากาศได้ดีเยี่ยม เหมาะสำหรับทำเสื้อทีม, เสื้อกิจกรรม, 
                หรือสร้างแบรนด์เสื้อผ้าที่เน้นคุณภาพในราคาที่คุ้มค่า
              </p>
            </div>
            <div className="card h-full p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">คำแนะนำในการดูแลรักษา</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <Shirt className="w-5 h-5 mt-1 text-ci-blue flex-shrink-0" />
                  <span>กลับด้านเสื้อก่อนซักและรีดทุกครั้ง</span>
                </li>
                <li className="flex items-start gap-3">
                  <Thermometer className="w-5 h-5 mt-1 text-ci-blue flex-shrink-0" />
                  <span>ควรซักด้วยน้ำเย็น หลีกเลี่ยงน้ำยาฟอกขาว</span>
                </li>
                <li className="flex items-start gap-3">
                  <Wind className="w-5 h-5 mt-1 text-ci-blue flex-shrink-0" />
                  <span>ควรตากในที่ร่ม หลีกเลี่ยงแดดจัด</span>
                </li>
                <li className="flex items-start gap-3">
                  <Ban className="w-5 h-5 mt-1 text-ci-blue flex-shrink-0" />
                  <span>ห้ามรีดทับบริเวณลายสกรีน</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Size & Price Tables */}
      <section id="price-table" className="py-16 md:py-20 bg-slate-50 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            ตารางไซส์และราคา
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Size Table */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">ตารางไซส์ (หน่วย: นิ้ว)</h3>
              <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-slate-200">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="text-center py-3 px-4 font-semibold text-slate-900">ไซส์</th>
                      <th className="text-center py-3 px-4 font-semibold text-slate-900">รอบอก</th>
                      <th className="text-center py-3 px-4 font-semibold text-slate-900">ความยาว</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['S', '34"', '24"'],
                      ['M', '36"', '26"'],
                      ['L', '40"', '28"'],
                      ['XL', '44"', '30"'],
                      ['2XL', '48"', '32"'],
                      ['3XL', '52"', '34"'],
                      ['4XL', '56"', '35"']
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-100 last:border-0">
                        <td className="text-center py-3 px-4 text-slate-900">{row[0]}</td>
                        <td className="text-center py-3 px-4 text-slate-700">{row[1]}</td>
                        <td className="text-center py-3 px-4 text-slate-700">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Price Table */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">ตารางราคาเสื้อเปล่า (บาท/ตัว)</h3>
              <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-slate-200">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="text-center py-3 px-4 font-semibold text-slate-900">จำนวน</th>
                      <th className="text-center py-3 px-4 font-semibold text-slate-900">1-49 ตัว</th>
                      <th className="text-center py-3 px-4 font-semibold text-slate-900">50-99 ตัว</th>
                      <th className="text-center py-3 px-4 font-semibold text-slate-900">100+ ตัว</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['S-L', '100', '95', '90'],
                      ['XL', '120', '115', '110'],
                      ['2XL', '130', '125', '120'],
                      ['3XL', '140', '135', '130'],
                      ['4XL', '150', '145', '140']
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-100 last:border-0">
                        <td className="text-center py-3 px-4 text-slate-900 font-medium">{row[0]}</td>
                        <td className="text-center py-3 px-4 text-slate-700">{row[1]}</td>
                        <td className="text-center py-3 px-4 text-slate-700">{row[2]}</td>
                        <td className="text-center py-3 px-4 text-ci-blue font-semibold">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-slate-500 mt-3">
                *ราคานี้ยังไม่รวมค่าสกรีน ติดต่อเพื่อขอใบเสนอราคา
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews & FAQ */}
      <section id="reviews" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            รีวิวและคำถามที่พบบ่อย
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Reviews */}
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="card p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-amber-400">
                      {Array.from({ length: Math.floor(review.rating) }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                      {review.rating % 1 !== 0 && <Star className="w-5 h-5 fill-current opacity-50" />}
                    </div>
                  </div>
                  <p className="text-slate-600 italic mb-4">"{review.comment}"</p>
                  <p className="font-bold text-slate-900">- {review.author}</p>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div className="card p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">คำถามที่พบบ่อย</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-slate-200 last:border-0 pb-4 last:pb-0">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="flex justify-between items-center w-full text-left"
                    >
                      <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                          openFAQ === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFAQ === index ? 'max-h-96 mt-3' : 'max-h-0'
                      }`}
                    >
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="case-studies" className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            Case Study: ลูกค้าของเรา
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Case Study 1: Indie Band */}
            <div className="card overflow-hidden !p-0">
              <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900">
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                  Indie Band Merch
                </div>
              </div>
              <div className="p-6 md:p-8">
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                  เสื้อวงดนตรี
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2">แบรนด์ 'ลายเส้น'</h3>
                <p className="text-slate-600 mt-3 leading-relaxed">
                  วงดนตรีอินดี้ "ลายเส้น" เลือกใช้เสื้อ Cotton Semi No.32 สำหรับทำ Merchandise ของวง 
                  เพื่อขายในงานคอนเสิร์ต ด้วยคุณภาพผ้าที่ดีและราคาที่เหมาะสม ทำให้แฟนคลับประทับใจ
                </p>
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <p className="text-slate-600 italic">
                    "เราอยากได้เสื้อที่คุณภาพดีแต่ราคาไม่แรงเกินไปสำหรับแฟนคลับ เสื้อรุ่นนี้ตอบโจทย์มากครับ 
                    ผ้าใส่สบาย ทรงสวย สกรีนลายเส้นของเราออกมาได้คมชัดมาก"
                  </p>
                  <p className="mt-3 font-bold text-slate-900">- นักร้องนำวง 'ลายเส้น'</p>
                </div>
              </div>
            </div>

            {/* Case Study 2: Tech Company */}
            <div className="card overflow-hidden !p-0">
              <div className="relative h-64 bg-gradient-to-br from-ci-blue to-blue-600">
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                  Tech Event Staff
                </div>
              </div>
              <div className="p-6 md:p-8">
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                  เสื้อทีมงานอีเว้นท์
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2">Tech Conference 2025</h3>
                <p className="text-slate-600 mt-3 leading-relaxed">
                  ผู้จัดงาน Tech Conference ประจำปี เลือกใช้เสื้อรุ่นนี้สำหรับทีมงาน Staff ทุกคน 
                  ด้วยสีที่หลากหลายและเนื้อผ้าที่ใส่สบายตลอดวัน ทำให้ทีมงานดูเป็นมืออาชีพและคล่องตัว
                </p>
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <p className="text-slate-600 italic">
                    "เสื้อตัวนี้เหมาะกับทีมงานของเรามากครับ ใส่สบาย ระบายอากาศดี ทำงานกลางแจ้งได้ทั้งวัน 
                    ที่สำคัญคือมีหลายสีให้เลือก ทำให้เราคุมโทนสีของงานได้ง่าย"
                  </p>
                  <p className="mt-3 font-bold text-slate-900">- ผู้จัดการฝ่ายอีเว้นท์</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More About Screen Printing */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            เรียนรู้เพิ่มเติมเกี่ยวกับเทคนิคสกรีน
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/services/printing/dtf"
              className="card-interactive group p-6 md:p-8"
            >
              <Palette className="w-12 h-12 text-ci-blue mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">สกรีน DTF (Direct to Film)</h3>
              <p className="text-slate-600 mb-4">
                สีสด คมชัดทุกรายละเอียด ติดทนทาน เหมาะกับงานกราฟิกและโลโก้
              </p>
              <span className="font-semibold text-slate-900 group-hover:text-ci-blue transition-colors inline-flex items-center gap-2">
                ดูรายละเอียดเพิ่มเติม
                <ChevronRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/services/printing/dtg"
              className="card-interactive group p-6 md:p-8"
            >
              <Feather className="w-12 h-12 text-ci-blue mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">สกรีน DTG (Direct to Garment)</h3>
              <p className="text-slate-600 mb-4">
                พิมพ์ลายลงบนเนื้อผ้าโดยตรง สัมผัสนุ่มสบาย เหมาะกับงานภาพถ่าย
              </p>
              <span className="font-semibold text-slate-900 group-hover:text-ci-blue transition-colors inline-flex items-center gap-2">
                ดูรายละเอียดเพิ่มเติม
                <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            สินค้าอื่นๆ ที่คุณอาจสนใจ
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/products/t-003" className="card-interactive overflow-hidden group !p-0">
              <div className="relative aspect-square bg-gradient-to-br from-purple-100 to-purple-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shirt className="w-20 h-20 text-purple-400" />
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-lg text-slate-900 mb-1 group-hover:text-ci-blue transition-colors">เสื้อโปโล Pique</h4>
                <p className="text-slate-600 text-sm">สำหรับยูนิฟอร์ม, เสื้อบริษัท</p>
              </div>
            </Link>

            <Link href="/products/t-006" className="card-interactive overflow-hidden group !p-0">
              <div className="relative aspect-square bg-gradient-to-br from-slate-100 to-slate-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shirt className="w-20 h-20 text-slate-400" />
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-lg text-slate-900 mb-1 group-hover:text-ci-blue transition-colors">เสื้อฮู้ด Fleece</h4>
                <p className="text-slate-600 text-sm">สำหรับแบรนด์สตรีทแวร์</p>
              </div>
            </Link>

            <Link href="/products/f-003" className="card-interactive overflow-hidden group !p-0">
              <div className="relative aspect-square bg-gradient-to-br from-green-100 to-green-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Layers className="w-20 h-20 text-green-500" />
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-lg text-slate-900 mb-1 group-hover:text-ci-blue transition-colors">Cotton Comb No.32</h4>
                <p className="text-slate-600 text-sm">เนื้อผ้าพรีเมียม นุ่มพิเศษ</p>
              </div>
            </Link>

            <Link href="/products/t-002" className="card-interactive overflow-hidden group !p-0">
              <div className="relative aspect-square bg-gradient-to-br from-red-100 to-red-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shirt className="w-20 h-20 text-red-400" />
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-lg text-slate-900 mb-1 group-hover:text-ci-blue transition-colors">เสื้อ Dry-Tech</h4>
                <p className="text-slate-600 text-sm">สำหรับเสื้อวิ่ง, เสื้อกีฬา</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}


