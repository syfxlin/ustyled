import { CSSObject } from "@emotion/react";
import { CSSProperties } from "../types";
import { responsive, ResponsiveValue } from "./responsive";
import { UstyledFn } from "./index";

// prettier-ignore
export interface Typography {
  fontFamily: (value: ResponsiveValue<CSSProperties["fontFamily"]>) => CSSObject;
  fontSize: (value: ResponsiveValue<CSSProperties["fontSize"]>) => CSSObject;
  fontWeight: (value: ResponsiveValue<CSSProperties["fontWeight"]>) => CSSObject;
  fontStyle: (style: ResponsiveValue<CSSProperties["fontStyle"]>) => CSSObject;
  lineHeight: (value: ResponsiveValue<CSSProperties["lineHeight"]>) => CSSObject;
  letterSpacing: (value: ResponsiveValue<CSSProperties["letterSpacing"]>) => CSSObject;
  textAlign: (value: ResponsiveValue<CSSProperties["textAlign"]>) => CSSObject;
  wordBreak: (value: ResponsiveValue<CSSProperties["wordBreak"]>) => CSSObject;
  overflowWrap: (value: ResponsiveValue<CSSProperties["overflowWrap"]>) => CSSObject;
  textOverflow: (value: ResponsiveValue<CSSProperties["textOverflow"]>) => CSSObject;
  textTransform: (value: ResponsiveValue<CSSProperties["textTransform"]>) => CSSObject;
  whiteSpace: (value: ResponsiveValue<CSSProperties["whiteSpace"]>) => CSSObject;
  textDecoration: (value: ResponsiveValue<CSSProperties["textDecoration"]>) => CSSObject;
}

export const typography: UstyledFn<Typography> = (theme) => ({
  fontFamily: (value) =>
    responsive(theme, value, (unit) => ({
      fontFamily: theme.fonts(unit),
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
  wordBreak: (align) =>
    responsive(theme, align, (unit) => ({
      wordBreak: unit,
    })),
  overflowWrap: (align) =>
    responsive(theme, align, (unit) => ({
      overflowWrap: unit,
    })),
  textOverflow: (align) =>
    responsive(theme, align, (unit) => ({
      textOverflow: unit,
    })),
  textTransform: (align) =>
    responsive(theme, align, (unit) => ({
      textTransform: unit,
    })),
  whiteSpace: (align) =>
    responsive(theme, align, (unit) => ({
      whiteSpace: unit,
    })),
  textDecoration: (align) =>
    responsive(theme, align, (unit) => ({
      textDecoration: unit,
    })),
});
