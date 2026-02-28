import type { Metadata } from 'next';
import { getImagesBySections } from '@/lib/images';
import FabricPageClient from './FabricPageClient';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'เนื้อผ้า | Anajak T-Shirt',
  description: 'เนื้อผ้าหลากหลายสำหรับสกรีนเสื้อ',
};

export default async function FabricPage() {
  const images = await getImagesBySections(['fabric-page']);
  return <FabricPageClient images={images} />;
}
