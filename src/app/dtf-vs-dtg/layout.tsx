import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'เปรียบเทียบเทคนิคสกรีน: DTF vs DTG vs Silk Screen - เลือกอันไหนดี? | อาณาจักร์ ที-เชิ้ด',
  description: 'เปรียบเทียบเทคนิคสกรีนเสื้อแบบละเอียด DTF, DTG, Silk Screen พร้อมข้อดี ข้อเสีย ราคา ความทนทาน และการใช้งานที่เหมาะสม จากผู้เชี่ยวชาญ 5+ ปี',
  keywords: ['DTF', 'DTG', 'Silk Screen', 'เปรียบเทียบ', 'เทคนิคสกรีน', 'ข้อดี ข้อเสีย', 'เลือกเทคนิค'],
  openGraph: {
    title: 'เปรียบเทียบเทคนิคสกรีน: DTF vs DTG vs Silk Screen | อาณาจักร์ ที-เชิ้ด',
    description: 'เปรียบเทียบเทคนิคสกรีนเสื้อแบบละเอียด พร้อมข้อดี ข้อเสีย ราคา และการใช้งานที่เหมาะสม',
  },
};

export default function DtfVsDtgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
