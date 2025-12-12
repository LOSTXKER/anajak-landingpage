'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ImageIcon, LucideIcon } from 'lucide-react';

interface FallbackImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  fallbackIcon?: LucideIcon;
  fallbackClassName?: string;
  sizes?: string;
  priority?: boolean;
}

export default function FallbackImage({
  src,
  alt,
  fill = true,
  width,
  height,
  className = '',
  fallbackIcon: FallbackIcon = ImageIcon,
  fallbackClassName = 'bg-gradient-to-br from-slate-800 to-slate-900',
  sizes = '(max-width: 768px) 100vw, 50vw',
  priority = false,
}: FallbackImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`flex items-center justify-center ${fallbackClassName} ${fill ? 'absolute inset-0' : ''} ${className}`}>
        <FallbackIcon className="w-12 h-12 text-white/20" />
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${className}`}
        onError={() => setHasError(true)}
        sizes={sizes}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`object-cover ${className}`}
      onError={() => setHasError(true)}
      priority={priority}
    />
  );
}
