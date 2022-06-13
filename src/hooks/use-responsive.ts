import { useU } from "./use-u";
import { useMediaQuery } from "./use-media-query";
import { Breakpoints } from "../types";

export const useUp = (minWidth: keyof Breakpoints) => {
  const { ctx } = useU();
  return useMediaQuery(`(min-width: ${ctx.breakpoints[minWidth]})`);
};

export const useDown = (maxWidth: keyof Breakpoints) => {
  const { ctx } = useU();
  return useMediaQuery(`(min-width: ${ctx.breakpoints[maxWidth]})`);
};

export const useBetween = (minWidth: keyof Breakpoints, maxWidth: keyof Breakpoints) => {
  const { ctx } = useU();
  return useMediaQuery(`(min-width: ${ctx.breakpoints[minWidth]}) and (max-width: ${ctx.breakpoints[maxWidth]})`);
};
