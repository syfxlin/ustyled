import { CSSObject } from "@emotion/react";
import { CSSProperties, UstyledFn } from "../types";
import { responsive, ResponsiveValue } from "./responsive";

// prettier-ignore
export type Space = {
  m: (value: ResponsiveValue<CSSProperties["margin"]>) => CSSObject;
  mt: (value: ResponsiveValue<CSSProperties["marginTop"]>) => CSSObject;
  mb: (value: ResponsiveValue<CSSProperties["marginBottom"]>) => CSSObject;
  ml: (value: ResponsiveValue<CSSProperties["marginLeft"]>) => CSSObject;
  mr: (value: ResponsiveValue<CSSProperties["marginRight"]>) => CSSObject;
  mx: (value: ResponsiveValue<CSSProperties["margin"]>) => CSSObject;
  my: (value: ResponsiveValue<CSSProperties["margin"]>) => CSSObject;
  ms: (value: ResponsiveValue<CSSProperties["marginInlineStart"]>) => CSSObject;
  me: (value: ResponsiveValue<CSSProperties["marginInlineEnd"]>) => CSSObject;
  p: (value: ResponsiveValue<CSSProperties["padding"]>) => CSSObject;
  pt: (value: ResponsiveValue<CSSProperties["paddingTop"]>) => CSSObject;
  pb: (value: ResponsiveValue<CSSProperties["paddingBottom"]>) => CSSObject;
  pl: (value: ResponsiveValue<CSSProperties["paddingLeft"]>) => CSSObject;
  pr: (value: ResponsiveValue<CSSProperties["paddingRight"]>) => CSSObject;
  px: (value: ResponsiveValue<CSSProperties["padding"]>) => CSSObject;
  py: (value: ResponsiveValue<CSSProperties["padding"]>) => CSSObject;
  ps: (value: ResponsiveValue<CSSProperties["paddingInlineStart"]>) => CSSObject;
  pe: (value: ResponsiveValue<CSSProperties["paddingInlineEnd"]>) => CSSObject;
};

export const space: UstyledFn<Space> = (theme) => ({
  m: (value) =>
    responsive(theme, value, (unit) => ({
      margin: theme.spacings(unit),
    })),
  mt: (value) =>
    responsive(theme, value, (unit) => ({
      marginTop: theme.spacings(unit),
    })),
  mb: (value) =>
    responsive(theme, value, (unit) => ({
      marginBottom: theme.spacings(unit),
    })),
  ml: (value) =>
    responsive(theme, value, (unit) => ({
      marginLeft: theme.spacings(unit),
    })),
  mr: (value) =>
    responsive(theme, value, (unit) => ({
      marginRight: theme.spacings(unit),
    })),
  mx: (value) =>
    responsive(theme, value, (unit) => ({
      marginInlineStart: theme.spacings(unit),
      marginInlineEnd: theme.spacings(unit),
    })),
  my: (value) =>
    responsive(theme, value, (unit) => ({
      marginTop: theme.spacings(unit),
      marginBottom: theme.spacings(unit),
    })),
  ms: (value) =>
    responsive(theme, value, (unit) => ({
      marginInlineStart: theme.spacings(unit),
    })),
  me: (value) =>
    responsive(theme, value, (unit) => ({
      marginInlineEnd: theme.spacings(unit),
    })),
  p: (value) =>
    responsive(theme, value, (unit) => ({
      padding: theme.spacings(unit),
    })),
  pt: (value) =>
    responsive(theme, value, (unit) => ({
      paddingTop: theme.spacings(unit),
    })),
  pb: (value) =>
    responsive(theme, value, (unit) => ({
      paddingBottom: theme.spacings(unit),
    })),
  pl: (value) =>
    responsive(theme, value, (unit) => ({
      paddingLeft: theme.spacings(unit),
    })),
  pr: (value) =>
    responsive(theme, value, (unit) => ({
      paddingRight: theme.spacings(unit),
    })),
  px: (value) =>
    responsive(theme, value, (unit) => ({
      paddingInlineStart: theme.spacings(unit),
      paddingInlineEnd: theme.spacings(unit),
    })),
  py: (value) =>
    responsive(theme, value, (unit) => ({
      paddingTop: theme.spacings(unit),
      paddingBottom: theme.spacings(unit),
    })),
  ps: (value) =>
    responsive(theme, value, (unit) => ({
      paddingInlineStart: theme.spacings(unit),
    })),
  pe: (value) =>
    responsive(theme, value, (unit) => ({
      paddingInlineEnd: theme.spacings(unit),
    })),
});
