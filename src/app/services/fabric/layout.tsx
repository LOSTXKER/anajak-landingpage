import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'เนื้อผ้าหลากหลาย Cotton, Poly, Pique คุณภาพสูง | อาณาจักร์ ที-เชิ้ด',
  description: 'มีเนื้อผ้าให้เลือกมากมาย Cotton Comb, Cotton Semi, Dry-Tech (Polyester), Polo Pique, Fleece คุณภาพพรีเมียม สี ไซส์ ครบถ้วน พร้อมส่ง',
  keywords: ['เนื้อผ้า', 'Cotton', 'Polyester', 'Pique', 'Fleece', 'ผ้าเสื้อ', 'คุณภาพสูง'],
  openGraph: {
    title: 'เนื้อผ้าหลากหลาย Cotton, Poly, Pique คุณภาพสูง | อาณาจักร์ ที-เชิ้ด',
    description: 'มีเนื้อผ้าให้เลือกมากมาย Cotton, Polyester, Pique, Fleece คุณภาพพรีเมียม พร้อมส่ง',
  },
};

export default function FabricLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
