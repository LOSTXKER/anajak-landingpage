import type { Metadata } from 'next';
import { getImagesBySections } from '@/lib/images';
import AboutPageClient from './AboutPageClient';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'เกี่ยวกับเรา | Anajak T-Shirt',
  description: 'เรื่องราวของ Anajak T-Shirt โรงงานสกรีนเสื้อเชียงใหม่',
};

export default async function AboutPage() {
  const images = await getImagesBySections(['about']);
  return <AboutPageClient images={images} />;
}
