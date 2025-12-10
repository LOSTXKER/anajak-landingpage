import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import { PortfolioSection, TestimonialsSection, FinalCTASection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'ผลงานของเรา',
  description: 'ผลงานผลิตเสื้อยืดคุณภาพสูงจาก อนาจักร ที-เชิ้ต สำหรับองค์กรชั้นนำมากมาย',
};

export default function PortfolioPage() {
  return (
    <PageLayout>
      {/* Page Header */}
      <section className="pt-32 pb-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            ผลงานของเรา
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            เราได้มีโอกาสผลิตเสื้อให้กับองค์กรชั้นนำมากมาย
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection className="pt-8" />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA */}
      <FinalCTASection />
    </PageLayout>
  );
}
