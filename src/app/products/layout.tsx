import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'สินค้าเสื้อยืด เสื้อโปโล Hoodie คุณภาพสูง | อาณาจักร์ ที-เชิ้ด',
  description: 'เสื้อผ้าคุณภาพพรีเมียม Cotton Comb, Cotton Semi, Dry-Tech, Polo Pique, Hoodie พร้อมสกรีนลาย ราคาโรงงาน เนื้อผ้าหลากหลาย สีครบ ไซส์ครบ',
  keywords: ['สินค้า', 'เสื้อยืด', 'โปโล', 'Hoodie', 'Cotton', 'Dry-Tech', 'เนื้อผ้า', 'ราคาโรงงาน'],
  openGraph: {
    title: 'สินค้าเสื้อยืด เสื้อโปโล Hoodie คุณภาพสูง | อาณาจักร์ ที-เชิ้ด',
    description: 'เสื้อผ้าคุณภาพพรีเมียม Cotton, Dry-Tech, Polo, Hoodie พร้อมสกรีนลาย ราคาโรงงาน',
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
