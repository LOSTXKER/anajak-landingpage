import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-8xl md:text-9xl font-bold text-ci-blue/20 mb-4">
            404
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            ไม่พบหน้าที่คุณค้นหา
          </h1>
          <p className="text-lg text-slate-600 mb-2">
            หน้าที่คุณกำลังมองหาอาจถูกย้าย ลบ หรือไม่เคยมีอยู่จริง
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ci-blue text-white rounded-xl font-medium hover:bg-ci-blueDark transition-colors"
          >
            <Home className="w-5 h-5" />
            กลับหน้าแรก
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-200 text-slate-700 rounded-xl font-medium hover:bg-slate-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            ดูบริการของเรา
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500 mb-4">หน้าที่คุณอาจสนใจ:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/services" className="text-sm px-4 py-2 bg-white text-slate-700 rounded-lg hover:bg-slate-50 transition-colors border border-slate-200">
              บริการของเรา
            </Link>
            <Link href="/products" className="text-sm px-4 py-2 bg-white text-slate-700 rounded-lg hover:bg-slate-50 transition-colors border border-slate-200">
              สินค้า
            </Link>
            <Link href="/portfolio" className="text-sm px-4 py-2 bg-white text-slate-700 rounded-lg hover:bg-slate-50 transition-colors border border-slate-200">
              ผลงาน
            </Link>
            <Link href="/contact" className="text-sm px-4 py-2 bg-white text-slate-700 rounded-lg hover:bg-slate-50 transition-colors border border-slate-200">
              ติดต่อเรา
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
