'use client';

import { 
  Factory, Truck, Clock, BadgeCheck, Palette, HeartHandshake,
  ArrowRight, Star
} from 'lucide-react';

interface WhyChooseUsSectionProps {
  className?: string;
}

const reasons = [
  {
    icon: Factory,
    title: 'โรงงานผลิตเอง',
    description: 'ไม่ผ่านคนกลาง ควบคุมคุณภาพได้ทุกขั้นตอน ราคาโรงงานตรง',
    highlight: 'ถูกกว่า 30%',
  },
  {
    icon: Clock,
    title: 'ผลิตไว ส่งทัน',
    description: 'ผลิตเสร็จใน 3-5 วันทำการ ส่งด่วนได้ ทันทุกงาน Event',
    highlight: '3-5 วัน',
  },
  {
    icon: BadgeCheck,
    title: 'คุณภาพการันตี',
    description: 'QC ทุกตัวก่อนส่ง หากไม่พอใจยินดีแก้ไขหรือคืนเงิน',
    highlight: 'ประกันคุณภาพ',
  },
  {
    icon: Palette,
    title: 'ออกแบบฟรี',
    description: 'ทีมกราฟิกมืออาชีพออกแบบให้ฟรี แก้ไขได้ไม่จำกัด',
    highlight: 'ฟรี!',
  },
  {
    icon: Truck,
    title: 'ส่งฟรีทั่วไทย',
    description: 'จัดส่งฟรีทั่วประเทศ มีเลขพัสดุติดตาม แพ็คอย่างดี',
    highlight: 'ส่งฟรี',
  },
  {
    icon: HeartHandshake,
    title: 'ดูแลหลังขาย',
    description: 'ทีมงานพร้อมดูแลตลอด มีปัญหาติดต่อได้ทันที',
    highlight: '24/7',
  },
];

const stats = [
  { value: '20+', label: 'ปีประสบการณ์' },
  { value: '50,000+', label: 'ออเดอร์สำเร็จ' },
  { value: '500+', label: 'ลูกค้าองค์กร' },
  { value: '4.9', label: 'คะแนนรีวิว', icon: Star },
];

export default function WhyChooseUsSection({ className = '' }: WhyChooseUsSectionProps) {
  return (
    <section className={`py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden ${className}`}>
      {/* Background */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-ci-yellow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-ci-blue/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-50 text-yellow-600 text-sm font-bold mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span>ทำไมต้องเลือกเรา</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            ทำไมต้องสกรีนเสื้อกับ
            <span className="gradient-text"> Anajak T-Shirt?</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            เราคือโรงงานผลิตเสื้อที่คุณวางใจได้ ด้วยประสบการณ์กว่า 20 ปี
          </p>
        </div>

        {/* Stats Banner */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-ci-blue to-ci-blueDark rounded-2xl p-6 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <span className="text-2xl md:text-3xl font-bold">{stat.value}</span>
                    {stat.icon && <stat.icon className="w-5 h-5 text-ci-yellow fill-ci-yellow" />}
                  </div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div 
              key={i}
              className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:border-ci-blue/30 transition-all duration-300"
            >
              {/* Icon & Highlight */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-ci-blue/10 flex items-center justify-center group-hover:bg-ci-blue transition-colors">
                  <reason.icon className="w-6 h-6 text-ci-blue group-hover:text-white transition-colors" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-ci-yellow/20 text-ci-yellow text-xs font-bold">
                  {reason.highlight}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-bold text-lg text-slate-900 mb-2">{reason.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-2xl shadow-xl border border-slate-100">
            <div className="text-center sm:text-left">
              <p className="font-bold text-slate-900 text-lg">พร้อมเริ่มต้นแล้วหรือยัง?</p>
              <p className="text-slate-500 text-sm">ปรึกษาฟรี! ไม่มีค่าใช้จ่าย</p>
            </div>
            <a 
              href="#contact" 
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-ci-blue to-ci-blueDark text-white rounded-xl font-bold hover:shadow-lg transition-all"
            >
              ติดต่อเราเลย
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
