'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';
import { FinalCTASection } from '@/components/sections';
import Breadcrumb from '@/components/Breadcrumb';
import { ImagesBySection } from '@/types/admin';
import ImageSlotOverlay from '@/components/ImageSlotOverlay';
import { 
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
  ChevronRight,
  BookOpen,
  MessageCircle,
  Eye,
} from 'lucide-react';

// ข้อมูลตัวอย่างบทความ - ในอนาคตจะดึงจาก CMS หรือ API
const articleData: { [key: string]: any } = {
  'dtf-printing-guide': {
    title: 'คู่มือสกรีน DTF ฉบับสมบูรณ์: ทุกสิ่งที่คุณต้องรู้',
    excerpt: 'เจาะลึกเทคนิคการสกรีน DTF ตั้งแต่ต้นจนจบ วิธีการ ข้อดี-ข้อเสีย และเคล็ดลับการดูแลรักษา',
    category: 'เทคนิคการสกรีน',
    date: '2024-12-10',
    readTime: '8 นาที',
    imageUrl: '/images/blog/dtf-printing-guide.jpg',
    author: {
      name: 'ทีมงานอาณาจักร์ ที-เชิ้ด',
      role: 'ผู้เชี่ยวชาญด้านการสกรีน',
      avatar: '👨‍💼',
    },
    views: 1250,
    likes: 89,
    content: `
## DTF คืออะไร?

DTF (Direct to Film) คือเทคนิคการสกรีนที่ทันสมัยที่สุดในปัจจุบัน โดยจะพิมพ์ลายบนฟิล์มพิเศษก่อน แล้วจึงถ่ายโอนลงบนผ้าด้วยความร้อนและแรงกด ทำให้สามารถสกรีนลายที่มีสีสันสดใส คมชัด และทนทานได้บนผ้าทุกชนิด

### ทำไมต้องเลือก DTF?

DTF กำลังกลายเป็นเทคนิคยอดนิยมในวงการสกรีนเสื้อ เพราะมีข้อดีมากมายที่ตอบโจทย์ทั้งผู้ผลิตและผู้บริโภค

## ขั้นตอนการสกรีน DTF

### 1. การออกแบบและเตรียมไฟล์

ขั้นตอนแรกของการสกรีน DTF คือการเตรียมไฟล์ดิจิทัล ควรมีความละเอียดสูง (อย่างน้อย 300 DPI) และใช้ไฟล์ในรูปแบบ PNG หรือ AI เพื่อความคมชัดสูงสุด

**เคล็ดลับ:** ใช้สีที่สดใสและตัดกันชัดเจน เพราะ DTF สามารถพิมพ์สีได้เต็มที่

### 2. การพิมพ์ลายบนฟิล์ม

ใช้เครื่องพิมพ์ DTF พิเศษที่มีหมึกสีขาวเป็นฐาน (White Ink) จากนั้นจึงพิมพ์สี CMYK ทับลงไป ทำให้สีสันสดใสแม้บนผ้าสีเข้ม

### 3. การโรยผงกาว (Adhesive Powder)

หลังจากพิมพ์เสร็จ จะโรยผงกาวพิเศษ (Hot Melt Adhesive Powder) ทับลงบนลาย ผงกาวนี้จะช่วยให้ลายติดกับผ้าได้แน่นหนาและทนทาน

### 4. การอบผงกาว

นำฟิล์มที่โรยผงกาวแล้วเข้าเตาอบพิเศษ เพื่อให้ผงกาวละลายและเกาะติดกับหมึกอย่างสมบูรณ์

### 5. การถ่ายโอนลงบนผ้า

ใช้เครื่อง Heat Press กดด้วยความร้อนประมาณ 160-170°C เป็นเวลา 10-15 วินาที ลายจะถ่ายโอนจากฟิล์มมายังผ้าได้อย่างสมบูรณ์แบบ

### 6. การลอกฟิล์ม

รอให้เย็นแล้วค่อยลอกฟิล์มออก (Cold Peel) ลายที่ได้จะคมชัด สีสดใส และมีพื้นผิวที่นุ่มนวล

## ข้อดีของ DTF

### 1. ความหลากหลายของผ้า
- สกรีนได้ทุกชนิดผ้า: Cotton, Polyester, ผสม
- ไม่จำกัดสีของผ้า ทั้งสีอ่อนและสีเข้ม
- ผ้าที่มีลักษณะพิเศษ เช่น ผ้ายืด ผ้ากันน้ำ

### 2. คุณภาพการพิมพ์
- สีสันสดใส คมชัด ละเอียดสูง
- พิมพ์สีได้ไม่จำกัด ราคาเท่ากัน
- สามารถพิมพ์ภาพถ่ายที่มีการไล่เฉดสีได้สวยงาม

### 3. ความทนทาน
- ทนการซัก 200-300+ ครั้ง
- สีไม่ซีดจางง่าย
- ไม่แตกหรือลอกง่ายเหมือนเทคนิคอื่น

### 4. ความคุ้มค่า
- เหมาะกับทั้งงานจำนวนน้อยและมาก
- ไม่มีค่าตั้งต้น (Setup Cost)
- สามารถปรับเปลี่ยนดีไซน์ได้ง่าย

## ข้อควรระวัง

### การดูแลรักษา
1. **ซักด้วยน้ำเย็น-อุ่น** ไม่ควรเกิน 40°C
2. **พลิกด้านในก่อนซัก** เพื่อป้องกันลาย
3. **ไม่ควรใช้น้ำยาฟอกขาว** จะทำให้สีซีดจาง
4. **รีดด้วยความร้อนปานกลาง** รีดด้านหลังลาย

### ข้อจำกัด
- ลายมีความหนาเล็กน้อย (Thickness) เมื่อเทียบกับ DTG
- ต้องการเครื่องมือและอุปกรณ์เฉพาะ
- ต้องมีความชำนาญในการตั้งค่าอุณหภูมิและแรงกด

## DTF vs DTG: ควรเลือกอะไร?

| คุณสมบัติ | DTF | DTG |
|----------|-----|-----|
| ชนิดผ้า | ทุกชนิด | Cotton หลัก |
| สีผ้า | ทั้งสีอ่อนและเข้ม | สีอ่อนดีกว่า |
| ความทนทาน | 200-300+ ครั้ง | 50-100 ครั้ง |
| ความคมชัด | สูงมาก | สูง |
| การไล่เฉดสี | ดี | ดีเยี่ยม |
| สัมผัส | นุ่มปานกลาง | นุ่มที่สุด |
| ราคา | ปานกลาง | ค่อนข้างสูง |

## สรุป

DTF เป็นเทคนิคการสกรีนที่ตอบโจทย์ธุรกิจยุคใหม่ได้ดีที่สุด ด้วยความหลากหลาย ความคุ้มค่า และคุณภาพที่สูง ไม่ว่าคุณจะเป็นผู้ประกอบการที่เพิ่งเริ่มต้น หรือโรงงานขนาดใหญ่ DTF ก็สามารถตอบโจทย์ความต้องการของคุณได้

**พร้อมเริ่มต้นกับ DTF แล้วหรือยัง?** ติดต่อเราเพื่อขอคำปรึกษาและรับใบเสนอราคาฟรี!
    `,
    tags: ['DTF', 'การสกรีน', 'เทคนิค', 'คู่มือ'],
    relatedPosts: ['fabric-selection-guide', 'dtg-vs-dtf-comparison', 'design-tips-screen-printing'],
  },
};

