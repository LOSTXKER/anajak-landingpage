'use client';

import { createContext, useContext, useState, useEffect, useCallback, Suspense, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { Camera, CameraOff, Keyboard, ClipboardList } from 'lucide-react';
import type { PhotoBriefReview, ReviewStatus } from '@/types/admin';
import PhotoBriefSummary from './PhotoBriefSummary';

type ReviewMap = Record<string, PhotoBriefReview>;

interface PhotoBriefContextValue {
  isPhotoBriefMode: boolean;
  toggle: () => void;
  reviewMap: ReviewMap;
  uploadedSlots: Set<string>;
  isAdmin: boolean;
  isSummaryOpen: boolean;
  setIsSummaryOpen: (open: boolean) => void;
  updateReview: (section: string, slot: string, note: string, status: ReviewStatus) => Promise<void>;
  refreshReviews: () => Promise<void>;
}

const PhotoBriefContext = createContext<PhotoBriefContextValue>({
  isPhotoBriefMode: false,
  toggle: () => {},
  reviewMap: {},
  uploadedSlots: new Set(),
  isAdmin: false,
  isSummaryOpen: false,
  setIsSummaryOpen: () => {},
  updateReview: async () => {},
  refreshReviews: async () => {},
});

export function usePhotoBrief() {
  return useContext(PhotoBriefContext);
}

function reviewKey(section: string, slot: string) {
  return `${section}:${slot}`;
}

export { reviewKey };

function PhotoBriefToggle({
  isActive,
  onToggle,
  onSummary,
}: {
  isActive: boolean;
  onToggle: () => void;
  onSummary: () => void;
}) {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-end gap-2">
      {showHint && (
        <div className="mb-1 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg shadow-lg whitespace-nowrap">
          <div className="flex items-center gap-1.5 mb-1">
            <Keyboard className="w-3 h-3" />
            <span className="font-bold">Ctrl + Shift + P</span>
          </div>
          <div className="text-slate-400">Photo Brief Mode</div>
        </div>
      )}

      {isActive && (
        <button
          onClick={onSummary}
          className="flex items-center gap-2 px-3 py-3 rounded-full shadow-2xl font-bold text-sm transition-all duration-300 hover:scale-105 bg-slate-800 text-white hover:bg-slate-700"
          title="Photo Brief Summary"
        >
          <ClipboardList className="w-5 h-5" />
          <span className="hidden sm:inline">Summary</span>
        </button>
      )}

      <button
        onClick={onToggle}
        onMouseEnter={() => setShowHint(true)}
        onMouseLeave={() => setShowHint(false)}
        className={`
          group flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl font-bold text-sm
          transition-all duration-300 hover:scale-105 hover:shadow-3xl
          ${isActive
            ? 'bg-amber-500 text-white hover:bg-amber-600'
            : 'bg-white text-slate-600 border border-slate-200 hover:border-amber-400 hover:text-amber-600'
          }
        `}
        title="Toggle Photo Brief Mode (Ctrl+Shift+P)"
      >
        {isActive ? (
          <>
            <Camera className="w-5 h-5" />
            <span className="hidden sm:inline">Photo Brief ON</span>
          </>
        ) : (
          <>
            <CameraOff className="w-5 h-5" />
            <span className="hidden sm:inline">Photo Brief</span>
          </>
        )}
      </button>
    </div>
  );
}

function PhotoBriefInner({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const urlParam = searchParams.get('photo-brief') === 'true';

  const [isManuallyToggled, setIsManuallyToggled] = useState<boolean | null>(null);
  const [reviewMap, setReviewMap] = useState<ReviewMap>({});
  const [uploadedSlots, setUploadedSlots] = useState<Set<string>>(new Set());
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const hasFetched = useRef(false);

  useEffect(() => {
    const stored = localStorage.getItem('photo-brief-mode');
    if (stored !== null) {
      setIsManuallyToggled(stored === 'true');
    } else if (urlParam) {
      setIsManuallyToggled(true);
    }
  }, [urlParam]);

  const isPhotoBriefMode = isManuallyToggled ?? urlParam;

  const toggle = useCallback(() => {
    setIsManuallyToggled(prev => {
      const next = !(prev ?? false);
      localStorage.setItem('photo-brief-mode', String(next));
      return next;
    });
  }, []);

  const fetchReviews = useCallback(async () => {
    try {
      const res = await fetch('/api/photo-brief');
      if (!res.ok) return;
      const { reviews } = await res.json() as { reviews: PhotoBriefReview[] };
      const map: ReviewMap = {};
      for (const r of reviews) {
        map[reviewKey(r.section, r.slot)] = r;
      }
      setReviewMap(map);
    } catch { /* silently ignore */ }
  }, []);

  const fetchUploadedImages = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/images');
      if (!res.ok) return;
      const { images } = await res.json() as { images: { section: string; slot: string }[] };
      const set = new Set<string>();
      for (const img of images) {
        set.add(reviewKey(img.section, img.slot));
      }
      setUploadedSlots(set);
    } catch { /* silently ignore */ }
  }, []);

  const checkAdmin = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/auth');
      setIsAdmin(res.ok);
    } catch {
      setIsAdmin(false);
    }
  }, []);

  useEffect(() => {
    if (isPhotoBriefMode && !hasFetched.current) {
      hasFetched.current = true;
      fetchReviews();
      fetchUploadedImages();
      checkAdmin();
    }
  }, [isPhotoBriefMode, fetchReviews, fetchUploadedImages, checkAdmin]);

  const updateReview = useCallback(async (section: string, slot: string, note: string, status: ReviewStatus) => {
    try {
      const res = await fetch('/api/photo-brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section, slot, note, status }),
      });
      if (!res.ok) return;
      const { review } = await res.json() as { review: PhotoBriefReview };
      setReviewMap(prev => ({ ...prev, [reviewKey(section, slot)]: review }));
    } catch { /* silently ignore */ }
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        toggle();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggle]);

  return (
    <PhotoBriefContext.Provider
      value={{
        isPhotoBriefMode,
        toggle,
        reviewMap,
        uploadedSlots,
        isAdmin,
        isSummaryOpen,
        setIsSummaryOpen,
        updateReview,
        refreshReviews: fetchReviews,
      }}
    >
      {children}
      <PhotoBriefToggle
        isActive={isPhotoBriefMode}
        onToggle={toggle}
        onSummary={() => setIsSummaryOpen(prev => !prev)}
      />
      {isPhotoBriefMode && <PhotoBriefSummary />}
    </PhotoBriefContext.Provider>
  );
}

export default function PhotoBriefProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={
      <PhotoBriefContext.Provider value={{
        isPhotoBriefMode: false,
        toggle: () => {},
        reviewMap: {},
        uploadedSlots: new Set(),
        isAdmin: false,
        isSummaryOpen: false,
        setIsSummaryOpen: () => {},
        updateReview: async () => {},
        refreshReviews: async () => {},
      }}>
        {children}
      </PhotoBriefContext.Provider>
    }>
      <PhotoBriefInner>{children}</PhotoBriefInner>
    </Suspense>
  );
}
