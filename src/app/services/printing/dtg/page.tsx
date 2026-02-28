import type { Metadata } from 'next';
import { getImagesBySections } from '@/lib/images';
import DTGPageClient from './DTGPageClient';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'DTG Printing | Anajak T-Shirt',
  description: 'บริการสกรีนเสื้อ DTG Direct to Garment ความละเอียดสูง สีสันสดใส',
};

export default async function DTGPage() {
  const images = await getImagesBySections(['printing-dtg', 'gallery-dtg', 'customers']);
  return <DTGPageClient images={images} />;
}
