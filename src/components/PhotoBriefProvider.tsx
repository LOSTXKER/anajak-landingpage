'use client';

import { createContext, useContext, useState, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Camera, CameraOff, Keyboard } from 'lucide-react';

interface PhotoBriefContextValue {
  isPhotoBriefMode: boolean;
  toggle: () => void;
}

const PhotoBriefContext = createContext<PhotoBriefContextValue>({
  isPhotoBriefMode: false,
  toggle: () => {},
});

export function usePhotoBrief() {
  return useContext(PhotoBriefContext);
}

function PhotoBriefToggle({ isActive, onToggle }: { isActive: boolean; onToggle: () => void }) {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-end gap-3">
      {/* Hint tooltip */}
      {showHint && (
        <div className="mb-1 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg shadow-lg whitespace-nowrap">
          <div className="flex items-center gap-1.5 mb-1">
            <Keyboard className="w-3 h-3" />
            <span className="font-bold">Ctrl + Shift + P</span>
          </div>
          <div className="text-slate-400">Photo Brief Mode</div>
        </div>
      )}

      {/* Toggle button */}
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

  // On mount, read from localStorage or URL param
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

  // Keyboard shortcut: Ctrl+Shift+P
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
    <PhotoBriefContext.Provider value={{ isPhotoBriefMode, toggle }}>
      {children}
      <PhotoBriefToggle isActive={isPhotoBriefMode} onToggle={toggle} />
    </PhotoBriefContext.Provider>
  );
}

export default function PhotoBriefProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={
      <PhotoBriefContext.Provider value={{ isPhotoBriefMode: false, toggle: () => {} }}>
        {children}
      </PhotoBriefContext.Provider>
    }>
      <PhotoBriefInner>{children}</PhotoBriefInner>
    </Suspense>
  );
}
