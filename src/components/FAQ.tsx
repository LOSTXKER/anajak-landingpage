'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  items: FAQItem[];
  className?: string;
}

export default function FAQ({ title = 'คำถามที่พบบ่อย', items, className = '' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-16 md:py-20 bg-white ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-ci-blue/10 rounded-full mb-4">
            <HelpCircle className="w-4 h-4 text-ci-blue" />
            <span className="text-sm font-semibold text-ci-blue">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            คำตอบสำหรับคำถามที่ลูกค้าถามบ่อย
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-2 border-slate-100 overflow-hidden hover:border-ci-blue/30 transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-ci-blue shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
