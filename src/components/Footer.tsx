'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, Mail, MapPin, Facebook, 
  MessageCircle, Clock, ChevronRight 
} from 'lucide-react';
import { siteConfig } from '@/config/site';

const footerServices = [
  { name: 'พิมพ์เสื้อ DTG', href: '/services/printing/dtg' },
  { name: 'พิมพ์เสื้อ DTF', href: '/services/printing/dtf' },
  { name: 'Silk Screen', href: '/services/printing/silkscreen' },
  { name: 'ทำแพทเทิร์น', href: '/services/pattern' },
  { name: 'เนื้อผ้าหลากหลาย', href: '/services/fabric' },
];

const footerQuickLinks = [
  { name: 'หน้าแรก', href: '/' },
  { name: 'บริการของเรา', href: '/services' },
  { name: 'สินค้า', href: '/products' },
  { name: 'ผลงาน', href: '/portfolio' },
  { name: 'บทความ', href: '/blog' },
  { name: 'เกี่ยวกับเรา', href: '/about' },
  { name: 'ติดต่อเรา', href: '/contact' },
];

const footerTools = [
  { name: 'คำนวณราคา', href: '/calculator' },
  { name: 'เทียบเนื้อผ้า', href: '/compare-fabrics' },
  { name: 'เทียบงานสกรีน', href: '/dtf-vs-dtg' },
];

interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-slate-900 text-white ${className}`}>
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <div className="relative w-16 h-16 hover:scale-110 transition-transform">
                <Image
                  src="/images/logo.png"
                  alt="Anajak T-Shirt"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-slate-300 mb-6 leading-relaxed">
              โรงงานผลิตเสื้อยืดและเสื้อผ้าคุณภาพสูง 
              ด้วยประสบการณ์กว่า 5 ปี 
              มุ่งมั่นส่งมอบผลิตภัณฑ์คุณภาพเกรดพรีเมียม
            </p>
            <div className="flex items-center gap-4">
              <a 
                href={siteConfig.facebookUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-ci-blue rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={siteConfig.lineUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-green-500 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="LINE"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-ci-yellow">บริการของเรา</h3>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="flex items-center gap-2 text-slate-300 hover:text-ci-yellow transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-ci-yellow">เมนูลัด</h3>
            <ul className="space-y-3">
              {footerQuickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-2 text-slate-300 hover:text-ci-yellow transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-ci-yellow">เครื่องมือ</h3>
            <ul className="space-y-3">
              {footerTools.map((tool) => (
                <li key={tool.name}>
                  <Link 
                    href={tool.href}
                    className="flex items-center gap-2 text-slate-300 hover:text-ci-yellow transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>{tool.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-ci-yellow">ติดต่อเรา</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-ci-blue shrink-0 mt-0.5" />
                <div className="text-slate-300">
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-ci-blue shrink-0" />
                <a href={siteConfig.phoneHref} className="text-slate-300 hover:text-ci-yellow transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-ci-blue shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-slate-300 hover:text-ci-yellow transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-ci-blue shrink-0 mt-0.5" />
                <div className="text-slate-300">
                  จันทร์-เสาร์: {siteConfig.businessHours.weekdays}<br />
                  อาทิตย์: {siteConfig.businessHours.sunday}
                </div>
              </div>
              
              {/* LINE CTA Button */}
              <div className="mt-6">
                <a 
                  href={siteConfig.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-all hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>แชทผ่าน LINE</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>
              © {currentYear} <span className="text-ci-yellow font-medium">{siteConfig.name}</span> สงวนลิขสิทธิ์
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

