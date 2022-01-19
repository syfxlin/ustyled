import { useUstyled } from "./use-ustyled";
import { useMemo } from "react";

export const useApi = () => {
  const [ctx] = useUstyled();
  return useMemo(() => ctx.generator(ctx.theme), [ctx]);
};
