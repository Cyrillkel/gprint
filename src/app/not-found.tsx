import { Button } from "@/shared/shadcn/ui/button";
// import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b">
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b">
        <div className="container flex max-w-md flex-col items-center px-4 py-16 text-center sm:px-6 md:max-w-2xl md:py-24 lg:max-w-3xl lg:py-32">
          <div className="flex items-center gap-x-1"></div>
          <p className="font-onest leading-none font-semibold">
            <span className="text-[110px] sm:text-[128px]">404</span>{" "}
            <span className="text-lg">Ошибка</span>
          </p>
          <p className="mb-10 text-sm opacity-80 sm:text-lg">
            Эта страница не существует
          </p>
          <div className="w-full sm:max-w-[300px]">
            <Button asChild className="w-full">
              <Link href="/">Вернуться назад</Link>
            </Button>
          </div>
        </div>
      </div>
      {/* <div className="absolute top-[10%] left-0 -z-[2] hidden h-[315px] w-[315px] rotate-[90deg] sm:block sm:h-[473px] sm:w-[473px]">
        <Image
          src="/img/balls.png"
          alt="balls"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute right-0 bottom-0 -z-[2] hidden h-[222px] w-[315px] sm:block sm:h-[334px] sm:w-[473px]">
        <Image
          src="/img/balls_2.png"
          alt="balls"
          fill
          className="object-contain"
        />
      </div> */}
    </div>
  );
}
