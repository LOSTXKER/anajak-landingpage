'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}

const servicesSubmenu: NavItem[] = [
  { name: 'บริการสกรีน', href: '/services/printing' },
  { name: 'ทำแพทเทิร์น', href: '/services/pattern' },
  { name: 'เนื้อผ้าหลากหลาย', href: '/services/fabric' },
];

const compareSubmenu: NavItem[] = [
  { name: 'เทียบเนื้อผ้า', href: '/compare-fabrics' },
  { name: 'เทียบงานสกรีน', href: '/dtf-vs-dtg' },
];

const mainNavigation: NavItem[] = [
  { name: 'หน้าแรก', href: '/' },
  { name: 'บริการของเรา', href: '/services', children: servicesSubmenu },
  { name: 'สินค้า', href: '/products' },
  { name: 'คำนวณราคา', href: '/calculator' },
  { name: 'เปรียบเทียบ', href: '/compare-fabrics', children: compareSubmenu },
  { name: 'ผลงาน', href: '/portfolio' },
  { name: 'บทความ', href: '/blog' },
  { name: 'เกี่ยวกับเรา', href: '/about' },
  { name: 'ติดต่อเรา', href: '/contact' },
];

const homeNavigation: NavItem[] = [
  { name: 'หน้าแรก', href: '#home' },
  { name: 'บริการของเรา', href: '/services', children: servicesSubmenu },
  { name: 'สินค้า', href: '/products' },
  { name: 'คำนวณราคา', href: '/calculator' },
  { name: 'เปรียบเทียบ', href: '/compare-fabrics', children: compareSubmenu },
  { name: 'ผลงาน', href: '/portfolio' },
  { name: 'บทความ', href: '/blog' },
  { name: 'เกี่ยวกับเรา', href: '/about' },
  { name: 'ติดต่อเรา', href: '/contact' },
];

interface HeaderProps {
  navMode?: 'page' | 'hash' | 'auto';
}

export default function Header({ navMode = 'auto' }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isHomePage = pathname === '/';
  const navigation: NavItem[] = 
    navMode === 'hash' ? homeNavigation :
    navMode === 'page' ? mainNavigation :
    isHomePage ? homeNavigation : mainNavigation;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActiveLink = (href: string) => {
    if (href.startsWith('#')) return false;
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect shadow-md' 
          : 'bg-white/95 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none'
      }`}
    >
        {/* Top Bar - Contact Info */}
      {!isScrolled && (
          <div className="bg-slate-900 text-white py-2 text-sm">
          <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-wrap items-center justify-between gap-2 md:gap-4">
                <div className="flex flex-wrap items-center gap-3 md:gap-6 text-xs md:text-sm">
                <a href={siteConfig.phoneHref} className="flex items-center gap-1 hover:text-ci-yellow transition-colors">
                    <Phone className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  <span>{siteConfig.phone}</span>
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1 hover:text-ci-yellow transition-colors">
                    <Mail className="w-3 h-3 md:w-3.5 md:h-3.5" />
                    <span className="hidden sm:inline">{siteConfig.email}</span>
                </a>
              </div>
                <div className="flex items-center gap-1 text-slate-300 text-xs md:text-sm">
                  <MapPin className="w-3 h-3 md:w-3.5 md:h-3.5" />
                <span>{siteConfig.address.short}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-ci-blue to-ci-blueDark rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
              A
            </div>
            <div>
              <div className="font-bold text-lg leading-tight text-slate-900">{siteConfig.name}</div>
              <div className="text-xs text-slate-500">{siteConfig.nameEn}</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5">
            {navigation.map((item) => {
              const isActive = isActiveLink(item.href);
              const isHashLink = item.href.startsWith('#');
              const hasChildren = item.children && item.children.length > 0;
              
              // Dropdown menu - check this FIRST before isHashLink
              if (hasChildren) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {isHashLink ? (
                      <a
                        href={item.href}
                          className={`flex items-center gap-1 px-3 py-2 rounded-lg font-medium transition-all ${
                          isActive 
                            ? 'text-ci-blue bg-blue-50' 
                            : 'text-slate-700 hover:text-ci-blue hover:bg-blue-50'
                        }`}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                          className={`flex items-center gap-1 px-3 py-2 rounded-lg font-medium transition-all ${
                          isActive 
                            ? 'text-ci-blue bg-blue-50' 
                            : 'text-slate-700 hover:text-ci-blue hover:bg-blue-50'
                        }`}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                      </Link>
                    )}
                    
                    {/* Dropdown Content */}
                    {openDropdown === item.name && (
                        <div className="absolute top-full left-0 -mt-1 pt-3 w-56">
                          <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2 animate-fade-in-down">
                        {item.children!.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2.5 text-slate-700 hover:text-ci-blue hover:bg-blue-50 transition-all"
                          >
                            {child.name}
                          </Link>
                        ))}
                          </div>
                      </div>
                    )}
                  </div>
                );
              }
              
              if (isHashLink) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                      className="px-3 py-2 text-slate-700 hover:text-ci-blue hover:bg-blue-50 rounded-lg font-medium transition-all"
                  >
                    {item.name}
                  </a>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                    className={`px-3 py-2 rounded-lg font-medium transition-all ${
                    isActive 
                      ? 'text-ci-blue bg-blue-50' 
                      : 'text-slate-700 hover:text-ci-blue hover:bg-blue-50'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-2 ml-1">
            <a href="/contact" className="btn-primary px-5 py-2">
              <Phone className="w-4 h-4" />
              ขอใบเสนอราคา
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-ci-blue transition-colors relative z-[60]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        </nav>
      </header>

      {/* Mobile Menu Backdrop - Outside header for proper z-index */}
        {isMobileMenuOpen && (
          <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[55]"
            onClick={() => setIsMobileMenuOpen(false)}
          style={{ top: isScrolled ? '72px' : '104px' }}
          />
        )}

      {/* Mobile Menu - Outside header for proper z-index */}
        <div 
        className={`lg:hidden fixed inset-x-0 bg-white shadow-2xl z-[56] overflow-y-auto ${
          isMobileMenuOpen ? 'block' : 'hidden'
          }`}
        style={{ top: isScrolled ? '72px' : '104px', bottom: 0 }}
        >
          <div className="p-6 space-y-2">
            {/* Navigation Links */}
            {navigation.map((item) => {
              const isHashLink = item.href.startsWith('#');
              const hasChildren = item.children && item.children.length > 0;
              const isOpen = openDropdown === item.name;
              
              // With submenu - check this FIRST
              if (hasChildren) {
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => setOpenDropdown(isOpen ? null : item.name)}
                      className="w-full flex items-center justify-between px-4 py-3 text-slate-700 hover:text-ci-blue hover:bg-blue-50 rounded-lg font-medium transition-all"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="ml-4 mt-1 space-y-1 py-2">
                        {item.children!.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-2.5 text-sm text-slate-600 hover:text-ci-blue hover:bg-blue-50 rounded-lg transition-all"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              
              if (isHashLink) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-slate-700 hover:text-ci-blue hover:bg-blue-50 rounded-lg font-medium transition-all"
                  >
                    {item.name}
                  </a>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                    isActiveLink(item.href)
                      ? 'text-ci-blue bg-blue-50'
                      : 'text-slate-700 hover:text-ci-blue hover:bg-blue-50'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            
            {/* CTA Button */}
            <div className="pt-4">
              <a href="/contact" className="btn-primary w-full justify-center">
                <Phone className="w-4 h-4" />
                ขอใบเสนอราคา
              </a>
            </div>
          </div>
        </div>
    </>
  );
}
