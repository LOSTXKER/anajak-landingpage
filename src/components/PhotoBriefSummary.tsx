'use client';

import { useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import {
  X,
  Check,
  AlertTriangle,
  Clock,
  ImageOff,
  ChevronDown,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { usePhotoBrief, reviewKey } from './PhotoBriefProvider';
import { imageSlotConfig } from '@/config/image-slots';
import type { ReviewStatus } from '@/types/admin';

type FilterTab = 'all' | 'needs_revision' | 'missing' | 'approved';

interface FlatSlot {
  pageLabel: string;
  sectionId: string;
  sectionLabel: string;
  slotId: string;
  slotLabel: string;
}

const SECTION_TO_PATH: Record<string, string> = {
  hero: '/',
  clients: '/',
  usecases: '/',
  services: '/',
  technology: '/',
  portfolio: '/',
  'services-main': '/services',
  'printing-main': '/services/printing',
  'printing-dtf': '/services/printing/dtf',
  'printing-dtg': '/services/printing/dtg',
  'printing-silkscreen': '/services/printing/silkscreen',
  'gallery-dtf': '/services/printing/dtf',
  'gallery-dtg': '/services/printing/dtg',
  'gallery-silk': '/services/printing/silkscreen',
  'customers': '/services/printing/dtf',
  'fabric-page': '/services/fabric',
  'pattern-page': '/services/pattern',
  products: '/products',
  about: '/about',
  'portfolio-cases': '/portfolio',
  calculator: '/calculator',
  blog: '/blog/dtf-printing-guide-2024',
};

function getAllFlatSlots(): FlatSlot[] {
  const result: FlatSlot[] = [];
  for (const page of imageSlotConfig) {
    for (const section of page.sections) {
      for (const slot of section.slots) {
        result.push({
          pageLabel: page.label,
          sectionId: section.id,
          sectionLabel: section.label,
          slotId: slot.slot,
          slotLabel: slot.label,
        });
      }
    }
  }
  return result;
}

const STATUS_ICON: Record<ReviewStatus, typeof Check> = {
  pending: Clock,
  needs_revision: AlertTriangle,
  approved: Check,
};

const STATUS_COLORS: Record<ReviewStatus, string> = {
  pending: 'text-amber-400',
  needs_revision: 'text-red-400',
  approved: 'text-emerald-400',
};

const STATUS_BG: Record<ReviewStatus, string> = {
  pending: 'bg-amber-500/10',
  needs_revision: 'bg-red-500/10',
  approved: 'bg-emerald-500/10',
};

export default function PhotoBriefSummary() {
  const { isSummaryOpen, setIsSummaryOpen, reviewMap, uploadedSlots } = usePhotoBrief();
  const pathname = usePathname();
  const [filter, setFilter] = useState<FilterTab>('all');
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(new Set());

  const allSlots = useMemo(() => getAllFlatSlots(), []);

  const stats = useMemo(() => {
    let total = 0;
    let uploaded = 0;
    let pending = 0;
    let needsRevision = 0;
    let approved = 0;
    let missing = 0;

    for (const slot of allSlots) {
      total++;
      const key = reviewKey(slot.sectionId, slot.slotId);
      const hasImage = uploadedSlots.has(key);
      const review = reviewMap[key];
      const status: ReviewStatus = review?.status ?? 'pending';

      if (hasImage) uploaded++;
      else missing++;

      if (status === 'pending') pending++;
      else if (status === 'needs_revision') needsRevision++;
      else if (status === 'approved') approved++;
    }

    return { total, uploaded, pending, needsRevision, approved, missing };
  }, [allSlots, reviewMap, uploadedSlots]);

  const grouped = useMemo(() => {
    const groups: Record<string, { sectionLabel: string; pageLabel: string; slots: FlatSlot[] }> = {};
    for (const slot of allSlots) {
      const key = reviewKey(slot.sectionId, slot.slotId);
      const review = reviewMap[key];
      const status: ReviewStatus = review?.status ?? 'pending';
      const hasImage = uploadedSlots.has(key);

      let show = false;
      if (filter === 'all') show = true;
      else if (filter === 'needs_revision') show = status === 'needs_revision';
      else if (filter === 'missing') show = !hasImage;
      else if (filter === 'approved') show = status === 'approved';

      if (!show) continue;

      if (!groups[slot.sectionId]) {
        groups[slot.sectionId] = {
          sectionLabel: slot.sectionLabel,
          pageLabel: slot.pageLabel,
          slots: [],
        };
      }
      groups[slot.sectionId].slots.push(slot);
    }
    return groups;
  }, [allSlots, reviewMap, uploadedSlots, filter]);

  const filteredCount = useMemo(
    () => Object.values(grouped).reduce((acc, g) => acc + g.slots.length, 0),
    [grouped],
  );

  const toggleSection = (sectionId: string) => {
    setCollapsedSections(prev => {
      const next = new Set(prev);
      if (next.has(sectionId)) next.delete(sectionId);
      else next.add(sectionId);
      return next;
    });
  };

  const navigateToSlot = (sectionId: string, slotId: string) => {
    const selector = `[data-slot-id="${sectionId}:${slotId}"]`;
    const el = document.querySelector(selector);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('ring-4', 'ring-sky-400/50');
      setTimeout(() => el.classList.remove('ring-4', 'ring-sky-400/50'), 2000);
      return;
    }

    const targetPath = SECTION_TO_PATH[sectionId];
    if (targetPath && targetPath !== pathname) {
      const url = new URL(targetPath, window.location.origin);
      url.searchParams.set('photo-brief', 'true');
      url.searchParams.set('scroll-to', `${sectionId}:${slotId}`);
      window.location.href = url.toString();
    }
  };

  if (!isSummaryOpen) return null;

  const progressPct = stats.total > 0 ? Math.round((stats.uploaded / stats.total) * 100) : 0;

  const TABS: { key: FilterTab; label: string; count: number }[] = [
    { key: 'all', label: 'ทั้งหมด', count: stats.total },
    { key: 'needs_revision', label: 'ต้องแก้ไข', count: stats.needsRevision },
    { key: 'missing', label: 'ยังไม่มีรูป', count: stats.missing },
    { key: 'approved', label: 'อนุมัติ', count: stats.approved },
  ];

  return (
    <div className="fixed inset-y-0 right-0 z-[9998] w-96 max-w-[90vw] bg-slate-900 text-white shadow-2xl flex flex-col border-l border-slate-700">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-700 shrink-0">
        <h2 className="text-base font-bold">Photo Brief Summary</h2>
        <button
          onClick={() => setIsSummaryOpen(false)}
          className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-slate-700 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Progress */}
      <div className="px-5 py-4 border-b border-slate-700 shrink-0">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
          <span>รูปที่อัปโหลดแล้ว</span>
          <span className="font-bold text-white">{stats.uploaded}/{stats.total} ({progressPct}%)</span>
        </div>
        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-sky-500 to-emerald-400 rounded-full transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-2 mt-3">
          <div className="bg-amber-500/10 rounded-lg px-2.5 py-2 text-center">
            <div className="text-lg font-bold text-amber-400">{stats.pending}</div>
            <div className="text-[10px] text-amber-400/70">รอดำเนินการ</div>
          </div>
          <div className="bg-red-500/10 rounded-lg px-2.5 py-2 text-center">
            <div className="text-lg font-bold text-red-400">{stats.needsRevision}</div>
            <div className="text-[10px] text-red-400/70">ต้องแก้ไข</div>
          </div>
          <div className="bg-emerald-500/10 rounded-lg px-2.5 py-2 text-center">
            <div className="text-lg font-bold text-emerald-400">{stats.approved}</div>
            <div className="text-[10px] text-emerald-400/70">อนุมัติแล้ว</div>
          </div>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-1 px-5 py-3 border-b border-slate-700 shrink-0 overflow-x-auto">
        {TABS.map(tab => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition-colors ${
              filter === tab.key
                ? 'bg-sky-500 text-white'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {/* Slot list */}
      <div className="flex-1 overflow-y-auto">
        {filteredCount === 0 ? (
          <div className="flex flex-col items-center justify-center h-40 text-slate-500 text-sm">
            <Check className="w-8 h-8 mb-2 opacity-40" />
            <span>ไม่มีรายการ</span>
          </div>
        ) : (
          Object.entries(grouped).map(([sectionId, group]) => {
            const isCollapsed = collapsedSections.has(sectionId);
            const sectionPath = SECTION_TO_PATH[sectionId] ?? '/';
            const isOnThisPage = pathname === sectionPath;

            return (
              <div key={sectionId} className="border-b border-slate-800">
                <button
                  onClick={() => toggleSection(sectionId)}
                  className="w-full flex items-center gap-2 px-5 py-2.5 hover:bg-slate-800/50 transition-colors text-left"
                >
                  {isCollapsed ? (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  )}
                  <span className="text-xs font-semibold text-slate-300 truncate">
                    {group.pageLabel} &rsaquo; {group.sectionLabel}
                  </span>
                  {!isOnThisPage && (
                    <ExternalLink className="w-3 h-3 text-slate-600 shrink-0" />
                  )}
                  <span className="text-[10px] text-slate-500 ml-auto shrink-0">{group.slots.length}</span>
                </button>

                {!isCollapsed && (
                  <div className="pb-1">
                    {group.slots.map(slot => {
                      const key = reviewKey(slot.sectionId, slot.slotId);
                      const review = reviewMap[key];
                      const status: ReviewStatus = review?.status ?? 'pending';
                      const hasImage = uploadedSlots.has(key);
                      const Icon = STATUS_ICON[status];
                      const slotOnThisPage = isOnThisPage;

                      return (
                        <button
                          key={key}
                          onClick={() => navigateToSlot(slot.sectionId, slot.slotId)}
                          className="w-full flex items-start gap-2.5 px-5 pl-10 py-2 hover:bg-slate-800/40 transition-colors text-left group"
                          title={slotOnThisPage ? 'คลิกเพื่อเลื่อนไปยังภาพ' : `คลิกเพื่อไปหน้า ${sectionPath}`}
                        >
                          <div className={`mt-0.5 shrink-0 ${STATUS_COLORS[status]}`}>
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-white font-medium truncate group-hover:underline">{slot.slotLabel}</span>
                              {!hasImage && (
                                <span className="flex items-center gap-0.5 text-[9px] text-orange-400 bg-orange-500/10 px-1.5 py-0.5 rounded-full shrink-0">
                                  <ImageOff className="w-2.5 h-2.5" />
                                  ไม่มีรูป
                                </span>
                              )}
                              {!slotOnThisPage && (
                                <ExternalLink className="w-2.5 h-2.5 text-slate-600 shrink-0" />
                              )}
                            </div>
                            {review?.note && (
                              <p className="text-[11px] text-slate-500 truncate mt-0.5 group-hover:text-slate-400">{review.note}</p>
                            )}
                          </div>
                          <div className={`shrink-0 px-1.5 py-0.5 rounded text-[9px] font-semibold ${STATUS_BG[status]} ${STATUS_COLORS[status]}`}>
                            {status === 'pending' && 'รอ'}
                            {status === 'needs_revision' && 'แก้ไข'}
                            {status === 'approved' && 'ผ่าน'}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
