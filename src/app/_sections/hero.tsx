"use client";

import Button from "@/shared/components/button";
import Link from "next/link";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[65vh] lg:min-h-[70vh] xl:min-h-screen overflow-hidden holo-bg flex items-center z-0 pt-16 md:pt-[4.5rem] lg:pt-20 xl:pt-24">
      {/* Background Particles */}

      {/* Floating Holographic Orbs - Background elements */}
      {/* <div className="holo-orb absolute top-12 sm:top-20 left-4 sm:left-10 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 opacity-60 animate-float -z-10 pointer-events-none" />

      <div className="holo-orb absolute top-24 sm:top-40 right-4 sm:right-20 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 opacity-40 animate-float-delayed -z-10 pointer-events-none" />

      <div className="holo-orb absolute bottom-24 sm:bottom-40 left-4 sm:left-20 w-10 sm:w-16 lg:w-20 h-10 sm:h-16 lg:h-20 opacity-50 animate-float-slow -z-10 pointer-events-none" /> */}

      <div className="w-full container mx-auto px-4 flex flex-col xl:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-8 lg:gap-10 xl:gap-16 py-12 md:py-4 lg:py-6 xl:py-7">
        {/* Left Content */}
        <div className="flex flex-col items-center xl:items-start text-center xl:text-left xl:w-[60%] w-full max-w-xl xl:max-w-none">
          <h1 className="holo-text-primary text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-4 lg:mb-5 xl:mb-6 text-glow leading-tight relative z-10">
            Голографические наклейки: блеск и оригинальность в одном продукте
          </h1>

          <p className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-5 md:mb-5 lg:mb-5 xl:mb-8 text-gray-300 leading-relaxed max-w-lg">
            Высокое качество, доступные цены и уникальный дизайн — всё, что
            нужно для вашего творчества.
          </p>

          <div className="relative">
            <Link href="/#contact">
              <Button className="holo-button text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 transform hover:scale-105 transition-all duration-300">
                Заказать
              </Button>
            </Link>
          </div>

          {/* Feature highlights */}
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-3 lg:gap-4 mt-4 sm:mt-5 md:mt-5 lg:mt-5 xl:mt-8 justify-center xl:justify-start">
            <div className="glass-card px-3 sm:px-4 py-2 text-xs sm:text-sm text-cyan-300">
              ✨ Высокое качество
            </div>
            <div className="glass-card px-3 sm:px-4 py-2 text-xs sm:text-sm text-magenta-300">
              🚀 Быстрая доставка
            </div>
            <div className="glass-card px-3 sm:px-4 py-2 text-xs sm:text-sm text-yellow-300">
              💎 Оригинальный дизайн
            </div>
          </div>
        </div>

        {/* Right Content - Holographic Image */}
        <div className="xl:w-[40%] flex justify-center xl:justify-end relative mt-4 md:mt-4 xl:mt-0 w-full min-w-0 ">
          <div className="relative w-full max-w-[200px] sm:max-w-[260px] md:max-w-[240px] lg:max-w-[280px] xl:max-w-md 2xl:max-w-lg mx-auto xl:mx-0">
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
