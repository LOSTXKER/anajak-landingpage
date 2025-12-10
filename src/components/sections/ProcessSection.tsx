'use client';

import { 
  MessageCircle, Palette, CreditCard, Factory, Truck,
  ArrowRight, Sparkles
} from 'lucide-react';

interface ProcessSectionProps {
  className?: string;
}

const steps = [
  {
    number: 1,
    icon: MessageCircle,
    title: 'ติดต่อเรา',
    description: 'แจ้งจำนวน วันใช้งาน',
    highlight: 'ตอบใน 10 นาที',
  },
  {
    number: 2,
    icon: Palette,
    title: 'ส่งแบบ',
    description: 'หรือให้เราออกแบบให้',
    highlight: 'ออกแบบฟรี!',
  },
  {
    number: 3,
    icon: CreditCard,
    title: 'ยืนยัน',
    description: 'ตรวจ Artwork & ชำระ',
    highlight: 'มัดจำ 50%',
  },
  {
    number: 4,
    icon: Factory,
    title: 'ผลิต',
    description: 'QC ทุกตัว อัพเดทสถานะ',
    highlight: '3-5 วัน',
  },
  {
    number: 5,
    icon: Truck,
    title: 'ส่งถึงที่',
    description: 'แพ็คอย่างดี มีเลขพัสดุ',
    highlight: 'ส่งฟรี!',
  },
];

export default function ProcessSection({ className = '' }: ProcessSectionProps) {
  return (
    <section className={`py-16 md:py-20 bg-gradient-to-br from-ci-blue to-ci-blueDark relative overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white/5 blur-2xl" />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-bold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>ง่ายกว่าที่คิด</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            สั่งผลิตใน 5 ขั้นตอน
          </h2>
          <p className="text-white/70 max-w-lg mx-auto">
            ไม่ต้องมีประสบการณ์ ไม่ต้องมีไฟล์งาน เราดูแลทุกขั้นตอนให้
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`
                relative group
                ${index === 4 ? 'col-span-2 md:col-span-1' : ''}
              `}
            >
              {/* Card */}
              <div className="bg-white rounded-2xl p-5 h-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                {/* Number */}
                <div className="w-10 h-10 rounded-full bg-ci-blue text-white flex items-center justify-center font-bold text-lg mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-ci-blue/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-ci-blue" />
                </div>

                {/* Content */}
                <h3 className="font-bold text-slate-900 text-lg mb-1">{step.title}</h3>
                <p className="text-slate-500 text-sm mb-3">{step.description}</p>

                {/* Highlight */}
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold">
                  {step.highlight}
                </span>
              </div>

              {/* Arrow (between cards, desktop only) */}
              {index < 4 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 h-6 rounded-full bg-ci-yellow items-center justify-center transform -translate-y-1/2">
                  <ArrowRight className="w-3 h-3 text-slate-900" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-ci-blue rounded-xl font-bold hover:bg-ci-yellow hover:text-slate-900 hover:shadow-lg transition-all"
          >
            เริ่มต้นเลย
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
