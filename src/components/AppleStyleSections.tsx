'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  Sparkles, Zap, Shield, Clock, Users, Award, 
  CheckCircle, ArrowRight, Star, Factory, Shirt,
  Palette, Layers, Target, Heart
} from 'lucide-react';

// ============================================
// Fade In Section Component
// ============================================
interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FadeInSection({ children, className = '', delay = 0 }: FadeInSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// HERO CINEMATIC
// ============================================
export function HeroCinematic() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section ref={ref} className="relative min-h-[120vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Video/Image Background Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-black" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
      >
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          กำลังผลิตอยู่ตอนนี้ • 500+ ออเดอร์
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-heading tracking-tight"
        >
          <span className="block">ทุกเสื้อ</span>
          <span className="block bg-gradient-to-r from-ci-yellow via-orange-400 to-ci-yellow bg-clip-text text-transparent">
            มีเรื่องราว
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          เราไม่ได้แค่พิมพ์เสื้อ เราสร้างตัวตนให้กับแบรนด์ของคุณ
          <br className="hidden md:block" />
          ด้วยเทคโนโลยีระดับโลก และความใส่ใจในทุกรายละเอียด
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#story"
            className="group px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            เริ่มต้นเรื่องราวของคุณ
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ============================================
// STORY SECTION - เรื่องราวของเรา
// ============================================
export function StorySection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="story" ref={ref} className="relative py-32 md:py-48 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Text */}
          <div>
            <FadeInSection>
              <span className="text-ci-blue font-bold text-sm tracking-widest uppercase mb-4 block">
                Our Story
              </span>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                20 ปีแห่งการ
                <br />
                <span className="gradient-text">สร้างสรรค์</span>
              </h2>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                เริ่มต้นจากโรงงานเล็กๆ ในกรุงเทพฯ ด้วยความฝันที่จะสร้างเสื้อคุณภาพ
                ที่ทุกคนสวมใส่ได้อย่างภาคภูมิใจ วันนี้เราเติบโตมาเป็นโรงงานชั้นนำ
                ที่ได้รับความไว้วางใจจากองค์กรกว่า 500 แห่งทั่วประเทศ
              </p>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <p className="text-lg text-slate-500 leading-relaxed mb-12">
                เราเชื่อว่าเสื้อผ้าไม่ได้เป็นแค่สิ่งที่สวมใส่ แต่คือตัวแทนของตัวตน
                ความภาคภูมิใจ และความทรงจำ ไม่ว่าจะเป็นเสื้อทีมที่คุณสวมตอนชนะแข่งขัน
                เสื้อบริษัทที่ทำให้รู้สึกเป็นส่วนหนึ่งของทีม หรือเสื้อรุ่นที่เก็บไว้เป็นความทรงจำ
              </p>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="flex items-center gap-8">
                <div>
                  <div className="text-4xl font-bold text-ci-blue">50,000+</div>
                  <div className="text-slate-500">ออเดอร์สำเร็จ</div>
                </div>
                <div className="w-px h-12 bg-slate-200" />
                <div>
                  <div className="text-4xl font-bold text-ci-blue">4.9</div>
                  <div className="text-slate-500 flex items-center gap-1">
                    <Star className="w-4 h-4 text-ci-yellow fill-current" />
                    คะแนนรีวิว
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>

          {/* Right - Visual */}
          <motion.div style={{ y }} className="relative">
            <FadeInSection delay={0.2}>
              <div className="relative">
                {/* Main image placeholder */}
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Factory className="w-24 h-24 text-slate-300 mx-auto mb-4" />
                      <p className="text-slate-400">Factory Image</p>
                    </div>
                  </div>
                </div>

                {/* Floating card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-7 h-7 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">ISO Certified</div>
                      <div className="text-sm text-slate-500">มาตรฐานสากล</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeInSection>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// TECHNOLOGY SHOWCASE - แบบ Apple
// ============================================
export function TechnologyShowcase() {
  const technologies = [
    {
      icon: Zap,
      title: 'DTG Technology',
      subtitle: 'Direct to Garment',
      description: 'พิมพ์ตรงลงบนผ้าด้วยความละเอียด 1440 dpi สีสันสดใส คมชัดทุกรายละเอียด เหมาะกับงานที่ต้องการความละเอียดสูง',
      features: ['ความละเอียดสูง 1440 dpi', 'พิมพ์ได้ไม่จำกัดสี', 'เหมาะกับภาพถ่าย'],
      color: 'blue',
    },
    {
      icon: Sparkles,
      title: 'DTF Innovation',
      subtitle: 'Direct to Film',
      description: 'เทคโนโลยีล่าสุดที่ทนทานกว่าเดิม ซักได้มากกว่า 100 ครั้งโดยไม่ลอก ไม่แตก เหมาะกับทุกประเภทผ้า',
      features: ['ซักได้ 100+ ครั้ง', 'ไม่ลอก ไม่แตก', 'เหมาะทุกผ้า'],
      color: 'purple',
    },
    {
      icon: Layers,
      title: 'Screen Printing',
      subtitle: 'Silk Screen',
      description: 'เทคนิคดั้งเดิมที่ให้สีสันทึบสวย เหมาะกับงานจำนวนมาก ต้นทุนต่ำ คุณภาพคงที่ทุกตัว',
      features: ['สีทึบสวย', 'ราคาประหยัด', 'เหมาะจำนวนมาก'],
      color: 'orange',
    },
  ];

  return (
    <section className="relative py-32 md:py-48 bg-black text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black" />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="text-center mb-24">
          <FadeInSection>
            <span className="text-ci-yellow font-bold text-sm tracking-widest uppercase mb-4 block">
              Technology
            </span>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              เทคโนโลยี
              <br />
              <span className="bg-gradient-to-r from-ci-yellow to-orange-400 bg-clip-text text-transparent">
                ที่เหนือกว่า
              </span>
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              เราลงทุนในเครื่องจักรและเทคโนโลยีล่าสุดจากทั่วโลก
              <br className="hidden md:block" />
              เพื่อมอบคุณภาพที่ดีที่สุดให้กับคุณ
            </p>
          </FadeInSection>
        </div>

        {/* Technologies */}
        <div className="space-y-32">
          {technologies.map((tech, i) => (
            <FadeInSection key={i} delay={i * 0.1}>
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center ${
                i % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}>
                {/* Content */}
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                    tech.color === 'blue' ? 'bg-blue-500/20' :
                    tech.color === 'purple' ? 'bg-purple-500/20' :
                    'bg-orange-500/20'
                  }`}>
                    <tech.icon className={`w-8 h-8 ${
                      tech.color === 'blue' ? 'text-blue-400' :
                      tech.color === 'purple' ? 'text-purple-400' :
                      'text-orange-400'
                    }`} />
                  </div>

                  <div className="text-sm text-slate-500 uppercase tracking-wider mb-2">
                    {tech.subtitle}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    {tech.title}
                  </h3>

                  <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                    {tech.description}
                  </p>

                  <ul className="space-y-3">
                    {tech.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle className={`w-5 h-5 ${
                          tech.color === 'blue' ? 'text-blue-400' :
                          tech.color === 'purple' ? 'text-purple-400' :
                          'text-orange-400'
                        }`} />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={i % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className={`aspect-square rounded-3xl flex items-center justify-center relative overflow-hidden ${
                    tech.color === 'blue' ? 'bg-gradient-to-br from-blue-500/10 to-blue-900/20' :
                    tech.color === 'purple' ? 'bg-gradient-to-br from-purple-500/10 to-purple-900/20' :
                    'bg-gradient-to-br from-orange-500/10 to-orange-900/20'
                  }`}>
                    {/* Animated rings */}
                    <div className={`absolute inset-8 rounded-full border ${
                      tech.color === 'blue' ? 'border-blue-500/20' :
                      tech.color === 'purple' ? 'border-purple-500/20' :
                      'border-orange-500/20'
                    } animate-pulse`} />
                    <div className={`absolute inset-16 rounded-full border ${
                      tech.color === 'blue' ? 'border-blue-500/10' :
                      tech.color === 'purple' ? 'border-purple-500/10' :
                      'border-orange-500/10'
                    } animate-pulse`} style={{ animationDelay: '0.5s' }} />

                    <tech.icon className={`w-32 h-32 ${
                      tech.color === 'blue' ? 'text-blue-400/50' :
                      tech.color === 'purple' ? 'text-purple-400/50' :
                      'text-orange-400/50'
                    }`} />
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// WHY CHOOSE US - Sticky Scroll
// ============================================
export function WhyChooseUsApple() {
  const reasons = [
    {
      icon: Factory,
      title: 'โรงงานผลิตเอง',
      description: 'ไม่ผ่านคนกลาง ควบคุมคุณภาพได้ทุกขั้นตอน ราคาโรงงานตรงจากเรา',
      stat: '100%',
      statLabel: 'ควบคุมคุณภาพ',
    },
    {
      icon: Clock,
      title: 'ส่งตรงเวลา ทุกครั้ง',
      description: 'เรามีระบบจัดการออเดอร์ที่มีประสิทธิภาพ รับประกันส่งมอบตรงเวลาที่นัดหมาย',
      stat: '99.8%',
      statLabel: 'ส่งตรงเวลา',
    },
    {
      icon: Shield,
      title: 'รับประกันคุณภาพ',
      description: 'หากมีปัญหาจากการผลิต เรายินดีผลิตใหม่ให้ฟรี ไม่มีเงื่อนไข',
      stat: '100%',
      statLabel: 'รับประกัน',
    },
    {
      icon: Users,
      title: 'ทีมผู้เชี่ยวชาญ',
      description: 'ทีมงานที่พร้อมให้คำปรึกษาตลอด 24/7 ตั้งแต่การออกแบบจนถึงการจัดส่ง',
      stat: '24/7',
      statLabel: 'พร้อมช่วยเหลือ',
    },
  ];

  return (
    <section className="relative py-32 md:py-48 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <FadeInSection>
            <span className="text-ci-blue font-bold text-sm tracking-widest uppercase mb-4 block">
              Why Choose Us
            </span>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">
              ทำไมต้องเลือก
              <br />
              <span className="gradient-text">อนาจักร ที-เชิ้ต</span>
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              เราไม่ได้แค่ขายเสื้อ เราสร้างความสัมพันธ์ระยะยาว
              <br className="hidden md:block" />
              กับลูกค้าทุกคนด้วยความใส่ใจ
            </p>
          </FadeInSection>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, i) => (
            <FadeInSection key={i} delay={i * 0.1}>
              <div className="group bg-white rounded-3xl p-8 md:p-12 hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-ci-blue/20">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-ci-blue to-ci-blueDark rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-ci-blue transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {reason.description}
                    </p>
                    
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold text-ci-blue">{reason.stat}</span>
                      <span className="text-slate-500 pb-1">{reason.statLabel}</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// PROCESS SECTION - ขั้นตอนการทำงาน
// ============================================
export function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'ปรึกษาและออกแบบ',
      description: 'ส่งแบบมาให้เรา หรือปรึกษาทีมดีไซน์ฟรี เราช่วยออกแบบให้ตรงใจคุณ',
      icon: Palette,
    },
    {
      number: '02',
      title: 'เสนอราคาและยืนยัน',
      description: 'รับใบเสนอราคาภายใน 24 ชั่วโมง โปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง',
      icon: Target,
    },
    {
      number: '03',
      title: 'ผลิตด้วยความใส่ใจ',
      description: 'ทีมงานผลิตเสื้อทุกตัวด้วยความพิถีพิถัน ผ่าน QC ทุกขั้นตอน',
      icon: Shirt,
    },
    {
      number: '04',
      title: 'จัดส่งตรงเวลา',
      description: 'แพ็คอย่างดี ส่งตรงถึงมือคุณตามกำหนด ติดตามสถานะได้ตลอด',
      icon: Heart,
    },
  ];

  return (
    <section className="relative py-32 md:py-48 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <FadeInSection>
            <span className="text-ci-blue font-bold text-sm tracking-widest uppercase mb-4 block">
              Our Process
            </span>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">
              ง่าย สะดวก
              <br />
              <span className="gradient-text">รวดเร็ว</span>
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              แค่ 4 ขั้นตอน จากไอเดียสู่เสื้อจริง
            </p>
          </FadeInSection>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <FadeInSection key={i} delay={i * 0.15}>
              <div className="relative flex items-start gap-8 mb-16 last:mb-0">
                {/* Line connector */}
                {i < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-ci-blue to-transparent" />
                )}

                {/* Number */}
                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-ci-blue to-ci-blueDark rounded-2xl flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="w-6 h-6 text-ci-blue" />
                    <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// FINAL CTA - Apple Style
// ============================================
export function FinalCTAApple() {
  return (
    <section className="relative py-32 md:py-48 bg-black text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-ci-blue/20 via-transparent to-purple-500/20" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
              พร้อมที่จะสร้าง
              <br />
              <span className="bg-gradient-to-r from-ci-yellow via-orange-400 to-ci-yellow bg-clip-text text-transparent">
                เสื้อในฝันของคุณ?
              </span>
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto">
              ติดต่อเราวันนี้ รับคำปรึกษาฟรี
              <br />
              และใบเสนอราคาภายใน 24 ชั่วโมง
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#contact"
                className="group px-12 py-6 bg-white text-black rounded-full font-bold text-xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                เริ่มต้นเลย
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+6612345678"
                className="px-12 py-6 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-xl hover:bg-white/20 transition-all duration-300"
              >
                โทร 02-XXX-XXXX
              </a>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-500 text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                ปรึกษาฟรี
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                ใบเสนอราคาใน 24 ชม.
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                ไม่มีขั้นต่ำ
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                ส่งฟรีทั่วไทย
              </span>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
