import { useEffect, useState } from "react";

function useMediaQuery(query: string): boolean {
  const getMatch = (query: string): boolean => {
    return window.matchMedia(query).matches;
  };
  const [matches, setMatches] = useState<boolean>(getMatch(query));
  const handleChange = () => {
    setMatches(getMatch(query));
  };

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();

    matchMedia.addEventListener("change", handleChange);
    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
