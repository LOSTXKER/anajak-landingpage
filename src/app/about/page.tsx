'use client';

import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { FinalCTASection } from '@/components/sections';
import { 
  Sparkles, 
  Eye, 
  Target, 
  Gem, 
  Handshake, 
  Lightbulb,
  Factory,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';
import Image from 'next/image';

const stats = [
  { value: '20+', label: 'ปีประสบการณ์', icon: Factory, color: 'from-ci-blue to-blue-600' },
  { value: '50,000+', label: 'ออเดอร์สำเร็จ', icon: Award, color: 'from-green-500 to-emerald-600' },
  { value: '500+', label: 'ลูกค้าองค์กร', icon: Users, color: 'from-purple-500 to-purple-600' },
  { value: '4.9/5', label: 'คะแนนรีวิว', icon: TrendingUp, color: 'from-orange-500 to-amber-600' },
];

const values = [
  {
    icon: Gem,
    title: 'คุณภาพคือหัวใจ',
    description: 'เราเลือกใช้แต่วัสดุ หมึกพิมพ์ และเครื่องจักรคุณภาพสูง เพื่อให้ทุกชิ้นงานออกมาสวยงามและทนทานที่สุด',
    color: 'from-ci-blue to-blue-600'
  },
  {
    icon: Handshake,
    title: 'บริการด้วยใจ',
    description: 'เราเป็นมากกว่าโรงงาน แต่เป็นพาร์ทเนอร์ที่พร้อมให้คำปรึกษาและดูแลคุณในทุกขั้นตอนอย่างใกล้ชิด',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Lightbulb,
    title: 'นวัตกรรมและเทคโนโลยี',
    description: 'เราไม่หยุดนิ่งที่จะเรียนรู้และนำเทคโนโลยีการสกรีนใหม่ๆ เข้ามา เพื่อมอบผลัพธ์ที่ดีที่สุดให้กับคุณเสมอ',
    color: 'from-amber-500 to-orange-600'
  },
];

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1629905799462-56c9a5a5b51a?q=80&w=2070',
    alt: 'เครื่องพิมพ์ DTG ขนาดใหญ่กำลังทำงานในโรงงาน',
    size: 'tall'
  },
  {
    url: 'https://images.unsplash.com/photo-1557825001-93d619258a28?q=80&w=2070',
    alt: 'พนักงานกำลังตรวจสอบคุณภาพเสื้อยืด',
    size: 'short'
  },
  {
    url: 'https://images.unsplash.com/photo-1620799140159-483072a2c534?q=80&w=1972',
    alt: 'ม้วนฟิล์ม DTF ที่พิมพ์ลายสำหรับสกรีนเสื้อ',
    size: 'short'
  },
  {
    url: 'https://images.unsplash.com/photo-1615494125866-865b54247563?q=80&w=1974',
    alt: 'ทีมงานกราฟิกดีไซเนอร์กำลังออกแบบลาย',
    size: 'tall'
  },
  {
    url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974',
    alt: 'ทีมงาน Anajak T-Shirt กำลังประชุมงาน',
    size: 'short'
  },
  {
    url: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1974',
    alt: 'ช่างเทคนิคกำลังควบคุมเครื่องจักร',
    size: 'tall'
  },
  {
    url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945',
    alt: 'ผลงานเสื้อยืดลายอาร์ตเวิร์ค',
    size: 'tall'
  },
  {
    url: 'https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=1932',
    alt: 'เสื้อยืดที่พับเรียบร้อยพร้อมจัดส่ง',
    size: 'short'
  },
];

