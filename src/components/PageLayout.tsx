'use client';

import Header from './Header';
import Footer from './Footer';
import ProductionTicker from './ProductionTicker';

interface PageLayoutProps {
  children: React.ReactNode;
  /**
   * Show the production ticker at the top
   */
  showTicker?: boolean;
  /**
   * Navigation mode for the header
   * - 'page': Use page links (e.g., /services)
   * - 'hash': Use hash links (e.g., #services) - for landing pages
   * - 'auto': Automatically detect based on current path
   */
  navMode?: 'page' | 'hash' | 'auto';
  /**
   * Additional class name for the main container
   */
  className?: string;
}

export default function PageLayout({ 
  children, 
  showTicker = true,
  navMode = 'auto',
  className = ''
}: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-slate-50 ${className}`}>
      {showTicker && <ProductionTicker />}
      <Header navMode={navMode} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
