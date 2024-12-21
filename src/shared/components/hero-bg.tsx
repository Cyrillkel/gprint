import Image from "next/image";
import React, { ReactNode } from "react";

interface HeroBgProps {
  children?: ReactNode;
}

const HeroBg: React.FC<HeroBgProps> = ({ children }) => {
  return (
    <div className="relative w-full">
      <Image
        className="w-full h-auto bg-cover"
        src="/hero-bg.png"
        alt="logo"
        width={1920}
        height={1080}
        layout="w-full h-auto"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default HeroBg;
