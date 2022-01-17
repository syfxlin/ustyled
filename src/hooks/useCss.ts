import { useUstyled } from "./use-ustyled";
import { transform } from "../api/transform";

export const useCss = () => {
  const [ctx] = useUstyled();
  return transform(ctx.theme, ctx.generator);
};
