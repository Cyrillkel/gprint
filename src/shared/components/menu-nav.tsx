"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/shared/shadcn/components/navigation-menu";
import { cn } from "../lib/utils";

interface HeaderMenuProps {
  isMobile?: boolean;
  className?: string;
  onLinkClick?: () => void;
}

export default function HeaderMenu({
  isMobile = false,
  className = "",
  onLinkClick,
}: HeaderMenuProps) {
  const links = [
    { label: "О нас", href: "/#about" },
    { label: "Цены", href: "/#pricing" },
    { label: "Контакты", href: "/#contact" },
  ];
  const phoneLink = {
    label: "+7 (999) 219-35-01",
    href: "tel:+79992193501",
    isPhone: true,
  };

  const customLinkStyle = cn(
    navigationMenuTriggerStyle(),
    "bg-transparent hover:bg-cyan-500/10 focus:bg-cyan-500/10 text-white hover:text-cyan-400 focus:text-cyan-400",
    isMobile && "text-lg font-medium py-3 text-gray-100 hover:text-cyan-300"
  );

  return (
    <nav className={cn(className, isMobile ? "mobile" : "desktop")}>
      <NavigationMenu>
        <NavigationMenuList
          className={cn(
            "flex",
            isMobile ? "flex-col gap-y-4 items-start" : "gap-x-4 items-center"
          )}
        >
          {/* Продукция - прокрутка к секции на главной */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
                <Link
                  href="/#production"
                  className={cn(customLinkStyle, "no-underline")}
                  onClick={onLinkClick}
                >
                Продукция
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Other Navigation Links */}
          {links.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  className={cn(customLinkStyle, "no-underline")}
                  aria-current={item.href === "/" ? "page" : undefined}
                  onClick={onLinkClick}
                >
                  {item.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
          {/* Телефон только в мобильном меню */}
          {isMobile && (
            <NavigationMenuItem>
              <a
                href={phoneLink.href}
                className={customLinkStyle}
                aria-label="Позвонить"
                onClick={onLinkClick}
              >
                {phoneLink.label}
              </a>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
