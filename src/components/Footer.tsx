'use client';

import Link from 'next/link';
import { 
  Phone, Mail, MapPin, Facebook, 
  MessageCircle, Clock, ChevronRight 
} from 'lucide-react';
import { siteConfig, footerServices, footerQuickLinks } from '@/lib/constants';

interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-slate-900 text-white ${className}`}>
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-ci-blue to-ci-blueDark rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                A
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">{siteConfig.name}</div>
                <div className="text-xs text-slate-400">{siteConfig.nameEn}</div>
              </div>
            </Link>
            <p className="text-slate-300 mb-6 leading-relaxed">
              โรงงานผลิตเสื้อยืดและเสื้อผ้าคุณภาพสูง 
              ด้วยประสบการณ์กว่า 20 ปี 
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
                <li key={service}>
                  <Link 
                    href="/services"
                    className="flex items-center gap-2 text-slate-300 hover:text-ci-yellow transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>{service}</span>
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
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-ci-yellow transition-colors">
                นโยบายความเป็นส่วนตัว
              </Link>
              <Link href="/terms" className="hover:text-ci-yellow transition-colors">
                เงื่อนไขการใช้งาน
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

