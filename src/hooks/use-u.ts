import { useUstyled } from "./use-ustyled";

export const useU = () => {
  const [ctx] = useUstyled();
  return ctx.api(ctx.theme);
};
