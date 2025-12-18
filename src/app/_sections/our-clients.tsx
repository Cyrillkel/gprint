"use client";

import Image from "next/image";

interface ClientsProps {
  src: string;
  alt: string;
}

const images: ClientsProps[] = [
  {
    src: "/client-1.svg",
    alt: "icon",
  },
  {
    src: "/client-2.svg",
    alt: "icon",
  },
  {
    src: "/client-3.svg",
    alt: "icon",
  },
  {
    src: "/client-4.svg",
    alt: "icon",
  },
  {
    src: "/client-5.svg",
    alt: "icon",
  },
];

export const OurClients = () => {
  return (
    <section className="w-full py-4 opacity-35 mb-10 overflow-hidden">
      <div className="container mx-auto overflow-x-auto md:overflow-visible">
        <div className="flex gap-3 justify-center min-w-max md:min-w-0 md:flex-wrap">
          {images.map((image, index) => (
            <div key={index} className="w-[120px] h-[80px] flex-shrink-0">
              <Image
                src={image.src}
                alt={image.alt}
                width={120}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
