'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ImageIcon } from 'lucide-react';

interface ClientLogosSectionProps {
  className?: string;
}

// Client logos - duplicate for seamless scroll
const clientLogos = [
  { id: 1, name: 'Client 1', src: '/images/clients/logo-1.png' },
  { id: 2, name: 'Client 2', src: '/images/clients/logo-2.png' },
  { id: 3, name: 'Client 3', src: '/images/clients/logo-3.png' },
  { id: 4, name: 'Client 4', src: '/images/clients/logo-4.png' },
  { id: 5, name: 'Client 5', src: '/images/clients/logo-5.png' },
  { id: 6, name: 'Client 6', src: '/images/clients/logo-6.png' },
  { id: 7, name: 'Client 7', src: '/images/clients/logo-7.png' },
  { id: 8, name: 'Client 8', src: '/images/clients/logo-8.png' },
];

// Logo with fallback
function ClientLogo({ src, name }: { src: string; name: string }) {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return (
      <div className="w-32 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
        <ImageIcon className="w-6 h-6 text-slate-300" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={name}
      width={128}
      height={48}
      className="h-10 md:h-12 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
      onError={() => setHasError(true)}
    />
  );
}

export default function ClientLogosSection({ className = '' }: ClientLogosSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current || !isMobile) return;
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch drag handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className={`py-12 bg-white border-y border-slate-100 overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 md:px-6 mb-8">
        <p className="text-center text-slate-500 text-sm font-medium">
          ได้รับความไว้วางใจจากองค์กรชั้นนำ
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient fade left - smaller on mobile */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Gradient fade right - smaller on mobile */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling logos */}
        <div
          ref={scrollRef}
          className={`flex items-center gap-8 md:gap-16 ${
            isMobile 
              ? 'overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none' 
              : 'animate-marquee-logos'
          }`}
          style={isMobile ? { scrollbarWidth: 'none', msOverflowStyle: 'none' } : {}}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* First set */}
          {clientLogos.map((logo) => (
            <div key={`1-${logo.id}`} className="shrink-0">
              <ClientLogo src={logo.src} name={logo.name} />
            </div>
          ))}
          {/* Second set (duplicate for seamless loop) */}
          {clientLogos.map((logo) => (
            <div key={`2-${logo.id}`} className="shrink-0">
              <ClientLogo src={logo.src} name={logo.name} />
            </div>
          ))}
        </div>
      </div>

      {/* CSS for marquee animation (desktop only) */}
      <style jsx>{`
        @keyframes marquee-logos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-logos {
          animation: marquee-logos 30s linear infinite;
        }
        .animate-marquee-logos:hover {
          animation-play-state: paused;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
