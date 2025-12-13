'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';
import { FinalCTASection } from '@/components/sections';
import { 
  ShoppingBag,
  Shirt,
  Layers,
  Search,
  Package,
  Ruler,
  Palette,
  CheckCircle2,
  Download,
  GitCompare,
  Filter,
  Award,
  Weight,
  Target,
  Table2,
} from 'lucide-react';
import { useState } from 'react';

// ประเภทสินค้า
type ProductCategory = 'tshirt' | 'fabric';
type ShirtStyle = 'all' | 'round-neck' | 'v-neck' | 'polo' | 'long-sleeve';

interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  style?: ShirtStyle; // สำหรับเสื้อเปล่า
  price: number;
  priceRange?: { min: number; max: number };
  image?: string;
  colors?: string[];
  sizes?: string[];
  material: string;
  description: string;
  inStock: boolean;
  featured?: boolean;
  grade?: string; // เกรดผ้า (Semi, Combed, A, etc.)
  weight?: string; // น้ำหนัก/เบอร์ผ้า (No. 32, 155-165 gsm)
  printMethods?: string[]; // เทคนิคสกรีนที่แนะนำ
  features?: string[]; // คุณสมบัติพิเศษ
  hasMinimumOrder?: boolean; // มีขั้นต่ำหรือไม่
  certification?: string; // ใบรับรอง (OEKO-TEX, etc.)
}

