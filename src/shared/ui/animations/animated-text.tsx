"use client";
import { useScrollProgress } from "@/shared/hooks/use-scroll-progress";
import { useSectionRef } from "./animated-section";
import { CSSProperties, ReactNode } from "react";

interface AnimatedCenterTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedText = ({
  children,
  className,
  delay = 0.4,
}: AnimatedCenterTextProps) => {
  const sectionRef = useSectionRef();
  const { progress, isVisible } = useScrollProgress(sectionRef);

  const getOpacity = () => {
    const adjustedProgress = Math.max(0, (progress - delay) / (1 - delay));
    return isVisible ? adjustedProgress : 0;
  };

  const getTranslateY = (distance: number = 30) => {
    const adjustedProgress = Math.max(0, (progress - delay) / (1 - delay));
    return isVisible ? distance * (1 - adjustedProgress) : distance;
  };

  const getScale = () => {
    const adjustedProgress = Math.max(0, (progress - delay) / (1 - delay));
    return isVisible ? 0.95 + 0.05 * adjustedProgress : 0.95;
  };

  const style: CSSProperties = {
    opacity: getOpacity(),
    transform: `translate(-50%, calc(-50% + ${getTranslateY()}px)) scale(${getScale()})`,
    transition: "none",
  };

  return (
    <p className={className} style={style}>
      {children}
    </p>
  );
};
