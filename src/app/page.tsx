import PageLayout from '@/components/PageLayout';
import {
  HeroSection,
  ClientLogosSection,
  ValuePropositionStrip,
  UseCaseSection,
  ServicesSection,
  TechnologySection,
  WhyChooseUsSection,
  PortfolioSection,
  TestimonialsSection,
  FAQSection,
  ContactSection,
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

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Final CTA Section */}
      <FinalCTASection />
    </PageLayout>
  );
}
