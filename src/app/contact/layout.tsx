import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ติดต่อเรา - โรงงานสกรีนเสื้อ DTF/DTG | อาณาจักร์ ที-เชิ้ด',
  description: 'ติดต่อสอบถาม ขอใบเสนอราคา โรงงานสกรีนเสื้ออาณาจักร์ โทร 064-942-6651, LINE: @anajak, อีเมล: anajak_t-shirt@hotmail.com เปิดทำการจันทร์-เสาร์ 10:00-18:00',
  keywords: ['ติดต่อเรา', 'โรงงานสกรีนเสื้อ', 'สอบถาม', 'ใบเสนอราคา', 'เบอร์โทร', 'LINE', 'ที่อยู่'],
  openGraph: {
    title: 'ติดต่อเรา - โรงงานสกรีนเสื้อ DTF/DTG | อาณาจักร์ ที-เชิ้ด',
    description: 'ติดต่อสอบถาม ขอใบเสนอราคา โทร 064-942-6651, LINE: @anajak เปิดทำการจันทร์-เสาร์ 10:00-18:00',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
