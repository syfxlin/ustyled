import { UstyledTheme } from "../types";
import { fonts, fontSizes, fontWeights, letterSpacings, lineHeights } from "./foundations/fonts";
import { borderRadius, borders, borderStyles, borderWidths } from "./foundations/borders";
import { delays, durations, keyframes, properties, timingFns } from "./foundations/animations";
import { breakpoints } from "./foundations/breakpoints";
import { sizes, spacings } from "./foundations/sizes";
import { shadows } from "./foundations/shadows";
import { colors } from "./foundations/colors";
import { api } from "../api";

export const theme: UstyledTheme = {
  primary: "violet",
  breakpoints,
  colors,
  keyframes,
  properties,
  timingFns,
  durations,
  delays,
  borders,
  borderWidths,
  borderStyles,
  borderRadius,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  shadows,
  sizes,
  spacings,
  api,
};
