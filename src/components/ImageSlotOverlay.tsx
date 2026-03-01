'use client';

import { useState, useEffect } from 'react';
import { Camera, X, Maximize2, Check, AlertTriangle, Clock, Save, Loader2 } from 'lucide-react';
import { usePhotoBrief, reviewKey } from './PhotoBriefProvider';
import { findSlotConfig } from '@/config/image-slots';
import type { ReviewStatus } from '@/types/admin';

interface ImageSlotOverlayProps {
  sectionId: string;
  slotId: string;
  children: React.ReactNode;
  className?: string;
}

const STATUS_CONFIG: Record<ReviewStatus, { border: string; badge: string; badgeBg: string; icon: typeof Check; label: string }> = {
  pending: {
    border: 'border-amber-400/70',
    badge: 'bg-amber-500 hover:bg-amber-600',
    badgeBg: 'bg-amber-500',
    icon: Clock,
    label: 'รอดำเนินการ',
  },
  needs_revision: {
    border: 'border-red-500/80',
    badge: 'bg-red-500 hover:bg-red-600',
    badgeBg: 'bg-red-500',
    icon: AlertTriangle,
    label: 'ต้องแก้ไข',
  },
  approved: {
    border: 'border-emerald-400/70',
    badge: 'bg-emerald-500 hover:bg-emerald-600',
    badgeBg: 'bg-emerald-500',
    icon: Check,
    label: 'อนุมัติแล้ว',
  },
};

export default function ImageSlotOverlay({
  sectionId,
  slotId,
  children,
  className = '',
}: ImageSlotOverlayProps) {
  const { isPhotoBriefMode, reviewMap, isAdmin, updateReview } = usePhotoBrief();
  const [isExpanded, setIsExpanded] = useState(false);
  const [editNote, setEditNote] = useState('');
  const [editStatus, setEditStatus] = useState<ReviewStatus>('pending');
  const [isSaving, setIsSaving] = useState(false);

  const review = reviewMap[reviewKey(sectionId, slotId)];
  const currentStatus: ReviewStatus = review?.status ?? 'pending';
  const config = STATUS_CONFIG[currentStatus];

  useEffect(() => {
    if (isExpanded) {
      setEditNote(review?.note ?? '');
      setEditStatus(review?.status ?? 'pending');
    }
  }, [isExpanded, review?.note, review?.status]);

  if (!isPhotoBriefMode) {
    return <>{children}</>;
  }

  const slotConfig = findSlotConfig(sectionId, slotId);
  const label = slotConfig?.label || slotId;
  const size = slotConfig?.recommendedSize || '—';
  const ratio = slotConfig?.aspectRatio;
  const brief = slotConfig?.photographyBrief;
  const description = slotConfig?.description;

  const StatusIcon = config.icon;

  const handleSave = async () => {
    setIsSaving(true);
    await updateReview(sectionId, slotId, editNote, editStatus);
    setIsSaving(false);
  };

  const hasChanges = editNote !== (review?.note ?? '') || editStatus !== (review?.status ?? 'pending');

  return (
    <div className={`relative group/slot ${className}`} data-slot-id={`${sectionId}:${slotId}`}>
      <div className={`absolute inset-0 border-2 border-dashed ${config.border} rounded-lg z-40 pointer-events-none`} />

      {/* Badge with status indicator */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
        className={`absolute top-2 left-2 z-50 flex items-center gap-1.5 px-2.5 py-1 ${config.badge} text-white text-[11px] font-bold rounded-full shadow-lg transition-colors cursor-pointer leading-tight`}
      >
        <StatusIcon className="w-3 h-3 shrink-0" />
        <span className="truncate max-w-[140px]">{label}</span>
      </button>

      {/* Size badge */}
      <div className="absolute top-2 right-2 z-50 flex items-center gap-1 px-2 py-0.5 bg-black/70 text-white text-[10px] font-mono rounded-full pointer-events-none">
        <Maximize2 className="w-2.5 h-2.5 shrink-0" />
        {size}
        {ratio && <span className="text-amber-300 ml-1">({ratio})</span>}
      </div>

      {/* Needs revision ribbon */}
      {currentStatus === 'needs_revision' && (
        <div className="absolute bottom-0 left-0 right-0 z-50 bg-red-500/90 text-white text-[11px] font-bold text-center py-1 pointer-events-none">
          <span className="flex items-center justify-center gap-1">
            <AlertTriangle className="w-3 h-3" />
            ต้องแก้ไข
            {review?.note && <span className="font-normal opacity-80 ml-1 truncate max-w-[160px]">— {review.note}</span>}
          </span>
        </div>
      )}

      {/* Expanded popup */}
      {isExpanded && (
        <div
          className="absolute top-10 left-2 z-[60] w-80 bg-slate-900 text-white rounded-xl shadow-2xl border border-slate-700 overflow-hidden"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {/* Header */}
          <div className={`flex items-center justify-between px-4 py-2.5 ${config.badgeBg}`}>
            <div className="flex items-center gap-2">
              <StatusIcon className="w-4 h-4" />
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

          <div className="p-4 space-y-3 max-h-[60vh] overflow-y-auto">
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

            {/* Review Section */}
            <div className="border-t border-slate-700 pt-3 space-y-3">
              <div className="text-[10px] uppercase tracking-wider text-sky-400 mb-1">สถานะ & หมายเหตุ</div>

              {/* Status Buttons */}
              {isAdmin ? (
                <div className="flex gap-1.5">
                  {(Object.entries(STATUS_CONFIG) as [ReviewStatus, typeof config][]).map(([key, cfg]) => {
                    const Icon = cfg.icon;
                    return (
                      <button
                        key={key}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setEditStatus(key);
                        }}
                        className={`flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-[11px] font-semibold transition-all ${
                          editStatus === key
                            ? `${cfg.badgeBg} text-white ring-2 ring-white/30`
                            : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        <Icon className="w-3 h-3" />
                        {cfg.label}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold ${config.badgeBg}/20 text-white`}>
                  <StatusIcon className="w-3.5 h-3.5" />
                  {config.label}
                </div>
              )}

              {/* Note */}
              {isAdmin ? (
                <div>
                  <textarea
                    value={editNote}
                    onChange={(e) => setEditNote(e.target.value)}
                    placeholder="เพิ่มหมายเหตุ เช่น สีเข้มไป, ต้องถ่ายใหม่มุมกว้างกว่านี้..."
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500 resize-none"
                    rows={3}
                    onClick={(e) => e.stopPropagation()}
                  />
                  {hasChanges && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleSave();
                      }}
                      disabled={isSaving}
                      className="mt-2 w-full flex items-center justify-center gap-1.5 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 disabled:opacity-50 text-white text-xs font-bold transition-colors"
                    >
                      {isSaving ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        <Save className="w-3.5 h-3.5" />
                      )}
                      {isSaving ? 'กำลังบันทึก...' : 'บันทึก'}
                    </button>
                  )}
                </div>
              ) : (
                review?.note && (
                  <div className="bg-slate-800 rounded-lg px-3 py-2">
                    <p className="text-xs text-slate-300 leading-relaxed">{review.note}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {children}
    </div>
  );
}
