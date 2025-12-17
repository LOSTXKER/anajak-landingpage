'use client';

import { useState, useRef, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { FinalCTASection } from '@/components/sections';
import Breadcrumb from '@/components/Breadcrumb';
import { 
  Calculator,
  ShoppingCart,
  Check,
  Gift,
  FileText,
  ExternalLink,
  ChevronRight,
  Sparkles,
  TrendingDown,
  ChevronDown
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import FAQ from '@/components/FAQ';

// ข้อมูลสินค้า
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  specs: string;
  image: string;
  link?: string;
}

const products: Product[] = [
  { 
    id: 'cotton-comb-32',
    name: "Cotton Comb No.32", 
    price: 120,
    description: "นุ่มพิเศษ ระบายอากาศดีที่สุด เหมาะสำหรับแบรนด์พรีเมียม",
    specs: "Cotton 100% / 150-160 gsm",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=400",
  },
  { 
    id: 'cotton-semi-32',
    name: "Cotton Semi No.32", 
    price: 90,
    description: "คุณภาพมาตรฐาน คุ้มค่า ราคาดี เหมาะสำหรับเสื้อทีม/กิจกรรม",
    specs: "Cotton 100% / 155-165 gsm",
    image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?q=80&w=400",
  },
  { 
    id: 'dry-tech',
    name: "Dry-Tech (Polyester)", 
    price: 100,
    description: "แห้งไว เหมาะกับการออกกำลังกายและกิจกรรมกลางแจ้ง",
    specs: "Polyester 100% / 140-150 gsm",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=400",
  },
  { 
    id: 'polo-pique',
    name: "Polo Pique", 
    price: 180,
    description: "ดูดี เป็นทางการ สำหรับยูนิฟอร์มและเสื้อบริษัท",
    specs: "Pique (Cotton/Poly) / 180-200 gsm",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=400",
  },
  { 
    id: 'fleece-hoodie',
    name: "Fleece Hoodie", 
    price: 250,
    description: "ผ้าหนานุ่ม ให้ความอบอุ่น เหมาะสำหรับทำแบรนด์สตรีท",
    specs: "Fleece (Cotton/Poly) / 280-320 gsm",
    image: "https://images.unsplash.com/photo-1556306535-0f69d75842c6?q=80&w=400",
  },
];

// ราคา DTF ตามขนาดและจำนวน
const dtfPrices: Record<string, Record<number, number>> = {
  'LOGO 2x2': { 1: 30, 10: 10, 50: 5, 100: 5 },
  'A7 3x4':   { 1: 80, 10: 40, 50: 35, 100: 30 },
  'A6 4x6':   { 1: 90, 10: 50, 50: 45, 100: 40 },
  'A5 6x8':   { 1: 110, 10: 60, 50: 55, 100: 50 },
  'A4 8x12':  { 1: 130, 10: 90, 50: 80, 100: 70 },
  'A3 12x16': { 1: 150, 10: 100, 50: 90, 100: 80 },
  'A2 16x21': { 1: 200, 10: 150, 50: 140, 100: 130 },
  'A1 21x28': { 1: 250, 10: 200, 50: 190, 100: 180 }
};

// ราคา DTG ตามขนาด (ราคาเริ่มต้น)
const dtgPrices: Record<string, number> = {
  'LOGO 2x2': 30,
  'A7 3x4': 80,
  'A6 4x6': 100,
  'A5 6x8': 150,
  'A4 8x12': 200,
  'A3 12x16': 250,
  'A2 16x21': 350,
};

// ราคา Silkscreen ตามจำนวนสีและจำนวนตัว
const silkscreenPrices: Record<number, number[]> = {
  1: [70, 50, 30, 25, 20], // [30-49, 50-99, 100-499, 500-999, 1000+]
  2: [80, 60, 35, 30, 25],
  3: [90, 60, 40, 35, 30],
  4: [100, 70, 45, 40, 35],
  5: [110, 70, 50, 45, 40],
  6: [0, 80, 55, 50, 45], // 0 = ไม่รับทำ
  7: [0, 80, 60, 55, 50],
  8: [0, 90, 65, 60, 55], // 8-10 สี
};

export default function CalculatorPage() {
  const [selectedProduct, setSelectedProduct] = useState<string>('cotton-semi-32');
  const [quantity, setQuantity] = useState<number>(1);
  const [printMethod, setPrintMethod] = useState<'dtf' | 'dtg' | 'silkscreen'>('dtf');
  const [numColors, setNumColors] = useState<number>(1); // สำหรับ Silkscreen
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState<boolean>(false);
  const productDropdownRef = useRef<HTMLDivElement>(null);
  const [printFrontEnabled, setPrintFrontEnabled] = useState<boolean>(true);
  const [printBackEnabled, setPrintBackEnabled] = useState<boolean>(false);
  const [frontSize, setFrontSize] = useState<string>('A5 6x8');
  const [backSize, setBackSize] = useState<string>('A5 6x8');

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productDropdownRef.current && !productDropdownRef.current.contains(event.target as Node)) {
        setIsProductDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Helper functions
  const formatCurrency = (value: number): string => {
    return value.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ฿';
  };

  const getDtfPrintCost = (size: string, qty: number): number => {
    const priceTiers = dtfPrices[size];
    if (!priceTiers) return 0;
    if (qty >= 100) return priceTiers[100];
    if (qty >= 50) return priceTiers[50];
    if (qty >= 10) return priceTiers[10];
    return priceTiers[1];
  };

  const getDtgPrintCost = (size: string, qty: number): number => {
    const basePrice = dtgPrices[size] || 0;
    let discount = 0;
    if (qty >= 100) discount = 0.15;
    else if (qty >= 50) discount = 0.10;
    else if (qty >= 30) discount = 0.05;
    return basePrice * (1 - discount);
  };

  const getSilkscreenPrintCost = (colors: number, qty: number): number => {
    const priceTiers = silkscreenPrices[colors] || silkscreenPrices[1];
    if (qty < 30) return 0; // ไม่รับทำน้อยกว่า 30 ตัว
    if (qty >= 1000) return priceTiers[4];
    if (qty >= 500) return priceTiers[3];
    if (qty >= 100) return priceTiers[2];
    if (qty >= 50) return priceTiers[1];
    return priceTiers[0]; // 30-49
  };

  const getShirtPricePerItem = (productId: string, qty: number): number => {
    const product = products.find(p => p.id === productId);
    if (!product) return 0;
    const basePrice = product.price;
    let discount = 0;
    if (qty >= 100) discount = 0.15;
    else if (qty >= 50) discount = 0.10;
    else if (qty >= 30) discount = 0.05;
    return basePrice * (1 - discount);
  };

  // Calculate prices
  const product = products.find(p => p.id === selectedProduct);
  const shirtPricePerItem = getShirtPricePerItem(selectedProduct, quantity);
  
  const getPrintCost = (size: string, qty: number, method: typeof printMethod): number => {
    if (method === 'dtf') return getDtfPrintCost(size, qty);
    if (method === 'dtg') return getDtgPrintCost(size, qty);
    if (method === 'silkscreen') return getSilkscreenPrintCost(numColors, qty);
    return 0;
  };

  const frontPrintCostPerItem = printFrontEnabled 
    ? getPrintCost(frontSize, quantity, printMethod)
    : 0;
  
  const backPrintCostPerItem = printBackEnabled 
    ? getPrintCost(backSize, quantity, printMethod)
    : 0;

  const totalShirtCost = shirtPricePerItem * quantity;
  const totalFrontPrintCost = frontPrintCostPerItem * quantity;
  const totalBackPrintCost = backPrintCostPerItem * quantity;
  const totalPrice = totalShirtCost + totalFrontPrintCost + totalBackPrintCost;

  // Calculate savings
  const baseShirtPrice = product ? product.price : 0;
  const baseFrontPrintCost = printFrontEnabled 
    ? getPrintCost(frontSize, 1, printMethod)
    : 0;
  const baseBackPrintCost = printBackEnabled 
    ? getPrintCost(backSize, 1, printMethod)
    : 0;
  const totalBasePrice = (baseShirtPrice + baseFrontPrintCost + baseBackPrintCost) * quantity;
  const savings = totalBasePrice - totalPrice;

  // Size buttons (ไม่ใช้สำหรับ Silkscreen)
  const printSizes = printMethod === 'silkscreen' ? [] : (printMethod === 'dtf' ? Object.keys(dtfPrices) : Object.keys(dtgPrices));

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-ci-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ci-yellow/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Breadcrumb currentPage="คำนวณราคา" />
          
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ci-blue/10 rounded-full mb-4 opacity-0 animate-fade-in-up">
              <Calculator className="w-4 h-4 text-ci-blue" />
              <span className="text-sm font-semibold text-ci-blue">Price Calculator</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0 animate-fade-in-up delay-100">
              <span className="bg-gradient-to-r from-ci-blue to-ci-blueDark text-transparent bg-clip-text">
                คำนวณราคา
              </span>
              <span className="text-slate-900">เสื้อพร้อมสกรีน</span>
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-ci-blue to-ci-blueDark rounded-full mx-auto mb-6 opacity-0 animate-fade-in-up delay-200" />
            
            <p className="text-lg text-slate-600 leading-relaxed opacity-0 animate-fade-in-up delay-300">
              ปรับเปลี่ยนตัวเลือกด้านล่างเพื่อดูราคาประเมินเบื้องต้นได้ทันที<br className="hidden md:block" />
              ยิ่งสั่งเยอะ ยิ่งคุ้ม! รับส่วนลดพิเศษเมื่อสั่งจำนวนมาก
            </p>

            <div className="mt-4 inline-flex items-center gap-2 text-sm text-slate-500 opacity-0 animate-fade-in-up delay-400">
              <FileText className="w-4 h-4" />
              <span>ราคาอัปเดตล่าสุดเมื่อ: 1 กันยายน 2568</span>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Left Column: Configuration */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Step 1: เลือกเสื้อและจำนวน */}
              <div className="bg-white rounded-2xl border-2 border-slate-100 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-ci-blue to-ci-blueDark text-white font-bold text-lg">
                    1
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    เลือก<span className="text-ci-blue">เสื้อ</span>และจำนวน
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative" ref={productDropdownRef}>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">ประเภทเสื้อ</label>
                    
                    {/* Custom Dropdown Button */}
                    <button
                      type="button"
                      onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                      className="w-full px-4 py-3 text-lg border-2 border-slate-200 rounded-xl focus:border-ci-blue focus:ring-2 focus:ring-ci-blue/20 transition-all outline-none bg-white hover:border-ci-blue/50 flex items-center justify-between"
                    >
                      <span className="text-slate-900">
                        {products.find(p => p.id === selectedProduct)?.name} ({products.find(p => p.id === selectedProduct)?.price}฿)
                      </span>
                      <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${isProductDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {isProductDropdownOpen && (
                      <div className="absolute z-50 w-full mt-2 bg-white border-2 border-slate-200 rounded-xl shadow-xl max-h-80 overflow-y-auto">
                        {products.map((product) => (
                          <button
                            key={product.id}
                            type="button"
                            onClick={() => {
                              setSelectedProduct(product.id);
                              setIsProductDropdownOpen(false);
                            }}
                            className={`w-full px-4 py-3 text-left hover:bg-ci-blue/5 transition-colors border-b border-slate-100 last:border-b-0 flex items-center gap-3 ${
                              selectedProduct === product.id ? 'bg-ci-blue/10' : ''
                            }`}
                          >
                            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-slate-900">{product.name}</div>
                              <div className="text-sm text-slate-600">{product.specs}</div>
                            </div>
                            <div className="font-bold text-ci-blue">{product.price}฿</div>
                            {selectedProduct === product.id && (
                              <Check className="w-5 h-5 text-ci-blue" />
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">จำนวน (ตัว)</label>
                    <input 
                      type="number" 
                      min="1"
                      value={quantity}
                      onChange={(e) => {
                        const newQty = parseInt(e.target.value) || 1;
                        setQuantity(newQty);
                        // รีเซ็ตจำนวนสีถ้าจำนวนตัวน้อยเกินไป
                        if (printMethod === 'silkscreen' && numColors >= 6 && newQty < 50) {
                          setNumColors(1);
                        }
                      }}
                      className="w-full px-4 py-3 text-lg text-center border-2 border-slate-200 rounded-xl focus:border-ci-blue focus:ring-2 focus:ring-ci-blue/20 transition-all outline-none"
                    />
                    <div className="mt-3 flex gap-2">
                      {(printMethod === 'silkscreen' ? [30, 50, 100] : [1, 50, 100]).map(qty => (
                        <button
                          key={qty}
                          onClick={() => setQuantity(qty)}
                          className="px-4 py-1.5 text-sm font-medium bg-slate-50 border border-slate-200 rounded-full hover:bg-ci-blue/10 hover:border-ci-blue hover:text-ci-blue transition-all"
                        >
                          {qty} ตัว
                        </button>
                      ))}
                    </div>
                    
                    {printMethod === 'silkscreen' && quantity < 30 && (
                      <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-red-600">
                        <span>⚠️ Silk Screen ขั้นต่ำ 30 ตัว</span>
                      </div>
                    )}
                    
                    {quantity >= 30 && (
                      <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-green-600">
                        <TrendingDown className="w-4 h-4" />
                        <span>ยิ่งสั่งเยอะ ยิ่งคุ้ม! ได้รับส่วนลดแล้ว</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Product Details */}
                {product && (
                  <div className="mt-6 pt-6 border-t-2 border-dashed border-slate-200">
                    <div className="grid md:grid-cols-3 gap-6 items-start">
                      <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h4>
                        <p className="text-slate-600 mb-3">{product.description}</p>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg text-sm">
                          <Check className="w-4 h-4 text-ci-blue" />
                          <span className="font-medium text-slate-700">{product.specs}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Step 2: เลือกเทคนิคสกรีน */}
              <div className="bg-white rounded-2xl border-2 border-slate-100 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-ci-blue to-ci-blueDark text-white font-bold text-lg">
                    2
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    เลือก<span className="text-ci-blue">เทคนิคสกรีน</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {(['dtf', 'dtg', 'silkscreen'] as const).map((method) => (
                    <label 
                      key={method}
                      className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all ${
                        printMethod === method 
                          ? 'border-ci-blue bg-ci-blue/5' 
                          : 'border-slate-200 hover:border-ci-blue/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="print-method"
                        value={method}
                        checked={printMethod === method}
                        onChange={(e) => {
                          const newMethod = e.target.value as 'dtf' | 'dtg' | 'silkscreen';
                          setPrintMethod(newMethod);
                        }}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <div className="text-2xl font-bold text-slate-900 mb-1">
                          {method === 'silkscreen' ? 'Silk Screen' : method.toUpperCase()}
                        </div>
                        <div className="text-sm text-slate-600 mb-3">
                          {method === 'dtf' ? 'สีสด คมชัด ติดทน' : method === 'dtg' ? 'สีจมลงเนื้อผ้า นุ่ม' : 'จำนวนมาก ราคาต่ำ'}
                        </div>
                        <Link 
                          href={method === 'silkscreen' ? '/services/printing/silkscreen' : `/services/printing/${method}`}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-ci-blue hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>เรียนรู้เพิ่มเติม</span>
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                      {printMethod === method && (
                        <div className="absolute top-3 right-3">
                          <div className="w-6 h-6 rounded-full bg-ci-blue flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      )}
                    </label>
                  ))}
                </div>

                {/* Silkscreen: เลือกจำนวนสี */}
                {printMethod === 'silkscreen' && (
                  <div className="mt-6 p-6 bg-amber-50 border-2 border-amber-200 rounded-xl">
                    <label className="block text-sm font-semibold text-slate-700 mb-3">จำนวนสี</label>
                    <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((color) => {
                        const isDisabled = color >= 6 && quantity < 50;
                        const minQty = color >= 6 ? 50 : 30;
                        return (
                          <label 
                            key={color}
                            className={`p-3 rounded-lg border-2 cursor-pointer text-center transition-all relative ${
                              numColors === color 
                                ? 'border-ci-blue bg-ci-blue text-white' 
                                : 'border-slate-300 hover:border-ci-blue/50 bg-white'
                            } ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                            title={isDisabled ? `ต้องสั่งขั้นต่ำ ${minQty} ตัว` : ''}
                          >
                            <input
                              type="radio"
                              name="num-colors"
                              value={color}
                              checked={numColors === color}
                              onChange={(e) => setNumColors(parseInt(e.target.value))}
                              disabled={isDisabled}
                              className="sr-only"
                            />
                            <div className="font-bold text-sm">{color}</div>
                            <div className="text-xs">สี</div>
                            {color >= 6 && (
                              <div className={`text-[9px] mt-0.5 ${numColors === color ? 'text-white/80' : 'text-amber-700'}`}>
                                {minQty}+ ตัว
                              </div>
                            )}
                          </label>
                        );
                      })}
                    </div>
                    
                    {quantity < 30 && (
                      <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-xs text-red-700 font-medium text-center">
                          ⚠️ Silk Screen ขั้นต่ำ 30 ตัว (1-5 สี) หรือ 50 ตัว (6-10 สี)
                        </p>
                      </div>
                    )}
                    
                    {quantity >= 30 && quantity < 50 && numColors >= 6 && (
                      <div className="mt-3 p-3 bg-amber-100 border border-amber-300 rounded-lg">
                        <p className="text-xs text-amber-800 font-medium text-center">
                          ⚠️ 6+ สี ต้องสั่งขั้นต่ำ 50 ตัว (ปัจจุบัน {quantity} ตัว)
                        </p>
                      </div>
                    )}
                    
                    {quantity >= 50 && numColors >= 6 && (
                      <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-xs text-green-700 font-medium text-center flex items-center justify-center gap-1">
                          <span>✓</span> สามารถเลือก 6-10 สี ได้แล้ว
                        </p>
                      </div>
                    )}
                    
                    <p className="mt-3 text-xs text-slate-600">
                      * ราคาสำหรับขนาด A4-A3 (สกรีนหน้า-หลัง) • 1-5 สี: ขั้นต่ำ 30 ตัว • 6-10 สี: ขั้นต่ำ 50 ตัว
                    </p>
                  </div>
                )}

              </div>

              {/* Step 3: เลือกตำแหน่งและขนาดสกรีน */}
              {printMethod !== 'silkscreen' && (
              <div className="bg-white rounded-2xl border-2 border-slate-100 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-ci-blue to-ci-blueDark text-white font-bold text-lg">
                    3
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    เลือก<span className="text-ci-blue">ตำแหน่ง</span>และขนาดสกรีน
                  </h2>
                </div>

                {/* Front Print */}
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={printFrontEnabled}
                      onChange={(e) => setPrintFrontEnabled(e.target.checked)}
                      className="w-5 h-5 rounded border-slate-300 text-ci-blue focus:ring-ci-blue"
                    />
                    <span className="text-lg font-semibold text-slate-800">สกรีนด้านหน้า</span>
                  </label>

                  {printFrontEnabled && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pl-8">
                      {printSizes.map((size) => {
                        const [label, dimension] = size.split(' ');
                        return (
                          <label 
                            key={size}
                            className={`p-3 rounded-lg border-2 cursor-pointer text-center transition-all ${
                              frontSize === size 
                                ? 'border-ci-blue bg-ci-blue/5' 
                                : 'border-slate-200 hover:border-ci-blue/50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="front-size"
                              value={size}
                              checked={frontSize === size}
                              onChange={(e) => setFrontSize(e.target.value)}
                              className="sr-only"
                            />
                            <div className="font-bold text-sm text-slate-900">{label}</div>
                            <div className="text-xs text-slate-500">{dimension} นิ้ว</div>
                          </label>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="my-6 border-t-2 border-dashed border-slate-200" />

                {/* Back Print */}
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={printBackEnabled}
                      onChange={(e) => setPrintBackEnabled(e.target.checked)}
                      className="w-5 h-5 rounded border-slate-300 text-ci-blue focus:ring-ci-blue"
                    />
                    <span className="text-lg font-semibold text-slate-800">สกรีนด้านหลัง</span>
                  </label>

                  {printBackEnabled && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pl-8">
                      {printSizes.map((size) => {
                        const [label, dimension] = size.split(' ');
                        return (
                          <label 
                            key={size}
                            className={`p-3 rounded-lg border-2 cursor-pointer text-center transition-all ${
                              backSize === size 
                                ? 'border-ci-blue bg-ci-blue/5' 
                                : 'border-slate-200 hover:border-ci-blue/50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="back-size"
                              value={size}
                              checked={backSize === size}
                              onChange={(e) => setBackSize(e.target.value)}
                              className="sr-only"
                            />
                            <div className="font-bold text-sm text-slate-900">{label}</div>
                            <div className="text-xs text-slate-500">{dimension} นิ้ว</div>
                          </label>
                        );
                      })}
                    </div>
                  )}
                </div>

                <p className="mt-6 text-sm text-slate-500 italic">
                  * ราคา DTG เป็นการประมาณการ อาจเปลี่ยนแปลงตามความซับซ้อนของลาย
                </p>
              </div>
              )}

              {/* Silkscreen: แสดงข้อมูลแทน */}
              {printMethod === 'silkscreen' && (
                <div className="bg-white rounded-2xl border-2 border-slate-100 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-ci-blue to-ci-blueDark text-white font-bold text-lg">
                      3
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      รายละเอียด<span className="text-ci-blue">สกรีน Silk Screen</span>
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="flex items-center gap-3 mb-3">
                        <Check className="w-5 h-5 text-ci-blue" />
                        <span className="font-semibold text-slate-900">สกรีนด้านหน้า ({numColors} สี)</span>
                      </div>
                      <p className="text-sm text-slate-600 pl-8">
                        ขนาด A4-A3 (สกรีนหน้า-หลัง) ตามจำนวนสี {numColors} สี
                      </p>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-xl border-2 border-ci-blue">
                      <h4 className="font-bold text-slate-900 mb-2">💡 ข้อมูลเพิ่มเติม</h4>
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li>• ขนาด 2"×2" (โลโก้เล็ก): ตัวละ 5-10 บาท</li>
                        <li>• ขนาด A5 สกรีนหน้า: ตัวละ 5-10 บาท</li>
                        <li>• เพิ่มสุด (ส่วนเสริม): ตัวละ 5-10 บาท</li>
                        <li>• ขั้นต่ำ: 30 ตัว/ลาย</li>
                      </ul>
                    </div>

                    <p className="mt-6 text-sm text-slate-500 italic">
                      * ราคา Silk Screen คงที่ตามตารางราคาจริง ไม่มีการเปลี่ยนแปลง
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Summary */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-28">
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl border-2 border-slate-200 p-6 md:p-8 shadow-lg">
                  <div className="flex items-center gap-3 mb-6 pb-6 border-b-2 border-slate-200">
                    <FileText className="w-6 h-6 text-slate-400" />
                    <h3 className="text-2xl font-bold text-slate-900">สรุปราคา</h3>
                  </div>
                  
                  {/* Price Breakdown */}
                  <div className="space-y-3 mb-6">
                    {/* Shirt Cost */}
                    <div className="p-4 bg-white rounded-xl border border-slate-200">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-slate-800">ราคาเสื้อ</span>
                        <span className="font-bold text-lg text-slate-900">{formatCurrency(totalShirtCost)}</span>
                      </div>
                      <div className="text-xs text-slate-500">
                        {formatCurrency(shirtPricePerItem).replace(' ฿', ' ฿/ตัว')} × {quantity} ตัว
                      </div>
                    </div>

                    {/* Print Cost */}
                    {printMethod === 'silkscreen' ? (
                      quantity < 30 ? (
                        <div className="p-4 bg-red-50 rounded-xl border-2 border-red-200">
                          <div className="text-center">
                            <p className="text-red-700 font-bold mb-1">⚠️ ไม่สามารถคำนวณได้</p>
                            <p className="text-sm text-red-600">Silk Screen ขั้นต่ำ 30 ตัว</p>
                          </div>
                        </div>
                      ) : (
                        <div className="p-4 bg-white rounded-xl border border-slate-200">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-semibold text-slate-800">ค่าสกรีน ({numColors} สี)</span>
                            <span className="font-bold text-lg text-slate-900">{formatCurrency(totalFrontPrintCost)}</span>
                          </div>
                          <div className="text-xs text-slate-500">
                            {formatCurrency(frontPrintCostPerItem).replace(' ฿', ' ฿/ตัว')} × {quantity} ตัว
                          </div>
                        </div>
                      )
                    ) : (
                      <>
                        {/* Front Print Cost */}
                        {printFrontEnabled && (
                          <div className="p-4 bg-white rounded-xl border border-slate-200">
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-semibold text-slate-800">ค่าสกรีน (หน้า)</span>
                              <span className="font-bold text-lg text-slate-900">{formatCurrency(totalFrontPrintCost)}</span>
                            </div>
                            <div className="text-xs text-slate-500">
                              {formatCurrency(frontPrintCostPerItem).replace(' ฿', ' ฿/ตัว')} × {quantity} ตัว
                            </div>
                          </div>
                        )}

                        {/* Back Print Cost */}
                        {printBackEnabled && (
                          <div className="p-4 bg-white rounded-xl border border-slate-200">
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-semibold text-slate-800">ค่าสกรีน (หลัง)</span>
                              <span className="font-bold text-lg text-slate-900">{formatCurrency(totalBackPrintCost)}</span>
                            </div>
                            <div className="text-xs text-slate-500">
                              {formatCurrency(backPrintCostPerItem).replace(' ฿', ' ฿/ตัว')} × {quantity} ตัว
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {/* Savings */}
                  {savings > 0.01 && !(printMethod === 'silkscreen' && quantity < 30) && (
                    <div className="mb-6 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
                      <div className="flex items-center gap-2 text-green-700">
                        <Gift className="w-5 h-5" />
                        <div>
                          <p className="font-bold">ยอดเยี่ยม! คุณประหยัดไป</p>
                          <p className="text-2xl font-bold">{formatCurrency(savings)}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Total Price */}
                  <div className="pt-6 border-t-2 border-dashed border-slate-300 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-slate-700">ราคารวมโดยประมาณ</span>
                      {printMethod === 'silkscreen' && quantity < 30 ? (
                        <span className="text-2xl font-bold text-slate-400">
                          -
                        </span>
                      ) : (
                        <span className="text-4xl font-bold bg-gradient-to-r from-ci-blue to-ci-blueDark text-transparent bg-clip-text">
                          {formatCurrency(totalPrice)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  {printMethod === 'silkscreen' && quantity < 30 ? (
                    <button
                      disabled
                      className="w-full py-4 text-lg font-semibold bg-slate-300 text-slate-500 rounded-xl cursor-not-allowed"
                    >
                      กรุณาเลือกจำนวนขั้นต่ำ 30 ตัว
                    </button>
                  ) : (
                    <Link 
                      href="/contact"
                      className="group btn-primary flex items-center justify-center gap-2 w-full py-4 text-lg font-semibold"
                    >
                      <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>ติดต่อเพื่อสั่งทำ</span>
                    </Link>
                  )}

                  <p className="mt-4 text-xs text-center text-slate-500">
                    * ราคานี้ยังไม่รวมภาษีมูลค่าเพิ่มและค่าจัดส่ง
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ขั้นตอนต่อไปคืออะไร?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              เมื่อคุณได้ราคาประเมินที่พอใจแล้ว คุณสามารถดูผลงานของเรา<br className="hidden md:block" />
              อ่านข้อมูลเชิงลึก หรือติดต่อเราเพื่อเริ่มโปรเจกต์ได้เลย!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link 
              href="/portfolio"
              className="group p-8 bg-white rounded-2xl border-2 border-slate-100 hover:border-ci-blue hover:shadow-lg transition-all relative"
            >
              <div className="w-12 h-12 rounded-xl bg-ci-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-ci-blue" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-slate-900 group-hover:text-ci-blue transition-colors flex items-center gap-2">
                ชมผลงานของเรา
                <ChevronRight className="w-5 h-5 text-ci-blue group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-sm text-slate-600">
                ดูตัวอย่างงานสกรีนคุณภาพจากโปรเจกต์ที่ผ่านมา
              </p>
            </Link>

            <Link 
              href="/dtf-vs-dtg"
              className="group p-8 bg-white rounded-2xl border-2 border-slate-100 hover:border-ci-blue hover:shadow-lg transition-all relative"
            >
              <div className="w-12 h-12 rounded-xl bg-ci-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6 text-ci-blue" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-slate-900 group-hover:text-ci-blue transition-colors flex items-center gap-2">
                เปรียบเทียบเทคนิค
                <ChevronRight className="w-5 h-5 text-ci-blue group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-sm text-slate-600">
                เรียนรู้ความแตกต่างระหว่าง DTF, DTG และ Silk Screen
              </p>
            </Link>

            <Link 
              href="/contact"
              className="group p-8 bg-white rounded-2xl border-2 border-slate-100 hover:border-ci-blue hover:shadow-lg transition-all relative"
            >
              <div className="w-12 h-12 rounded-xl bg-ci-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ExternalLink className="w-6 h-6 text-ci-blue" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-slate-900 group-hover:text-ci-blue transition-colors flex items-center gap-2">
                ติดต่อเรา
                <ChevronRight className="w-5 h-5 text-ci-blue group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-sm text-slate-600">
                พร้อมที่จะสั่งทำ? พูดคุยกับทีมงานของเราได้เลย
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        title="คำถามที่พบบ่อยเกี่ยวกับราคา"
        items={[
          {
            question: "ราคาที่คำนวณได้เป็นราคาสุดท้ายหรือไม่?",
            answer: "ราคาที่แสดงเป็นราคาประเมินเบื้องต้น อาจมีการปรับเปลี่ยนขึ้นอยู่กับรายละเอียดของงานจริง เช่น ความซับซ้อนของลาย จำนวนสี หรือขนาดพิเศษ แนะนำให้ติดต่อเราเพื่อขอใบเสนอราคาที่แม่นยำ"
          },
          {
            question: "มีค่าใช้จ่ายอื่นๆ นอกเหนือจากราคาที่คำนวณได้หรือไม่?",
            answer: "ราคาที่คำนวณได้ยังไม่รวมภาษีมูลค่าเพิ่ม (VAT) 7% และค่าจัดส่ง ซึ่งขึ้นอยู่กับพื้นที่และน้ำหนักของสินค้า สามารถรับสินค้าด้วยตนเองที่โรงงานได้ฟรี"
          },
          {
            question: "สั่งจำนวนมากได้ส่วนลดเพิ่มไหม?",
            answer: "ได้ครับ! ยิ่งสั่งจำนวนมากยิ่งได้ราคาดี ระบบคำนวณได้คำนึงถึงส่วนลดตามจำนวนแล้ว แต่หากสั่ง 500 ตัวขึ้นไป เราสามารถให้ราคาพิเศษเพิ่มได้ ติดต่อเราเพื่อสอบถามเพิ่มเติม"
          },
          {
            question: "เลือกเทคนิคไหนดีสำหรับงานของฉัน?",
            answer: "ถ้าสั่งน้อย (1-10 ตัว) แนะนำ DTF หรือ DTG / ถ้าสั่งเยอะ (30+ ตัว) แนะนำ Silk Screen ประหยัดกว่า / DTF เหมาะกับงานสีสดคมชัด / DTG เหมาะกับลายละเอียด / Silk Screen เหมาะกับจำนวนมากที่มีสี 1-10 สี"
          },
          {
            question: "ใช้เวลาผลิตนานแค่ไหน?",
            answer: "DTG: 7-14 วันทำการ / DTF: 2-3 วันทำการ (งานด่วน 1 วัน) / Silk Screen: 7-14 วันทำการ (ต้องทำฟิล์มก่อน) / ขึ้นอยู่กับจำนวนและความซับซ้อนของงาน หากต้องการงานด่วนสามารถขอบริการ Rush Order ได้"
          },
          {
            question: "ต้องสั่งขั้นต่ำกี่ตัว?",
            answer: "DTF และ DTG: ไม่มีขั้นต่ำ สั่ง 1 ตัวก็ได้ / Silk Screen: ขั้นต่ำ 30 ตัว (เพราะต้องทำฟิล์มก่อน) / หากสั่งจำนวนมาก (30+ ตัว) จะได้ส่วนลดที่ดีกว่า ระบบจะคำนวณส่วนลดให้อัตโนมัติ"
          }
        ]}
      />

      {/* Final CTA */}
      <FinalCTASection />
    </PageLayout>
  );
}
