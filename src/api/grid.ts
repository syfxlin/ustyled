import { responsive, ResponsiveValue } from "./responsive";
import { CSSProperties } from "../types";
import { CSSObject } from "@emotion/react";
import { UstyledFn } from "./index";

// prettier-ignore
export interface Grid {
  gap: (value: ResponsiveValue<CSSProperties["gap"]>) => CSSObject;
  rowGap: (value: ResponsiveValue<CSSProperties["rowGap"]>) => CSSObject;
  columnGap: (value: ResponsiveValue<CSSProperties["columnGap"]>) => CSSObject;
  column: (value: ResponsiveValue<CSSProperties["gridColumn"]>) => CSSObject;
  row: (value: ResponsiveValue<CSSProperties["gridRow"]>) => CSSObject;
  area: (value: ResponsiveValue<CSSProperties["gridArea"]>) => CSSObject;
  autoFlow: (value: ResponsiveValue<CSSProperties["gridAutoFlow"]>) => CSSObject;
  autoRows: (value: ResponsiveValue<CSSProperties["gridAutoRows"]>) => CSSObject;
  autoColumns: (value: ResponsiveValue<CSSProperties["gridAutoColumns"]>) => CSSObject;
  templateRows: (value: ResponsiveValue<CSSProperties["gridTemplateRows"]>) => CSSObject;
  templateColumns: (value: ResponsiveValue<CSSProperties["gridTemplateColumns"]>) => CSSObject;
  templateAreas: (value: ResponsiveValue<CSSProperties["gridTemplateAreas"]>) => CSSObject;
}

export const grid: UstyledFn<Grid> = (theme) => ({
  gap: (value) =>
    responsive(theme, value, (unit) => ({
      gap: theme.spacings(unit),
    })),
  rowGap: (value) =>
    responsive(theme, value, (unit) => ({
      rowGap: theme.spacings(unit),
    })),
  columnGap: (value) =>
    responsive(theme, value, (unit) => ({
      columnGap: theme.spacings(unit),
    })),
  column: (value) =>
    responsive(theme, value, (unit) => ({
      gridColumn: unit,
    })),
  row: (value) =>
    responsive(theme, value, (unit) => ({
      gridRow: unit,
    })),
  area: (value) =>
    responsive(theme, value, (unit) => ({
      gridArea: unit,
    })),
  autoFlow: (value) =>
    responsive(theme, value, (unit) => ({
      gridAutoFlow: unit,
    })),
  autoRows: (value) =>
    responsive(theme, value, (unit) => ({
      gridAutoRows: unit,
    })),
  autoColumns: (value) =>
    responsive(theme, value, (unit) => ({
      gridAutoColumns: unit,
    })),
  templateRows: (value) =>
    responsive(theme, value, (unit) => ({
      gridTemplateRows: unit,
    })),
  templateColumns: (value) =>
    responsive(theme, value, (unit) => ({
      gridTemplateColumns: unit,
    })),
  templateAreas: (value) =>
    responsive(theme, value, (unit) => ({
      gridTemplateAreas: unit,
    })),
});
