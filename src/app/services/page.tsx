'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';
import { FinalCTASection } from '@/components/sections';
import FAQ from '@/components/FAQ';
import Breadcrumb from '@/components/Breadcrumb';
import { ProductCard } from '@/components/services';
import { blankShirts } from '@/data/products';
import { 
  Star, 
  ArrowRight, 
  Printer,
  Scissors,
  Layers,
  Palette,
  Camera,
  PackageCheck,
  CheckCircle2,
  CheckCircle,
  ImageIcon,
  Shirt,
  ChevronLeft,
  ChevronRight,
  Phone,
} from 'lucide-react';

// บริการหลัก (มีหน้าแยก)
const mainServices = [
  {
    id: 'printing',
    title: 'รับสกรีนเสื้อ',
    subtitle: 'DTG, DTF, Silk Screen',
    description: 'รับสกรีนเสื้อครบวงจร เทคโนโลยีการพิมพ์หลากหลายรูปแบบ สกรีนเสื้อไม่มีขั้นต่ำ 1 ตัวก็ทำได้ ไม่ว่าจะงานละเอียดหรืองานจำนวนมาก งานด่วนรับได้',
    icon: Printer,
    image: '/images/services/printing.jpg',
    features: ['สกรีน DTG ความละเอียดสูง', 'สกรีน DTF ทนทาน', 'Silk Screen ราคาถูก', 'ไม่มีขั้นต่ำ 1 ตัวก็รับ'],
    link: '/services/printing',
  },
  {
    id: 'pattern',
    title: 'ทำแพทเทิร์น',
    subtitle: 'ตัดเย็บตามแบบ',
    description: 'รับทำแพทเทิร์นและตัดเย็บเสื้อตามแบบที่คุณต้องการ ทั้งแบบมาตรฐานและแบบ Custom สำหรับแบรนด์ของคุณ',
    icon: Scissors,
    image: '/images/services/pattern.jpg',
    features: ['ทำแพทเทิร์นใหม่', 'ปรับจากแบบเดิม', 'ตัดเย็บคุณภาพสูง', 'งานทุกขนาด'],
    link: '/services/pattern',
  },
  {
    id: 'fabric',
    title: 'เนื้อผ้าหลากหลาย',
    subtitle: '20+ ชนิดผ้า',
    description: 'เลือกเนื้อผ้าได้ตามความต้องการ มีทั้งผ้าฝ้าย ผ้าโพลี ผ้าดรายฟิต และอื่นๆ อีกมากมาย นำเข้าคุณภาพ',
    icon: Layers,
    image: '/images/services/fabric.jpg',
    features: ['20+ ชนิดผ้า', 'ผ้านำเข้าคุณภาพ', 'ทดสอบก่อนผลิต', 'ราคาโรงงาน'],
    link: '/services/fabric',
  },
];

// บริการเสริม (ไม่มีหน้าแยก)
const additionalServices = [
  {
    id: 'design',
    title: 'ออกแบบกราฟิก',
    description: 'ทีมดีไซน์มืออาชีพ',
    fullDescription: 'ทีมดีไซน์เนอร์พร้อมช่วยออกแบบลายเสื้อให้คุณ ตั้งแต่ไอเดียจนถึงไฟล์พร้อมพิมพ์',
    icon: Palette,
    image: '/images/services/design.jpg',
    badge: 'ฟรี!',
    features: ['ออกแบบฟรี', 'แก้ไขไม่จำกัด', 'ไฟล์พร้อมใช้'],
  },
  {
    id: 'photography',
    title: 'ถ่ายภาพสินค้า',
    description: 'Studio ในโรงงาน',
    fullDescription: 'สตูดิโอถ่ายภาพในโรงงาน พร้อมทีมช่างภาพมืออาชีพ ได้ภาพสวยพร้อมขาย',
    icon: Camera,
    image: '/images/services/photography.jpg',
    features: ['สตูดิโอพร้อม', 'ช่างภาพมืออาชีพ', 'รีทัชพร้อมใช้'],
  },
  {
    id: 'qc',
    title: 'QC & แพ็ค',
    description: 'ตรวจสอบทุกตัว',
    fullDescription: 'ระบบ QC ตรวจสอบคุณภาพ 100% ทุกตัวก่อนส่ง พร้อมบริการแพ็คส่ง',
    icon: PackageCheck,
    image: '/images/services/qc.jpg',
    features: ['QC 100%', 'แพ็คอย่างดี', 'ส่งถึงลูกค้า'],
  },
];

