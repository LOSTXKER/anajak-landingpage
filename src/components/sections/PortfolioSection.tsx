'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Award, ImageIcon, Star } from 'lucide-react';
import { ImagesBySection } from '@/types/admin';
import ImageSlotOverlay from '@/components/ImageSlotOverlay';

interface PortfolioSectionProps {
  className?: string;
  images?: ImagesBySection;
}

// Default portfolio images
const defaultPortfolioImages = [
  { id: 1, src: '/images/portfolio/1.jpg', alt: 'ผลงานเสื้อบริษัท', category: 'บริษัท', slot: 'portfolio-1' },
  { id: 2, src: '/images/portfolio/2.jpg', alt: 'ผลงานเสื้อโรงเรียน', category: 'โรงเรียน', slot: 'portfolio-2' },
  { id: 3, src: '/images/portfolio/3.jpg', alt: 'ผลงานเสื้อทีมกีฬา', category: 'ทีมกีฬา', slot: 'portfolio-3' },
  { id: 4, src: '/images/portfolio/4.jpg', alt: 'ผลงานเสื้อแบรนด์', category: 'แบรนด์', slot: 'portfolio-4' },
  { id: 5, src: '/images/portfolio/5.jpg', alt: 'ผลงานเสื้ออีเวนต์', category: 'อีเวนต์', slot: 'portfolio-5' },
  { id: 6, src: '/images/portfolio/6.jpg', alt: 'ผลงานเสื้อ FC', category: 'แฟนคลับ', slot: 'portfolio-6' },
  { id: 7, src: '/images/portfolio/7.jpg', alt: 'ผลงานเสื้อ Hoodie', category: 'Hoodie', slot: 'portfolio-7' },
  { id: 8, src: '/images/portfolio/8.jpg', alt: 'ผลงานเสื้อโปโล', category: 'โปโล', slot: 'portfolio-8' },
  { id: 9, src: '/images/portfolio/9.jpg', alt: 'ผลงานเสื้อ Oversize', category: 'Oversize', slot: 'portfolio-9' },
  { id: 10, src: '/images/portfolio/10.jpg', alt: 'ผลงานเสื้อทีมวิ่ง', category: 'วิ่ง', slot: 'portfolio-10' },
  { id: 11, src: '/images/portfolio/11.jpg', alt: 'ผลงานเสื้อคอกลม', category: 'คอกลม', slot: 'portfolio-11' },
  { id: 12, src: '/images/portfolio/12.jpg', alt: 'ผลงานเสื้อแขนยาว', category: 'แขนยาว', slot: 'portfolio-12' },
  { id: 13, src: '/images/portfolio/13.jpg', alt: 'ผลงานเสื้อคอปก', category: 'คอปก', slot: 'portfolio-13' },
  { id: 14, src: '/images/portfolio/14.jpg', alt: 'ผลงานเสื้อ Crop Top', category: 'Crop Top', slot: 'portfolio-14' },
  { id: 15, src: '/images/portfolio/15.jpg', alt: 'ผลงานเสื้อสกรีนหลัง', category: 'สกรีนหลัง', slot: 'portfolio-15' },
  { id: 16, src: '/images/portfolio/16.jpg', alt: 'ผลงานเสื้อทีมบาส', category: 'ทีมบาส', slot: 'portfolio-16' },
  { id: 17, src: '/images/portfolio/17.jpg', alt: 'ผลงานเสื้อวงดนตรี', category: 'วงดนตรี', slot: 'portfolio-17' },
  { id: 18, src: '/images/portfolio/18.jpg', alt: 'ผลงานเสื้อคาเฟ่', category: 'คาเฟ่', slot: 'portfolio-18' },
  { id: 19, src: '/images/portfolio/19.jpg', alt: 'ผลงานเสื้อมหาวิทยาลัย', category: 'มหาวิทยาลัย', slot: 'portfolio-19' },
  { id: 20, src: '/images/portfolio/20.jpg', alt: 'ผลงานเสื้อร้านอาหาร', category: 'ร้านอาหาร', slot: 'portfolio-20' },
  { id: 21, src: '/images/portfolio/21.jpg', alt: 'ผลงานเสื้อแคมป์', category: 'แคมป์', slot: 'portfolio-21' },
  { id: 22, src: '/images/portfolio/22.jpg', alt: 'ผลงานเสื้อฟิตเนส', category: 'ฟิตเนส', slot: 'portfolio-22' },
  { id: 23, src: '/images/portfolio/23.jpg', alt: 'ผลงานเสื้อชมรม', category: 'ชมรม', slot: 'portfolio-23' },
  { id: 24, src: '/images/portfolio/24.jpg', alt: 'ผลงานเสื้อเทศกาล', category: 'เทศกาล', slot: 'portfolio-24' },
  { id: 25, src: '/images/portfolio/25.jpg', alt: 'ผลงานเสื้อ Streetwear', category: 'Streetwear', slot: 'portfolio-25' },
  { id: 26, src: '/images/portfolio/26.jpg', alt: 'ผลงานเสื้อทีมฟุตบอล', category: 'ทีมฟุตบอล', slot: 'portfolio-26' },
];

// Image with fallback
function PortfolioImage({ src, alt, category }: { src: string; alt: string; category: string }) {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-ci-blue to-ci-blueDark flex flex-col items-center justify-center">
        <ImageIcon className="w-8 h-8 text-white/40 mb-2" />
        <span className="text-sm text-white/60 font-medium">{category}</span>
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
      sizes="300px"
    />
  );
}

