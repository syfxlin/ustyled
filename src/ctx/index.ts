import { defaultColors } from "./default-colors";
import { ctx } from "./default-ctx";

export { defaultColors, ctx };

export type ColorMode = "light" | "dark";

export type Breakpoints = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export interface UstyledCtx {
  primary: string;
  breakpoints: Breakpoints;
  [key: string]: any;
}
