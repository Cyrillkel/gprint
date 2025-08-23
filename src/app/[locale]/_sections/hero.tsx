"use client";
import Button from "@/shared/components/button";
import Image from "next/image";
import React, { ReactNode, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
// import { motion } from "framer-motion"; // Temporarily disabled due to React 19 compatibility

interface HeroSectionProps {
  children?: ReactNode;
}

// Particle component for background effects
const Particle = ({ delay }: { delay: number }) => (
  <div
    className="particle"
    style={{
      animationDelay: `${delay}s`,
    }}
  />
);

export const HeroSection: React.FC<HeroSectionProps> = ({ children }) => {
  const t = useTranslations();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden holo-bg">
      {/* Background Particles */}

      {/* Floating Holographic Orbs - Background elements */}
      <div className="holo-orb absolute top-20 left-10 w-32 h-32 opacity-60 animate-float -z-10" />

      <div className="holo-orb absolute top-40 right-20 w-24 h-24 opacity-40 animate-float-delayed -z-10" />

      <div className="holo-orb absolute bottom-40 left-20 w-20 h-20 opacity-50 animate-float-slow -z-10" />

      <div className="absolute inset-0 z-10 flex items-center justify-center h-full pt-8 ">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center min-h-screen gap-12">
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2">
            <h1 className="holo-text-primary text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-glow leading-tight relative z-10">
              {t("sections.hero.title")}
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed max-w-lg">
              {t("sections.hero.description")}
            </p>

            <div className="relative">
              <Button className="holo-button text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300">
                {t("sections.hero.button")}
              </Button>
            </div>

            {/* Feature highlights */}
            <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
              <div className="glass-card px-4 py-2 text-sm text-cyan-300">
                ✨ Premium Quality
              </div>
              <div className="glass-card px-4 py-2 text-sm text-magenta-300">
                🚀 Fast Delivery
              </div>
              <div className="glass-card px-4 py-2 text-sm text-yellow-300">
                💎 Custom Design
              </div>
            </div>
          </div>

          {/* Right Content - Holographic Image */}
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative w-full max-w-lg">
              {/* Holographic border effect */}
              <div className="holo-border p-2 relative z-10">
                <div
                  className="relative w-full h-full"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Image
                    className="object-contain w-full h-full rounded-2xl animate-image-float"
                    src="/img/hero-bg.png"
                    alt="Holographic Stickers"
                    width={600}
                    height={600}
                    quality={95}
                    priority
                  />

                  {/* Removed all gradient overlays to eliminate flipping effect */}
                </div>
              </div>
              {/* Floating elements around the image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full glow-cyan animate-pulse" />

              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-magenta-400 to-purple-500 rounded-full glow-magenta animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      {children}
    </section>
  );
};

export default HeroSection;
