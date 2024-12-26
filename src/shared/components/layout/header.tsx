// import NavigationMenuDemo from "./navigation-menu";
import { cn } from "@/shared/utils/utils";
import BurgerMenu from "@/shared/shadcn/components/burger-menu";
import HeaderMenu from "@/shared/components/menu-nav";
import React from "react";
import Logo from "@/shared/components/logo";

interface props {
  className?: string;
}

const Header: React.FC<props> = ({ className }) => {
  return (
    <header className={cn("w-full border-b-1 bg-custom-gray", className)}>
      <div className="container flex justify-between items-center m-auto max-h-20 py-3">
        <Logo />
        <div className="hidden md:block">
          <HeaderMenu />
        </div>
        <div className="md:hidden">
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
