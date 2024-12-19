import React from "react";
import Image from "next/image";

export default function logo() {
  return (
    <Image
      className="max-w-20"
      src="/logo.svg"
      alt="logo"
      width={80}
      height={80}
    />
  );
}
