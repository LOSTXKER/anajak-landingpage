import { getImagesBySections } from '@/lib/images';
import DTFvsDTGClient from './DTFvsDTGClient';

export const revalidate = 60;

export default async function DTFvsDTGPage() {
  const images = await getImagesBySections(['compare-dtf-vs-dtg']);
  return <DTFvsDTGClient images={images} />;
}
