'use client';

import { useState, useEffect, useCallback } from 'react';
import { LogOut, RefreshCw, Home, Settings, ShoppingBag, Info, Image as ImageIcon, Calculator, FileText, ChevronDown, ChevronRight } from 'lucide-react';
import LoginForm from '@/components/admin/LoginForm';
import ImageSlot from '@/components/admin/ImageSlot';
import { imageSlotConfig } from '@/config/image-slots';
import { SiteImage, PageGroupConfig, SectionConfig } from '@/types/admin';

const PAGE_ICONS: Record<string, React.ReactNode> = {
  'homepage': <Home className="w-5 h-5" />,
  'services-pages': <Settings className="w-5 h-5" />,
  'products-page': <ShoppingBag className="w-5 h-5" />,
  'about-page': <Info className="w-5 h-5" />,
  'portfolio-page': <ImageIcon className="w-5 h-5" />,
  'calculator-page': <Calculator className="w-5 h-5" />,
  'blog-page': <FileText className="w-5 h-5" />,
};

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [images, setImages] = useState<SiteImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(imageSlotConfig[0]?.id || '');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const checkAuth = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/auth');
      setAuthenticated(res.ok);
    } catch {
      setAuthenticated(false);
    }
  }, []);

  const fetchImages = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/images');
      if (res.ok) {
        const data = await res.json();
        setImages(data.images || []);
      }
    } catch {
      console.error('Failed to fetch images');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (authenticated) {
      fetchImages();
    }
  }, [authenticated, fetchImages]);

  // Initialize expanded sections
  useEffect(() => {
    const activePage = imageSlotConfig.find(p => p.id === activeTab);
    if (activePage) {
      setExpandedSections(new Set(activePage.sections.map(s => s.id)));
    }
  }, [activeTab]);

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    setAuthenticated(false);
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }
      return next;
    });
  };

  const getImageForSlot = (section: string, slot: string): SiteImage | null => {
    return images.find(img => img.section === section && img.slot === slot) || null;
  };

  const getImageCount = (page: PageGroupConfig): { total: number; filled: number } => {
    let total = 0;
    let filled = 0;
    for (const section of page.sections) {
      for (const slot of section.slots) {
        total++;
        if (images.find(img => img.section === section.id && img.slot === slot.slot)) {
          filled++;
        }
      }
    }
    return { total, filled };
  };

  const getSectionImageCount = (section: SectionConfig): { total: number; filled: number } => {
    let filled = 0;
    for (const slot of section.slots) {
      if (images.find(img => img.section === section.id && img.slot === slot.slot)) {
        filled++;
      }
    }
    return { total: section.slots.length, filled };
  };

  // Loading state
  if (authenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Login form
  if (!authenticated) {
    return <LoginForm onSuccess={() => { setAuthenticated(true); }} />;
  }

  const activePage = imageSlotConfig.find(p => p.id === activeTab);

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Top Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <ImageIcon className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900">Image Manager</h1>
              <p className="text-xs text-slate-400 -mt-0.5">Anajak T-Shirt</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={fetchImages}
              disabled={loading}
              className="flex items-center gap-1.5 px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">รีเฟรช</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">ออกจากระบบ</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Page Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-hide">
          {imageSlotConfig.map((page) => {
            const { total, filled } = getImageCount(page);
            const isActive = activeTab === page.id;
            return (
              <button
                key={page.id}
                onClick={() => setActiveTab(page.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {PAGE_ICONS[page.id]}
                <span>{page.label}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-blue-500 text-blue-100' : 'bg-slate-100 text-slate-500'
                }`}>
                  {filled}/{total}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Page Content */}
        {activePage && (
          <div className="space-y-4">
            {activePage.sections.map((section) => {
              const isExpanded = expandedSections.has(section.id);
              const { total, filled } = getSectionImageCount(section);

              return (
                <div key={section.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {isExpanded ? (
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-slate-400" />
                      )}
                      <div className="text-left">
                        <h3 className="text-base font-semibold text-slate-900">{section.label}</h3>
                        {section.description && (
                          <p className="text-sm text-slate-400 mt-0.5">{section.description}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {/* Progress bar */}
                      <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            filled === total ? 'bg-green-500' : filled > 0 ? 'bg-blue-500' : 'bg-slate-200'
                          }`}
                          style={{ width: `${total > 0 ? (filled / total) * 100 : 0}%` }}
                        />
                      </div>
                      <span className="text-sm text-slate-500 tabular-nums">{filled}/{total}</span>
                    </div>
                  </button>

                  {/* Section Content */}
                  {isExpanded && (
                    <div className="px-5 pb-5 border-t border-slate-100">
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
                        {section.slots.map((slotConfig) => (
                          <ImageSlot
                            key={slotConfig.slot}
                            config={slotConfig}
                            section={section.id}
                            image={getImageForSlot(section.id, slotConfig.slot)}
                            onUpdate={fetchImages}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
