"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/shared/shadcn/components/navigation-menu";
import { cn } from "../lib/utils";
import { useTranslations } from "next-intl";

interface HeaderMenuProps {
  isMobile?: boolean;
  className?: string;
}

export default function HeaderMenu({
  isMobile = false,
  className = "",
}: HeaderMenuProps) {
  const t = useTranslations();
  const links = [
    { label: t("sections.header.nav.production"), href: "/" },
    { label: t("sections.header.nav.about"), href: "/about" },
    { label: t("sections.header.nav.pricing"), href: "/#pricing" },
    { label: t("sections.header.nav.contacts"), href: "/contacts" },
    { label: "+7 999-219-35-01", href: "tel:+79992193501", isPhone: true },
  ];

  const customLinkStyle = cn(
    navigationMenuTriggerStyle(),
    "bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent"
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
          {links.map((item, index) => (
            <NavigationMenuItem key={index}>
              {item.isPhone ? (
                <a
                  href={item.href}
                  className={customLinkStyle}
                  aria-label="Call us"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={customLinkStyle}
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
