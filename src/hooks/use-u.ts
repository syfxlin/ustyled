import { useUstyled } from "./use-ustyled";
import { useCallback, useMemo } from "react";
import { ColorMode } from "../ctx";
import { createCss } from "../css";
import { ColorModeStorageKey } from "../components/UstyledProvider";

export const useU = () => {
  const [theme, setTheme] = useUstyled();

  const mode = useMemo(() => theme.ctx.mode, [theme.ctx, theme.ctx.mode]);
  const ctx = useMemo(() => theme.ctx, [theme.ctx]);
  const api = useMemo(() => theme.api(theme.ctx), [theme.api, theme.ctx, theme.ctx.mode]);

  const css = useMemo(() => createCss(api), [api, ctx, mode]);
  const setMode = useCallback(
    (c?: ColorMode | "auto") => {
      if (c === "auto") {
        setTheme((prev) => {
          const mode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
          localStorage.removeItem(ColorModeStorageKey);
          return { ...prev, ctx: { ...prev.ctx, mode } };
        });
      } else {
        setTheme((prev) => {
          const mode = c ?? (prev.ctx.mode === "light" ? "dark" : "light");
          localStorage.setItem(ColorModeStorageKey, mode);
          return { ...prev, ctx: { ...prev.ctx, mode } };
        });
      }
    },
    [setTheme]
  );

  return {
    css,
    ctx,
    api,
    mode,
    setMode,
  };
};
