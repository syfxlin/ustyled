import { useUstyled } from "./use-ustyled";
import { useMemo } from "react";
import { createCss } from "../css";

export const useU = () => {
  const { ctx, mode, setMode } = useUstyled();

  const api = useMemo(() => ctx.api.map((fn) => fn(ctx)).reduce(Object.assign, {}), [ctx, ctx.api]);
  const css = useMemo(() => createCss(api), [ctx, api]);

  return {
    ctx,
    css,
    api,
    mode,
    setMode,
  };
};
