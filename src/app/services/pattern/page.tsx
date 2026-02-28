import type { Metadata } from 'next';
import { getImagesBySections } from '@/lib/images';
import PatternPageClient from './PatternPageClient';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'ทำแพทเทิร์น | Anajak T-Shirt',
  description: 'บริการทำแพทเทิร์นและตัดเย็บเสื้อ',
};

export default async function PatternPage() {
  const images = await getImagesBySections(['pattern-page']);
  return <PatternPageClient images={images} />;
}
