import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="py-4 bg-slate-50 border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          {/* Home */}
          <li>
            <Link 
              href="/" 
              className="flex items-center gap-1 text-slate-600 hover:text-ci-blue transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>หน้าแรก</span>
            </Link>
          </li>

          {/* Items */}
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            
            return (
              <li key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-slate-400" />
                {isLast || !item.href ? (
                  <span className="text-slate-900 font-semibold">{item.label}</span>
                ) : (
                  <Link 
                    href={item.href} 
                    className="text-slate-600 hover:text-ci-blue transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
