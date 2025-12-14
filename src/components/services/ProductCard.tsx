'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Shirt, Layers, Award, Weight, Ruler, Target, Palette } from 'lucide-react';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  showQuickAdd?: boolean;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden flex-shrink-0">
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
        {/* Minimum Order Badge */}
        <div className="absolute top-3 left-3">
          {product.hasMinimumOrder === false ? (
            <div className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg">
              ไม่มีขั้นต่ำ
            </div>
          ) : (
            <div className="px-3 py-1 bg-slate-700 text-white text-xs font-semibold rounded-full shadow-lg">
              มีขั้นต่ำ 10
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
      <div className="p-4 flex flex-col flex-grow">
        {/* Category & Title */}
        <div className="mb-3">
          <span className="inline-block px-2.5 py-0.5 bg-ci-blue/10 text-ci-blue text-xs font-semibold rounded-full mb-2">
            {product.category === 'tshirt' ? 'เสื้อเปล่า' : 'เนื้อผ้า'}
          </span>
          <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-ci-blue transition-colors line-clamp-2">
            {product.name}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 min-h-[2rem]">
            {product.description}
          </p>
        </div>

        {/* Specifications Box */}
        <div className="bg-slate-50/70 rounded-lg p-3 mb-3 space-y-2 border border-slate-100 min-h-[156px]">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-600 flex items-center gap-1.5">
              <Award className="w-3 h-3 text-ci-blue/70" />
              <span>เกรดผ้า</span>
            </span>
            <span className="text-xs font-bold text-ci-blue">{product.grade || '-'}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-600 flex items-center gap-1.5">
              <Shirt className="w-3 h-3 text-ci-blue/70" />
              <span>ประเภทเสื้อผ้า</span>
            </span>
            <span className="text-xs font-bold text-slate-900">{product.material || '-'}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-600 flex items-center gap-1.5">
              <Weight className="w-3 h-3 text-ci-blue/70" />
              <span>เบอร์ผ้า</span>
            </span>
            <span className="text-xs font-bold text-slate-900">{product.weight || '-'}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-600 flex items-center gap-1.5">
              <Weight className="w-3 h-3 text-ci-blue/70" />
              <span>ความหนา</span>
            </span>
            <span className="text-xs font-bold text-slate-900">-</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-600 flex items-center gap-1.5">
              <Ruler className="w-3 h-3 text-ci-blue/70" />
              <span>ไซส์</span>
            </span>
            <span className="text-xs font-bold text-slate-900">
              {product.sizes && product.sizes.length > 0 ? product.sizes.join(', ') : '-'}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-600 flex items-center gap-1.5">
              <Target className="w-3 h-3 text-ci-blue/70" />
              <span>เหมาะสำหรับ</span>
            </span>
            <span className="text-xs font-bold text-slate-900">-</span>
          </div>
        </div>

        {/* Colors */}
        {product.colors && product.colors.length > 0 && (
          <div className="mb-3">
            <div className="flex items-center gap-1.5 mb-2">
              <Palette className="w-3 h-3 text-slate-400" />
              <p className="text-xs font-semibold text-slate-700">สีที่เลือกได้</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {product.colors.slice(0, 6).map((color, idx) => (
                <div
                  key={idx}
                  className="w-7 h-7 rounded-full bg-slate-300 border-2 border-slate-300 hover:border-ci-blue hover:scale-105 transition-all cursor-pointer"
                  title={color}
                />
              ))}
            </div>
          </div>
        )}

        {/* Price & Action */}
        <div className="pt-4 mt-auto border-t border-slate-200 flex items-end justify-between gap-4">
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
