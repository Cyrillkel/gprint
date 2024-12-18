// import NavigationMenuDemo from "./navigation-menu";
import { cn } from "@/shared/utils/utils";
import BurgerMenu from "@/shared/shadcn/components/burger-menu";
import HeaderMenu from "@/shared/components/menu-nav";
import React from "react";

interface props {
  className?: string;
}

const Header: React.FC<props> = ({ className }) => {
  return (
    <header className={cn("w-full border-b-2", className)}>
      <div className="container flex justify-between m-auto max-h-20">
        <img className="max-w-20" src="logo.svg" alt="logo"></img>
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
