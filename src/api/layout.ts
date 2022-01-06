import { CSSObject } from "@emotion/react";
import { responsive, ResponsiveValue } from "./responsive";
import { CSSProperties, UstyledFn } from "../types";

// prettier-ignore
export type Layout = {
  w: (value: ResponsiveValue<CSSProperties["width"]>) => CSSObject;
  h: (value: ResponsiveValue<CSSProperties["height"]>) => CSSObject;
  wh: (value: ResponsiveValue<CSSProperties["height"]>) => CSSObject;
  minW: (value: ResponsiveValue<CSSProperties["minWidth"]>) => CSSObject;
  minH: (value: ResponsiveValue<CSSProperties["minHeight"]>) => CSSObject;
  maxW: (value: ResponsiveValue<CSSProperties["maxWidth"]>) => CSSObject;
  maxH: (value: ResponsiveValue<CSSProperties["maxHeight"]>) => CSSObject;
  d: (display: ResponsiveValue<CSSProperties["display"]>) => CSSObject;
  boxSizing: (size: ResponsiveValue<CSSProperties["boxSizing"]>) => CSSObject;
  verticalAlign: (align: ResponsiveValue<CSSProperties["verticalAlign"]>) => CSSObject;
  overflow: (overflow: ResponsiveValue<CSSProperties["overflow"]>) => CSSObject;
  overflowX: (overflow: ResponsiveValue<CSSProperties["overflowX"]>) => CSSObject;
  overflowY: (overflow: ResponsiveValue<CSSProperties["overflowY"]>) => CSSObject;
}

export const layout: UstyledFn<Layout> = (theme) => ({
  w: (value) =>
    responsive(theme, value, (unit) => ({
      width: theme.sizes(unit),
    })),
  h: (value) =>
    responsive(theme, value, (unit) => ({
      height: theme.sizes(unit),
    })),
  wh: (value) =>
    responsive(theme, value, (unit) => ({
      width: theme.sizes(unit),
      height: theme.sizes(unit),
    })),
  minW: (value) =>
    responsive(theme, value, (unit) => ({
      minWidth: theme.sizes(unit),
    })),
  minH: (value) =>
    responsive(theme, value, (unit) => ({
      minHeight: theme.sizes(unit),
    })),
  maxW: (value) =>
    responsive(theme, value, (unit) => ({
      maxWidth: theme.sizes(unit),
    })),
  maxH: (value) =>
    responsive(theme, value, (unit) => ({
      maxHeight: theme.sizes(unit),
    })),
  d: (display) =>
    responsive(theme, display, (unit) => ({
      display: unit,
    })),
  boxSizing: (size) =>
    responsive(theme, size, (unit) => ({
      boxSizing: unit,
    })),
  verticalAlign: (align) =>
    responsive(theme, align, (unit) => ({
      verticalAlign: unit,
    })),
  overflow: (overflow) =>
    responsive(theme, overflow, (unit) => ({
      overflow: unit,
    })),
  overflowX: (overflow) =>
    responsive(theme, overflow, (unit) => ({
      overflow: unit,
    })),
  overflowY: (overflow) =>
    responsive(theme, overflow, (unit) => ({
      overflowY: unit,
    })),
});
