// import NavigationMenuDemo from "./navigation-menu";
"use client";
import { cn } from "@/shared/utils/utils";
import BurgerMenu from "@/shared/shadcn/components/burger-menu";
import HeaderMenu from "@/shared/components/menu-nav";
import React, { useEffect, useState } from "react";
import Logo from "@/shared/components/logo";
import { LanguageSelector } from "@/shared/shadcn/ui/language-selector";
import { motion } from "framer-motion";

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
        "w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300",
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
            ? "backdrop-blur-xl bg-black/20 border-b border-cyan-500/20"
            : "backdrop-blur-md bg-black/10"
        )}
      />

      {/* Holographic accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group"
          >
            <Logo />
            {/* Holographic glow effect on hover */}
            <div className="absolute inset-0 bg-cyan-400/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <HeaderMenu />
          </motion.div>

          {/* Right side controls */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <LanguageSelector />
            </motion.div>

            {/* Mobile Menu */}
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <BurgerMenu />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/2 left-4 w-2 h-2 bg-cyan-400 rounded-full opacity-60"
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
        className="absolute top-1/2 right-4 w-2 h-2 bg-magenta-400 rounded-full opacity-60"
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
