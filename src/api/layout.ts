import { CSSObject } from "@emotion/react";
import { responsive, ResponsiveValue } from "./responsive";
import { CSSProperties } from "../types";
import { UstyledFn } from "./index";

// prettier-ignore
export interface Layout {
  w: (value: ResponsiveValue<CSSProperties["width"]>) => CSSObject;
  h: (value: ResponsiveValue<CSSProperties["height"]>) => CSSObject;
  size: (value: ResponsiveValue<CSSProperties["height"]>) => CSSObject;
  minW: (value: ResponsiveValue<CSSProperties["minWidth"]>) => CSSObject;
  minH: (value: ResponsiveValue<CSSProperties["minHeight"]>) => CSSObject;
  maxW: (value: ResponsiveValue<CSSProperties["maxWidth"]>) => CSSObject;
  maxH: (value: ResponsiveValue<CSSProperties["maxHeight"]>) => CSSObject;
  d: (value: ResponsiveValue<CSSProperties["display"]>) => CSSObject;
  boxSizing: (value: ResponsiveValue<CSSProperties["boxSizing"]>) => CSSObject;
  verticalAlign: (value: ResponsiveValue<CSSProperties["verticalAlign"]>) => CSSObject;
  overflow: (value: ResponsiveValue<CSSProperties["overflow"]>) => CSSObject;
  overflowX: (value: ResponsiveValue<CSSProperties["overflowX"]>) => CSSObject;
  overflowY: (value: ResponsiveValue<CSSProperties["overflowY"]>) => CSSObject;
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
  size: (value) =>
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
  d: (value) =>
    responsive(theme, value, (unit) => ({
      display: unit,
    })),
  boxSizing: (value) =>
    responsive(theme, value, (unit) => ({
      boxSizing: unit,
    })),
  verticalAlign: (value) =>
    responsive(theme, value, (unit) => ({
      verticalAlign: unit,
    })),
  overflow: (value) =>
    responsive(theme, value, (unit) => ({
      overflow: unit,
    })),
  overflowX: (value) =>
    responsive(theme, value, (unit) => ({
      overflow: unit,
    })),
  overflowY: (value) =>
    responsive(theme, value, (unit) => ({
      overflowY: unit,
    })),
});
