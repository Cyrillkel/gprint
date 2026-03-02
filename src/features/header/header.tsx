// import NavigationMenuDemo from "./navigation-menu";
"use client";
import { cn } from "@/shared/utils/utils";
import BurgerMenu from "@/shared/shadcn/components/burger-menu";
import HeaderMenu from "@/shared/components/menu-nav";
import React, { useEffect, useState } from "react";
import Logo from "@/shared/components/logo";
import { motion } from "framer-motion";
import Link from "next/link";

interface props {
  className?: string;
}

export const Header: React.FC<props> = ({ className }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "w-full fixed top-0 left-0 right-0 z-[9999] transition-all duration-300",
        scrolled ? "py-2" : "py-4",
        className
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Background with glass effect */}
      <div
        className={cn(
          "absolute inset-0 transition-all duration-300",
          scrolled
            ? "bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 border-b border-cyan-500/20"
            : "backdrop-blur-md bg-black/10"
        )}
      />

      {/* Holographic overlay when scrolled */}
      {scrolled && <div className="absolute inset-0 holo-bg opacity-100" />}

      {/* Holographic accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-3 items-center gap-4">
          {/* Logo - left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
            style={{ willChange: "transform, opacity" }}
          >
            <Link href="/" aria-label="На главную" className="inline-block cursor-pointer [&_img]:max-w-32 [&_img]:max-h-12 md:[&_img]:max-w-52 md:[&_img]:max-h-none">
              <Logo />
            </Link>
          </motion.div>

          {/* Desktop Navigation - center */}
          <motion.div
            className="hidden md:flex justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <HeaderMenu />
          </motion.div>

          {/* Right side: Phone (desktop) */}
          <div className="flex items-center justify-end gap-4 min-h-[44px]">
            <motion.a
              href="tel:+79992193501"
              className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              aria-label="Позвонить +7 (999) 219-35-01"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              +7 (999) 219-35-01
            </motion.a>
          </div>
        </div>
      </div>

      {/* Burger — справа, по центру по вертикали (вне container) */}
      <motion.div
        className="md:hidden absolute right-4 inset-y-0 z-20 grid items-center justify-items-end"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="-translate-y-1">
          <BurgerMenu />
        </div>
      </motion.div>

      {/* Floating decorative elements - теперь они не влияют на layout */}
      <motion.div
        className="absolute top-1/2 left-4 w-2 h-2 bg-cyan-400 rounded-full opacity-60 pointer-events-none hidden md:block"
        style={{ willChange: "transform, opacity" }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 right-4 w-2 h-2 bg-magenta-400 rounded-full opacity-60 pointer-events-none hidden md:block"
        style={{ willChange: "transform, opacity" }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </motion.header>
  );
};
