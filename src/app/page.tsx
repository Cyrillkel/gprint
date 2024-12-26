// "use client";
import HeroSection from "@/shared/components/hero";
import Button from "@/shared/components/button";
import { AutoCarousel } from "@/shared/components/hero-carousel";
import OurClients from "@/shared/components/our-clients";
import FilteredPostList from "@/shared/components/tanstack-query";
import AboutSection from "@/shared/components/about-section";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// const queryClient = new QueryClient();

export default function Home() {
  return (
    // <QueryClientProvider client={queryClient}>
    <div>
      <main className="">
        <HeroSection>
          <div className="flex gap-4 container flex-col items-center sm:flex-row justify-center min-h-screen ">
            <div className="flex flex-col items-center lg:w-1/2 sm:items-start">
              <h1 className="text-center sm:text-start text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-shadow drop-shadow">
                Голографические наклейки: блеск и оригинальность в одном
                продукте
              </h1>
              <p className="text-xl px-10 sm:px-0 text-center sm:text-start sm:text-base md:text-lg lg:text-xl sm:pr-20 mb-4">
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
        <AboutSection>
          <div className="container mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-8 text-center">О Нас</h2>
            <p className="text-center text-lg">
              Наша компания занимается продажей голографических наклеек отпом
            </p>
          </div>
        </AboutSection>
        <FilteredPostList />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
    //   <ReactQueryDevtools initialIsOpen={false} />
    // </QueryClientProvider>
  );
}
