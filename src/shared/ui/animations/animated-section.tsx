"use client";
import { useRef, ReactNode, createContext, useContext } from "react";

const SectionRefContext = createContext<React.RefObject<HTMLElement | null> | null>(
  null
);

export const useSectionRef = () => {
  const context = useContext(SectionRefContext);
  if (!context) {
    throw new Error("useSectionRef must be used within AnimatedSection");
  }
  return context;
};

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const AnimatedSection = ({
  children,
  className,
  id,
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <SectionRefContext.Provider value={sectionRef}>
      <section ref={sectionRef} id={id} className={className}>
        {children}
      </section>
    </SectionRefContext.Provider>
  );
};
