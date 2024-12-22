"use client";

import { useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/shared/shadcn/components/navigation-menu";

interface HeaderMenuProps {
  isMobile?: boolean;
  className?: string;
}

export default function HeaderMenu({
  isMobile = false,
  className = "",
}: HeaderMenuProps) {
  const [phoneClicked, setPhoneClicked] = useState(false);

  const links = [
    { label: "Продукция", href: "/" },
    { label: "О нас", href: "/about" },
    { label: "Отзывы", href: "/reviews" },
    { label: "Контакты", href: "/contacts" },
    { label: "+7 999-219-35-01", href: "tel:+79992193501", isPhone: true },
  ];

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setPhoneClicked(true);
    window.location.href = "tel:+79992193501";
  };

  return (
    <nav className={`${className} ${isMobile ? "mobile" : "desktop"}`}>
      <NavigationMenu>
        <NavigationMenuList
          className={
            isMobile
              ? "flex flex-col gap-y-4 items-start"
              : "flex gap-x-4 items-center"
          }
        >
          {links.map((item, index) => (
            <NavigationMenuItem key={index}>
              {item.isPhone ? (
                <a
                  href={item.href}
                  className={navigationMenuTriggerStyle()}
                  onClick={handlePhoneClick}
                  aria-label="Call us"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={navigationMenuTriggerStyle()}
                  aria-current={item.href === "/" ? "page" : undefined}
                >
                  {item.label}
                </Link>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
