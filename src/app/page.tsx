import {
  AboutSection,
  HeroSection,
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
      <div className="pt-24">
        <ProductionSection />
        <AboutSection />
        <PricingSection />
        <BenefitsSection />
        <StagesSection />
        <ContactSection />
      </div>
    </main>
  );
}



