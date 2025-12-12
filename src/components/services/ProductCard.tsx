'use client';

import { useState } from 'react';
import { Star, Heart, ShoppingCart, Shirt } from 'lucide-react';
import FallbackImage from './FallbackImage';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  showQuickAdd?: boolean;
}

export default function ProductCard({ product, showQuickAdd = true }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-72 bg-slate-100 overflow-hidden">
        <FallbackImage 
          src={product.image} 
          alt={product.name}
          fallbackIcon={Shirt}
          fallbackClassName="bg-gradient-to-br from-slate-100 to-slate-200"
          className="transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.badge && (
            <span className="px-3 py-1 bg-ci-yellow text-slate-900 text-xs font-bold rounded-full shadow">
              {product.badge}
            </span>
          )}
          <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow">
            -{discount}%
          </span>
        </div>

        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-slate-400'}`} />
        </button>

        {/* Quick Add */}
        {showQuickAdd && (
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="w-full px-4 py-2.5 bg-white text-slate-900 font-bold rounded-xl hover:bg-ci-yellow transition-colors flex items-center justify-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              เพิ่มลงตะกร้า
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-medium text-slate-900">{product.rating}</span>
          <span className="text-sm text-slate-400">({product.reviews})</span>
        </div>

        {/* Name */}
        <h3 className="font-bold text-slate-900 mb-1 group-hover:text-ci-blue transition-colors line-clamp-2">
          {product.name}
        </h3>

        {/* Weight */}
        <p className="text-xs text-slate-500 mb-3">{product.weight}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-3">
          {product.features.slice(0, 2).map((feature, idx) => (
            <span key={idx} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded">
              {feature}
            </span>
          ))}
        </div>

        {/* Colors */}
        <div className="flex items-center gap-1.5 mb-3">
          {product.colors.slice(0, 6).map((color, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedColor(idx)}
              className={`w-6 h-6 rounded-full border-2 transition-all ${
                selectedColor === idx
                  ? 'border-ci-blue scale-110 shadow'
                  : 'border-slate-200 hover:border-slate-400'
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
          {product.colors.length > 6 && (
            <span className="text-xs text-slate-500">+{product.colors.length - 6}</span>
          )}
        </div>

        {/* Sizes */}
        <div className="flex items-center gap-1 mb-4">
          {product.sizes.map((size) => (
            <span key={size} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded font-medium">
              {size}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-ci-blue">฿{product.price}</span>
            <span className="text-sm text-slate-400 line-through">฿{product.originalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
