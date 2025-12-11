'use client';

import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck, Truck, Clock, BadgeCheck } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'คุณสมชาย ใจดี',
    role: 'ผู้จัดการ HR บริษัท ABC',
    text: 'ใช้บริการมา 5 ปี คุณภาพดีมาก ส่งตรงเวลาทุกครั้ง พนักงานประทับใจในคุณภาพเสื้อ ราคาก็เหมาะสม จะใช้บริการต่อไปแน่นอน',
    rating: 5,
  },
  {
    name: 'คุณสมหญิง วิทยา',
    role: 'เจ้าของร้าน TeeShop',
    text: 'เป็นซัพพลายเออร์หลักของเรา สินค้าคุณภาพดี ราคาแข่งขันได้ ส่งไว บริการดี ลูกค้าชอบมาก ขายดีทุกรุ่น',
    rating: 5,
  },
  {
    name: 'อ.วิชัย ศรีสุข',
    role: 'อาจารย์โรงเรียนมัธยม',
    text: 'สั่งเสื้อรุ่นนักเรียน 300 ตัว คุณภาพเกินราคา เด็กๆ ชอบมาก ครูและผู้ปกครองพอใจ ปีหน้าจะสั่งอีกแน่นอน',
    rating: 5,
  },
];

const trustBadges = [
  { icon: ShieldCheck, text: 'รับประกันคุณภาพ 100%' },
  { icon: Truck, text: 'จัดส่งฟรีทั่วไทย' },
  { icon: Clock, text: 'ส่งตรงเวลา ทุกครั้ง' },
  { icon: BadgeCheck, text: 'มาตรฐาน ISO' },
];

interface TestimonialsSectionProps {
  className?: string;
}

export default function TestimonialsSection({ className = '' }: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={`py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden ${className}`}>
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-ci-yellow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-ci-blue/10 rounded-full blur-3xl" />
      
      {/* Quote decoration */}
      <Quote className="absolute top-20 right-20 w-32 h-32 text-slate-100 transform rotate-12 hidden lg:block" />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-50 text-yellow-600 text-sm font-bold mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span>ลูกค้าพูดถึงเรา</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            รีวิวจาก<span className="gradient-text">ลูกค้าจริง</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            ความพึงพอใจของลูกค้าคือความสำเร็จของเรา
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
            {/* Quote icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-ci-yellow rounded-2xl flex items-center justify-center shadow-lg">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Navigation arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>

            {/* Content */}
            <div className="px-8">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 text-ci-yellow mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, j) => (
                  <Star key={j} className="w-6 h-6 fill-current animate-scale-in" style={{ animationDelay: `${j * 100}ms` }} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl md:text-2xl text-slate-700 text-center mb-8 leading-relaxed font-medium">
                &ldquo;{testimonials[activeIndex].text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-ci-blue to-ci-blueDark text-white flex items-center justify-center font-bold text-2xl shadow-lg">
                  {testimonials[activeIndex].name.charAt(2)}
                </div>
                <div className="text-left">
                  <p className="font-bold text-slate-900 text-lg">{testimonials[activeIndex].name}</p>
                  <p className="text-slate-500">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setActiveIndex(i);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === activeIndex 
                      ? 'w-8 bg-ci-blue' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Small testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((item, i) => (
            <div 
              key={i}
              onClick={() => {
                setIsAutoPlaying(false);
                setActiveIndex(i);
              }}
              className={`
                cursor-pointer bg-white rounded-2xl p-6 border transition-all duration-300
                ${i === activeIndex 
                  ? 'border-ci-blue shadow-lg scale-[1.02]' 
                  : 'border-slate-100 hover:border-slate-200 hover:shadow-md'
                }
              `}
            >
              <div className="flex items-center gap-1 text-ci-yellow mb-4">
                {[...Array(item.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 text-sm line-clamp-2 mb-4">&ldquo;{item.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ci-blue text-white flex items-center justify-center font-bold">
                  {item.name.charAt(2)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {trustBadges.map((badge, i) => (
            <div 
              key={i}
              className="group flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm hover:shadow-md hover:border-ci-blue/30 transition-all duration-300"
            >
              <badge.icon className="w-5 h-5 text-ci-blue group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-slate-700">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
