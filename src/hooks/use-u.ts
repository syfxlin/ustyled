import { useUstyled } from "./use-ustyled";
import { useCallback, useMemo } from "react";
import { ColorMode } from "../ctx";
import { createCss } from "../css";

export const useU = () => {
  const [theme, setTheme] = useUstyled();

  const ctx = useMemo(() => theme.ctx, [theme.ctx]);
  const api = useMemo(() => theme.api(theme.ctx), [theme.api, theme.ctx]);
  const css = useMemo(() => createCss(api), [api]);

  const mode = useMemo(() => theme.ctx.mode, [theme.ctx.mode]);
  const setMode = useCallback(
    (c?: ColorMode) =>
      setTheme((prev) => ({
        ...prev,
        ctx: {
          ...prev.ctx,
          mode: c ?? (prev.ctx.mode === "light" ? "dark" : "light"),
        },
      })),
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
