'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Award, ImageIcon, Star } from 'lucide-react';

interface PortfolioSectionProps {
  className?: string;
}

// Portfolio images - duplicated for infinite scroll effect
const portfolioImages = [
  { id: 1, src: '/images/portfolio/1.jpg', alt: 'ผลงานเสื้อบริษัท', category: 'บริษัท' },
  { id: 2, src: '/images/portfolio/2.jpg', alt: 'ผลงานเสื้อโรงเรียน', category: 'โรงเรียน' },
  { id: 3, src: '/images/portfolio/3.jpg', alt: 'ผลงานเสื้อทีมกีฬา', category: 'ทีมกีฬา' },
  { id: 4, src: '/images/portfolio/4.jpg', alt: 'ผลงานเสื้อแบรนด์', category: 'แบรนด์' },
  { id: 5, src: '/images/portfolio/5.jpg', alt: 'ผลงานเสื้ออีเวนต์', category: 'อีเวนต์' },
  { id: 6, src: '/images/portfolio/6.jpg', alt: 'ผลงานเสื้อ FC', category: 'แฟนคลับ' },
  { id: 7, src: '/images/portfolio/7.jpg', alt: 'ผลงานเสื้อ Hoodie', category: 'Hoodie' },
  { id: 8, src: '/images/portfolio/8.jpg', alt: 'ผลงานเสื้อโปโล', category: 'โปโล' },
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

export default function PortfolioSection({ className = '' }: PortfolioSectionProps) {
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
        <div className="flex gap-4 animate-marquee-left">
          {/* First set */}
          {portfolioImages.map((img) => (
            <div 
              key={`1-${img.id}`}
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
        <div className="flex gap-4 animate-marquee-right">
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
          animation: marquee-left 30s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
