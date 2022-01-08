import { CSSProperties } from "../types";
import { CSSObject } from "@emotion/react";
import { responsive, ResponsiveValue } from "./responsive";
import { UstyledFn } from "./index";
import { $color, ColorProperty } from "./util";

// prettier-ignore
export interface Background {
  bg: (value: ResponsiveValue<ColorProperty>, dark?: ResponsiveValue<ColorProperty>) => CSSObject;
  bgColor: (value: ResponsiveValue<ColorProperty>, dark?: ResponsiveValue<ColorProperty>) => CSSObject;
  bgImage: (value: ResponsiveValue<CSSProperties["backgroundImage"]>) => CSSObject;
  bgSize: (value: ResponsiveValue<CSSProperties["backgroundSize"]>) => CSSObject;
  bgPos: (value: ResponsiveValue<CSSProperties["backgroundPosition"]>) => CSSObject;
  bgRepeat: (value: ResponsiveValue<CSSProperties["backgroundRepeat"]>) => CSSObject;
  bgAttachment: (value: ResponsiveValue<CSSProperties["backgroundAttachment"]>) => CSSObject;
  bgBlendMode: (value: ResponsiveValue<CSSProperties["backgroundBlendMode"]>) => CSSObject;
}

export const background: UstyledFn<Background> = (theme) => {
  const color = $color(theme);
  return {
    bg: (value, dark) => {
      if (theme.colorMode === "light" || !dark) {
        return responsive(theme, value, (unit) => ({
          background: color(unit),
        }));
      } else {
        return responsive(theme, dark, (unit) => ({
          background: color(unit),
        }));
      }
    },
    bgColor: (value, dark) => {
      if (theme.colorMode === "light" || !dark) {
        return responsive(theme, value, (unit) => ({
          backgroundColor: color(unit),
        }));
      } else {
        return responsive(theme, dark, (unit) => ({
          backgroundColor: color(unit),
        }));
      }
    },
    bgImage: (value) =>
      responsive(theme, value, (unit) => ({
        backgroundImage: unit,
      })),
    bgSize: (value) =>
      responsive(theme, value, (unit) => ({
        backgroundSize: unit,
      })),
    bgPos: (value) =>
      responsive(theme, value, (unit) => ({
        backgroundPosition: unit,
      })),
    bgRepeat: (value) =>
      responsive(theme, value, (unit) => ({
        backgroundRepeat: unit,
      })),
    bgAttachment: (value) =>
      responsive(theme, value, (unit) => ({
        backgroundAttachment: unit,
      })),
    bgBlendMode: (value) =>
      responsive(theme, value, (unit) => ({
        backgroundBlendMode: unit,
      })),
  };
};
