import type { Metadata } from 'next';
import { getImagesBySections } from '@/lib/images';
import ProductsPageClient from './ProductsPageClient';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'สินค้า | Anajak T-Shirt',
  description: 'เสื้อเปล่าพร้อมสกรีน หลากหลายแบบ',
};

export default async function ProductsPage() {
  const images = await getImagesBySections(['products']);
  return <ProductsPageClient images={images} />;
}
