import { useUstyled } from "./use-ustyled";
import { createCss } from "../api/create-css";
import { useMemo } from "react";

export const useCss = () => {
  const [ctx] = useUstyled();
  return useMemo(() => createCss(ctx.theme, ctx.generator), [ctx]);
};
