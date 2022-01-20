import { useUstyled } from "./use-ustyled";
import { useCallback, useMemo } from "react";
import { createCss } from "../api/create-css";
import { ColorMode } from "../theme";

export const useU = () => {
  const [ctx, setCtx] = useUstyled();

  const props = useMemo(
    () => ({
      theme: ctx.theme,
      styles: ctx.api.style(ctx.theme),
      ats: ctx.api.at(ctx.theme),
    }),
    [ctx]
  );

  const css = useMemo(() => createCss(props), [props]);

  const setColorMode = useCallback(
    (c?: ColorMode) => {
      setCtx((prev) => ({
        ...prev,
        theme: {
          ...prev.theme,
          colorMode: c ?? (prev.theme.colorMode === "light" ? "dark" : "light"),
        },
      }));
    },
    [setCtx]
  );

  return {
    ...props,
    css,
    colorMode: ctx.theme.colorMode,
    setColorMode,
  };
};
