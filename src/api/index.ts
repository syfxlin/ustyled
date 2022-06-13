import { StyleApi, StyleGenerator } from "../types";
import { dark, light } from "./rules/modes";
import { between, down, up } from "./rules/responsive";
import { delay, duration, keyframe, property, timingFn } from "./styles/animations";
import { border, borderRadius, borderStyle, borderWidth } from "./styles/borders";
import { color } from "./styles/colors";
import { font, fontSize, fontWeight, letterSpacing, lineHeight } from "./styles/fonts";
import { shadow } from "./styles/shadows";
import { size, spacing } from "./styles/sizes";

export const api: StyleGenerator<any, any>[] = [
  light,
  dark,
  up,
  down,
  between,
  keyframe,
  property,
  timingFn,
  duration,
  delay,
  border,
  borderWidth,
  borderStyle,
  borderRadius,
  color,
  font,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  shadow,
  size,
  spacing,
];

export type UstyledApi = StyleApi<typeof light> &
  StyleApi<typeof dark> &
  StyleApi<typeof up> &
  StyleApi<typeof down> &
  StyleApi<typeof between> &
  StyleApi<typeof keyframe> &
  StyleApi<typeof property> &
  StyleApi<typeof timingFn> &
  StyleApi<typeof duration> &
  StyleApi<typeof delay> &
  StyleApi<typeof border> &
  StyleApi<typeof borderWidth> &
  StyleApi<typeof borderStyle> &
  StyleApi<typeof borderRadius> &
  StyleApi<typeof color> &
  StyleApi<typeof font> &
  StyleApi<typeof fontSize> &
  StyleApi<typeof fontWeight> &
  StyleApi<typeof letterSpacing> &
  StyleApi<typeof lineHeight> &
  StyleApi<typeof shadow> &
  StyleApi<typeof size> &
  StyleApi<typeof spacing>;
