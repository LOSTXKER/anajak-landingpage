'use client';

import Link from 'next/link';
import { LucideIcon, ChevronRight } from 'lucide-react';

interface RelatedPage {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

interface RelatedPagesSectionProps {
  title?: string;
  description?: string;
  pages: RelatedPage[];
  className?: string;
}

export default function RelatedPagesSection({
  title = 'ขั้นตอนต่อไปคืออะไร?',
  description = 'สำรวจบริการและข้อมูลเพิ่มเติมที่เราเตรียมไว้สำหรับคุณ',
  pages,
  className = '',
}: RelatedPagesSectionProps) {
  return (
    <section className={`py-16 md:py-20 bg-gradient-to-b from-white to-slate-50 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className={`grid grid-cols-1 ${pages.length === 2 ? 'md:grid-cols-2 max-w-4xl' : 'md:grid-cols-3 max-w-5xl'} gap-6 mx-auto`}>
          {pages.map((page, index) => (
            <Link
              key={index}
              href={page.href}
              className="group p-8 bg-white rounded-2xl border-2 border-slate-100 hover:border-ci-blue hover:shadow-lg transition-all relative"
            >
              <div className="w-12 h-12 rounded-xl bg-ci-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <page.icon className="w-6 h-6 text-ci-blue" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-slate-900 group-hover:text-ci-blue transition-colors flex items-center gap-2">
                {page.title}
                <ChevronRight className="w-5 h-5 text-ci-blue group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-sm text-slate-600">
                {page.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

