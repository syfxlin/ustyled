import { Keyframes } from "@emotion/react";
import { baseColors } from "./base-colors";
import { ThFn, ThRecord } from "../types";

export * from "./base-colors";
export * from "./default";

export type ColorMode = "light" | "dark";

export type Breakpoints = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export type Animations = {
  keyframes: ThRecord<Keyframes>;
  properties: ThRecord<string[]>;
  timingFns: ThRecord<string>;
  durations: ThFn<string>;
};
export type Index = typeof baseColors & Record<string, string | string[]>;
export type BoxShadows = ThRecord<string>;
export type Fonts = ThRecord<string>;
export type FontSizes = ThFn<string | number>;
export type LetterSpacings = ThFn<string | number>;
export type LineHeights = ThFn<string | number>;
export type Sizes = ThFn<string | number>;
export type Spacings = ThFn<string | number>;
export type BorderRadius = ThFn<string | number>;

export type UstyledTheme = {
  colorMode: ColorMode;
  primaryColor: string;
  breakpoints: Breakpoints;
  animations: Animations;
  colors: Index;
  shadows: BoxShadows;
  fonts: Fonts;
  fontSizes: FontSizes;
  letterSpacings: LetterSpacings;
  lineHeights: LineHeights;
  sizes: Sizes;
  spacings: Spacings;
  radius: BorderRadius;
  [key: string]: any;
};
