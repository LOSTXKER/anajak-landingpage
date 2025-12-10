'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Cpu, CheckCircle2, ArrowRight, Shield
} from 'lucide-react';

interface TechnologySectionProps {
  className?: string;
}

const technologies = [
  {
    id: 'dtg',
    name: 'DTG Printing',
    tagline: 'พิมพ์ตรงบนผ้า',
    description: 'เทคโนโลยีพิมพ์ดิจิตอลโดยตรงบนผ้า ความละเอียดสูง สีสันสดใส',
    features: ['ความละเอียด 1440 DPI', 'พิมพ์ได้ทุกสี ไม่จำกัด', 'เหมาะกับงานน้อย-กลาง'],
    image: '/images/tech/dtg.jpg',
    icon: '🖨️',
  },
  {
    id: 'dtf',
    name: 'DTF Printing',
    tagline: 'ทนทาน ซักไม่ลอก',
    description: 'พิมพ์ลงฟิล์มแล้วรีดติดผ้า ทนทานสูง ใช้ได้กับผ้าทุกชนิด',
    features: ['ซักได้ 100+ ครั้ง', 'ใช้ได้ทุกเนื้อผ้า', 'สีไม่ซีด ไม่แตก'],
    image: '/images/tech/dtf.jpg',
    icon: '✨',
  },
  {
    id: 'silkscreen',
    name: 'Silk Screen',
    tagline: 'คลาสสิค ราคาประหยัด',
    description: 'เทคนิคสกรีนดั้งเดิม เหมาะกับงานจำนวนมาก สีทึบสวย',
    features: ['ราคาดีเมื่อสั่งเยอะ', 'สีทึบสวยคมชัด', 'ทนทานมาก'],
    image: '/images/tech/silkscreen.jpg',
    icon: '🎨',
  },
  {
    id: 'embroidery',
    name: 'Embroidery',
    tagline: 'ปักคอมพิวเตอร์',
    description: 'งานปักคุณภาพสูงด้วยเครื่องปักคอมพิวเตอร์ ดูหรูหรา',
    features: ['ความคมชัดสูง', 'ดูพรีเมียม หรูหรา', 'ไม่ลอก ไม่ซีด ตลอดอายุใช้งาน'],
    image: '/images/tech/embroidery.jpg',
    icon: '🧵',
  },
];

const qualityPoints = [
  'ตรวจสอบวัตถุดิบก่อนผลิต',
  'ควบคุมคุณภาพระหว่างผลิต',
  'QC ทุกตัวก่อนส่งมอบ',
];

// Image with fallback
function TechImage({ src, alt, icon }: { src: string; alt: string; icon: string }) {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
        <span className="text-4xl">{icon}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      onError={() => setHasError(true)}
      sizes="(max-width: 768px) 100vw, 25vw"
    />
  );
}

export default function TechnologySection({ className = '' }: TechnologySectionProps) {
  return (
    <section id="technology" className={`py-24 bg-slate-900 relative overflow-hidden ${className}`}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-96 h-96 bg-ci-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ci-yellow/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-ci-blueLight text-sm font-bold mb-6">
            <Cpu className="w-4 h-4" />
            <span>เทคโนโลยีการผลิต</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            เครื่องจักร<span className="text-ci-yellow">ทันสมัย</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            เราลงทุนในเทคโนโลยีล่าสุด เพื่อมอบคุณภาพที่ดีที่สุดให้กับคุณ
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="group bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700/50 overflow-hidden hover:border-ci-blue/50 hover:bg-slate-800 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <TechImage src={tech.image} alt={tech.name} icon={tech.icon} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                
                {/* Name overlay */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-bold text-white text-lg">{tech.name}</h3>
                  <p className="text-white/70 text-sm">{tech.tagline}</p>
                </div>

                {/* Emoji */}
                <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center text-2xl">
                  {tech.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-slate-400 text-sm mb-3">{tech.description}</p>
                
                {/* Features */}
                <div className="space-y-1.5">
                  {tech.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-ci-blueLight mt-0.5 shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Control Banner */}
        <div className="relative bg-gradient-to-r from-ci-blue to-ci-blueDark rounded-3xl p-8 text-white overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-sm font-bold mb-4">
                <Shield className="w-4 h-4" />
                <span>Quality Control</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                ระบบควบคุมคุณภาพ
                <span className="text-ci-yellow"> 3 ขั้นตอน</span>
              </h3>
              <p className="text-white/80 mb-6">
                เรามีระบบ QC เข้มงวด ตรวจสอบทุกขั้นตอนการผลิต 
                เพื่อมั่นใจว่าสินค้าทุกชิ้นมีคุณภาพตามมาตรฐาน
              </p>

              {/* Quality Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {qualityPoints.map((point, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10">
                    <div className="w-8 h-8 rounded-full bg-ci-yellow flex items-center justify-center shrink-0">
                      <span className="text-slate-900 font-bold text-sm">{i + 1}</span>
                    </div>
                    <span className="text-white text-sm font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Trophy */}
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="w-40 h-40 rounded-full bg-white/10 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-white/10 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-ci-yellow flex items-center justify-center shadow-xl">
                      <span className="text-4xl">🏆</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-ci-blueLight font-bold hover:text-white hover:gap-3 transition-all"
          >
            สอบถามเทคนิคที่เหมาะกับงานคุณ
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
