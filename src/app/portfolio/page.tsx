import type { Metadata } from 'next';
import { getImagesBySections } from '@/lib/images';
import PortfolioPageClient from './PortfolioPageClient';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'ผลงาน | Anajak T-Shirt',
  description: 'ผลงานสกรีนเสื้อคุณภาพจาก Anajak T-Shirt',
};

export default async function PortfolioPage() {
  const images = await getImagesBySections(['portfolio-cases']);
  return <PortfolioPageClient images={images} />;
}
