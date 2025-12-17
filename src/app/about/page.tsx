'use client';

import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { FinalCTASection, RelatedPagesSection } from '@/components/sections';
import FAQ from '@/components/FAQ';
import Breadcrumb from '@/components/Breadcrumb';
import { 
  Gem, 
  Handshake, 
  Lightbulb,
  Factory,
  Users,
  Award,
  TrendingUp,
  Printer,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import Image from 'next/image';

const stats = [
  { value: '5+', label: 'ปีประสบการณ์', icon: Factory, color: 'from-ci-blue to-blue-600' },
  { value: '100K+', label: 'เสื้อที่ผลิต', icon: Award, color: 'from-green-500 to-emerald-600' },
  { value: '300+', label: 'โปรเจกต์สำเร็จ', icon: Users, color: 'from-ci-yellow to-amber-500' },
  { value: '4.9/5', label: 'คะแนนรีวิว', icon: TrendingUp, color: 'from-orange-500 to-amber-600' },
];

const values = [
  {
    icon: Gem,
    title: 'คุณภาพคือหัวใจ',
    description: 'เราเลือกใช้แต่วัสดุ หมึกพิมพ์ และเครื่องจักรคุณภาพสูง เพื่อให้ทุกชิ้นงานออกมาสวยงามและทนทานที่สุด'
  },
  {
    icon: Handshake,
    title: 'บริการด้วยใจ',
    description: 'เราเป็นมากกว่าโรงงาน แต่เป็นพาร์ทเนอร์ที่พร้อมให้คำปรึกษาและดูแลคุณในทุกขั้นตอนอย่างใกล้ชิด'
  },
  {
    icon: Lightbulb,
    title: 'นวัตกรรมและเทคโนโลยี',
    description: 'เราไม่หยุดนิ่งที่จะเรียนรู้และนำเทคโนโลยีการสกรีนใหม่ๆ เข้ามา เพื่อมอบผลัพธ์ที่ดีที่สุดให้กับคุณเสมอ'
  },
];

export default function AboutPage() {

  return (
    <PageLayout>
      {/* Our Story Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumb currentPage="เกี่ยวกับเรา" />
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              {/* Title */}
              <div className="mb-8 opacity-0 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-ci-blue/10 rounded-full mb-4">
                  <span className="text-sm font-semibold text-ci-blue">Our Story</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-ci-blue to-ci-blueDark text-transparent bg-clip-text">
                    เรื่องราวของเรา
                  </span>
                </h1>
                <div className="w-16 h-1 bg-gradient-to-r from-ci-blue to-ci-blueDark rounded-full" />
              </div>

              <div className="space-y-6 text-lg text-slate-600 leading-relaxed opacity-0 animate-fade-in-up delay-200">
                <p>
                  Anajak T-Shirt ไม่ได้เริ่มต้นจากการเป็นแค่ "โรงงาน" แต่เกิดจาก{' '}
                  <strong className="font-semibold text-slate-900">"แพชชั่น"</strong>{' '}
                  ในการสร้างสรรค์เสื้อยืดคุณภาพสูง เราเชื่อว่าเสื้อยืดเป็นมากกว่าเสื้อผ้า แต่เป็นพื้นที่ในการแสดงออกถึงตัวตน บอกเล่าเรื่องราว และสร้างความเป็นอันหนึ่งอันเดียวกัน
                </p>
                <p>
                  จากจุดเริ่มต้นเล็กๆ ใน<strong className="font-semibold text-ci-blue">จังหวัดเชียงใหม่ (ป่าแดด)</strong>{' '}
                  เราเติบโตสู่การเป็น<strong className="font-semibold text-slate-900">โรงงานสกรีนเสื้อเชียงใหม่</strong>ที่ได้รับความไว้วางใจ ด้วยความมุ่งมั่นที่จะนำเทคโนโลยีการสกรีนที่ดีที่สุดทั้ง{' '}
                  <span className="font-semibold text-emerald-600">สกรีน DTF</span> และ{' '}
                  <span className="font-semibold text-purple-600">สกรีน DTG</span>{' '}
                  มาผสานกับความใส่ใจในทุกรายละเอียด <strong className="text-ci-blue">รับสกรีนเสื้อไม่มีขั้นต่ำ งานด่วน 1 วัน ราคาถูก</strong> เพื่อส่งมอบผลงานที่ "ดีที่สุด" ให้กับลูกค้าทุกคน
                </p>
              </div>
            </div>

            <div className="relative opacity-0 animate-fade-in-up delay-300">
              <div className="absolute -inset-4 bg-gradient-to-r from-ci-blue/20 to-ci-yellow/20 rounded-3xl blur-2xl animate-pulse" />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1618642359024-5c7931469b62?q=80&w=1974"
                  alt="ทีมงาน Anajak T-Shirt กำลังปรึกษาเรื่องดีไซน์เสื้อยืด"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="group relative p-6 md:p-8 rounded-2xl bg-white border-2 border-slate-100 hover:border-ci-blue/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                <div className="relative">
                  <stat.icon className="w-10 h-10 md:w-12 md:h-12 text-ci-blue mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-slate-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Factory Gallery */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-ci-blue to-ci-blueDark text-transparent bg-clip-text mb-4">
              เบื้องหลังโรงงานของเรา
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-ci-blue to-ci-blueDark rounded-full mx-auto mb-6" />
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              เราเปิดบ้านให้คุณเห็นทุกขั้นตอน ตั้งแต่เครื่องจักร DTF/DTG ที่ทันสมัย ไปจนถึงทีมงานที่กำลังควบคุมคุณภาพอย่างใส่ใจ นี่คือความโปร่งใสที่สร้างความแตกต่าง
            </p>
          </div>

          {/* Grid Gallery - 4 columns with 2 images each */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Column 1 */}
            <div className="grid gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-md group">
                <Image
                  src="https://images.unsplash.com/photo-1629905799462-56c9a5a5b51a?q=80&w=2070"
                  alt="เครื่องพิมพ์ DTG ขนาดใหญ่กำลังทำงานในโรงงาน"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[3/2] overflow-hidden rounded-lg shadow-md group">
                <Image
                  src="https://images.unsplash.com/photo-1557825001-93d619258a28?q=80&w=2070"
                  alt="พนักงานกำลังตรวจสอบคุณภาพเสื้อยืด"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="grid gap-4">
              <div className="relative aspect-[3/2] overflow-hidden rounded-lg shadow-md group">
                <Image
                  src="https://images.unsplash.com/photo-1620799140159-483072a2c534?q=80&w=1972"
                  alt="ม้วนฟิล์ม DTF ที่พิมพ์ลายสำหรับสกรีนเสื้อ"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-md group">
                <Image
                  src="https://images.unsplash.com/photo-1615494125866-865b54247563?q=80&w=1974"
                  alt="ทีมงานกราฟิกดีไซเนอร์กำลังออกแบบลาย"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Column 3 */}
            <div className="grid gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-md group">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974"
                  alt="ทีมงาน Anajak T-Shirt กำลังประชุมงาน"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[3/2] overflow-hidden rounded-lg shadow-md group">
                <Image
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1974"
                  alt="ช่างเทคนิคกำลังควบคุมเครื่องจักร"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Column 4 */}
            <div className="grid gap-4">
              <div className="relative aspect-[3/2] overflow-hidden rounded-lg shadow-md group">
                <Image
                  src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945"
                  alt="ผลงานเสื้อยืดลายอาร์ตเวิร์ค"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-md group">
                <Image
                  src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=1932"
                  alt="เสื้อยืดที่พับเรียบร้อยพร้อมจัดส่ง"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 bg-gradient-to-br from-ci-blue via-ci-blueDark to-slate-900 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-ci-yellow rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group p-8 md:p-10 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                วิสัยทัศน์
              </h3>
              <p className="text-sm text-white/70 mb-6">(Our Vision)</p>
              <p className="text-lg text-white/90 leading-relaxed">
                เป็นผู้นำด้าน<strong className="text-white">โรงงานสกรีนเสื้อครบวงจรในเชียงใหม่และภาคเหนือ</strong>{' '}
                ที่แบรนด์และองค์กรต่างๆ ให้ความไว้วางใจเป็นอันดับแรก <strong className="text-ci-yellow">รับสกรีนเสื้อไม่มีขั้นต่ำ งานด่วนได้</strong> ในการสร้างสรรค์ผลงานคุณภาพ
              </p>
            </div>
            <div className="group p-8 md:p-10 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                พันธกิจ
              </h3>
              <p className="text-sm text-white/70 mb-6">(Our Mission)</p>
              <p className="text-lg text-white/90 leading-relaxed">
                มุ่งมั่นส่งมอบ<strong className="text-white">งานสกรีนที่ยอดเยี่ยม</strong>ผ่านเทคโนโลยีที่ทันสมัย การบริการที่เป็นเลิศ และความใส่ใจในทุกรายละเอียด เพื่อความสำเร็จของลูกค้าคือความสำเร็จของเรา
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative">
                {/* Gradient Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-ci-blue to-ci-blueDark rounded-full blur-2xl opacity-30 animate-pulse" />
                <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white ring-4 ring-ci-blue/20">
                  <Image
                    src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974"
                    alt="เจ้าของ Anajak T-Shirt"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-ci-blue to-ci-blueDark text-transparent bg-clip-text mb-6">
                จากใจผู้ก่อตั้ง
              </h2>
              <blockquote className="text-xl text-slate-700 italic leading-relaxed mb-6 pl-6 border-l-4 border-ci-blue">
                "ผมเริ่มต้น Anajak T-Shirt ด้วยความเชื่อที่ว่าเสื้อยืดดีๆ สามารถสร้างความเปลี่ยนแปลงได้ เป้าหมายของผมคือการได้เห็นไอเดียของลูกค้ากลายเป็นจริงด้วย<strong className="text-ci-blue">งานสกรีนคุณภาพที่ดีที่สุด</strong>"
              </blockquote>
              <div>
                <p className="text-lg font-semibold text-slate-900">อาณาจักร์ ที-เชิ้ด</p>
                <p className="text-ci-blue font-medium">ผู้ก่อตั้ง / CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-ci-blue to-ci-blueDark text-transparent bg-clip-text mb-4">
            สิ่งที่เรายึดมั่น
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-ci-blue to-ci-blueDark rounded-full mx-auto mb-6" />
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            นี่คือหลักการทำงานที่เป็นหัวใจของ Anajak T-Shirt ในการสร้างสรรค์ทุกผลงาน
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, i) => (
              <div key={i} className="group flex flex-col items-center p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300">
                {/* Gradient Icon */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-ci-blue to-ci-blueDark rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
                  <div className="relative flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-ci-blue to-ci-blueDark text-white group-hover:scale-110 transition-transform shadow-lg">
                    <value.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        title="คำถามที่พบบ่อยเกี่ยวกับเรา"
        items={[
          {
            question: "อาณาจักร์ ที-เชิ้ด ทำธุรกิจมานานแค่ไหน?",
            answer: "เรามีประสบการณ์มากกว่า 5 ปีในวงการผลิตและสกรีนเสื้อผ้า เริ่มต้นจากโรงงานเล็กๆ ในเชียงใหม่ และเติบโตมาเป็นโรงงานที่ได้รับความไว้วางใจจากลูกค้าหลายร้อยราย"
          },
          {
            question: "โรงงานอยู่ที่ไหน? เปิดให้เข้าชมได้ไหม?",
            answer: "โรงงานสกรีนเสื้อของเราตั้งอยู่ที่เชียงใหม่ (ป่าแดด) 39/12 ต.ป่าแดด อ.เมือง จ.เชียงใหม่ 50100 สามารถเข้ามาเยี่ยมชมและพูดคุยกับทีมงานได้ แต่แนะนำให้นัดหมายล่วงหน้าเพื่อให้เราเตรียมรับบริการได้อย่างดีที่สุด โทร. 064-942-6651"
          },
          {
            question: "ทำไมถึงควรเลือกใช้บริการของเรา?",
            answer: "เราเป็นโรงงานสกรีนเสื้อเชียงใหม่ที่เน้นคุณภาพเป็นหลัก สกรีนเสื้อไม่มีขั้นต่ำ 1 ตัวก็รับทำ งานด่วน 1-3 วัน ราคาถูก มีประสบการณ์ในการผลิตมากกว่า 100,000 ตัว เทคโนโลยี DTG, DTF, Silk Screen ทันสมัย ทีมงานมืออาชีพ และบริการหลังการขายที่เป็นเลิศ พร้อมรับประกันคุณภาพทุกชิ้นงาน"
          },
          {
            question: "รับงานแบบเหมาจำนวนมากได้ไหม?",
            answer: "ได้ครับ! เราเชี่ยวชาญในการผลิตจำนวนมาก มีกำลังการผลิตสูง และสามารถรับงานตั้งแต่ 1 ตัวจนถึงหลายหมื่นตัว พร้อมให้ราคาพิเศษสำหรับออเดอร์ใหญ่"
          },
          {
            question: "มีใบรับรองหรือมาตรฐานอะไรบ้าง?",
            answer: "เราผ่านการรับรองคุณภาพและใช้วัตถุดิบที่ได้มาตรฐาน รวมถึงมีนโยบายการควบคุมคุณภาพที่เข้มงวดในทุกขั้นตอนการผลิต"
          }
        ]}
      />

      {/* Related Pages */}
      <RelatedPagesSection
        title="สนใจบริการของเราหรือไม่?"
        description="เรามีบริการครบวงจรและผลงานคุณภาพมากมายให้คุณได้เลือก"
        pages={[
          {
            title: 'บริการของเรา',
            description: 'ดูบริการสกรีนและผลิตเสื้อยืดครบวงจร',
            href: '/services',
            icon: Printer,
          },
          {
            title: 'ผลงานของเรา',
            description: 'ชมผลงานสกรีนคุณภาพจากโปรเจกต์จริง',
            href: '/portfolio',
            icon: Sparkles,
          },
          {
            title: 'ติดต่อเรา',
            description: 'พร้อมรับคำปรึกษาและใบเสนอราคาฟรี',
            href: '/contact',
            icon: MessageCircle,
          },
        ]}
      />

      {/* Final CTA */}
      <FinalCTASection />
    </PageLayout>
  );
}
