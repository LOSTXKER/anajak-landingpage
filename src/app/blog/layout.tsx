import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'บทความและคู่มือ การสกรีนเสื้อ DTF, DTG | อาณาจักร์ ที-เชิ้ด',
  description: 'เรียนรู้เทคนิคการสกรีนเสื้อ เลือกเนื้อผ้า เปรียบเทียบวิธีการพิมพ์ต่างๆ พร้อมเคล็ดลับจากผู้เชี่ยวชาญ อัพเดทเทรนด์และเทคโนโลยีใหม่ล่าสุด',
  keywords: ['บทความ', 'คู่มือ', 'สกรีนเสื้อ', 'DTF', 'DTG', 'เทคนิค', 'เคล็ดลับ', 'ความรู้'],
  openGraph: {
    title: 'บทความและคู่มือ การสกรีนเสื้อ | อาณาจักร์ ที-เชิ้ด',
    description: 'เรียนรู้เทคนิคการสกรีนเสื้อ เปรียบเทียบวิธีการพิมพ์ต่างๆ พร้อมเคล็ดลับจากผู้เชี่ยวชาญ',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
