import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study ผลงานสกรีนเสื้อแบรนด์ดัง DTF, DTG | อาณาจักร์ ที-เชิ้ด',
  description: 'ชมผลงานสกรีนเสื้อคุณภาพจากแบรนด์ชั้นนำ ตัวอย่างงาน DTF, DTG และ Silk Screen กว่า 1,000+ โปรเจกต์ รีวิวจากลูกค้าจริง เรื่องราวความสำเร็จ',
  keywords: ['ผลงาน', 'Case Study', 'ตัวอย่างงาน', 'สกรีนเสื้อ', 'DTF', 'DTG', 'รีวิว', 'แบรนด์'],
  openGraph: {
    title: 'Case Study ผลงานสกรีนเสื้อแบรนด์ดัง | อาณาจักร์ ที-เชิ้ด',
    description: 'ชมผลงานสกรีนเสื้อคุณภาพจากแบรนด์ชั้นนำ กว่า 1,000+ โปรเจกต์ รีวิวจากลูกค้าจริง',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
