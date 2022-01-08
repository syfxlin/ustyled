import { CSSProperties } from "../types";
import { CSSObject } from "@emotion/react";
import { responsive, ResponsiveValue } from "./responsive";
import { UstyledFn } from "./index";

// prettier-ignore
export interface Flexbox {
  align: (value: ResponsiveValue<CSSProperties["alignItems"]>) => CSSObject;
  alignContent: (value: ResponsiveValue<CSSProperties["alignContent"]>) => CSSObject;
  justify: (value: ResponsiveValue<CSSProperties["justifyContent"]>) => CSSObject;
  justifyItems: (value: ResponsiveValue<CSSProperties["justifyItems"]>) => CSSObject;
  wrap: (value: ResponsiveValue<CSSProperties["flexWrap"]>) => CSSObject;
  direction: (value: ResponsiveValue<CSSProperties["flexDirection"]>) => CSSObject;
  flex: (value: ResponsiveValue<CSSProperties["flex"]>) => CSSObject;
  flexGrow: (value: ResponsiveValue<CSSProperties["flexGrow"]>) => CSSObject;
  flexShrink: (value: ResponsiveValue<CSSProperties["flexShrink"]>) => CSSObject;
  flexBasis: (value: ResponsiveValue<CSSProperties["flexBasis"]>) => CSSObject;
  justifySelf: (value: ResponsiveValue<CSSProperties["justifySelf"]>) => CSSObject;
  alignSelf: (value: ResponsiveValue<CSSProperties["alignSelf"]>) => CSSObject;
  order: (value: ResponsiveValue<CSSProperties["order"]>) => CSSObject;
}

export const flexbox: UstyledFn<Flexbox> = (theme) => ({
  align: (value) =>
    responsive(theme, value, (unit) => ({
      alignItems: unit,
    })),
  alignContent: (value) =>
    responsive(theme, value, (unit) => ({
      alignContent: unit,
    })),
  justify: (value) =>
    responsive(theme, value, (unit) => ({
      justifyContent: unit,
    })),
  justifyItems: (value) =>
    responsive(theme, value, (unit) => ({
      justifyItems: unit,
    })),
  wrap: (value) =>
    responsive(theme, value, (unit) => ({
      flexWrap: unit,
    })),
  direction: (value) =>
    responsive(theme, value, (unit) => ({
      flexDirection: unit,
    })),
  flex: (value) =>
    responsive(theme, value, (unit) => ({
      flex: unit,
    })),
  flexGrow: (value) =>
    responsive(theme, value, (unit) => ({
      flexGrow: unit,
    })),
  flexShrink: (value) =>
    responsive(theme, value, (unit) => ({
      flexShrink: unit,
    })),
  flexBasis: (value) =>
    responsive(theme, value, (unit) => ({
      flexBasis: theme.sizes(unit),
    })),
  justifySelf: (value) =>
    responsive(theme, value, (unit) => ({
      justifySelf: unit,
    })),
  alignSelf: (value) =>
    responsive(theme, value, (unit) => ({
      alignSelf: unit,
    })),
  order: (value) =>
    responsive(theme, value, (unit) => ({
      order: unit,
    })),
});
