import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'คำนวณราคาเสื้อพร้อมสกรีน DTF, DTG ออนไลน์ | อาณาจักร์ ที-เชิ้ด',
  description: 'ประเมินราคาเสื้อยืดพร้อมสกรีนลายได้ทันที! คำนวณราคาออนไลน์ง่ายๆ ไม่มีขั้นต่ำ รับส่วนลดเมื่อสั่งจำนวนมาก เลือกได้ทั้ง DTF และ DTG ราคาชัดเจนโปร่งใส',
  keywords: ['คำนวณราคาเสื้อ', 'สกรีนเสื้อ', 'DTF', 'DTG', 'ราคาเสื้อยืด', 'โรงงานสกรีน', 'ไม่มีขั้นต่ำ', 'ประเมินราคา'],
  openGraph: {
    title: 'คำนวณราคาเสื้อพร้อมสกรีน DTF, DTG ออนไลน์ | อาณาจักร์ ที-เชิ้ด',
    description: 'ประเมินราคาเสื้อยืดพร้อมสกรีนลายได้ทันที! คำนวณราคาออนไลน์ง่ายๆ ไม่มีขั้นต่ำ รับส่วนลดเมื่อสั่งจำนวนมาก',
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
