import type { Metadata } from 'next';
import { getImagesBySections } from '@/lib/images';
import CalculatorPageClient from './CalculatorPageClient';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'คำนวณราคา | Anajak T-Shirt',
  description: 'คำนวณราคาสกรีนเสื้อออนไลน์',
};

export default async function CalculatorPage() {
  const images = await getImagesBySections(['calculator']);
  return <CalculatorPageClient images={images} />;
}
