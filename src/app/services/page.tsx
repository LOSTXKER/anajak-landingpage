import type { Metadata } from 'next';
import { getImagesBySections } from '@/lib/images';
import ServicesPageClient from './ServicesPageClient';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'บริการ | Anajak T-Shirt',
  description: 'บริการสกรีนเสื้อครบวงจร DTG DTF Silk Screen',
};

export default async function ServicesPage() {
  const images = await getImagesBySections(['services-main']);
  return <ServicesPageClient images={images} />;
}
