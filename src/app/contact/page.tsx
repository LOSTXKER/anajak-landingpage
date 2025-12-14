'use client';

import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  Video
} from 'lucide-react';
import { siteConfig } from '@/config/site';

const mainChannels = [
  {
    name: 'คุยกับเราผ่าน LINE',
    description: 'ช่องทางที่เร็วที่สุดในการสอบถาม ส่งไฟล์ และประเมินราคา',
    icon: MessageCircle,
    href: '#',
    color: 'from-green-500 to-green-600',
    textColor: 'text-green-600',
    buttonText: 'แอดไลน์เลย'
  },
  {
    name: 'ทักแชท Facebook',
    description: 'สอบถามข้อมูลเพิ่มเติม หรือติดตามข่าวสารและโปรโมชันของเรา',
    icon: Facebook,
    href: '#',
    color: 'from-blue-600 to-blue-700',
    textColor: 'text-blue-600',
    buttonText: 'ส่งข้อความ'
  }
];

const socialChannels = [
  {
    name: 'Instagram',
    description: 'แกลเลอรีรวมผลงานสกรีนสวยๆ และเบื้องหลังการถ่ายทำ',
    icon: Instagram,
    href: '#',
    color: 'text-pink-500',
    buttonText: 'ติดตาม IG'
  },
  {
    name: 'TikTok',
    description: 'คลิปสั้น รีวิวกระบวนการผลิต และเกร็ดความรู้สนุกๆ',
    icon: Video,
    href: '#',
    color: 'text-slate-900',
    buttonText: 'ติดตาม TikTok'
  },
  {
    name: 'YouTube',
    description: 'วิดีโอเจาะลึกเทคนิคสกรีน รีวิวเสื้อ และเบื้องหลังโรงงาน',
    icon: Youtube,
    href: '#',
    color: 'text-red-500',
    buttonText: 'Subscribe'
  }
];

const contactInfo = [
  {
    icon: Phone,
    title: 'โทรศัพท์',
    content: siteConfig.phone,
    href: siteConfig.phoneHref
  },
  {
    icon: Mail,
    title: 'อีเมล',
    content: siteConfig.email,
    href: `mailto:${siteConfig.email}`
  },
  {
    icon: Clock,
    title: 'เวลาทำการ',
    content: 'จันทร์ - เสาร์: 10:00 - 18:00 น.',
    href: null
  }
];

export default function ContactPage() {

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-ci-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ci-yellow/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ci-blue/10 rounded-full mb-4 opacity-0 animate-fade-in-up">
              <Phone className="w-4 h-4 text-ci-blue" />
              <span className="text-sm font-semibold text-ci-blue">Contact Us</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0 animate-fade-in-up delay-100">
              <span className="bg-gradient-to-r from-ci-blue to-ci-blueDark text-transparent bg-clip-text">
                ติดต่อเรา
              </span>
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-ci-blue to-ci-blueDark rounded-full mx-auto mb-6 opacity-0 animate-fade-in-up delay-200" />
            
            <p className="text-lg text-slate-600 leading-relaxed opacity-0 animate-fade-in-up delay-300">
              เราพร้อมให้คำปรึกษาและประเมินราคาสำหรับโปรเจกต์ของคุณ<br className="hidden md:block" />
              เลือกช่องทางที่สะดวกที่สุดสำหรับคุณ หรือติดตามคอนเทนต์ดีๆ จากเราได้เลย!
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Channels */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {mainChannels.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <a
                  key={i}
                  href={channel.href}
                  className={`group relative p-8 md:p-10 rounded-3xl bg-gradient-to-br ${channel.color} text-white overflow-hidden hover:scale-[1.02] transition-transform duration-300 shadow-xl hover:shadow-2xl`}
                >
                  {/* Decorative blob */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                  
                  <div className="relative">
                    <Icon className="w-16 h-16 mb-6" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{channel.name}</h3>
                    <p className="text-white/90 mb-6 leading-relaxed">{channel.description}</p>
                    
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-xl font-semibold group-hover:gap-3 transition-all">
                      <Icon className="w-5 h-5" />
                      <span>{channel.buttonText}</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-ci-blue to-ci-blueDark text-transparent bg-clip-text mb-4">
              ติดตามคอนเทนต์และเบื้องหลังการทำงาน
            </h2>
            <p className="text-lg text-slate-600">
              เกร็ดความรู้เรื่องสกรีน รีวิวเครื่องจักร และผลงานสวยๆ รอคุณอยู่!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {socialChannels.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <a
                  key={i}
                  href={channel.href}
                  className="group flex flex-col p-8 rounded-2xl bg-white border-2 border-slate-100 hover:border-ci-blue/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className={`w-16 h-16 ${channel.color} mb-4 group-hover:scale-110 transition-transform`} />
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{channel.name}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed flex-grow">{channel.description}</p>
                  
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-ci-blue transition-colors mt-auto">
                    <span>{channel.buttonText}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-50 to-white border-2 border-slate-100 shadow-xl">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-ci-blue to-ci-blueDark text-transparent bg-clip-text">
                  ข้อมูลโรงงานและช่องทางติดต่อสำรอง
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {contactInfo.map((info, i) => {
                  const Icon = info.icon;
                  return (
                    <div key={i} className="flex flex-col items-center text-center gap-4">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-ci-blue to-ci-blueDark text-white">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-slate-900 mb-2">{info.title}</h4>
                        {info.href ? (
                          <a href={info.href} className="text-ci-blue hover:text-ci-blueDark font-medium transition-colors">
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-slate-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="relative h-[450px]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.892796245781!2d98.95412587591968!3d18.7559131626019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a78a63814c1%3A0x7d37237088194f4c!2sAnajak%20T-Shirt!5e0!3m2!1sen!2sth!4v1725133098555!5m2!1sen!2sth" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="แผนที่โรงงาน Anajak T-Shirt"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </section>
    </PageLayout>
  );
}

