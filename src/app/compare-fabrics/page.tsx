'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { FinalCTASection } from '@/components/sections';
import { 
  Star,
  CheckCircle,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';

// Types
type ProductId = 'oe' | 'semi' | 'comb' | 'drytech' | 'pique';

interface ProductFeatures {
  shirtFit: string;
  stitching: string;
  fabricGrade: string;
  fiberType: string;
  yarnCount: string;
  gsm: string;
  texture: string;
  softness: number;
  breathability: number;
  durability: string;
  wrinkleResistance: string;
  dtf: boolean;
  dtg: boolean;
  useCase: string;
  minOrder: string;
  colorRange: string;
  colorSwatches: string[];
}

interface Product {
  category: string;
  name: string;
  slogan: string;
  image: string;
  link: string;
  features: ProductFeatures;
}

type ProductsData = Record<ProductId, Product>;

// Products Data
const allProducts: ProductsData = {
  oe: {
    category: 'เสื้อยืด',
    name: 'Cotton OE',
    slogan: 'ผ้าคอตตอนเกรดประหยัด',
    image: '',
    link: '/products',
    features: {
      shirtFit: 'ทรง Unisex ปกติ',
      stitching: 'ตะเข็บเดี่ยว',
      fabricGrade: 'OE',
      fiberType: 'Cotton 100%',
      yarnCount: 'No. 20 / No. 32',
      gsm: '150-160 gsm',
      texture: 'หยาบกระด้าง',
      softness: 2,
      breathability: 3,
      durability: 'ปานกลาง',
      wrinkleResistance: 'ยับง่ายมาก',
      dtf: true,
      dtg: true,
      useCase: 'เสื้อแจก, เสื้ออีเว้นท์ (เน้นราคา)',
      minOrder: '50 ตัว',
      colorRange: '10+ สี',
      colorSwatches: ['#ffffff', '#d1d5db', '#1f2937', '#b91c1c']
    }
  },
  semi: {
    category: 'เสื้อยืด',
    name: 'Cotton Semi No.32',
    slogan: 'ผ้าคอตตอนมาตรฐานสุดคุ้มค่า',
    image: '',
    link: '/products',
    features: {
      shirtFit: 'ทรง Unisex ปกติ',
      stitching: 'ตะเข็บคู่ แข็งแรง',
      fabricGrade: 'Semi-Combed',
      fiberType: 'Cotton 100%',
      yarnCount: 'No. 32',
      gsm: '155-165 gsm',
      texture: 'นุ่มมาตรฐาน',
      softness: 3,
      breathability: 3,
      durability: 'ทนทาน',
      wrinkleResistance: 'ยับง่ายกว่า',
      dtf: true,
      dtg: true,
      useCase: 'เสื้อทีม, เสื้อกิจกรรม, เสื้อแบรนด์ (เน้นคุ้มค่า)',
      minOrder: 'ไม่มีขั้นต่ำ',
      colorRange: '12+ สี',
      colorSwatches: ['#1f2937', '#ffffff', '#d1d5db', '#1e3a8a', '#881337']
    }
  },
  comb: {
    category: 'เสื้อยืด',
    name: 'Cotton Comb No.32',
    slogan: 'สุดยอดผ้าคอตตอน นุ่มพิเศษ',
    image: '',
    link: '/products',
    features: {
      shirtFit: 'ทรง Unisex ปกติ',
      stitching: 'ตะเข็บคู่พรีเมียม',
      fabricGrade: 'Combed',
      fiberType: 'Cotton 100%',
      yarnCount: 'No. 32',
      gsm: '155-165 gsm',
      texture: 'นุ่มพิเศษ เรียบเนียน',
      softness: 5,
      breathability: 4,
      durability: 'ทนทานสูง',
      wrinkleResistance: 'ยับยากกว่า Semi',
      dtf: true,
      dtg: true,
      useCase: 'เสื้อแบรนด์พรีเมียม, เสื้อใส่เอง, ของขวัญ',
      minOrder: 'ไม่มีขั้นต่ำ',
      colorRange: '20+ สี',
      colorSwatches: ['#111827', '#ffffff', '#fca5a5', '#fdba74', '#fde047', '#86efac', '#67e8f9', '#a5b4fc']
    }
  },
  drytech: {
    category: 'เสื้อกีฬา',
    name: 'เสื้อ Dry-Tech',
    slogan: 'ผ้ากีฬา แห้งไว ระบายอากาศเยี่ยม',
    image: '',
    link: '/products',
    features: {
      shirtFit: 'ทรง Sport Fit',
      stitching: 'ตะเข็บล็อค แข็งแรงพิเศษ',
      fabricGrade: 'N/A',
      fiberType: 'Polyester 100%',
      yarnCount: 'N/A',
      gsm: '140-150 gsm',
      texture: 'ลื่น เบา สบาย',
      softness: 3,
      breathability: 5,
      durability: 'ทนทานมาก',
      wrinkleResistance: 'ไม่ยับเลย',
      dtf: true,
      dtg: false,
      useCase: 'เสื้อวิ่ง, เสื้อกีฬา, เสื้อฟิตเนส',
      minOrder: '50 ตัว',
      colorRange: '15+ สี',
      colorSwatches: ['#1f2937', '#ffffff', '#ef4444', '#3b82f6', '#22c55e', '#f97316', '#eab308']
    }
  },
  pique: {
    category: 'เสื้อโปโล',
    name: 'เสื้อโปโล Pique',
    slogan: 'ผ้าโปโลทนทาน สำหรับยูนิฟอร์ม',
    image: '',
    link: '/products',
    features: {
      shirtFit: 'ทรงโปโลคลาสสิก',
      stitching: 'มาตรฐานเสื้อโปโล',
      fabricGrade: 'N/A',
      fiberType: 'Cotton/Polyester Blend',
      yarnCount: 'N/A',
      gsm: '200-220 gsm',
      texture: 'มีลายทอเฉพาะตัว',
      softness: 4,
      breathability: 3,
      durability: 'ทนทานสูงมาก',
      wrinkleResistance: 'ยับยาก',
      dtf: true,
      dtg: false,
      useCase: 'เสื้อพนักงาน, ยูนิฟอร์มบริษัท',
      minOrder: '50 ตัว',
      colorRange: '10+ สี',
      colorSwatches: ['#1f2937', '#ffffff', '#d1d5db', '#1e3a8a', '#be123c', '#166534']
    }
  }
};

// Feature Labels
const featureLabels: Record<keyof ProductFeatures, string> = {
  shirtFit: 'ทรงเสื้อ',
  stitching: 'การตัดเย็บ',
  fabricGrade: 'เกรดเนื้อผ้า',
  fiberType: 'ประเภทเส้นใย',
  yarnCount: 'เบอร์ผ้า',
  gsm: 'ความหนา',
  texture: 'สัมผัสเนื้อผ้า',
  softness: 'ความนุ่ม',
  breathability: 'การระบายอากาศ',
  durability: 'ความทนทาน',
  wrinkleResistance: 'ความยับยาก',
  dtf: 'เหมาะสำหรับสกรีน DTF',
  dtg: 'เหมาะสำหรับสกรีน DTG',
  useCase: 'เหมาะสำหรับงาน',
  minOrder: 'ขั้นต่ำการผลิต',
  colorRange: 'เฉดสี',
  colorSwatches: ''
};

// Components
function RenderStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 justify-center text-yellow-400">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${star <= rating ? 'fill-current' : 'fill-none'}`}
        />
      ))}
    </div>
  );
}

