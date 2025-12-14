import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'บริการสกรีนเสื้อ DTF, DTG, Silk Screen ไม่มีขั้นต่ำ | อาณาจักร์ ที-เชิ้ด',
  description: 'รับสกรีนเสื้อครบวงจร เทคนิค DTF (สีสดคมชัด), DTG (นุ่มละเอียด), Silk Screen (ทนทาน ราคาถูก) ไม่มีขั้นต่ำ ส่งไว คุณภาพเกรดโรงงาน',
  keywords: ['สกรีนเสื้อ', 'DTF', 'DTG', 'Silk Screen', 'ไม่มีขั้นต่ำ', 'โรงงาน', 'คุณภาพสูง'],
  openGraph: {
    title: 'บริการสกรีนเสื้อ DTF, DTG, Silk Screen ไม่มีขั้นต่ำ | อาณาจักร์ ที-เชิ้ด',
    description: 'รับสกรีนเสื้อครบวงจร เทคนิค DTF, DTG, Silk Screen ไม่มีขั้นต่ำ คุณภาพเกรดโรงงาน',
  },
};

export default function PrintingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
