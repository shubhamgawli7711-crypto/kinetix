import { useEffect, useState } from "react";

/**
 * Tracks whether the viewport is at or above the given breakpoint.
 * Used to switch between the pinned, scroll-scrubbed desktop layout
 * and a plain stacked mobile layout in components like Process.
 */
export default function useIsDesktop(breakpoint: number = 1101): boolean {
  const [isDesktop, setIsDesktop] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? window.innerWidth >= breakpoint
      : true
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
    };

    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [breakpoint]);

  return isDesktop;
}