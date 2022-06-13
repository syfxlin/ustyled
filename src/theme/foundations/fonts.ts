import { UstyledTheme } from "../../types";

export const fonts: UstyledTheme["fonts"] = {
  sans: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  serif: `Georgia, Cambria, "Times New Roman", Times, serif`,
};

export const fontSizes: UstyledTheme["fontSizes"] = {
  unit: "1rem",
  xs: "0.75rem",
  sm: "0.875rem",
  default: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
};

export const fontWeights: UstyledTheme["fontWeights"] = {
  unit: "100",
  hairline: "100",
  thin: "200",
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900",
};

export const letterSpacings: UstyledTheme["letterSpacings"] = {
  unit: "0.025em",
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0em",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em",
};

export const lineHeights: UstyledTheme["lineHeights"] = {
  unit: "1",
  none: "1",
  tight: "1.25",
  snug: "1.375",
  normal: "1.5",
  relaxed: "1.625",
  loose: "2",
};
