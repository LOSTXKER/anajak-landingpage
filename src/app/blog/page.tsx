'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';
import { FinalCTASection } from '@/components/sections';
import FAQ from '@/components/FAQ';
import Breadcrumb from '@/components/Breadcrumb';
import { 
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  Search,
  TrendingUp,
  BookOpen,
  Sparkles,
} from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl?: string;
  featured?: boolean;
}

// ตัวอย่างข้อมูลบทความ - ในอนาคตจะดึงจาก CMS หรือ API
const blogPosts: BlogPost[] = [
  {
    slug: 'dtf-printing-guide',
    title: 'คู่มือสกรีน DTF ฉบับสมบูรณ์: ทุกสิ่งที่คุณต้องรู้',
    excerpt: 'เจาะลึกเทคนิคการสกรีน DTF ตั้งแต่ต้นจนจบ วิธีการ ข้อดี-ข้อเสีย และเคล็ดลับการดูแลรักษา',
    category: 'เทคนิคการสกรีน',
    date: '2024-12-10',
    readTime: '8 นาที',
    featured: true,
  },
  {
    slug: 'fabric-selection-guide',
    title: 'เลือกผ้าอย่างไรให้เหมาะกับการสกรีน',
    excerpt: 'แนะนำการเลือกเนื้อผ้าที่เหมาะสมกับแต่ละเทคนิคการสกรีน เพื่อผลลัพธ์ที่สมบูรณ์แบบ',
    category: 'เนื้อผ้า',
    date: '2024-12-08',
    readTime: '6 นาที',
  },
  {
    slug: 'design-tips-screen-printing',
    title: '10 เคล็ดลับออกแบบไฟล์สำหรับงานสกรีนที่สวยงาม',
    excerpt: 'วิธีการออกแบบและเตรียมไฟล์ให้พร้อมสำหรับงานสกรีนทุกประเภท รับรองผลลัพธ์ชัดเจนสวยงาม',
    category: 'การออกแบบ',
    date: '2024-12-05',
    readTime: '7 นาที',
  },
  {
    slug: 'dtg-vs-dtf-comparison',
    title: 'DTG กับ DTF: เลือกอันไหนดีสำหรับธุรกิจคุณ?',
    excerpt: 'เปรียบเทียบข้อดี-ข้อเสีย และความเหมาะสมของการสกรีน DTG และ DTF อย่างละเอียด',
    category: 'เทคนิคการสกรีน',
    date: '2024-12-03',
    readTime: '10 นาที',
    featured: true,
  },
  {
    slug: 'care-instructions-printed-shirts',
    title: 'วิธีการดูแลเสื้อสกรีนให้สวยงามยาวนาน',
    excerpt: 'เคล็ดลับการซัก รีด และเก็บรักษาเสื้อสกรีนทุกประเภทให้ทนทานและสวยงามตลอดไป',
    category: 'คำแนะนำ',
    date: '2024-12-01',
    readTime: '5 นาที',
  },
  {
    slug: 'silkscreen-for-bulk-orders',
    title: 'Silk Screen: ทางเลือกที่ดีที่สุดสำหรับงานจำนวนมาก',
    excerpt: 'ทำไม Silk Screen จึงเป็นตัวเลือกที่คุ้มค่าที่สุดสำหรับการผลิตเสื้อจำนวนมาก',
    category: 'เทคนิคการสกรีน',
    date: '2024-11-28',
    readTime: '6 นาที',
  },
];

const categories = [
  'ทั้งหมด',
  'เทคนิคการสกรีน',
  'เนื้อผ้า',
  'การออกแบบ',
  'คำแนะนำ',
];

export default function BlogPage() {

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-ci-blue/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-ci-yellow/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <Breadcrumb currentPage="บทความ" />
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ci-blue/10 text-ci-blue rounded-full text-sm font-semibold mb-6 opacity-0 animate-fade-in-up">
              <BookOpen className="w-4 h-4" />
              บทความและคู่มือ
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 opacity-0 animate-fade-in-up delay-100">
              เรียนรู้ทุกสิ่งเกี่ยวกับ<br />
              <span className="text-ci-blue">การสกรีนเสื้อ</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-200">
              บทความ คู่มือ และเคล็ดลับจากผู้เชี่ยวชาญ เพื่อช่วยให้คุณเลือกและดูแลงานสกรีนได้อย่างมืออาชีพ
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-300">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="ค้นหาบทความ..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-ci-blue focus:outline-none text-slate-900 placeholder:text-slate-400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  category === 'ทั้งหมด'
                    ? 'bg-ci-blue text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-12">
            <Sparkles className="w-6 h-6 text-ci-blue" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              บทความแนะนำ
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {blogPosts
              .filter((post) => post.featured)
              .map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-ci-blue/20 to-ci-yellow/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-ci-blue/30" />
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-4 mb-4 text-sm text-slate-600">
                      <span className="px-3 py-1 bg-ci-blue/10 text-ci-blue rounded-full font-medium">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('th-TH', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-ci-blue transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-ci-blue font-semibold">
                      อ่านบทความ
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          {/* All Posts */}
          <div className="flex items-center gap-3 mb-12">
            <TrendingUp className="w-6 h-6 text-slate-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              บทความทั้งหมด
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts
              .filter((post) => !post.featured)
              .map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Tag className="w-12 h-12 text-slate-400" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-xs text-slate-600">
                      <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-full font-medium">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-ci-blue transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-sm text-slate-500">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('th-TH', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="btn-secondary">
              โหลดบทความเพิ่มเติม
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTASection />
    </PageLayout>
  );
}
