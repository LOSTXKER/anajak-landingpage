'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, Home, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-6">
            <AlertCircle className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            เกิดข้อผิดพลาด
          </h1>
          <p className="text-lg text-slate-600 mb-2">
            ขออภัย เกิดข้อผิดพลาดบางอย่าง
          </p>
          <p className="text-sm text-slate-500">
            {error.message || 'กรุณาลองใหม่อีกครั้ง'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ci-blue text-white rounded-xl font-medium hover:bg-ci-blueDark transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
            ลองอีกครั้ง
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-200 text-slate-700 rounded-xl font-medium hover:bg-slate-300 transition-colors"
          >
            <Home className="w-5 h-5" />
            กลับหน้าแรก
          </Link>
        </div>
      </div>
    </div>
  );
}
