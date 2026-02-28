import { getImagesBySections } from '@/lib/images';
import BlogArticleClient from './BlogArticleClient';

export const revalidate = 60;

export default async function BlogArticlePage({ params }: { params: { slug: string } }) {
  const images = await getImagesBySections(['blog']);
  return <BlogArticleClient slug={params.slug} images={images} />;
}
