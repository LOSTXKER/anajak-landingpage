import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'เปรียบเทียบเนื้อผ้า Cotton, Poly, Pique - เลือกผ้าที่เหมาะสม | อาณาจักร์ ที-เชิ้ด',
  description: 'เปรียบเทียบเนื้อผ้าเสื้อแบบครบถ้วน Cotton Comb, Cotton Semi, Dry-Tech (Polyester), Polo Pique, Fleece พร้อมข้อดี ข้อเสีย ราคา และการใช้งานที่เหมาะสม',
  keywords: ['เปรียบเทียบเนื้อผ้า', 'Cotton', 'Polyester', 'Pique', 'Fleece', 'เลือกผ้า', 'ข้อดี ข้อเสีย'],
  openGraph: {
    title: 'เปรียบเทียบเนื้อผ้า Cotton, Poly, Pique | อาณาจักร์ ที-เชิ้ด',
    description: 'เปรียบเทียบเนื้อผ้าเสื้อแบบครบถ้วน พร้อมข้อดี ข้อเสีย และราคา เลือกผ้าที่เหมาะสมกับงานของคุณ',
  },
};

export default function CompareFabricsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
