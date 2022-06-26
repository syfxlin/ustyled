import { useUstyled } from "./use-ustyled";
import { useMemo } from "react";
import { UstyledApi } from "../api";

export const useU = () => {
  const { ctx, mode, setMode } = useUstyled();

  const api = useMemo<UstyledApi>(
    () => ctx.api.map((fn) => fn(ctx)).reduce(Object.assign, {}) as UstyledApi,
    [ctx, ctx.api, mode, ctx.mode]
  );

  return {
    u: api,
    ctx,
    api,
    mode,
    setMode,
  };
};
