import { UnitRecord } from "./base";
import { StyleGenerator } from "./style";

export type ColorMode = "light" | "dark";
export type FullColorMode = ColorMode | "auto";

export type Breakpoints = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export interface UstyledTheme {
  primary: string;
  breakpoints: Breakpoints;
  // colors
  colors: UnitRecord<string, string | string[]>;
  // animations
  keyframes: UnitRecord<string, string>;
  properties: UnitRecord<string, string | string[]>;
  timingFns: UnitRecord<string, string>;
  durations: UnitRecord<string, string>;
  delays: UnitRecord<string, string>;
  // borders
  borders: UnitRecord<string, string>;
  borderWidths: UnitRecord<string, string>;
  borderStyles: UnitRecord<string, string>;
  borderRadius: UnitRecord<string, string>;
  // fonts
  fonts: UnitRecord<string, string>;
  fontSizes: UnitRecord<string, string>;
  fontWeights: UnitRecord<string, string>;
  letterSpacings: UnitRecord<string, string>;
  lineHeights: UnitRecord<string, string>;
  // shadows
  shadows: UnitRecord<string, string>;
  // sizes
  sizes: UnitRecord<string, string>;
  spacings: UnitRecord<string, string>;

  // api
  api: StyleGenerator<any, any>[];

  // other
  [key: string]: any;
}

export interface UstyledCtx extends UstyledTheme {
  mode: ColorMode;
}
