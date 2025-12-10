import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import { ServicesSection, FinalCTASection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'บริการของเรา',
  description: 'บริการผลิตเสื้อครบวงจร DTG, DTF, Screen Print, ปักชื่อ-โลโก้, OEM/ODM และ Fulfillment Service',
};

export default function ServicesPage() {
  return (
    <PageLayout>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            บริการของเรา
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            เราให้บริการผลิตเสื้อด้วยเทคโนโลยีหลากหลาย เพื่อตอบโจทย์ทุกความต้องการของคุณ
          </p>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection showCTA={false} className="pt-8" />

      {/* CTA */}
      <FinalCTASection />
    </PageLayout>
  );
}
