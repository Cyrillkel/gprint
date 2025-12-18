"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/shared/shadcn/components/navigation-menu";
import { cn } from "../lib/utils";
import { products } from "@/shared/data/products-data";

interface HeaderMenuProps {
  isMobile?: boolean;
  className?: string;
}

export default function HeaderMenu({
  isMobile = false,
  className = "",
}: HeaderMenuProps) {
  const links = [
    { label: "О нас", href: "/about" },
    { label: "Цены", href: "/#pricing" },
    { label: "Контакты", href: "/contacts" },
    { label: "+7 999-219-35-01", href: "tel:+79992193501", isPhone: true },
  ];

  const customLinkStyle = cn(
    navigationMenuTriggerStyle(),
    "bg-transparent hover:bg-cyan-500/10 focus:bg-cyan-500/10 text-white hover:text-cyan-400 focus:text-cyan-400"
  );

  const customTriggerStyle = cn(
    "bg-transparent hover:bg-transparent focus:bg-transparent text-white hover:text-cyan-400 focus:text-cyan-400",
    "data-[state=open]:bg-transparent data-[state=open]:text-cyan-400",
    "data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent"
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
          {/* Products Dropdown */}
          <NavigationMenuItem>
            {isMobile ? (
              // Mobile: Simple link to products page
              <NavigationMenuLink asChild>
                <Link
                  href="/products"
                  className={cn(customLinkStyle, "no-underline")}
                >
                  Продукция
                </Link>
              </NavigationMenuLink>
            ) : (
              // Desktop: Dropdown menu
              <>
                <NavigationMenuTrigger className={customTriggerStyle}>
                  Продукция
                </NavigationMenuTrigger>
                <NavigationMenuContent className="!z-[10000] border-0">
                  <div className="p-6 backdrop-blur-xl bg-gradient-to-br from-black/60 via-gray-900/50 to-black/60 rounded-xl shadow-2xl shadow-cyan-500/20 min-w-[600px] relative z-[10000]">
                    {/* Holographic accent line */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

                    {/* Horizontal grid for products */}
                    <div className="grid grid-cols-3 gap-3">
                      {products.map((product, index) => (
                        <NavigationMenuLink key={product.id} asChild>
                          <Link
                            href={
                              index === 0
                                ? `/products/standard-holograms`
                                : `/products/${product.id}`
                            }
                            className={cn(
                              "group relative isolate flex flex-col p-4 rounded-lg transition-shadow duration-200",
                              "bg-gradient-to-br from-black/40 via-gray-900/50 to-black/40",
                              "hover:shadow-lg hover:shadow-cyan-500/20",
                              "focus:outline-none focus:ring-2 focus:ring-cyan-500/50",
                              "backdrop-blur-sm border-0",
                              "no-underline",
                              "hover:bg-gradient-to-br hover:from-black/50 hover:via-gray-900/60 hover:to-black/50",
                              "active:bg-gradient-to-br active:from-black/50 active:via-gray-900/60 active:to-black/50"
                            )}
                          >
                            <h3 className="text-sm font-semibold text-white mb-1">
                              {product.name}
                            </h3>
                            <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                              {product.subtitle}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>

                    {/* View All Products Link */}
                    <div className="mt-5 pt-4 border-t border-cyan-500/20">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/products"
                          className={cn(
                            "group flex items-center justify-center w-full p-3 text-sm font-medium",
                            "text-cyan-400 hover:text-cyan-300 transition-colors duration-200",
                            "rounded-lg no-underline",
                            "border-0",
                            "hover:bg-black/30 active:bg-black/30"
                          )}
                        >
                          Посмотреть всю продукцию
                          <svg
                            className="h-4 w-4 ml-2 rotate-[-90deg] transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>

          {/* Other Navigation Links */}
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
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className={cn(customLinkStyle, "no-underline")}
                    aria-current={item.href === "/" ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
