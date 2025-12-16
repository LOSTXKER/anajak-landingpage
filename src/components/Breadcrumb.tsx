'use client';

import Link from 'next/link';
import { Home, ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  currentPage?: string;
}

export default function Breadcrumb({ items, currentPage }: BreadcrumbProps) {
  const pathname = usePathname();

  // Generate breadcrumb items from pathname if not provided
  const breadcrumbItems = items || generateBreadcrumbsFromPath(pathname);
  
  // Generate Schema.org JSON-LD for SEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "หน้าหลัก",
        "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://anajak-tshirt.com'}`
      },
      ...breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://anajak-tshirt.com'}${item.href}`
      })),
      ...(currentPage ? [{
        "@type": "ListItem",
        "position": breadcrumbItems.length + 2,
        "name": currentPage,
      }] : [])
    ]
  };

  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <nav 
        aria-label="breadcrumb" 
        className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-slate-600 mb-4 md:mb-6 overflow-x-auto pb-2 scrollbar-hide"
      >
        <Link 
          href="/" 
          className="hover:text-ci-blue transition-colors flex items-center gap-1 sm:gap-1.5 group flex-shrink-0"
          aria-label="กลับไปหน้าหลัก"
        >
          <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">หน้าหลัก</span>
        </Link>

        {breadcrumbItems.map((item, index) => (
          <div key={item.href} className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
            <Link
              href={item.href}
              className="hover:text-ci-blue transition-colors hover:underline truncate max-w-[100px] sm:max-w-none"
              title={item.label}
            >
              {item.label}
            </Link>
          </div>
        ))}

        {currentPage && (
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
            <span 
              className="text-slate-900 font-semibold truncate max-w-[120px] sm:max-w-[200px] md:max-w-none" 
              aria-current="page"
              title={currentPage}
            >
              {currentPage}
            </span>
          </div>
        )}
      </nav>
    </>
  );
}

// Helper function to generate breadcrumbs from pathname
function generateBreadcrumbsFromPath(pathname: string): BreadcrumbItem[] {
  const pathSegments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [];

  const pathMap: Record<string, string> = {
    'products': 'สินค้า',
    'services': 'บริการของเรา',
    'printing': 'บริการสกรีน',
    'dtf': 'DTF',
    'dtg': 'DTG',
    'silkscreen': 'Silk Screen',
    'pattern': 'ทำแพทเทิร์น',
    'fabric': 'เนื้อผ้า',
    'portfolio': 'ผลงาน',
    'blog': 'บทความ',
    'about': 'เกี่ยวกับเรา',
    'contact': 'ติดต่อเรา',
    'compare-fabrics': 'เปรียบเทียบเนื้อผ้า',
    'dtf-vs-dtg': 'เปรียบเทียบ DTF vs DTG',
    'calculator': 'คำนวณราคา',
  };

  let currentPath = '';
  
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Skip dynamic segments (starting with [...] or containing IDs)
    if (!segment.startsWith('[') && segment.length < 20) {
      breadcrumbs.push({
        label: pathMap[segment] || segment,
        href: currentPath
      });
    }
  });

  // Remove the last item if it's the current page
  if (breadcrumbs.length > 0) {
    breadcrumbs.pop();
  }

  return breadcrumbs;
}
