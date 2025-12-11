'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface NavItem {
  name: string;
  href: string;
}

const mainNavigation: NavItem[] = [
  { name: 'หน้าแรก', href: '/' },
];

const homeNavigation: NavItem[] = [
  { name: 'หน้าแรก', href: '#home' },
];

interface HeaderProps {
  navMode?: 'page' | 'hash' | 'auto';
}

export default function Header({ navMode = 'auto' }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
  }, [pathname]);

  const isActiveLink = (href: string) => {
    if (href.startsWith('#')) return false;
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-md' : 'bg-transparent'
      }`}
    >
      {/* Top Bar - Contact Info */}
      {!isScrolled && (
        <div className="bg-slate-900 text-white py-2 text-sm">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                <a href={siteConfig.phoneHref} className="flex items-center gap-1 hover:text-ci-yellow transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{siteConfig.phone}</span>
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1 hover:text-ci-yellow transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{siteConfig.email}</span>
                </a>
              </div>
              <div className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5" />
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
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = isActiveLink(item.href);
              const isHashLink = item.href.startsWith('#');
              
              if (isHashLink) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-4 py-2 text-slate-700 hover:text-ci-blue hover:bg-blue-50 rounded-lg font-medium transition-all"
                  >
                    {item.name}
                  </a>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
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
          <div className="hidden lg:flex items-center gap-3">
            <a href={siteConfig.phoneHref} className="btn-primary">
              <Phone className="w-4 h-4" />
              โทรเลย
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-ci-blue transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-slate-200">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => {
                const isHashLink = item.href.startsWith('#');
                
                if (isHashLink) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-3 text-slate-700 hover:text-ci-blue hover:bg-blue-50 rounded-lg font-medium transition-all"
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
                    className={`px-4 py-3 rounded-lg font-medium transition-all ${
                      isActiveLink(item.href)
                        ? 'text-ci-blue bg-blue-50'
                        : 'text-slate-700 hover:text-ci-blue hover:bg-blue-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <a href={siteConfig.phoneHref} className="btn-primary mt-2">
                <Phone className="w-4 h-4" />
                โทรเลย
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