// ข้อมูลสินค้าตัวอย่าง
const products: Product[] = [
  // เสื้อเปล่า
  {
    id: 't-001',
    name: 'เสื้อยืดคอกลม Cotton 100%',
    category: 'tshirt',
    style: 'round-neck',
    price: 120,
    material: 'Cotton 100%',
    colors: ['ขาว', 'ดำ', 'เทา', 'กรมท่า', 'แดง'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    description: 'เสื้อยืดคอกลม ผ้า Cotton 100% คุณภาพดี นุ่มสบาย เหมาะกับการสกรีนทุกเทคนิค',
    inStock: true,
    featured: true,
    grade: 'Semi-Combed',
    weight: 'No. 32 / 155-165 gsm',
    printMethods: ['DTF', 'DTG', 'Silk Screen'],
    features: ['ระบายอากาศดี', 'เหมาะกับการสกรีน', 'น้ำหนักพอเหมาะ'],
    hasMinimumOrder: false,
    certification: 'OEKO-TEX Standard 100',
  },
  {
    id: 't-002',
    name: 'เสื้อยืดคอกลม Polyester',
    category: 'tshirt',
    style: 'round-neck',
    price: 95,
    material: 'Polyester 100%',
    colors: ['ขาว', 'ดำ', 'กรมท่า', 'เขียว', 'ส้ม'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    description: 'เสื้อยืด Polyester เนื้อนุ่ม ระบายอากาศดี เหมาะสำหรับเสื้อกีฬา',
    inStock: true,
    featured: true,
    weight: '140-150 gsm',
    printMethods: ['DTF', 'Sublimation'],
    features: ['ซับเหงื่อดี', 'แห้งเร็ว', 'เหมาะกับกีฬา'],
    hasMinimumOrder: false,
  },
  {
    id: 't-003',
    name: 'เสื้อโปโล Cotton 100%',
    category: 'tshirt',
    style: 'polo',
    price: 180,
    material: 'Cotton 100%',
    colors: ['ขาว', 'ดำ', 'เทา', 'กรมท่า'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    description: 'เสื้อโปโลคุณภาพดี มีปก มีกระดุม เหมาะสำหรับยูนิฟอร์มบริษัท',
    inStock: true,
  },
  {
    id: 't-004',
    name: 'เสื้อยืดคอวี Cotton',
    category: 'tshirt',
    style: 'v-neck',
    price: 130,
    material: 'Cotton 100%',
    colors: ['ขาว', 'ดำ', 'เทา'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'เสื้อยืดคอวี ทรงสวย ผ้านุ่ม ใส่สบาย',
    inStock: true,
  },
  {
    id: 't-005',
    name: 'เสื้อยืด Cotton ผสม Polyester',
    category: 'tshirt',
    style: 'round-neck',
    price: 100,
    material: 'Cotton/Poly 65/35',
    colors: ['ขาว', 'ดำ', 'เทา', 'กรมท่า', 'เขียว', 'แดง'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    description: 'เสื้อผ้าผสม ทนทาน ไม่ยับง่าย เหมาะสำหรับใช้งานหนัก',
    inStock: true,
  },
  {
    id: 't-006',
    name: 'เสื้อแขนยาว Cotton 100%',
    category: 'tshirt',
    style: 'long-sleeve',
    price: 150,
    material: 'Cotton 100%',
    colors: ['ขาว', 'ดำ', 'เทา', 'กรมท่า'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    description: 'เสื้อแขนยาวคอกลม ผ้า Cotton คุณภาพดี',
    inStock: true,
  },

  // เนื้อผ้าดิบ
  {
    id: 'f-001',
    name: 'ผ้า Cotton 100% เกรด A',
    category: 'fabric',
    priceRange: { min: 180, max: 220 },
    price: 200,
    material: 'Cotton 100%',
    colors: ['ขาว', 'ดำ', 'เทา', 'กรมท่า', 'แดง', 'เขียว'],
    description: 'ผ้า Cotton เกรด A คุณภาพดีที่สุด นุ่ม ทนทาน เหมาะสำหรับตัดเสื้อคุณภาพสูง',
    inStock: true,
    featured: true,
  },
  {
    id: 'f-002',
    name: 'ผ้า Polyester Mesh',
    category: 'fabric',
    priceRange: { min: 150, max: 180 },
    price: 165,
    material: 'Polyester Mesh',
    colors: ['ขาว', 'ดำ', 'กรมท่า', 'แดง', 'เหลือง', 'ส้ม'],
    description: 'ผ้า Polyester ตาข่าย ระบายอากาศดี เหมาะสำหรับเสื้อกีฬา',
    inStock: true,
    featured: true,
  },
  {
    id: 'f-003',
    name: 'ผ้า Cotton Combed',
    category: 'fabric',
    priceRange: { min: 200, max: 250 },
    price: 225,
    material: 'Cotton Combed 24s',
    colors: ['ขาว', 'ดำ', 'เทา'],
    description: 'ผ้า Cotton Combed เนื้อละเอียด นุ่มพิเศษ เหมาะสำหรับเสื้อพรีเมียม',
    inStock: true,
  },
  {
    id: 'f-004',
    name: 'ผ้า TC (Cotton/Poly)',
    category: 'fabric',
    priceRange: { min: 140, max: 170 },
    price: 155,
    material: 'TC 65/35',
    colors: ['ขาว', 'ดำ', 'เทา', 'กรมท่า', 'แดง'],
    description: 'ผ้า TC ทนทาน ไม่ยับง่าย เหมาะสำหรับยูนิฟอร์ม',
    inStock: true,
  },
  {
    id: 'f-005',
    name: 'ผ้า Dri-Fit',
    category: 'fabric',
    priceRange: { min: 190, max: 240 },
    price: 215,
    material: 'Polyester Dri-Fit',
    colors: ['ขาว', 'ดำ', 'กรมท่า', 'แดง', 'ฟ้า'],
    description: 'ผ้า Dri-Fit ซับเหงื่อดี แห้งเร็ว เหมาะสำหรับกีฬา',
    inStock: true,
  },
  {
    id: 'f-006',
    name: 'ผ้า French Terry',
    category: 'fabric',
    priceRange: { min: 220, max: 280 },
    price: 250,
    material: 'Cotton French Terry',
    colors: ['ขาว', 'ดำ', 'เทา', 'กรมท่า'],
    description: 'ผ้า French Terry หนานุ่ม เหมาะสำหรับ Hoodie และเสื้อแขนยาว',
    inStock: true,
  },
];

const categories = [
  { id: 'all', name: 'ทั้งหมด', icon: Package },
  { id: 'tshirt', name: 'เสื้อเปล่า', icon: Shirt },
  { id: 'fabric', name: 'เนื้อผ้าดิบ', icon: Layers },
];

const shirtStyles = [
  { id: 'all', name: 'ทรงทั้งหมด' },
  { id: 'round-neck', name: 'คอกลม' },
  { id: 'v-neck', name: 'คอวี' },
  { id: 'polo', name: 'โปโล' },
  { id: 'long-sleeve', name: 'แขนยาว' },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | ProductCategory>('all');
  const [selectedStyle, setSelectedStyle] = useState<ShirtStyle>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesStyle = selectedStyle === 'all' || !product.style || product.style === selectedStyle;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.material.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesStyle && matchesSearch;
  });

  const handleDownloadCatalog = () => {
    // TODO: ดาวน์โหลดไฟล์แคตตาล็อก PDF
    alert('กำลังดาวน์โหลดแคตตาล็อก...');
  };

  const handleCompare = () => {
    // เปิดหน้าเปรียบเทียบเทคนิคสกรีน
    window.open('/dtf-vs-dtg', '_blank');
  };

  const handleCompareFabric = () => {
    // เปิดหน้าเปรียบเทียบเนื้อผ้า
    window.location.href = '/compare-fabrics';
  };

  // Set page title
  useEffect(() => {
    document.title = 'สินค้าของเรา | อนาจักร ที-เชิ้ต';
  }, []);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-ci-blue/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ci-blue/10 text-ci-blue rounded-full text-sm font-semibold mb-6">
              <ShoppingBag className="w-4 h-4" />
              สินค้าของเรา
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              <span className="text-ci-blue">เสื้อเปล่า</span> และ<br />
              <span className="text-slate-700">เนื้อผ้าคุณภาพ</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              เลือกซื้อเสื้อเปล่าพร้อมสกรีน หรือเนื้อผ้าดิบสำหรับตัดเสื้อ หลากหลายชนิด หลากหลายสี
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="ค้นหาสินค้า เช่น เสื้อ Cotton, ผ้า Polyester..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-ci-blue focus:outline-none text-slate-900 placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={handleDownloadCatalog}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 border-2 border-slate-200 font-semibold rounded-xl hover:border-ci-blue hover:text-ci-blue transition-all"
              >
                <Download className="w-5 h-5" />
                โหลดแคตตาล็อก
              </button>
              <button
                onClick={handleCompareFabric}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-ci-blue to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all"
              >
                <Table2 className="w-5 h-5" />
                เปรียบเทียบเนื้อผ้า
              </button>
              <button
                onClick={handleCompare}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 border-2 border-slate-200 font-semibold rounded-xl hover:border-ci-blue hover:text-ci-blue transition-all"
              >
                <GitCompare className="w-5 h-5" />
                เปรียบเทียบเทคนิค
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-20 z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Categories */}
            <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id as any);
                      setSelectedStyle('all'); // รีเซ็ต style filter เมื่อเปลี่ยนหมวด
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-ci-blue text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {cat.name}
                  </button>
                );
              })}
            </div>

            {/* Style Filter (แสดงเฉพาะเมื่อเลือกเสื้อเปล่า) */}
            {(selectedCategory === 'tshirt' || selectedCategory === 'all') && (
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-500" />
                <select
                  value={selectedStyle}
                  onChange={(e) => setSelectedStyle(e.target.value as ShirtStyle)}
                  className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-700 focus:border-ci-blue focus:outline-none bg-white"
                >
                  {shirtStyles.map((style) => (
                    <option key={style.id} value={style.id}>
                      {style.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                {selectedCategory === 'all' && 'สินค้าทั้งหมด'}
                {selectedCategory === 'tshirt' && 'เสื้อเปล่า'}
                {selectedCategory === 'fabric' && 'เนื้อผ้าดิบ'}
              </h2>
              <p className="text-slate-600">
                พบ {filteredProducts.length} รายการ
              </p>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Package className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-600">ไม่พบสินค้าที่ค้นหา</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-ci-blue to-blue-600">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <ShoppingBag className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              ไม่แน่ใจว่าจะเลือกอะไร?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              ทีมผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษา แนะนำสินค้าที่เหมาะกับคุณ ไม่มีค่าใช้จ่าย
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-ci-blue font-bold rounded-xl hover:bg-slate-100 transition-all text-lg"
              >
                <ShoppingBag className="w-5 h-5" />
                ดูบริการของเรา
              </Link>
              <button
                onClick={handleDownloadCatalog}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-ci-blue/20 text-white font-bold rounded-xl hover:bg-ci-blue/30 transition-all text-lg border-2 border-white/20"
              >
                <Download className="w-5 h-5" />
                ดาวน์โหลดแคตตาล็อก
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-ci-blue/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-ci-blue" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">คุณภาพรับประกัน</h3>
              <p className="text-sm text-slate-600">สินค้าคุณภาพดี ผ่านการคัดสรร</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-ci-blue/10 flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-ci-blue" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">พร้อมส่ง</h3>
              <p className="text-sm text-slate-600">สต็อกพร้อม จัดส่งรวดเร็ว</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-ci-blue/10 flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-ci-blue" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">หลากหลายสี</h3>
              <p className="text-sm text-slate-600">เลือกสีได้ตามต้องการ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTASection />
    </PageLayout>
  );
}

// Product Card Component
function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            {product.category === 'tshirt' ? (
              <Shirt className="w-20 h-20 text-slate-400" />
            ) : (
              <Layers className="w-20 h-20 text-slate-400" />
            )}
          </div>
        )}
        {/* Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
          <div className="flex flex-col gap-2">
            {product.hasMinimumOrder === false && (
              <div className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg">
                ไม่มีขั้นต่ำ
              </div>
            )}
            {product.certification && (
              <div className="px-3 py-1 bg-white/90 backdrop-blur text-slate-700 text-xs font-semibold rounded-full shadow">
                {product.certification}
              </div>
            )}
          </div>
          {product.featured && (
            <div className="px-3 py-1 bg-ci-blue text-white text-xs font-semibold rounded-full shadow-lg">
              แนะนำ
            </div>
          )}
        </div>
        {!product.inStock && (
          <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center">
            <span className="px-4 py-2 bg-white text-slate-900 font-semibold rounded-lg">
              สินค้าหมด
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5">
        {/* Category & Title */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-ci-blue/10 text-ci-blue text-xs font-semibold rounded-full mb-3">
            {product.category === 'tshirt' ? 'เสื้อเปล่า' : 'เนื้อผ้า'}
          </span>
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-ci-blue transition-colors line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Specifications Box */}
        <div className="bg-slate-50/70 rounded-lg p-4 mb-4 space-y-3 border border-slate-100">
          {product.grade && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-ci-blue/70" />
                <span>เกรดผ้า</span>
              </span>
              <span className="text-sm font-bold text-ci-blue">{product.grade}</span>
            </div>
          )}
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600 flex items-center gap-2">
              <Shirt className="w-3.5 h-3.5 text-ci-blue/70" />
              <span>ประเภทเสื้อผ้า</span>
            </span>
            <span className="text-sm font-bold text-slate-900">{product.material}</span>
          </div>
          {product.weight && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 flex items-center gap-2">
                <Weight className="w-3.5 h-3.5 text-ci-blue/70" />
                <span>เบอร์ผ้า / ความหนา</span>
              </span>
              <span className="text-sm font-bold text-slate-900">{product.weight}</span>
            </div>
          )}
          {product.sizes && product.sizes.length > 0 && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 flex items-center gap-2">
                <Ruler className="w-3.5 h-3.5 text-ci-blue/70" />
                <span>ไซส์</span>
              </span>
              <span className="text-sm font-bold text-slate-900">{product.sizes.join(', ')}</span>
            </div>
          )}
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600 flex items-center gap-2">
              <Target className="w-3.5 h-3.5 text-ci-blue/70" />
              <span>เหมาะสำหรับ</span>
            </span>
            <span className="text-sm font-bold text-slate-900">-</span>
          </div>
        </div>

        {/* Colors */}
        {product.colors && product.colors.length > 0 && (
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-2.5">
              <Palette className="w-3.5 h-3.5 text-slate-400" />
              <p className="text-sm font-semibold text-slate-700">สีที่เลือกได้</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.colors.slice(0, 6).map((color, idx) => (
                <div
                  key={idx}
                  className="w-8 h-8 rounded-full bg-slate-300 border-2 border-slate-300 hover:border-ci-blue hover:scale-105 transition-all cursor-pointer"
                  title={color}
                />
              ))}
            </div>
          </div>
        )}

        {/* Price & Action */}
        <div className="pt-4 border-t border-slate-200 flex items-end justify-between gap-4">
          <div>
            {product.priceRange ? (
              <div>
                <p className="text-xs text-slate-500 mb-1">ราคา/หลา</p>
                <p className="text-3xl font-bold text-ci-blue">
                  ฿{product.priceRange.min}
                </p>
              </div>
            ) : (
              <div>
                <p className="text-xs text-slate-500 mb-1">ราคาเริ่มต้น</p>
                <p className="text-3xl font-bold text-ci-blue">
                  ฿{product.price}
                </p>
              </div>
            )}
          </div>
          <button className="px-5 py-2.5 bg-gradient-to-r from-ci-blue to-blue-600 text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all text-sm font-bold whitespace-nowrap">
            รายละเอียด
          </button>
        </div>
      </div>
    </div>
  );
}
