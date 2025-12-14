import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'บริการทำแพทเทิร์นเสื้อผ้า แบบมืออาชีพ | อาณาจักร์ ที-เชิ้ด',
  description: 'รับทำแพทเทิร์นเสื้อผ้าทุกประเภท แพทเทิร์นเสื้อยืด เสื้อโปโล Hoodie ตัดเย็บได้พอดีตัว เกรดโรงงาน พร้อมปรับแก้ตามต้องการ ส่งไฟล์แพทเทิร์นให้',
  keywords: ['แพทเทิร์น', 'ทำแพทเทิร์น', 'แพทเทิร์นเสื้อผ้า', 'ตัดเย็บ', 'โรงงาน'],
  openGraph: {
    title: 'บริการทำแพทเทิร์นเสื้อผ้า แบบมืออาชีพ | อาณาจักร์ ที-เชิ้ด',
    description: 'รับทำแพทเทิร์นเสื้อผ้าทุกประเภท เกรดโรงงาน พร้อมปรับแก้ตามต้องการ',
  },
};

export default function PatternLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
