import React from "react";
import Image from "next/image";

export default function logo() {
  return (
    <Image
      className="max-w-52"
      src="/logo.svg"
      alt="logo"
      width={200}
      height={200}
    />
  );
}
