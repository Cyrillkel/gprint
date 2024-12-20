"use client";

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
  // styles?: {
  //   classNameForList?: string;
  // };
}

export default function HeaderMenu({
  isMobile = false,
}: // styles,
HeaderMenuProps) {
  const links = [
    {
      label: "Продукция",
      href: "/",
    },
    {
      label: "О нас",
      href: "/",
    },
    {
      label: "Отзывы",
      href: "/",
    },
    {
      label: "Контакты",
      href: "/",
    },
  ];
  return (
    <NavigationMenu>
      <NavigationMenuList className={isMobile ? "flex flex-col" : ""}>
        {links.map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href={item.href} legacyBehavior passHref>
                {item.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
