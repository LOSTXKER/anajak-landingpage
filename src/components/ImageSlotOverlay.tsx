'use client';

import { useState } from 'react';
import { Camera, X, Maximize2 } from 'lucide-react';
import { usePhotoBrief } from './PhotoBriefProvider';
import { findSlotConfig } from '@/config/image-slots';

interface ImageSlotOverlayProps {
  sectionId: string;
  slotId: string;
  children: React.ReactNode;
  className?: string;
}

export default function ImageSlotOverlay({
  sectionId,
  slotId,
  children,
  className = '',
}: ImageSlotOverlayProps) {
  const { isPhotoBriefMode } = usePhotoBrief();
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isPhotoBriefMode) {
    return <>{children}</>;
  }

  const slotConfig = findSlotConfig(sectionId, slotId);
  const label = slotConfig?.label || slotId;
  const size = slotConfig?.recommendedSize || '—';
  const ratio = slotConfig?.aspectRatio;
  const brief = slotConfig?.photographyBrief;
  const description = slotConfig?.description;

  return (
    <div className={`relative group/slot ${className}`}>
      {/* Dashed border overlay */}
      <div className="absolute inset-0 border-2 border-dashed border-amber-400/70 rounded-lg z-40 pointer-events-none" />

      {/* Badge — always visible */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
        className="absolute top-2 left-2 z-50 flex items-center gap-1.5 px-2.5 py-1 bg-amber-500 text-white text-[11px] font-bold rounded-full shadow-lg hover:bg-amber-600 transition-colors cursor-pointer leading-tight"
      >
        <Camera className="w-3 h-3 shrink-0" />
        <span className="truncate max-w-[140px]">{label}</span>
      </button>

      {/* Size badge — always visible */}
      <div className="absolute top-2 right-2 z-50 flex items-center gap-1 px-2 py-0.5 bg-black/70 text-white text-[10px] font-mono rounded-full pointer-events-none">
        <Maximize2 className="w-2.5 h-2.5 shrink-0" />
        {size}
        {ratio && <span className="text-amber-300 ml-1">({ratio})</span>}
      </div>

      {/* Expanded tooltip popup */}
      {isExpanded && (
        <div
          className="absolute top-10 left-2 z-[60] w-72 bg-slate-900 text-white rounded-xl shadow-2xl border border-slate-700 overflow-hidden"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-amber-500">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4" />
              <span className="font-bold text-sm">{label}</span>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsExpanded(false);
              }}
              className="w-5 h-5 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            {/* Slot ID */}
            <div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-0.5">Slot ID</div>
              <code className="text-xs text-amber-300 bg-slate-800 px-2 py-0.5 rounded">{slotId}</code>
            </div>

            {/* Size & Ratio */}
            <div className="flex gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-0.5">ขนาดแนะนำ</div>
                <span className="text-sm font-mono font-bold">{size}</span>
              </div>
              {ratio && (
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-0.5">อัตราส่วน</div>
                  <span className="text-sm font-mono font-bold">{ratio}</span>
                </div>
              )}
            </div>

            {/* Description */}
            {description && (
              <div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-0.5">คำอธิบาย</div>
                <p className="text-xs text-slate-300 leading-relaxed">{description}</p>
              </div>
            )}

            {/* Photography Brief */}
            {brief && (
              <div className="border-t border-slate-700 pt-3">
                <div className="text-[10px] uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1">
                  <Camera className="w-3 h-3" />
                  คำแนะนำสำหรับช่างภาพ
                </div>
                <p className="text-xs text-white leading-relaxed">{brief}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* The actual image content */}
      {children}
    </div>
  );
}
