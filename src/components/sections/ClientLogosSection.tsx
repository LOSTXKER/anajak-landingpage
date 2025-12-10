'use client';

import { useState } from 'react';
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
  return (
    <section className={`py-12 bg-white border-y border-slate-100 overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 md:px-6 mb-8">
        <p className="text-center text-slate-500 text-sm font-medium">
          ได้รับความไว้วางใจจากองค์กรชั้นนำ
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient fade left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        {/* Gradient fade right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling logos */}
        <div className="flex items-center gap-16 animate-marquee-logos">
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

      {/* CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee-logos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-logos {
          animation: marquee-logos 20s linear infinite;
        }
        .animate-marquee-logos:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
