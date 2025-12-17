'use client';

import Link from 'next/link';
import { Calculator, ArrowRight, Zap, CheckCircle2, Star } from 'lucide-react';

export default function CalculatorCTASection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-ci-yellow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-ci-blue/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-ci-blue text-sm font-bold mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span>คำนวณราคา</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            ประเมินราคาได้เอง
            <span className="block gradient-text">แค่ 1 นาที</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            กรอกรายละเอียดง่ายๆ รับราคาประมาณการทันที ไม่ต้องรอ ไม่ต้องโทรสอบถาม
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 rounded-full text-yellow-600 text-sm font-bold mb-6 w-fit">
                  <Zap className="w-4 h-4" />
                  <span>ใช้งานฟรี</span>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-ci-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">ราคาแม่นยำตามจริง</h3>
                      <p className="text-sm text-slate-600">คำนวณตามรายละเอียดที่คุณเลือก</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-ci-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">เลือกได้หลากหลาย</h3>
                      <p className="text-sm text-slate-600">เทคนิค ผ้า สี และจำนวน</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-ci-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">ไม่ต้องกรอกข้อมูลส่วนตัว</h3>
                      <p className="text-sm text-slate-600">คำนวณได้ทันที ไม่ต้องลงทะเบียน</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link 
                  href="/calculator"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-ci-blue to-ci-blueDark text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full md:w-auto"
                >
                  <Calculator className="w-6 h-6" />
                  <span>เริ่มคำนวณราคา</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right Side - Visual */}
              <div className="relative bg-gradient-to-br from-blue-50 to-slate-50 p-8 md:p-12 flex items-center justify-center min-h-[300px] lg:min-h-[400px]">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-dot-pattern opacity-5" />
                
                {/* Calculator Icon Large */}
                <div className="relative">
                  <div className="absolute inset-0 bg-ci-blue/20 blur-3xl rounded-full" />
                  <div className="relative bg-white rounded-3xl p-12 border-2 border-ci-blue/20 shadow-xl">
                    <Calculator className="w-32 h-32 text-ci-blue" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute top-8 right-8 bg-white rounded-2xl p-4 border border-slate-200 shadow-lg animate-float">
                  <div className="text-xs text-slate-500 mb-1">ราคาเริ่มต้น</div>
                  <div className="text-xl font-bold text-slate-900">฿45/ตัว</div>
                </div>
                
                <div className="absolute bottom-8 left-8 bg-white rounded-2xl p-4 border border-slate-200 shadow-lg animate-float-slow">
                  <div className="text-xs text-slate-500 mb-1">ใช้เวลา</div>
                  <div className="text-xl font-bold gradient-text">~1 นาที</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="text-center mt-8">
            <p className="text-slate-500 text-sm">
              💡 ราคาที่แสดงเป็นราคาประมาณการ ราคาจริงอาจแตกต่างตามรายละเอียดงาน
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



