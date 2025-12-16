'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselNavProps {
  targetId: string;
  scrollAmount?: number;
  showOn?: 'mobile' | 'tablet' | 'all';
}

export function CarouselNav({ 
  targetId, 
  scrollAmount = 350,
  showOn = 'mobile' 
}: CarouselNavProps) {
  const hideClass = showOn === 'mobile' ? 'md:hidden' : showOn === 'tablet' ? 'lg:hidden' : '';

  const scrollLeft = () => {
    const container = document.getElementById(targetId);
    if (container) {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById(targetId);
    if (container) {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <button
        onClick={scrollLeft}
        className={`${hideClass} absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 backdrop-blur-sm transition-all duration-200 active:scale-95`}
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-5 h-5 text-slate-900" />
      </button>
      
      <button
        onClick={scrollRight}
        className={`${hideClass} absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 backdrop-blur-sm transition-all duration-200 active:scale-95`}
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5 text-slate-900" />
      </button>
    </>
  );
}