export default function AboutPage() {
  useEffect(() => {
    document.title = 'เกี่ยวกับเรา - เบื้องหลังโรงงานสกรีนเสื้อคุณภาพ | อนาจักร ที-เชิ้ต';
  }, []);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white" />
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        
        {/* Decorative blobs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-ci-blue/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-ci-blue/20 shadow-lg mb-6">
              <Sparkles className="w-5 h-5 text-ci-blue" />
              <span className="text-sm font-semibold text-slate-700">About Anajak T-Shirt</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              เบื้องหลัง<br className="hidden md:block" />
              <span className="bg-gradient-to-r from-ci-blue to-blue-600 text-transparent bg-clip-text">
                โรงงานสกรีนเสื้อคุณภาพ
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              รู้จักตัวตนและเบื้องหลังของ Anajak T-Shirt โรงงานสกรีนเสื้อที่ขับเคลื่อนด้วยแพชชั่นและเทคโนโลยีที่ทันสมัย
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white">
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

      {/* Our Story Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-ci-blue/10 rounded-full mb-4">
                  <span className="text-sm font-semibold text-ci-blue">Our Story</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                  เรื่องราวของเรา
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-ci-blue to-blue-600 rounded-full" />
              </div>

              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Anajak T-Shirt ไม่ได้เริ่มต้นจากการเป็นแค่ "โรงงาน" แต่เกิดจาก{' '}
                  <strong className="font-semibold text-slate-900">"แพชชั่น"</strong>{' '}
                  ในการสร้างสรรค์เสื้อยืดคุณภาพสูง เราเชื่อว่าเสื้อยืดเป็นมากกว่าเสื้อผ้า แต่เป็นพื้นที่ในการแสดงออกถึงตัวตน บอกเล่าเรื่องราว และสร้างความเป็นอันหนึ่งอันเดียวกัน
                </p>
                <p>
                  จากจุดเริ่มต้นเล็กๆ ใน<strong className="font-semibold text-slate-900">จังหวัดเชียงใหม่</strong>{' '}
                  เราเติบโตสู่การเป็น<strong className="font-semibold text-slate-900">โรงงานสกรีนเสื้อ</strong>ที่ได้รับความไว้วางใจ ด้วยความมุ่งมั่นที่จะนำเทคโนโลยีการสกรีนที่ดีที่สุดทั้ง{' '}
                  <span className="font-semibold text-ci-blue">DTF</span> และ{' '}
                  <span className="font-semibold text-slate-700">DTG</span>{' '}
                  มาผสานกับความใส่ใจในทุกรายละเอียด เพื่อส่งมอบผลงานที่ "ดีที่สุด" ให้กับลูกค้าทุกคน
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-ci-blue/20 to-purple-500/20 rounded-3xl blur-2xl" />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1618642359024-5c7931469b62?q=80&w=1974"
                  alt="ทีมงาน Anajak T-Shirt กำลังปรึกษาเรื่องดีไซน์เสื้อยืด"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Factory Gallery */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              เบื้องหลังโรงงานของเรา
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-ci-blue to-blue-600 rounded-full mx-auto mb-6" />
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              เราเปิดบ้านให้คุณเห็นทุกขั้นตอน ตั้งแต่เครื่องจักร DTF/DTG ที่ทันสมัย ไปจนถึงทีมงานที่กำลังควบคุมคุณภาพอย่างใส่ใจ นี่คือความโปร่งใสที่สร้างความแตกต่าง
            </p>
          </div>

          {/* Masonry Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, i) => (
              <div key={i} className={`${image.size === 'tall' ? 'row-span-2' : 'row-span-1'}`}>
                <div className="group relative h-full overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-ci-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="group p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-ci-blue/20">
                  <Eye className="w-8 h-8 text-ci-blue" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">วิสัยทัศน์</h3>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">
                เป็นผู้นำด้าน<strong className="text-white">โรงงานสกรีนเสื้อครบวงจรในภาคเหนือ</strong>{' '}
                ที่แบรนด์และองค์กรต่างๆ ให้ความไว้วางใจเป็นอันดับแรกในการสร้างสรรค์ผลงานคุณภาพ
              </p>
            </div>

            <div className="group p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-purple-500/20">
                  <Target className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">พันธกิจ</h3>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">
                มุ่งมั่นส่งมอบ<strong className="text-white">งานสกรีนที่ยอดเยี่ยม</strong>ผ่านเทคโนโลยีที่ทันสมัย การบริการที่เป็นเลิศ และความใส่ใจในทุกรายละเอียด เพื่อความสำเร็จของลูกค้าคือความสำเร็จของเรา
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-ci-blue to-purple-500 rounded-full blur-2xl opacity-20" />
                  <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974"
                      alt="เจ้าของ Anajak T-Shirt"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">จากใจผู้ก่อตั้ง</h2>
                <blockquote className="text-xl md:text-2xl text-slate-700 italic leading-relaxed mb-6 pl-6 border-l-4 border-ci-blue">
                  "ผมเริ่มต้น Anajak T-Shirt ด้วยความเชื่อที่ว่าเสื้อยืดดีๆ สามารถสร้างความเปลี่ยนแปลงได้ เป้าหมายของผมคือการได้เห็นไอเดียของลูกค้ากลายเป็นจริงด้วย<strong className="text-slate-900">งานสกรีนคุณภาพที่ดีที่สุด</strong>"
                </blockquote>
                <div>
                  <p className="text-lg font-semibold text-slate-900">อนาจักร ที-เชิ้ต</p>
                  <p className="text-slate-600">ผู้ก่อตั้ง / CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              สิ่งที่เรายึดมั่น
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-ci-blue to-blue-600 rounded-full mx-auto mb-6" />
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              นี่คือหลักการทำงานที่เป็นหัวใจของ Anajak T-Shirt ในการสร้างสรรค์ทุกผลงาน
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div 
                key={i}
                className="group relative p-8 rounded-3xl bg-white border-2 border-slate-100 hover:border-ci-blue/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`} />
                
                <div className="relative">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.color} mb-6 group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTASection />
    </PageLayout>
  );
}
