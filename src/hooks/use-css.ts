import { useUstyled } from "./use-ustyled";
import { transform } from "../api/transform";
import { useMemo } from "react";

export const useCss = () => {
  const [ctx] = useUstyled();
  return useMemo(() => transform(ctx.theme, ctx.generator), [ctx]);
};
