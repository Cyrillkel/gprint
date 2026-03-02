"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/shadcn/ui/sheet";
import HeaderMenu from "@/shared/components/menu-nav";
import { cn } from "@/shared/lib/utils";

function BurgerIcon({ open }: { open: boolean }) {
  const commonLine =
    "absolute left-0 h-0.5 w-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 origin-center transition-all duration-300 ease-in-out";

  return (
    <div className="relative w-8 h-6 flex justify-center items-center">
      {/* top line */}
      <span
        className={commonLine}
        style={{
          transform: open
            ? "translateY(0px) rotate(45deg)"
            : "translateY(-6px) rotate(0deg)",
        }}
      />
      {/* middle line */}
      <span
        className={commonLine}
        style={{
          transform: open ? "scaleX(0)" : "scaleX(1)",
          opacity: open ? 0 : 1,
        }}
      />
      {/* bottom line */}
      <span
        className={commonLine}
        style={{
          transform: open
            ? "translateY(0px) rotate(-45deg)"
            : "translateY(6px) rotate(0deg)",
        }}
      />
    </div>
  );
}

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetHeader>
        <SheetTitle className="sr-only">Меню</SheetTitle>
      </SheetHeader>
      <SheetTrigger asChild>
        <button
          className="p-2.5 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all duration-300 outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 active:border-cyan-500/40"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
        >
          <BurgerIcon open={open} />
        </button>
      </SheetTrigger>
      <SheetContent
        side="top"
        hideDefaultClose
        className={cn(
          "!top-24 !left-0 !right-0 !h-[calc(100vh-6rem)] !w-full !max-w-none !rounded-none !rounded-b-2xl !p-0 !pt-8 !border-0",
          "bg-transparent shadow-none"
        )}
      >
        {/* Фон как у Hero — holo-bg */}
        <div className="absolute inset-0 holo-bg rounded-b-2xl overflow-hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-blue-900/90 to-purple-900/95 rounded-b-2xl" />
        <div className="absolute inset-0 border-x border-b border-cyan-500/20 rounded-b-2xl" />

        <div className="relative z-10 flex flex-col px-6 pb-8 overflow-y-auto h-full">
          <HeaderMenu
            isMobile
            className="flex flex-col gap-6 text-white"
            onLinkClick={() => setOpen(false)}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
