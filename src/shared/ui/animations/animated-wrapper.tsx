// Обновление AnimatedWrapper для поддержки fadeIn анимации
"use client";
import { useScrollProgress } from "@/shared/hooks/use-scroll-progress";
import { useRef, CSSProperties, ReactNode, useEffect, useState } from "react";

interface AnimatedWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  translateY?: number;
  translateX?: number;
  scale?: boolean;
  parallax?: number;
  fadeIn?: boolean;
  sectionRef?: React.RefObject<HTMLElement>;
  /** Доля видимости для появления (0–1), больше = позже */
  appearThreshold?: number;
  /** Доля видимости для исчезновения (0–1), меньше = дольше видно */
  disappearThreshold?: number;
  /** Если true — после появления не исчезает при скролле */
  noDisappear?: boolean;
}

export const AnimatedWrapper = ({
  children,
  className,
  delay = 0,
  translateY = 20,
  translateX = 0,
  scale = false,
  parallax = 1,
  fadeIn = false,
  sectionRef,
  appearThreshold,
  disappearThreshold,
  noDisappear,
}: AnimatedWrapperProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const scrollOptions =
    appearThreshold !== undefined || disappearThreshold !== undefined || noDisappear
      ? {
          appearThreshold: appearThreshold ?? 0.1,
          disappearThreshold: disappearThreshold ?? 0.05,
          noDisappear: noDisappear ?? false,
        }
      : {};
  const { progress, isVisible } = useScrollProgress(
    fadeIn ? null : sectionRef || elementRef,
    scrollOptions
  );

  useEffect(() => {
    if (fadeIn) {
      const timer = setTimeout(() => setIsMounted(true), delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [fadeIn, delay]);

  // Для fadeIn анимации (hero section)
  if (fadeIn) {
    const style: CSSProperties = {
      opacity: isMounted ? 1 : 0,
      transform: `
        ${translateY ? `translateY(${isMounted ? 0 : translateY}px)` : ""}
        ${translateX ? `translateX(${isMounted ? 0 : translateX}px)` : ""}
        ${scale ? `scale(${isMounted ? 1 : 0.95})` : ""}
      `.trim(),
      transition: "all 1000ms cubic-bezier(0.4, 0, 0.2, 1)",
    };

    return (
      <div ref={elementRef} className={className} style={style}>
        {children}
      </div>
    );
  }

  // Для scroll-based анимации (остальные секции)
  const getOpacity = () => {
    const adjustedProgress = Math.max(0, (progress - delay) / (1 - delay));
    return isVisible ? adjustedProgress : 0;
  };

  const getTranslate = (distance: number) => {
    const adjustedProgress = Math.max(0, (progress - delay) / (1 - delay));
    return isVisible ? distance * (1 - adjustedProgress) * parallax : distance;
  };

  const getScale = () => {
    const adjustedProgress = Math.max(0, (progress - delay) / (1 - delay));
    return isVisible ? 0.95 + 0.05 * adjustedProgress : 0.95;
  };

  const style: CSSProperties = {
    opacity: getOpacity(),
    transform: `
      ${translateY ? `translateY(${getTranslate(translateY)}px)` : ""}
      ${translateX ? `translateX(${getTranslate(translateX)}px)` : ""}
      ${scale ? `scale(${getScale()})` : ""}
    `.trim(),
    transition: "none",
  };

  return (
    <div ref={elementRef} className={className} style={style}>
      {children}
    </div>
  );
};