function RenderCheck({ value }: { value: boolean }) {
  return value ? (
    <CheckCircle className="w-8 h-8 text-ci-blue mx-auto" />
  ) : (
    <span className="text-slate-300">-</span>
  );
}

function RenderColorSwatches({ colors, totalString }: { colors: string[]; totalString: string }) {
  const totalCount = parseInt(totalString.match(/\d+/)?.[0] || '0');
  const maxSwatches = 5;

  if (!colors || colors.length === 0) {
    return <span className="text-sm">{totalString}</span>;
  }

  return (
    <div className="flex items-center justify-center -space-x-2">
      {colors.slice(0, maxSwatches).map((color, index) => (
        <div
          key={index}
          className="w-7 h-7 rounded-full border-2 border-white shadow-sm"
          style={{ backgroundColor: color, zIndex: maxSwatches - index }}
          title={color}
        />
      ))}
      {totalCount > maxSwatches && (
        <div
          className="w-7 h-7 rounded-full border-2 border-white bg-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center shadow-sm"
          style={{ zIndex: 0 }}
        >
          +{totalCount - maxSwatches}
        </div>
      )}
    </div>
  );
}

export default function FabricComparisonPage() {
  const [comparedProducts, setComparedProducts] = useState<ProductId[]>(['oe', 'semi', 'comb']);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);


  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(null);
    if (openDropdown !== null) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [openDropdown]);

  // Group products by category for dropdown
  const productGroups: Record<string, string[]> = {};
  Object.entries(allProducts).forEach(([id, product]) => {
    if (!productGroups[product.category]) {
      productGroups[product.category] = [];
    }
    productGroups[product.category].push(id);
  });

  const handleProductChange = (index: number, newProductId: ProductId) => {
    const newComparedProducts = [...comparedProducts];
    newComparedProducts[index] = newProductId;
    setComparedProducts(newComparedProducts);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-ci-blue/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-ci-yellow/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-ci-blue/5 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <Breadcrumb currentPage="เปรียบเทียบเนื้อผ้า" />
          
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-ci-blue/10 to-blue-500/10 text-ci-blue rounded-full text-sm font-semibold mb-6 border border-ci-blue/20 opacity-0 animate-fade-in-up">
              <Star className="w-4 h-4 fill-current" />
              เปรียบเทียบเนื้อผ้า
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 opacity-0 animate-fade-in-up delay-100">
              เนื้อผ้าแบบไหน<br />
              <span className="bg-gradient-to-r from-ci-blue to-blue-600 text-transparent bg-clip-text">ที่ใช่สำหรับคุณ?</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto opacity-0 animate-fade-in-up delay-200">
              เปรียบเทียบคุณสมบัติเด่นของผ้าแต่ละชนิด เพื่อให้คุณเลือกเสื้อที่ตอบโจทย์การใช้งานได้ดีที่สุด
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Mobile Scroll Hint */}
          <div className="md:hidden mb-4 flex items-center justify-center gap-2 text-sm text-slate-600 bg-blue-50 px-4 py-3 rounded-lg border border-ci-blue/20">
            <svg className="w-5 h-5 text-ci-blue animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>เลื่อนซ้าย-ขวาเพื่อดูข้อมูล</span>
            <svg className="w-5 h-5 text-ci-blue animate-bounce" fill="none" viewBox="0 0 24 12" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4-4m0 0l-4-4m4 4H3" />
            </svg>
          </div>
          <div className="relative overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-2xl">
            {/* Scroll Gradient Indicators */}
            <div className="md:hidden absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
            <div className="md:hidden absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
            <table className="w-full min-w-[800px] table-fixed">
              {/* Table Header */}
              <thead>
                <tr className="border-b-2 border-ci-blue/20">
                  <th className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 text-left sticky left-0 z-20 w-[200px]">
                    <span className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-700 text-transparent bg-clip-text">คุณสมบัติ</span>
                  </th>
                  {comparedProducts.map((productId, index) => {
                    const product = allProducts[productId];
                    return (
                      <th key={index} className="bg-gradient-to-br from-white to-slate-50/50 p-6 w-[280px] border-l border-slate-200">
                        <div className="space-y-4">
                          {/* Custom Product Selector */}
                          <div className="relative">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setOpenDropdown(openDropdown === index ? null : index);
                              }}
                              className="w-full px-4 py-3 pr-10 bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 rounded-xl text-base font-bold text-slate-900 cursor-pointer hover:border-ci-blue hover:shadow-md focus:outline-none focus:ring-2 focus:ring-ci-blue focus:border-ci-blue transition-all hover:from-ci-blue/5 hover:to-blue-50/50 text-left"
                            >
                              {product.name}
                            </button>
                            <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 transition-all ${openDropdown === index ? 'rotate-180 text-ci-blue' : ''}`} />
                            
                            {/* Dropdown Menu */}
                            {openDropdown === index && (
                              <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-ci-blue/20 rounded-xl shadow-2xl z-30 max-h-[400px] overflow-y-auto">
                                {Object.entries(productGroups).map(([category, _]) => (
                                  <div key={category}>
                                    <div className="px-4 py-2 bg-slate-50 text-xs font-bold text-slate-600 uppercase sticky top-0">
                                      {category}
                                    </div>
                                    {Object.entries(allProducts)
                                      .filter(([_, p]) => p.category === category)
                                      .map(([id, p]) => {
                                        const isSelected = id === productId;
                                        const isDisabled = comparedProducts.includes(id as ProductId) && id !== productId;
                                        return (
                                          <button
                                            key={id}
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              if (!isDisabled) {
                                                handleProductChange(index, id as ProductId);
                                                setOpenDropdown(null);
                                              }
                                            }}
                                            disabled={isDisabled}
                                            className={`w-full px-4 py-3 text-left transition-all ${
                                              isSelected
                                                ? 'bg-ci-blue text-white font-bold'
                                                : isDisabled
                                                ? 'text-slate-400 cursor-not-allowed bg-slate-50/50'
                                                : 'hover:bg-ci-blue/10 text-slate-900'
                                            }`}
                                          >
                                            <div className="flex items-center justify-between">
                                              <span>{p.name}</span>
                                              {isSelected && <CheckCircle className="w-4 h-4" />}
                                            </div>
                                          </button>
                                        );
                                      })}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Product Image */}
                          <div className="relative aspect-square w-full bg-gradient-to-br from-ci-blue/10 via-slate-100 to-slate-200 rounded-2xl overflow-hidden flex items-center justify-center group/image border-2 border-slate-200 hover:border-ci-blue transition-all">
                            <div className="absolute inset-0 bg-gradient-to-br from-ci-blue/0 to-ci-blue/10 opacity-0 group-hover/image:opacity-100 transition-opacity" />
                            {product.image ? (
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover relative z-10"
                              />
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center z-10">
                                <div className="text-6xl font-bold bg-gradient-to-br from-ci-blue/30 to-slate-300 text-transparent bg-clip-text">
                                  {product.name.charAt(0)}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Product Info */}
                          <div className="text-center space-y-3">
                            <p className="text-sm text-slate-600 min-h-[40px] flex items-center justify-center font-medium">
                              {product.slogan}
                            </p>
                            <Link
                              href={product.link}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-ci-blue to-blue-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all"
                            >
                              ดูรายละเอียด
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {Object.entries(featureLabels)
                  .filter(([key]) => key !== 'colorSwatches')
                  .map(([key, label], rowIndex) => (
                    <tr
                      key={key}
                      className={`border-t border-slate-200 hover:bg-ci-blue/5 transition-colors group/row ${rowIndex % 2 === 0 ? 'bg-slate-50/30' : 'bg-white'}`}
                    >
                      <td className="bg-gradient-to-r from-slate-50 to-slate-100/50 p-6 font-bold text-slate-900 sticky left-0 z-10 group-hover/row:from-ci-blue/10 group-hover/row:to-blue-50/30 transition-colors">
                        {label}
                      </td>
                      {comparedProducts.map((productId, colIndex) => {
                        const product = allProducts[productId];
                        const value = product.features[key as keyof ProductFeatures];

                        let renderedValue: React.ReactNode = value;

                        if (key === 'softness' || key === 'breathability') {
                          renderedValue = <RenderStars rating={value as number} />;
                        } else if (key === 'dtf' || key === 'dtg') {
                          renderedValue = <RenderCheck value={value as boolean} />;
                        } else if (key === 'colorRange') {
                          renderedValue = (
                            <RenderColorSwatches
                              colors={product.features.colorSwatches}
                              totalString={value as string}
                            />
                          );
                        }

                        return (
                          <td
                            key={`${productId}-${key}`}
                            className="p-6 text-center text-sm md:text-base text-slate-800 font-medium border-l border-slate-200 group-hover/row:text-slate-900 transition-colors"
                          >
                            {renderedValue}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 bg-gradient-to-br from-slate-50 via-blue-50/20 to-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-ci-blue/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-ci-yellow/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 text-center shadow-2xl border-2 border-slate-200 relative overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-ci-blue/5 via-transparent to-blue-50/30 pointer-events-none" />
            
            <div className="relative">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-ci-blue to-blue-600 rounded-2xl mb-6 shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                เลือกผ้าได้แล้ว<br className="hidden md:block" /> แต่ยังไม่แน่ใจเรื่อง
                <span className="bg-gradient-to-r from-ci-blue to-blue-600 text-transparent bg-clip-text">งานสกรีน</span>?
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                เปรียบเทียบความแตกต่างระหว่างงานสกรีน 3 เทคนิคยอดนิยม{' '}
                <span className="font-bold text-ci-blue">DTF</span>,{' '}
                <span className="font-bold text-slate-900">DTG</span> และ{' '}
                <span className="font-bold text-ci-yellow">Silk Screen</span>{' '}
                เพื่อให้คุณได้งานที่สวยตรงใจที่สุด
              </p>
              <Link
                href="/dtf-vs-dtg"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-ci-blue via-blue-600 to-ci-blue bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                เปรียบเทียบเทคนิคสกรีน
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
