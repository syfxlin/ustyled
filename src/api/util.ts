import { CSSObject } from "@emotion/react";
import deepmerge from "deepmerge";
import { UstyledFn } from "./index";
import { responsive, ResponsiveValue } from "./responsive";
import { UstyledTheme } from "../theme";

export type ColorProperty = string | [string, (v: string) => string];

export const $color = (theme: UstyledTheme) => {
  return (c: ColorProperty): string => {
    if (typeof c === "string") {
      c = [c, (v) => v];
    }
    const [color, convert] = c;
    const m = color.match(/^([a-zA-Z]+)(\d+)?$/);
    if (!m || !theme.colors[m[1]]) {
      return color;
    }
    const [, name, level] = m;
    if (level === undefined) {
      return convert(theme.colors[name] as string);
    }
    return convert(
      theme.colors[name === "primary" ? theme.primaryColor : name][
        parseInt(level)
      ]
    );
  };
};

export const $merge = (...styles: CSSObject[]) => {
  return deepmerge.all<CSSObject>(styles);
};

// prettier-ignore
export interface Util {
  theme: UstyledTheme;
  $merge: (...styles: CSSObject[]) => CSSObject;
  $responsive: <T>(value: ResponsiveValue<T>, fn: (unit: T) => CSSObject) => CSSObject;
  $color: (value: ColorProperty, dark?: ColorProperty) => string;
  $size: (value: string | number) => string | number | undefined;
  $spacing: (value: string | number) => string | number | undefined;
}

export const util: UstyledFn<Util> = (theme) => ({
  theme,
  $merge,
  $responsive: (value, fn) => {
    return responsive(theme, value, fn);
  },
  $color: $color(theme),
  $size: (value) => theme.sizes(value),
  $spacing: (value) => theme.spacings(value),
});