// Image with fallback (เหมือนหน้าแรก)
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

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handle hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        // Check if hash matches additional service
        const serviceId = hash.replace('#', '');
        const serviceIndex = additionalServices.findIndex(s => s.id === serviceId);
        
        if (serviceIndex !== -1) {
          // Switch to the matching tab
          setActiveTab(serviceIndex);
          
          // Scroll to additional services section
          setTimeout(() => {
            const element = document.querySelector('#additional-services');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 100);
        }
      }
    };

    // Handle initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    e.preventDefault(); // Prevent text selection
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    carouselRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scroll
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch drag handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        {/* Background - เหมือนหน้าแรก */}
        <div className="absolute inset-0 bg-animated-gradient" />
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-ci-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ci-yellow/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Breadcrumb currentPage="บริการของเรา" />
          
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-white/50 text-sm font-semibold mb-8 opacity-0 animate-fade-in-up">
              <Star className="w-4 h-4 fill-ci-yellow text-ci-yellow" />
              <span className="text-slate-700">บริการครบวงจร</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in-up delay-100">
              <span className="block text-slate-900 mb-2">บริการของเรา</span>
              <span className="relative inline-block">
                <span className="gradient-text">ครบจบในที่เดียว</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                  <path 
                    d="M2 10C50 2 100 2 150 6C200 10 250 2 298 6" 
                    stroke="url(#underline-gradient-services)" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    className="animate-draw-line"
                  />
                  <defs>
                    <linearGradient id="underline-gradient-services" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fec91b" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#fec91b" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
          </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed opacity-0 animate-fade-in-up delay-200 max-w-2xl mx-auto">
              โรงสกรีนมืออาชีพ รับสกรีนเสื้อครบวงจร ออกแบบ ผลิต ถ่ายภาพ แพ็คส่ง — เราดูแลให้ครบทุกขั้นตอน
              ไม่ว่าจะเริ่มต้นจากศูนย์หรือมีแบบพร้อมแล้ว <strong className="text-ci-blue">สกรีนเสื้อไม่มีขั้นต่ำ งานด่วนรับได้</strong>
            </p>

            {/* Checkmarks */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 opacity-0 animate-fade-in-up delay-300">
              <span className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-ci-blue" /> สกรีนเสื้อไม่มีขั้นต่ำ
              </span>
              <span className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-ci-blue" /> งานด่วน 1-3 วัน
              </span>
              <span className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-ci-blue" /> ราคาถูก คุณภาพสูง
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in-up delay-400">
              <a 
                href="/contact" 
                className="group relative px-8 py-4 bg-gradient-to-r from-ci-blue to-ci-blueDark text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  ขอใบเสนอราคา
                  <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs">ฟรี!</span>
                </span>
              </a>
              <a 
                href="#main-services" 
                className="group px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-2xl font-bold text-lg hover:border-ci-blue hover:text-ci-blue hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                ดูบริการทั้งหมด
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12 opacity-0 animate-fade-in-up delay-500">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">6+</div>
                <div className="text-sm text-slate-600">บริการครบวงจร</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">20+</div>
                <div className="text-sm text-slate-600">ชนิดผ้า</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">100%</div>
                <div className="text-sm text-slate-600">QC ทุกตัว</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave - เหมือนหน้าแรก */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path 
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Main Services - Alternating Rows */}
      <section id="main-services" className="py-12 md:py-16 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
        {/* Background - เหมือนหน้าแรก */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-ci-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-ci-blue/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative">
          {/* Header - เหมือนหน้าแรก */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-ci-blue text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>บริการหลัก</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              บริการผลิตเสื้อครบวงจร
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              เลือกบริการที่เหมาะกับคุณ ดูรายละเอียดเพิ่มเติมในแต่ละหน้า
            </p>
          </div>

          {/* Alternating Rows */}
          <div className="space-y-20">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={service.id}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <Link href={service.link} className="block group">
                      <div className="relative h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                        <ServiceImage src={service.image} alt={service.title} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        
                        {/* Icon Badge */}
                        <div className="absolute bottom-6 left-6">
                          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                            <Icon className="w-7 h-7 text-ci-blue" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  
                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="text-5xl md:text-6xl font-bold text-ci-blue/20 leading-none">0{index + 1}</span>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-lg font-medium text-ci-blue mb-4">
                      {service.subtitle}
                    </p>
                    
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

      {/* CTA */}
                    <Link 
                      href={service.link}
                      className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-ci-blue to-ci-blueDark text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                    >
                      ดูรายละเอียด
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blank Shirts Carousel */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-ci-yellow/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-50 text-amber-600 text-sm font-bold mb-6">
                <Shirt className="w-4 h-4" />
                <span>เสื้อเปล่าพร้อมส่ง</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                เสื้อเปล่าหลากหลายแบบ
              </h2>
              <p className="text-lg text-slate-600">
                เลือกเสื้อเปล่าคุณภาพสูง พร้อมสกรีนหรือซื้อเปล่าได้เลย
              </p>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => scrollCarousel('left')}
                className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:border-ci-blue hover:text-ci-blue transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => scrollCarousel('right')}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-ci-blue to-ci-blueDark flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth -mx-4 px-4 cursor-grab active:cursor-grabbing select-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {blankShirts.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-64 md:w-72">
                <ProductCard product={product} showQuickAdd={false} />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-ci-blue to-ci-blueDark text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              สั่งซื้อเสื้อเปล่า
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Additional Services - Grid เหมือนหน้าแรก */}
      <section id="additional-services" className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden scroll-mt-20">
        <div className="absolute top-20 right-10 w-72 h-72 bg-ci-blue/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-ci-blue text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>บริการเสริม</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              บริการเสริมครบวงจร
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              One-Stop Service สำหรับเจ้าของแบรนด์ จบ ครบที่เรา
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeTab === index;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-ci-blue to-ci-blueDark text-white shadow-lg'
                      : 'bg-white text-slate-600 border-2 border-slate-200 hover:border-ci-blue hover:text-ci-blue'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {service.title}
                </button>
              );
            })}
          </div>

          {/* Tab Content - Card style เหมือนหน้าแรก */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-72 lg:h-auto min-h-[350px] group">
                <ServiceImage 
                  src={additionalServices[activeTab].image} 
                  alt={additionalServices[activeTab].title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {additionalServices[activeTab].badge && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-ci-yellow text-slate-900 text-xs font-bold rounded-full">
                      {additionalServices[activeTab].badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  {additionalServices[activeTab].title}
                </h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {additionalServices[activeTab].fullDescription}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {additionalServices[activeTab].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-ci-blue to-ci-blueDark text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all w-fit"
                >
                  ติดต่อสอบถาม
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        title="คำถามที่พบบ่อยเกี่ยวกับบริการ"
        items={[
          {
            question: "DTF, DTG และ Silk Screen แตกต่างกันอย่างไร?",
            answer: "DTF เหมาะกับงานสีสดคมชัด, DTG เหมาะกับลายละเอียดสีเข้มกับผ้าสีอ่อน, Silk Screen เหมาะกับงานจำนวนมากที่มีสีไม่เกิน 4-5 สี สามารถดูรายละเอียดเพิ่มเติมได้ในหน้าเปรียบเทียบเทคนิค"
          },
          {
            question: "รับสกรีนเสื้อตัวเดียวได้ไหม?",
            answer: "ได้ครับ! เราไม่มีขั้นต่ำสำหรับ DTF และ DTG แต่ Silk Screen จะมีขั้นต่ำอยู่ที่ประมาณ 50-100 ตัว เนื่องจากต้องทำฟิล์มและต้นทุนการเตรียมงาน"
          },
          {
            question: "ใช้เวลาผลิตนานแค่ไหน?",
            answer: "โดยปกติ 7-14 วันทำการ ขึ้นอยู่กับจำนวนและความซับซ้อน หากต้องการด่วนสามารถขอ Rush Order ได้ (มีค่าใช้จ่ายเพิ่ม)"
          },
          {
            question: "ต้องส่งไฟล์อะไรบ้าง?",
            answer: "ส่งไฟล์ AI, PDF, PNG ความละเอียดสูง หรือ PSD ได้ หากไม่มีไฟล์ เรามีบริการออกแบบให้ด้วย"
          }
        ]}
      />

      {/* CTA Section */}
      <FinalCTASection />
    </PageLayout>
  );
}
