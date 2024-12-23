import HeroSection from "@/shared/components/hero";
import Button from "@/shared/components/button";
import { AutoCarousel } from "@/shared/components/hero-carousel";
import OurClients from "@/shared/components/our-clients";

export default function Home() {
  return (
    <div>
      <main className="">
        <HeroSection>
          <div className="flex gap-4 container flex-col  items-center sm:flex-row justify-center min-h-screen ">
            <div className="flex flex-col items-start lg:w-1/2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Голографические наклейки: блеск и оригинальность в одном
                продукте
              </h1>
              <p className="text-xl sm:text-base md:text-lg lg:text-xl pr-20 mb-4">
                Высокое качество, доступные цены и уникальный дизайн — всё, что
                нужно для вашего творчества.
              </p>
              <div className="text-xl px-8 py-3 bg-teal-50 hover:bg-indigo-50 hover:animate-pulse cursor-pointer rounded-xl">
                <Button>Заказать</Button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <AutoCarousel />
            </div>
          </div>
        </HeroSection>

        <OurClients />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
