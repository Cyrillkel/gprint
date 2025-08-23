"use client";

import * as React from "react";
import { Card, CardContent } from "@/shared/shadcn/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/shared/shadcn/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
}

const ImageSlides: ImageProps[] = [
  {
    src: "/sticker.png",
    alt: "image-1",
  },
  {
    src: "/sticker.png",
    alt: "image-2",
  },
  {
    src: "/sticker.png",
    alt: "image-3",
  },
  {
    src: "/sticker.png",
    alt: "image-4",
  },
  {
    src: "/sticker.png",
    alt: "image-5",
  },
];

export function AutoCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();

  const plugin = React.useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.scrollTo(0);
  }, [api]);

  return (
    <Carousel
      plugins={[plugin.current]}
      setApi={setApi}
      className="w-full max-w-xs"
      opts={{
        align: "start",
        loop: true,
        dragFree: true,
      }}
    >
      <CarouselContent className="-ml-1">
        {ImageSlides.map((slides, index) => (
          <CarouselItem key={index} className="basis-full">
            <div className="p-0">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center relative">
                  <Image
                    src={slides.src}
                    alt={slides.alt}
                    fill
                    className="object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
