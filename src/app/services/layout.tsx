import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'บริการของเรา - สกรีนเสื้อ DTF, DTG, Silk Screen ครบวงจร | อาณาจักร์ ที-เชิ้ด',
  description: 'บริการครบวงจร สกรีนเสื้อ DTF, DTG, Silk Screen ทำแพทเทิร์น เนื้อผ้าหลากหลาย ไม่มีขั้นต่ำ คุณภาพสูง ราคาโรงงาน ประสบการณ์ 5+ ปี',
  keywords: ['บริการ', 'สกรีนเสื้อ', 'DTF', 'DTG', 'Silk Screen', 'แพทเทิร์น', 'เนื้อผ้า', 'โรงงาน'],
  openGraph: {
    title: 'บริการของเรา - สกรีนเสื้อ DTF, DTG, Silk Screen ครบวงจร | อาณาจักร์ ที-เชิ้ด',
    description: 'บริการครบวงจร สกรีนเสื้อ DTF, DTG, Silk Screen ไม่มีขั้นต่ำ คุณภาพสูง ราคาโรงงาน',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
