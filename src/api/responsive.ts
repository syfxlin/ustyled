import { CSSObject } from "@emotion/react";
import { UstyledTheme } from "../theme";

export type ResponsiveValue<T> = [T, T, T, T, T, T] | T;

export const responsive = <T>(
  theme: UstyledTheme,
  value: ResponsiveValue<T>,
  fn: (unit: T) => CSSObject
) => {
  const [_, xs, sm, md, lg, xl] = value instanceof Array ? value : [value];
  const css: CSSObject = fn(_);
  if (xs) {
    css[`@media (min-width: ${theme.breakpoints.xs}px)`] = fn(xs);
  }
  if (sm) {
    css[`@media (min-width: ${theme.breakpoints.sm}px)`] = fn(sm);
  }
  if (md) {
    css[`@media (min-width: ${theme.breakpoints.md}px)`] = fn(md);
  }
  if (lg) {
    css[`@media (min-width: ${theme.breakpoints.lg}px)`] = fn(lg);
  }
  if (xl) {
    css[`@media (min-width: ${theme.breakpoints.xl}px)`] = fn(xl);
  }
  return css;
};
