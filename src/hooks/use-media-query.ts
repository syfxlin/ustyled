import { useEffect, useState } from "react";
import { ssr } from "../utils/ssr";

export const useMediaQuery = (query: string, defaultState = false) => {
  const [state, setState] = useState(ssr(() => window.matchMedia(query).matches) ?? defaultState);

  useEffect(() => {
    let mounted = true;
    const mql = ssr(() => window.matchMedia(query));
    if (!mql) {
      return;
    }

    const onChange = () => {
      if (!mounted) {
        return;
      }
      setState(mql.matches);
    };

    mql.addEventListener("change", onChange);
    setState(mql.matches);

    return () => {
      mounted = false;
      mql.removeEventListener("change", onChange);
    };
  }, [query]);

  return state;
};
