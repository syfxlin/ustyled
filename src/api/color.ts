import { CSSProperties } from "../types";
import { CSSObject } from "@emotion/react";
import { responsive, ResponsiveValue } from "./responsive";
import { UstyledFn } from "./index";
import { $color, ColorProperty } from "./util";

// prettier-ignore
export interface Color {
  color: (value: ResponsiveValue<ColorProperty>, dark?: ResponsiveValue<ColorProperty>) => CSSObject;
  fill: (value: ResponsiveValue<ColorProperty>, dark?: ResponsiveValue<ColorProperty>) => CSSObject;
  stroke: (value: ResponsiveValue<ColorProperty>, dark?: ResponsiveValue<ColorProperty>) => CSSObject;
  opacity: (value: ResponsiveValue<CSSProperties["opacity"]>) => CSSObject;
}

export const color: UstyledFn<Color> = (theme) => {
  const color = $color(theme);
  return {
    color: (value, dark) => {
      if (theme.colorMode === "light" || !dark) {
        return responsive(theme, value, (unit) => ({
          color: color(unit),
        }));
      } else {
        return responsive(theme, dark, (unit) => ({
          color: color(unit),
        }));
      }
    },
    fill: (value, dark) => {
      if (theme.colorMode === "light" || !dark) {
        return responsive(theme, value, (unit) => ({
          fill: color(unit),
        }));
      } else {
        return responsive(theme, dark, (unit) => ({
          fill: color(unit),
        }));
      }
    },
    stroke: (value, dark) => {
      if (theme.colorMode === "light" || !dark) {
        return responsive(theme, value, (unit) => ({
          stroke: color(unit),
        }));
      } else {
        return responsive(theme, dark, (unit) => ({
          stroke: color(unit),
        }));
      }
    },
    opacity: (value) =>
      responsive(theme, value, (unit) => ({
        opacity: unit,
      })),
  };
};
