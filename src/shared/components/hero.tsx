import Image from "next/image";
// import HeroBg from "@/shared/components/hero-bg";
import React, { ReactNode } from "react";

interface HeroSectionProps {
  children?: ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({ children }) => {
  return (
    <section className="relative w-full">
      <div className="relative z-10 flex items-center justify-center h-full">
        {children}
      </div>
      <div className="w-full">
        <Image
          className="absolute inset-0 object-cover w-full h-full opacity-70"
          src="/hero-bg.jpg"
          alt="background"
          width={1920}
          height={1080}
          quality={95}
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
