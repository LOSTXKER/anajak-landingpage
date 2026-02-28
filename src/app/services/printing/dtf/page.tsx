import type { Metadata } from 'next';
import { getImagesBySections } from '@/lib/images';
import DTFPageClient from './DTFPageClient';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'DTF Printing | Anajak T-Shirt',
  description: 'บริการสกรีนเสื้อ DTF Direct to Film ทนทาน ซักไม่ลอก ใช้ได้กับผ้าทุกชนิด',
};

export default async function DTFPage() {
  const images = await getImagesBySections(['printing-dtf', 'gallery-dtf', 'customers']);
  return <DTFPageClient images={images} />;
}
