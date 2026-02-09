import PageLayout from '@/components/PageLayout';
import {
  HeroSection,
  ClientLogosSection,
  ValuePropositionStrip,
  UseCaseSection,
  ServicesSection,
  TechnologySection,
  WhyChooseUsSection,
  CalculatorCTASection,
  PortfolioSection,
  TestimonialsSection,
  FAQSection,
  FinalCTASection,
} from '@/components/sections';
import { getImagesBySections } from '@/lib/images';

export default async function HomePage() {
  // Fetch all homepage images from Supabase in one query
  const allImages = await getImagesBySections([
    'hero',
    'clients',
    'usecases',
    'services',
    'technology',
    'portfolio',
  ]);

  return (
    <PageLayout navMode="hash">
      {/* Hero Section */}
      <HeroSection images={allImages['hero']} />

      {/* Client Logos Marquee */}
      <ClientLogosSection images={allImages['clients']} />

      {/* Value Proposition Strip */}
      <ValuePropositionStrip />

      {/* Use Cases - ให้ลูกค้าเห็นว่าเราทำได้ทุกแบบ */}
      <UseCaseSection images={allImages['usecases']} />

      {/* Services Section */}
      <ServicesSection images={allImages['services']} />

      {/* Technology Section */}
      <TechnologySection images={allImages['technology']} />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Calculator CTA Section */}
      <CalculatorCTASection />

      {/* Portfolio Section */}
      <PortfolioSection images={allImages['portfolio']} />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA Section */}
      <FinalCTASection />
    </PageLayout>
  );
}
