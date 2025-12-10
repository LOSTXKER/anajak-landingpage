import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import { ContactSection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'ติดต่อเรา',
  description: 'ติดต่อ อนาจักร ที-เชิ้ต เพื่อขอใบเสนอราคาและปรึกษาเรื่องการผลิตเสื้อยืด',
};

export default function ContactPage() {
  return (
    <PageLayout>
      {/* Page Header */}
      <section className="pt-32 pb-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            ติดต่อเรา
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            พร้อมให้บริการและตอบคำถามทุกข้อสงสัย
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection className="pt-8" />

      {/* Map Section (Placeholder) */}
      <section className="pb-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-slate-100 rounded-2xl h-80 flex items-center justify-center">
              <div className="text-center text-slate-500">
                <div className="text-5xl mb-4">🗺️</div>
                <p>แผนที่จะแสดงที่นี่</p>
                <p className="text-sm">(สามารถ embed Google Map ได้ในอนาคต)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
