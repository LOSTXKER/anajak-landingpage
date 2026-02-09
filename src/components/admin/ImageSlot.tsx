'use client';

import { useState, useRef } from 'react';
import { Upload, Trash2, Edit3, Check, X, Image as ImageIcon, Loader2 } from 'lucide-react';
import { SiteImage, ImageSlotConfig } from '@/types/admin';

interface ImageSlotProps {
  config: ImageSlotConfig;
  section: string;
  image: SiteImage | null;
  onUpdate: () => void;
}

export default function ImageSlot({ config, section, image, onUpdate }: ImageSlotProps) {
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [editingAlt, setEditingAlt] = useState(false);
  const [altText, setAltText] = useState(image?.alt || '');
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (file: File) => {
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('กรุณาเลือกไฟล์รูปภาพเท่านั้น');
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 20 * 1024 * 1024) {
      alert('ไฟล์ต้องมีขนาดไม่เกิน 20MB');
      return;
    }

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('section', section);
      formData.append('slot', config.slot);
      formData.append('alt', altText || config.label);

      const res = await fetch('/api/admin/images', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        alert(`อัปโหลดไม่สำเร็จ: ${data.error}`);
        return;
      }

      onUpdate();
    } catch {
      alert('เกิดข้อผิดพลาดในการอัปโหลด');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('ต้องการลบรูปภาพนี้ใช่หรือไม่?')) return;

    setDeleting(true);
    try {
      const res = await fetch('/api/admin/images', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section, slot: config.slot }),
      });

      if (!res.ok) {
        const data = await res.json();
        alert(`ลบไม่สำเร็จ: ${data.error}`);
        return;
      }

      onUpdate();
    } catch {
      alert('เกิดข้อผิดพลาดในการลบ');
    } finally {
      setDeleting(false);
    }
  };

  const handleSaveAlt = async () => {
    try {
      const res = await fetch('/api/admin/images', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section, slot: config.slot, alt: altText }),
      });

      if (res.ok) {
        setEditingAlt(false);
        onUpdate();
      }
    } catch {
      alert('บันทึกไม่สำเร็จ');
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleUpload(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleUpload(file);
    // Reset input so same file can be selected again
    e.target.value = '';
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
      {/* Image Preview / Upload Zone */}
      <div
        className={`relative aspect-video bg-slate-50 flex items-center justify-center cursor-pointer transition-colors ${
          dragOver ? 'bg-blue-50 border-2 border-blue-400 border-dashed' : ''
        }`}
        onClick={() => fileInputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
      >
        {uploading ? (
          <div className="flex flex-col items-center gap-2 text-blue-500">
            <Loader2 className="w-8 h-8 animate-spin" />
            <span className="text-sm">กำลังอัปโหลด...</span>
          </div>
        ) : image?.url ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.url}
              alt={image.alt || config.label}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
              <span className="text-white text-sm font-medium bg-black/60 px-3 py-1.5 rounded-lg">
                คลิกเพื่อเปลี่ยนรูป
              </span>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-2 text-slate-400 p-4">
            <ImageIcon className="w-10 h-10" />
            <span className="text-sm text-center">คลิกหรือลากไฟล์มาวาง</span>
            <span className="text-xs text-slate-300">{config.recommendedSize}</span>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Info & Actions */}
      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-slate-900 truncate">{config.label}</p>
            <p className="text-xs text-slate-400 mt-0.5">{config.recommendedSize}{config.aspectRatio ? ` (${config.aspectRatio})` : ''}</p>
            {config.description && (
              <p className="text-xs text-slate-400 mt-0.5 truncate">{config.description}</p>
            )}
          </div>
          {image && (
            <div className="flex items-center gap-1 flex-shrink-0">
              <button
                onClick={(e) => { e.stopPropagation(); setEditingAlt(true); }}
                className="p-1.5 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                title="แก้ไข Alt Text"
              >
                <Edit3 className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleDelete(); }}
                disabled={deleting}
                className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                title="ลบรูปภาพ"
              >
                {deleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
              </button>
            </div>
          )}
        </div>

        {/* Alt Text Editor */}
        {editingAlt && (
          <div className="mt-2 flex items-center gap-1">
            <input
              type="text"
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
              placeholder="Alt text (SEO)"
              className="flex-1 text-xs px-2 py-1.5 border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-slate-700"
              autoFocus
              onKeyDown={(e) => e.key === 'Enter' && handleSaveAlt()}
            />
            <button onClick={handleSaveAlt} className="p-1 text-green-600 hover:bg-green-50 rounded">
              <Check className="w-4 h-4" />
            </button>
            <button onClick={() => setEditingAlt(false)} className="p-1 text-slate-400 hover:bg-slate-100 rounded">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Current alt text display */}
        {image?.alt && !editingAlt && (
          <p className="mt-1 text-xs text-slate-400 truncate" title={image.alt}>
            Alt: {image.alt}
          </p>
        )}
      </div>
    </div>
  );
}
