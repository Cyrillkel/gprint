"use client";

import Button from "@/shared/components/button";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const HeroSection = () => {
  const t = useTranslations("sections.hero");

  return (
    <section className="relative w-full h-screen overflow-hidden holo-bg flex items-center ">
      {/* Background Particles */}

      {/* Floating Holographic Orbs - Background elements */}
      {/* <div className="holo-orb absolute top-12 sm:top-20 left-4 sm:left-10 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 opacity-60 animate-float -z-10 pointer-events-none" />

      <div className="holo-orb absolute top-24 sm:top-40 right-4 sm:right-20 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 opacity-40 animate-float-delayed -z-10 pointer-events-none" />

      <div className="holo-orb absolute bottom-24 sm:bottom-40 left-4 sm:left-20 w-10 sm:w-16 lg:w-20 h-10 sm:h-16 lg:h-20 opacity-50 animate-float-slow -z-10 pointer-events-none" /> */}

      <div className="w-full container mx-auto  px-4 flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16 xl:py-7">
        {/* Left Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-[60%]">
          <h1 className="holo-text-primary text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 text-glow leading-tight relative z-10">
            {t("title")}
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 lg:mb-8 text-gray-300 leading-relaxed max-w-lg">
            {t("description")}
          </p>

          <div className="relative">
            <Button className="holo-button text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 transform hover:scale-105 transition-all duration-300">
              {t("button")}
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 sm:mt-6 lg:mt-8 justify-center lg:justify-start">
            <div className="glass-card px-3 sm:px-4 py-2 text-xs sm:text-sm text-cyan-300">
              ✨ Premium Quality
            </div>
            <div className="glass-card px-3 sm:px-4 py-2 text-xs sm:text-sm text-magenta-300">
              🚀 Fast Delivery
            </div>
            <div className="glass-card px-3 sm:px-4 py-2 text-xs sm:text-sm text-yellow-300">
              💎 Custom Design
            </div>
          </div>
        </div>

        {/* Right Content - Holographic Image */}
        <div className="lg:w-[40%] flex justify-end relative mt-6 lg:mt-0">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            {/* Holographic border effect */}
            <div className="holo-border p-2 relative z-10">
              <div
                className="relative w-full h-full"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <Image
                  className="object-contain w-full h-auto rounded-2xl animate-image-float"
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
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full glow-cyan animate-pulse" />

            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-r from-magenta-400 to-purple-500 rounded-full glow-magenta animate-pulse" />
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
    </section>
  );
};
