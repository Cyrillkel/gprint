"use client";

import React from "react";

import { useLocale } from "next-intl";

import { flagsMap, locales } from "@/shared/lib/i18n/config";
import { usePathname, useRouter } from "@/shared/lib/i18n/navigation";
import Flag from "react-world-flags";
import { cn } from "@/shared/utils/utils";
import { Button } from "@/shared/shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/shared/shadcn/ui/dropdown-menu";

interface Props {
  className?: string;
}

export const LanguageSelector: React.FC<Props> = ({ className }) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="default"
          className={cn("size-11 p-0 sm:size-14", className)}
        >
          <div className="flex size-7 items-center justify-center overflow-hidden rounded-full sm:size-8">
            <Flag
              code={flagsMap[locale]}
              className="shrink-0 scale-100 object-contain"
            />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((l) => (
          <DropdownMenuItem
            key={l}
            onClick={() => handleLocaleChange(l)}
            className={l === locale ? "font-bold" : ""}
          >
            <Flag code={flagsMap[l]} className="h-4 w-6 object-contain" />
            {l.toUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
