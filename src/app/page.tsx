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

export default function HomePage() {
  return (
    <PageLayout navMode="hash">
      {/* Hero Section */}
      <HeroSection />

      {/* Client Logos Marquee */}
      <ClientLogosSection />

      {/* Value Proposition Strip */}
      <ValuePropositionStrip />

      {/* Use Cases - ให้ลูกค้าเห็นว่าเราทำได้ทุกแบบ */}
      <UseCaseSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Technology Section */}
      <TechnologySection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Calculator CTA Section */}
      <CalculatorCTASection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA Section */}
      <FinalCTASection />
    </PageLayout>
  );
}

