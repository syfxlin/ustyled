import { CSSProperties, UstyledFn } from "../types";
import { CSSObject } from "@emotion/react";
import { responsive, ResponsiveValue } from "./responsive";

export type Color = {
  color: (
    value: ResponsiveValue<CSSProperties["color"]>,
    dark?: ResponsiveValue<CSSProperties["color"]>
  ) => CSSObject;
  bg: (
    value: ResponsiveValue<CSSProperties["backgroundColor"]>,
    dark?: ResponsiveValue<CSSProperties["backgroundColor"]>
  ) => CSSObject;
};

type ColorParam = string | [string, (v: string) => string];

export const color: UstyledFn<Color> = (theme) => {
  const parseColor = (c: ColorParam): string => {
    if (typeof c === "string") {
      c = [c, (v) => v];
    }
    const [color, convert] = c;
    const [name, level] = color.split(".");
    if (level === undefined) {
      return theme.colors[name] as string;
    }
    return convert(
      theme.colors[name === "primary" ? theme.primaryColor : name][
        parseInt(level)
      ]
    );
  };

  return {
    color: (value, dark) => {
      if (theme.colorMode === "light" || !dark) {
        return responsive(theme, value, (unit) => ({
          color: parseColor(unit),
        }));
      } else {
        return responsive(theme, dark, (unit) => ({
          color: parseColor(unit),
        }));
      }
    },
    bg: (value, dark) => {
      if (theme.colorMode === "light" || !dark) {
        return responsive(theme, value, (unit) => ({
          backgroundColor: parseColor(unit),
        }));
      } else {
        return responsive(theme, dark, (unit) => ({
          backgroundColor: parseColor(unit),
        }));
      }
    },
  };
};
