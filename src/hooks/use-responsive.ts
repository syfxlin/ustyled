import { useU } from "./use-u";
import { useMediaQuery } from "./use-media-query";
import { Breakpoints } from "../types";

export const useUp = (minWidth: keyof Breakpoints) => {
  const { ctx } = useU();
  return useMediaQuery(`(min-width: ${ctx.breakpoints[minWidth]}px)`);
};

export const useDown = (maxWidth: keyof Breakpoints) => {
  const { ctx } = useU();
  return useMediaQuery(`(min-width: ${ctx.breakpoints[maxWidth]}px)`);
};

export const useBetween = (minWidth: keyof Breakpoints, maxWidth: keyof Breakpoints) => {
  const { ctx } = useU();
  return useMediaQuery(`(min-width: ${ctx.breakpoints[minWidth]}px) and (max-width: ${ctx.breakpoints[maxWidth]}px)`);
};
