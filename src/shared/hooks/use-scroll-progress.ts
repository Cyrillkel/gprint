// hooks/useScrollProgress.ts
import { useEffect, useState } from "react";

export const useScrollProgress = (
  ref: React.RefObject<HTMLElement | null> | null
) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref?.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Элемент полностью видим
      if (rect.top >= 0 && rect.bottom <= windowHeight) {
        setProgress(1);
        setIsVisible(true);
      }
      // Элемент частично видим сверху
      else if (rect.top < 0 && rect.bottom > 0) {
        const visible = rect.bottom / rect.height;
        setProgress(visible);
        setIsVisible(visible > 0.1);
      }
      // Элемент частично видим снизу
      else if (rect.top < windowHeight && rect.bottom > windowHeight) {
        const visible = (windowHeight - rect.top) / rect.height;
        setProgress(visible);
        setIsVisible(visible > 0.1);
      }
      // Элемент не видим
      else {
        setProgress(0);
        setIsVisible(false);
      }
    };

    // Проверяем при монтировании
    handleScroll();

    // Throttle для производительности
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
  }, [ref]);

  return { progress, isVisible };
};
