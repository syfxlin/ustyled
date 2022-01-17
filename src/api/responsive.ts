import { CSSObject, ResponsiveValue } from "../types";
import { UstyledTheme } from "../theme";
import deepmerge from "deepmerge";

export const responsive = <T>(
  theme: UstyledTheme,
  value: ResponsiveValue<T>,
  fn: (unit: T) => CSSObject
): CSSObject => {
  const [_, xs, sm, md, lg, xl] = value instanceof Array ? value : [value];
  let css: CSSObject = fn(_);
  if (xs) {
    css = deepmerge(css, { [`@media (min-width: ${theme.breakpoints.xs}px)`]: fn(xs) });
  }
  if (sm) {
    css = deepmerge(css, { [`@media (min-width: ${theme.breakpoints.sm}px)`]: fn(sm) });
  }
  if (md) {
    css = deepmerge(css, { [`@media (min-width: ${theme.breakpoints.md}px)`]: fn(md) });
  }
  if (lg) {
    css = deepmerge(css, { [`@media (min-width: ${theme.breakpoints.lg}px)`]: fn(lg) });
  }
  if (xl) {
    css = deepmerge(css, { [`@media (min-width: ${theme.breakpoints.xl}px)`]: fn(xl) });
  }
  return css;
};
