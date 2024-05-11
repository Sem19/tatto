import { useState, useEffect } from "react";

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQueryList = window.matchMedia(query);
      setMatches(mediaQueryList.matches);

      const handleChange = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };

      mediaQueryList.addEventListener("change", handleChange);

      return () => {
        mediaQueryList.removeEventListener("change", handleChange);
      };
    }
  }, [query]);

  return matches;
};
