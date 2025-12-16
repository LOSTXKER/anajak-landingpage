'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScrollNavProps {
  scrollId: string;
  scrollAmount?: number;
  className?: string;
}

export default function ScrollNav({ 
  scrollId, 
  scrollAmount = 320,
  className = '' 
}: ScrollNavProps) {
  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById(scrollId);
    if (container) {
      const amount = direction === 'left' ? -scrollAmount : scrollAmount;
      container.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Left Button */}
      <button
        onClick={() => handleScroll('left')}
        className={`md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 
                   bg-white/95 hover:bg-white shadow-lg rounded-r-lg p-2 
                   backdrop-blur-sm transition-all hover:scale-110 ${className}`}
        aria-label="เลื่อนไปทางซ้าย"
      >
        <ChevronLeft className="w-5 h-5 text-slate-900" strokeWidth={2.5} />
      </button>

      {/* Right Button */}
      <button
        onClick={() => handleScroll('right')}
        className={`md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 
                   bg-white/95 hover:bg-white shadow-lg rounded-l-lg p-2 
                   backdrop-blur-sm transition-all hover:scale-110 ${className}`}
        aria-label="เลื่อนไปทางขวา"
      >
        <ChevronRight className="w-5 h-5 text-slate-900" strokeWidth={2.5} />
      </button>
    </>
  );
}
