import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import Breadcrumb from '@/components/Breadcrumb';
import { TechnologySection, FinalCTASection } from '@/components/sections';
import { getImagesBySection } from '@/lib/images';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'เทคโนโลยี',
  description: 'เทคโนโลยีการผลิตทันสมัย DTG, DTF พร้อมระบบควบคุมคุณภาพ',
};

export default async function TechnologyPage() {
  const techImages = await getImagesBySection('technology');

  return (
    <PageLayout>
      {/* Page Header */}
      <section className="pt-32 pb-8 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumb currentPage="เทคโนโลยี" />
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            เทคโนโลยีการผลิต
          </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              เราใช้เครื่องจักรและเทคโนโลยีล่าสุด เพื่อมอบคุณภาพที่ดีที่สุด
            </p>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <TechnologySection className="pt-8" images={techImages} />

      {/* CTA */}
      <FinalCTASection />
    </PageLayout>
  );
}
