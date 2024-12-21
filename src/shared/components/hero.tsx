import HeroBg from "@/shared/components/hero-bg";
import React, { ReactNode } from "react";

interface HeroSectionProps {
  children?: ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({ children }) => {
  return (
    <section className="relative w-full">
      <HeroBg>{children}</HeroBg>
    </section>
  );
};

export default HeroSection;
