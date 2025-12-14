'use client';

import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { FinalCTASection } from '@/components/sections';
import FAQ from '@/components/FAQ';
import { 
  Briefcase,
  Users,
  Trophy,
  Palette,
  ExternalLink,
  Quote
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const caseStudies = [
  {
    id: 1,
    category: 'เสื้อแบรนด์แฟชั่น',
    title: 'แบรนด์ ERROR 404 - คอลเลกชัน \'Human Not Found\'',
    challenge: 'แบรนด์ต้องการผลิตเสื้อสำหรับคอลเลกชันเปิดตัว ที่มีลายกราฟิกคมชัด สีสด และต้องติดทนทานบนเสื้อยืด Cotton ทรง Oversized คุณภาพสูง',
    solution: 'เราแนะนำเทคนิค DTF (Direct to Film) เพราะสามารถพิมพ์ลายที่ซับซ้อนและมีสีสันจัดจ้านได้อย่างแม่นยำ และยังให้สัมผัสที่ยืดหยุ่น ทนทานต่อการซัก ไม่แตกลอกง่าย',
    technique: 'DTF',
    testimonial: '"คุณภาพงานสกรีนดีมากครับ สีสดเหมือนที่ออกแบบไว้เลย ทีมงานให้คำปรึกษาดีมาก ทำให้คอลเลกชันแรกของเราออกมาสมบูรณ์แบบ"',
    client: 'คุณเอ, เจ้าของแบรนด์ ERROR 404',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2070',
    color: 'from-ci-blue to-blue-600',
    textColor: 'text-ci-blue',
    icon: Briefcase,
    imagePosition: 'right'
  },
  {
    id: 2,
    category: 'เสื้อพนักงาน / บริษัท',
    title: 'The Green Bean Cafe - ยูนิฟอร์มพนักงานใหม่',
    challenge: 'ร้านกาแฟชื่อดังในเชียงใหม่ ต้องการยูนิฟอร์มเสื้อโปโลสำหรับพนักงานที่ดูพรีเมียม สัมผัสนุ่มสบาย และระบายอากาศได้ดี โลโก้ต้องดูเรียบหรูเป็นส่วนหนึ่งของเนื้อผ้า',
    solution: 'เราเลือกใช้เทคนิค DTG (Direct to Garment) พิมพ์ลงบนเสื้อโปโลเนื้อผ้า Cotton 100% เพราะหมึกจะซึมลงไปในเส้นใยผ้า ทำให้ไม่มีความรู้สึกของชั้นสี สัมผัสนุ่มสบาย',
    technique: 'DTG',
    testimonial: '"เสื้อสวยมากค่ะ เนื้อผ้าดี สกรีนโลโก้เนียนไปกับผ้าเลย พนักงานทุกคนชอบมาก ทำให้ร้านดูเป็นมืออาชีพขึ้นเยอะเลยค่ะ"',
    client: 'คุณบี, ผู้จัดการร้าน The Green Bean Cafe',
    image: 'https://images.unsplash.com/photo-1556742517-88c21c97a4a5?q=80&w=2070',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-600',
    icon: Users,
    imagePosition: 'left'
  },
  {
    id: 3,
    category: 'เสื้อทีม / กิจกรรม',
    title: 'Chiang Mai Run 2025 - เสื้อวิ่งสำหรับนักกีฬา',
    challenge: 'ผู้จัดงานวิ่งมาราธอนต้องการเสื้อสำหรับนักวิ่งกว่า 5,000 คน เนื้อผ้าต้องเป็น Dry-Tech ที่ระบายอากาศได้ดี สีสันของสปอนเซอร์ต้องสดใสและมองเห็นได้ชัดเจน',
    solution: 'เทคนิค DTF คือคำตอบที่ดีที่สุดสำหรับงานนี้ เพราะสามารถพิมพ์ลงบนผ้าใยสังเคราะห์ (Polyester) ได้อย่างยอดเยี่ยม ให้สีที่สดและติดทนแน่น ผลิตได้รวดเร็ว',
    technique: 'DTF',
    testimonial: '"ประสานงานง่าย ผลิตงานได้รวดเร็วและมีคุณภาพมากครับ เสื้อวิ่ง 5,000 ตัวเสร็จทันเวลาพอดี นักวิ่งทุกคนประทับใจมากครับ"',
    client: 'คุณซี, ผู้จัดงาน Chiang Mai Run 2025',
    image: 'https://images.unsplash.com/photo-1579626343200-547854375b6a?q=80&w=1974',
    color: 'from-orange-500 to-amber-600',
    textColor: 'text-orange-600',
    icon: Trophy,
    imagePosition: 'right'
  },
  {
    id: 4,
    category: 'งานดีไซน์ / อาร์ตเวิร์ค',
    title: 'Lanna Artist - สินค้าลายภาพวาดสีน้ำ',
    challenge: 'ศิลปินชาวเชียงใหม่ต้องการนำผลงานภาพวาดสีน้ำที่มีการไล่เฉดสีที่ละเอียดอ่อน มาผลิตเป็นเสื้อยืดเพื่อจำหน่าย โดยต้องการให้เก็บรายละเอียดเหมือนภาพวาดต้นฉบับ',
    solution: 'เทคนิค DTG สามารถพิมพ์สีได้ไม่จำกัดและไล่โทนสีได้อย่างนุ่มนวลเหมือนเครื่องพิมพ์กระดาษ ทำให้สามารถเก็บรายละเอียดเล็กๆ น้อยๆ และความโปร่งแสงของสีน้ำได้อย่างครบถ้วน',
    technique: 'DTG',
    testimonial: '"งานสกรีนเก็บรายละเอียดพู่กันได้ดีมาก ไม่เคยคิดว่าลายเส้นสีน้ำจะพิมพ์ลงบนเสื้อได้สวยขนาดนี้ ประทับใจจริงๆ ค่ะ"',
    client: 'คุณดี, ศิลปิน Lanna Artist',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945',
    color: 'from-ci-yellow to-amber-500',
    textColor: 'text-amber-600',
    icon: Palette,
    imagePosition: 'left'
  }
];

export default function PortfolioPage() {

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-ci-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ci-yellow/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ci-blue/10 rounded-full mb-4">
              <Briefcase className="w-4 h-4 text-ci-blue" />
              <span className="text-sm font-semibold text-ci-blue">Case Studies</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-ci-blue to-ci-blueDark text-transparent bg-clip-text">
                เบื้องหลังผลงานของเรา
              </span>
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-ci-blue to-ci-blueDark rounded-full mx-auto mb-6" />
            
            <p className="text-lg text-slate-600 leading-relaxed">
              เราไม่ได้แค่สกรีนเสื้อ แต่เราสร้างสรรค์ผลงานร่วมกับลูกค้า<br className="hidden md:block" />
              เจาะลึกเบื้องหลังโปรเจกต์เด่นๆ ที่เราภูมิใจ
            </p>
          </div>
        </div>
      </section>

      {/* Gallery CTA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 md:p-16 text-center text-white">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-ci-blue rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-ci-yellow rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
                <ExternalLink className="w-8 h-8 text-ci-yellow" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">แกลเลอรีผลงานทั้งหมด</h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
                เราได้รวบรวมโปรเจกต์ที่น่าสนใจอีกมากมายไว้ให้คุณได้ชมแบบจุใจในแกลเลอรี Google Drive ของเรา
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:bg-ci-yellow transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <ExternalLink className="w-5 h-5" />
                <span>ชมผลงานทั้งหมด</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16 lg:space-y-24">
            {caseStudies.map((study) => {
              const Icon = study.icon;
              return (
                <div
                  key={study.id}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    study.imagePosition === 'left' ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`${study.imagePosition === 'left' ? 'lg:col-start-2' : ''}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-50 to-white rounded-full border-2 border-slate-100 mb-4">
                      <Icon className={`w-4 h-4 ${study.textColor}`} />
                      <span className={`text-sm font-semibold ${study.textColor}`}>{study.category}</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                      {study.title}
                    </h2>

                    <div className="space-y-6 text-slate-600 leading-relaxed">
                      <div>
                        <h3 className="font-bold text-slate-900 mb-2">ความต้องการ:</h3>
                        <p>{study.challenge}</p>
                      </div>

                      <div>
                        <h3 className="font-bold text-slate-900 mb-2">โซลูชันของเรา:</h3>
                        <p>
                          {study.solution}
                        </p>
                      </div>

                      {/* Testimonial */}
                      <div className="relative p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border-2 border-slate-100 shadow-md hover:shadow-lg transition-shadow">
                        <Quote className="absolute top-4 right-4 w-8 h-8 text-ci-blue opacity-10" />
                        <p className="text-slate-700 italic mb-3 leading-relaxed">{study.testimonial}</p>
                        <p className="font-semibold text-slate-900">{study.client}</p>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`relative ${study.imagePosition === 'left' ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className={`absolute -inset-4 bg-gradient-to-br ${study.color} opacity-20 rounded-3xl blur-2xl`} />
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        title="คำถามที่พบบ่อยเกี่ยวกับผลงาน"
        items={[
          {
            question: "ผลงานที่แสดงเป็นงานจริงหรือไม่?",
            answer: "ใช่ครับ ผลงานทั้งหมดที่แสดงเป็นงานจริงที่เราผลิตให้กับลูกค้า ไม่มีภาพ mockup หรือภาพจำลอง ทุกชิ้นผ่านกระบวนการผลิตจริงและส่งมอบให้ลูกค้าแล้ว"
          },
          {
            question: "สามารถดูผลงานเพิ่มเติมได้ที่ไหน?",
            answer: "สามารถดูผลงานเพิ่มเติมได้ที่แกลเลอรี Google Drive ของเรา หรือติดตามผลงานใหม่ๆ ได้ทาง Facebook และ LINE@ @anajak"
          },
          {
            question: "ทำงานแบบนี้ให้ได้ไหม?",
            answer: "ได้ครับ! ผลงานที่แสดงเป็นตัวอย่างว่าเราสามารถทำได้ หากคุณชอบสไตล์ไหน เราสามารถผลิตให้ในสไตล์ใกล้เคียงหรือปรับแต่งตามต้องการได้"
          },
          {
            question: "ต้องใช้เทคนิคเดียวกับที่ในผลงานไหม?",
            answer: "ไม่จำเป็นครับ ผลงานแต่ละชิ้นอาจใช้เทคนิคต่างกัน (DTF, DTG, Silk Screen) เราจะแนะนำเทคนิคที่เหมาะสมกับงานของคุณมากที่สุด"
          }
        ]}
      />

      {/* Final CTA */}
      <FinalCTASection />
    </PageLayout>
  );
}
