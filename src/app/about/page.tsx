import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import { WhyChooseUsSection, TechnologySection, FinalCTASection } from '@/components/sections';
import { stats } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'เกี่ยวกับเรา',
  description: 'อนาจักร ที-เชิ้ต โรงงานผลิตเสื้อยืดคุณภาพสูง กว่า 20 ปีประสบการณ์ มาตรฐาน ISO',
};

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            เกี่ยวกับเรา
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            โรงงานผลิตเสื้อยืดคุณภาพสูง ด้วยประสบการณ์กว่า 20 ปี
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-slate-50">
                <stat.icon className="w-10 h-10 text-ci-blue mx-auto mb-4" />
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">เรื่องราวของเรา</h2>
            <div className="prose prose-lg max-w-none text-slate-600">
              <p>
                อนาจักร ที-เชิ้ต ก่อตั้งขึ้นด้วยความมุ่งมั่นที่จะเป็นโรงงานผลิตเสื้อยืดคุณภาพสูง 
                ที่ส่งมอบผลิตภัณฑ์ระดับพรีเมียมในราคาที่ยุติธรรม
              </p>
              <p>
                ด้วยประสบการณ์กว่า 20 ปีในอุตสาหกรรมสิ่งทอ เราได้พัฒนาเทคโนโลยีและกระบวนการผลิต
                อย่างต่อเนื่อง เพื่อตอบสนองความต้องการที่หลากหลายของลูกค้า ตั้งแต่งานพิมพ์ DTG, DTF
                ไปจนถึงงาน Screen Print และงานปักคุณภาพสูง
              </p>
              <p>
                วันนี้ เราภูมิใจที่ได้รับความไว้วางใจจากองค์กรชั้นนำมากกว่า 500 แห่ง
                และส่งมอบออเดอร์สำเร็จมากกว่า 50,000 รายการ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Technology */}
      <TechnologySection />

      {/* CTA */}
      <FinalCTASection />
    </PageLayout>
  );
}
