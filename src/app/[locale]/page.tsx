import {
  AboutSection,
  HeroSection,
  OurClients,
  PricingSection,
  StagesSection,
  BenefitsSection,
  ProductionSection,
  ContactSection,
} from "./_sections";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <ProductionSection />
      <OurClients />
      <AboutSection />
      <PricingSection />
      <BenefitsSection />
      <StagesSection />
      <ContactSection />
    </main>
  );
}
