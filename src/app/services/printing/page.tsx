import type { Metadata } from 'next';
import { getImagesBySections } from '@/lib/images';
import PrintingPageClient from './PrintingPageClient';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'บริการสกรีน | Anajak T-Shirt',
  description: 'บริการสกรีนเสื้อ DTG DTF Silk Screen',
};

export default async function PrintingPage() {
  const images = await getImagesBySections(['printing-main']);
  return <PrintingPageClient images={images} />;
}