interface BlogArticleClientProps {
  slug: string;
  images: Record<string, ImagesBySection>;
}

export default function BlogArticleClient({ slug, images }: BlogArticleClientProps) {
  const blogImg = (slot: string, fallback: string) => images['blog']?.[slot]?.url || fallback;

  const article = articleData[slug] || articleData['dtf-printing-guide'];
  
  const articleWithImage = {
    ...article,
    imageUrl: blogImg('blog-dtf-printing-guide', article.imageUrl),
  };

  const tocItems = [
    { id: 'intro', title: 'DTF คืออะไร?' },
    { id: 'steps', title: 'ขั้นตอนการสกรีน DTF' },
    { id: 'benefits', title: 'ข้อดีของ DTF' },
    { id: 'care', title: 'ข้อควรระวัง' },
    { id: 'comparison', title: 'DTF vs DTG' },
  ];

  useEffect(() => {
    document.title = `${articleWithImage.title} | อาณาจักร์ ที-เชิ้ด`;
  }, [articleWithImage.title]);

  return (
    <PageLayout>
      <section className="pt-24 pb-8 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumb
            items={[{ label: 'บทความ', href: '/blog' }]}
            currentPage={articleWithImage.title}
          />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-2 bg-ci-blue text-white rounded-full text-sm font-semibold">
                {articleWithImage.category}
              </span>
              {articleWithImage.tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-full text-xs">
                  #{tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {articleWithImage.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-slate-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">
                  {new Date(articleWithImage.date).toLocaleDateString('th-TH', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{articleWithImage.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span className="text-sm">{articleWithImage.views.toLocaleString()} ครั้ง</span>
              </div>
            </div>

            <div className="mt-8 rounded-2xl overflow-hidden">
              {articleWithImage.imageUrl ? (
                <ImageSlotOverlay sectionId="blog" slotId="blog-dtf-printing-guide">
                  <div className="relative aspect-[16/9] bg-slate-200">
                    <Image
                      src={articleWithImage.imageUrl}
                      alt={articleWithImage.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </ImageSlotOverlay>
              ) : (
                <div className="relative aspect-[16/9] bg-gradient-to-br from-ci-blue/20 via-ci-yellow/10 to-blue-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="w-16 h-16 text-ci-blue/40 mx-auto mb-4" />
                    <p className="text-slate-500 text-sm">ภาพประกอบบทความ</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-[250px_1fr] gap-12">
              <div className="hidden lg:block">
                <div className="sticky top-24">
                  <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    เนื้อหาในบทความ
                  </h3>
                  <nav className="space-y-2">
                    {tocItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-sm text-slate-600 hover:text-ci-blue transition-colors py-1"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>

                  <div className="mt-8 p-4 bg-gradient-to-br from-ci-blue/5 to-ci-yellow/5 rounded-xl border border-ci-blue/10">
                    <p className="text-sm text-slate-700 mb-3">
                      <strong>ต้องการคำปรึกษา?</strong>
                    </p>
                    <Link
                      href="/services"
                      className="block text-center px-4 py-2 bg-ci-blue text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                    >
                      ติดต่อเรา
                    </Link>
                  </div>
                </div>
              </div>

              <article className="prose prose-lg prose-slate max-w-none
                prose-headings:font-bold prose-headings:text-slate-900
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-4
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-ci-blue prose-a:no-underline hover:prose-a:underline
                prose-strong:text-slate-900 prose-strong:font-semibold
                prose-ul:my-6 prose-li:my-2
                prose-table:border-collapse prose-table:w-full
                prose-th:bg-slate-100 prose-th:p-3 prose-th:text-left prose-th:font-semibold
                prose-td:border prose-td:border-slate-200 prose-td:p-3
                prose-blockquote:border-l-4 prose-blockquote:border-ci-blue prose-blockquote:pl-6 prose-blockquote:italic"
                dangerouslySetInnerHTML={{ __html: articleWithImage.content.replace(/\n/g, '<br />') }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              บทความที่เกี่ยวข้อง
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Link
                  key={i}
                  href="/blog/related-post"
                  className="card overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-slate-400" />
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-ci-blue font-semibold">เทคนิคการสกรีน</span>
                    <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2 group-hover:text-ci-blue transition-colors line-clamp-2">
                      บทความที่เกี่ยวข้อง {i}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2">
                      คำอธิบายสั้นๆ เกี่ยวกับบทความ...
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <MessageCircle className="w-6 h-6 text-ci-blue" />
              <h2 className="text-3xl font-bold text-slate-900">ความคิดเห็น</h2>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 text-center">
              <p className="text-slate-600">
                ระบบความคิดเห็นจะเปิดใช้งานเร็วๆ นี้
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-ci-blue font-semibold hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              กลับไปหน้าบทความ
            </Link>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </PageLayout>
  );
}
