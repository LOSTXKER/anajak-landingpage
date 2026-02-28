import type { Metadata } from 'next';
import { getImagesBySections } from '@/lib/images';
import SilkscreenPageClient from './SilkscreenPageClient';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Silk Screen | Anajak T-Shirt',
  description: 'บริการสกรีนเสื้อ Silk Screen คลาสสิค ราคาประหยัด เหมาะกับงานจำนวนมาก',
};

export default async function SilkScreenPage() {
  const images = await getImagesBySections(['printing-silkscreen', 'gallery-silk', 'customers']);
  return <SilkscreenPageClient images={images} />;
}
