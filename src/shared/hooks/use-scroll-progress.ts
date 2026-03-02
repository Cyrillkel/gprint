// hooks/useScrollProgress.ts
import { useEffect, useState, useRef } from "react";

interface UseScrollProgressOptions {
  appearThreshold?: number;
  disappearThreshold?: number;
  noDisappear?: boolean;
}

export const useScrollProgress = (
  ref: React.RefObject<HTMLElement | null> | null,
  options: UseScrollProgressOptions = {}
) => {
  const { appearThreshold = 0.1, disappearThreshold = 0.05, noDisappear = false } = options;
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const hasBeenVisibleRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref?.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      let visible = 0;

      if (rect.top >= 0 && rect.bottom <= windowHeight) {
        visible = 1;
        hasBeenVisibleRef.current = true;
      } else if (rect.top < 0 && rect.bottom > 0) {
        visible = rect.bottom / rect.height;
      } else if (rect.top < windowHeight && rect.bottom > windowHeight) {
        visible = (windowHeight - rect.top) / rect.height;
      }

      setProgress(visible);

      if (visible >= appearThreshold) {
        hasBeenVisibleRef.current = true;
        setIsVisible(true);
      } else if (!noDisappear && visible <= disappearThreshold) {
        hasBeenVisibleRef.current = false;
        setIsVisible(false);
      } else if (!noDisappear) {
        setIsVisible(hasBeenVisibleRef.current);
      }
    };

    handleScroll();

    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });
    window.addEventListener("resize", scrollHandler, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", scrollHandler);
    };
  }, [ref, appearThreshold, disappearThreshold, noDisappear]);

  return { progress, isVisible };
};