export default function PortfolioSection({ className = '', images = {} }: PortfolioSectionProps) {
  // Merge with Supabase images
  const portfolioImages = defaultPortfolioImages.map(img => ({
    ...img,
    src: images[img.slot]?.url || img.src,
    alt: images[img.slot]?.alt || img.alt,
  }));
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeRef, setActiveRef] = useState<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent, ref: HTMLDivElement | null) => {
    if (!ref || !isMobile) return;
    e.preventDefault();
    setIsDragging(true);
    setActiveRef(ref);
    setStartX(e.pageX - ref.offsetLeft);
    setScrollLeft(ref.scrollLeft);
    ref.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (activeRef) {
      activeRef.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (activeRef) {
      activeRef.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !activeRef) return;
    e.preventDefault();
    const x = e.pageX - activeRef.offsetLeft;
    const walk = (x - startX) * 2;
    activeRef.scrollLeft = scrollLeft - walk;
  };

  // Touch drag handlers
  const handleTouchStart = (e: React.TouchEvent, ref: HTMLDivElement | null) => {
    if (!ref) return;
    setIsDragging(true);
    setActiveRef(ref);
    setStartX(e.touches[0].pageX - ref.offsetLeft);
    setScrollLeft(ref.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !activeRef) return;
    const x = e.touches[0].pageX - activeRef.offsetLeft;
    const walk = (x - startX) * 2;
    activeRef.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section id="portfolio" className={`py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden ${className}`}>
      {/* Background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-ci-yellow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-ci-blue/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative mb-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-50 text-yellow-600 text-sm font-bold mb-6">
            <Award className="w-4 h-4" />
            <span>ผลงานของเรา</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            ผลงานที่<span className="gradient-text">ภาคภูมิใจ</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            เราได้มีโอกาสผลิตเสื้อให้กับองค์กรชั้นนำมากมาย
          </p>
        </div>
      </div>

      {/* Infinite Scroll Gallery - Row 1 (left to right) */}
      <div className="relative mb-4 overflow-hidden">
        <div
          ref={scrollRef1}
          className={`flex gap-4 ${
            isMobile 
              ? 'overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none' 
              : 'animate-marquee-left'
          }`}
          style={isMobile ? { scrollbarWidth: 'none', msOverflowStyle: 'none' } : {}}
          onMouseDown={(e) => handleMouseDown(e, scrollRef1.current)}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={(e) => handleTouchStart(e, scrollRef1.current)}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* First set */}
          {portfolioImages.map((img) => (
            <ImageSlotOverlay key={`1-${img.id}`} sectionId="portfolio" slotId={img.slot} className="shrink-0">
              <div className="relative w-72 h-48 md:w-80 md:h-56 rounded-2xl overflow-hidden group">
                <PortfolioImage src={img.src} alt={img.alt} category={img.category} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-slate-900">
                    {img.category}
                  </span>
                </div>
              </div>
            </ImageSlotOverlay>
          ))}
          {/* Second set (duplicate for seamless loop) */}
          {portfolioImages.map((img) => (
            <div 
              key={`2-${img.id}`}
              className="relative w-72 h-48 md:w-80 md:h-56 rounded-2xl overflow-hidden shrink-0 group"
            >
              <PortfolioImage src={img.src} alt={img.alt} category={img.category} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-slate-900">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Scroll Gallery - Row 2 (right to left) */}
      <div className="relative mb-12 overflow-hidden">
        <div
          ref={scrollRef2}
          className={`flex gap-4 ${
            isMobile 
              ? 'overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none' 
              : 'animate-marquee-right'
          }`}
          style={isMobile ? { scrollbarWidth: 'none', msOverflowStyle: 'none' } : {}}
          onMouseDown={(e) => handleMouseDown(e, scrollRef2.current)}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={(e) => handleTouchStart(e, scrollRef2.current)}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* First set */}
          {[...portfolioImages].reverse().map((img) => (
            <div 
              key={`3-${img.id}`}
              className="relative w-72 h-48 md:w-80 md:h-56 rounded-2xl overflow-hidden shrink-0 group"
            >
              <PortfolioImage src={img.src} alt={img.alt} category={img.category} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-slate-900">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
          {/* Second set (duplicate for seamless loop) */}
          {[...portfolioImages].reverse().map((img) => (
            <div 
              key={`4-${img.id}`}
              className="relative w-72 h-48 md:w-80 md:h-56 rounded-2xl overflow-hidden shrink-0 group"
            >
              <PortfolioImage src={img.src} alt={img.alt} category={img.category} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-slate-900">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-ci-blue to-ci-blueDark rounded-2xl p-6 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-1">300+</div>
                <div className="text-white/70 text-sm">โปรเจคทั้งหมด</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-1">5+</div>
                <div className="text-white/70 text-sm">ปีประสบการณ์</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-1">100K+</div>
                <div className="text-white/70 text-sm">เสื้อที่ผลิต</div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-1 text-2xl md:text-3xl font-bold mb-1">
                  4.9 <Star className="w-5 h-5 text-ci-yellow fill-ci-yellow" />
                </div>
                <div className="text-white/70 text-sm">คะแนนความพอใจ</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 90s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 90s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
