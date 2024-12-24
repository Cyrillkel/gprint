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

const OurClients = () => {
  return (
    <section className="w-full bg-green-700 py-4 opacity-35">
      <h2 className="text-2xl text-center text-white font-medium">
        Наши клиеты
      </h2>
      <div className="container flex gap-3 justify-center mx-auto flex-wrap">
        {images.map((image, index) => (
          <Image
            src={image.src}
            alt={image.alt}
            key={index}
            width={200}
            height={200}
          />
        ))}
      </div>
    </section>
  );
};

export default OurClients;
