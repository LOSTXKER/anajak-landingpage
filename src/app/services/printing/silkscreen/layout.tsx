import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'สกรีนเสื้อ Silk Screen (ไซล์สกรีน) คุณภาพสูง ราคาถูก | อาณาจักร์ ที-เชิ้ด',
  description: 'รับสกรีนเสื้อด้วยเทคนิค Silk Screen (Screen Printing) สีทึบแน่น ทนทาน เหมาะสำหรับสั่งจำนวนมาก ราคาถูกสุด ขั้นต่ำ 100 ตัว คุณภาพเกรดโรงงาน',
  keywords: ['Silk Screen', 'Screen Printing', 'ไซล์สกรีน', 'สกรีนจำนวนมาก', 'ราคาถูก', 'ทนทาน'],
  openGraph: {
    title: 'สกรีนเสื้อ Silk Screen คุณภาพสูง ราคาถูก | อาณาจักร์ ที-เชิ้ด',
    description: 'รับสกรีนเสื้อด้วยเทคนิค Silk Screen สีทึบแน่น ทนทาน เหมาะสำหรับสั่งจำนวนมาก',
  },
};

export default function SilkscreenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
