import { CSSObject } from "@emotion/react";
import { CSSProperties, UstyledFn } from "../types";
import { responsive, ResponsiveValue } from "./responsive";

// prettier-ignore
export type Typography = {
  font: (font: ResponsiveValue<CSSProperties["fontFamily"]>) => CSSObject;
  fontSize: (value: ResponsiveValue<CSSProperties["fontSize"]>) => CSSObject;
  fontWeight: (value: ResponsiveValue<CSSProperties["fontWeight"]>) => CSSObject;
  fontStyle: (style: ResponsiveValue<CSSProperties["fontStyle"]>) => CSSObject;
  lineHeight: (value: ResponsiveValue<CSSProperties["lineHeight"]>) => CSSObject;
  letterSpacing: (value: ResponsiveValue<CSSProperties["letterSpacing"]>) => CSSObject;
  textAlign: (value: ResponsiveValue<CSSProperties["textAlign"]>) => CSSObject;
};

export const typography: UstyledFn<Typography> = (theme) => ({
  font: (font) =>
    responsive(theme, font, (unit) => ({
      fontFamily: theme.fonts[unit] ?? unit,
    })),
  fontSize: (value) =>
    responsive(theme, value, (unit) => ({
      fontSize: theme.fontSizes(unit),
    })),
  fontWeight: (weight) => ({
    fontWeight: weight,
  }),
  fontStyle: (style) => ({
    fontStyle: style,
  }),
  lineHeight: (value) =>
    responsive(theme, value, (unit) => ({
      lineHeight: theme.lineHeights(unit),
    })),
  letterSpacing: (value) =>
    responsive(theme, value, (unit) => ({
      letterSpacing: theme.letterSpacings(unit),
    })),
  textAlign: (align) =>
    responsive(theme, align, (unit) => ({
      textAlign: unit,
    })),
});
