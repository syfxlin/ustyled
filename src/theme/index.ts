import { Keyframes } from "@emotion/react";
import { baseColors } from "./base-colors";

export * from "./base-colors";
export * from "./default";

export type ThFn<K, T> = (unit: K, _default?: T | null) => T | undefined;

export type ColorMode = "light" | "dark";

export type Breakpoints = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export type Animations = {
  keyframes: ThFn<string | Keyframes, Keyframes>;
  properties: ThFn<string, string>;
  timingFns: ThFn<string, string>;
  durations: ThFn<string | number, string>;
  delays: ThFn<string | number, string>;
};
export type Colors = typeof baseColors & Record<string, string | string[]>;
export type Shadows = ThFn<string, string>;
export type Fonts = ThFn<string, string>;
export type FontSizes = ThFn<string | number, string | number>;
export type LetterSpacings = ThFn<string | number, string | number>;
export type LineHeights = ThFn<string | number, string | number>;
export type Sizes = ThFn<string | number, string | number>;
export type Spacings = ThFn<string | number, string | number>;
export type Radius = ThFn<string | number, string | number>;
export type BorderWidths = ThFn<string | number, string | number>;

export interface UstyledTheme {
  colorMode: ColorMode;
  primaryColor: string;
  breakpoints: Breakpoints;
  animations: Animations;
  colors: Colors;
  shadows: Shadows;
  fonts: Fonts;
  fontSizes: FontSizes;
  letterSpacings: LetterSpacings;
  lineHeights: LineHeights;
  sizes: Sizes;
  spacings: Spacings;
  radius: Radius;
  borderWidths: BorderWidths;
  [key: string]: any;
}
