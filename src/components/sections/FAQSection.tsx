'use client';

import { useState } from 'react';
import { Lightbulb, ChevronDown, MessageCircle } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'รับสั่งขั้นต่ำกี่ตัว?',
    answer: 'เราให้บริการยืดหยุ่น สำหรับลูกค้าทั่วไป ขั้นต่ำ 10 ตัว สำหรับลูกค้าองค์กร สามารถปรึกษาได้ตามจำนวนที่ต้องการ เรามีแพ็คเกจพิเศษสำหรับออเดอร์จำนวนมาก'
  },
  {
    question: 'ใช้เวลาผลิตนานแค่ไหน?',
    answer: 'ระยะเวลาการผลิตโดยทั่วไปใช้เวลา 7-14 วันทำการ ขึ้นอยู่กับปริมาณและความซับซ้อนของงาน เรามีบริการ Express สำหรับงานด่วน'
  },
  {
    question: 'มีบริการออกแบบให้หรือไม่?',
    answer: 'มีครับ เรามีทีมดีไซน์เนอร์คุณภาพ พร้อมให้คำปรึกษาและออกแบบตามความต้องการ สามารถปรึกษาฟรีก่อนตัดสินใจได้'
  },
  {
    question: 'ผ้าและหมึกปลอดภัยหรือไม่?',
    answer: 'ปลอดภัย 100% เราใช้ผ้าคุณภาพ และหมึกแท้ที่ผ่านมาตรฐานสากล เป็นมิตรต่อสิ่งแวดล้อม ไม่เป็นอันตรายต่อผิวหนัง มีใบรับรองครบถ้วน'
  },
  {
    question: 'มีการรับประกันคุณภาพหรือไม่?',
    answer: 'เรารับประกันคุณภาพทุกชิ้นงาน หากมีปัญหาจากการผลิต เรายินดีผลิตใหม่ให้ฟรี โดยมีระบบ QC ตรวจสอบคุณภาพก่อนส่งมอบทุกครั้ง'
  },
];

interface FAQSectionProps {
  className?: string;
  items?: FAQ[];
}

export default function FAQSection({ className = '', items = faqs }: FAQSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className={`py-24 bg-slate-50 ${className}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold mb-4">
            <Lightbulb className="w-4 h-4" />
            คำถามที่พบบ่อย
          </span>
          <h2 className="section-title">คำถามที่ลูกค้าถามบ่อย</h2>
          <p className="section-subtitle">หาคำตอบที่คุณต้องการ</p>
        </div>

        <div className="space-y-4">
          {items.map((faq, i) => (
            <div 
              key={i}
              className={`bg-white rounded-2xl overflow-hidden transition-all ${
                openFaq === i ? 'ring-2 ring-ci-blue shadow-lg' : 'border border-slate-100'
              }`}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900 pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                    openFaq === i ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-6 -mt-2">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-500 mb-4">ยังมีคำถามอื่นอีก?</p>
          <a href="/contact" className="btn-secondary inline-flex">
            <MessageCircle className="w-5 h-5" />
            ติดต่อทีมงาน
          </a>
        </div>
      </div>
    </section>
  );
}
