"use client";

import { cn } from "@/shared/lib/utils";

interface SectionDividerProps {
  className?: string;
  height?: "sm" | "md" | "lg";
}

export function SectionDivider({
  className,
  height = "md",
}: SectionDividerProps) {
  const heightClasses = {
    sm: "h-16 sm:h-20",
    md: "h-20 sm:h-24",
    lg: "h-24 sm:h-28",
  };

  return (
    <div
      className={cn("w-full shrink-0", heightClasses[height], className)}
      aria-hidden
    />
  );
}
