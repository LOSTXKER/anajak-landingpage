'use client';

import { Package, CheckCircle2 } from 'lucide-react';

interface RecentOrder {
  customer: string;
  quantity: string;
  type: string;
  time: string;
}

const recentOrders: RecentOrder[] = [
  { customer: 'บริษัท ABC', quantity: '500 ตัว', type: 'เสื้อโปโล', time: '2 นาทีที่แล้ว' },
  { customer: 'ร้าน XYZ', quantity: '200 ตัว', type: 'เสื้อยืด', time: '5 นาทีที่แล้ว' },
  { customer: 'โรงเรียน DEF', quantity: '300 ตัว', type: 'เสื้อรุ่น', time: '10 นาทีที่แล้ว' },
  { customer: 'คุณสมชาย', quantity: '50 ตัว', type: 'Hoodie', time: '15 นาทีที่แล้ว' },
  { customer: 'ห้าง GHI', quantity: '1,000 ตัว', type: 'เสื้อพนักงาน', time: '20 นาทีที่แล้ว' },
];

interface ProductionTickerProps {
  className?: string;
}

export default function ProductionTicker({ className = '' }: ProductionTickerProps) {
  return (
    <div className={`bg-green-50 border-b border-green-100 py-2 overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 shrink-0">
            <div className="relative">
              <Package className="w-4 h-4 text-green-600 animate-bounce-subtle" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
            </div>
            <span className="font-bold text-green-700 text-sm">กำลังผลิต:</span>
          </div>
          
          <div className="flex-1 overflow-hidden">
            <div className="animate-scroll-left flex gap-8 whitespace-nowrap">
              {/* Duplicate for seamless loop */}
              {[...recentOrders, ...recentOrders].map((order, index) => (
                <div 
                  key={index} 
                  className="inline-flex items-center gap-2 text-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                  <span className="text-slate-700">
                    <span className="font-medium">{order.customer}</span>
                    {' '}สั่งผลิต{' '}
                    <span className="font-bold text-ci-blue">{order.quantity}</span>
                    {' '}{order.type}
                    {' '}
                    <span className="text-slate-500">• {order.time}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

