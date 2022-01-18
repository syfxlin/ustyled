import { compose, style } from "../style";
import { CSSApi, CSSProperties, CSSVar } from "../../types";

// gap
export const gap = style<"gap", CSSProperties["gap"]>({
  prop: ["gap"],
  css: (value) => ({
    gap: value,
  }),
});

// row-gap
export const rowGap = style<"rowGap", CSSProperties["rowGap"]>({
  prop: ["rowGap"],
  css: (value) => ({
    rowGap: value,
  }),
});

// column-gap
export const columnGap = style<"columnGap", CSSProperties["columnGap"]>({
  prop: ["columnGap"],
  css: (value) => ({
    columnGap: value,
  }),
});

// grid-column
export const gridColumn = style<"gridColumn", CSSProperties["gridColumn"]>({
  prop: ["gridColumn"],
  css: (value) => ({
    gridColumn: value,
  }),
});

// grid-row
export const gridRow = style<"gridRow", CSSProperties["gridRow"]>({
  prop: ["gridRow"],
  css: (value) => ({
    gridRow: value,
  }),
});

// grid-area
export const gridArea = style<"gridArea", CSSProperties["gridArea"]>({
  prop: ["gridArea"],
  css: (value) => ({
    gridArea: value,
  }),
});

// grid-auto-flow
export const gridAutoFlow = style<"gridAutoFlow", CSSProperties["gridAutoFlow"]>({
  prop: ["gridAutoFlow"],
  css: (value) => ({
    gridAutoFlow: value,
  }),
});

// grid-auto-rows
export const gridAutoRows = style<"gridAutoRows", CSSProperties["gridAutoRows"]>({
  prop: ["gridAutoRows"],
  css: (value) => ({
    gridAutoRows: value,
  }),
});

// grid-auto-columns
export const gridAutoColumns = style<"gridAutoColumns", CSSProperties["gridAutoColumns"]>({
  prop: ["gridAutoColumns"],
  css: (value) => ({
    gridAutoColumns: value,
  }),
});

// grid-template-areas
export const gridTemplateAreas = style<"gridTemplateAreas", CSSProperties["gridTemplateAreas"]>({
  prop: ["gridTemplateAreas"],
  css: (value) => ({
    gridTemplateAreas: value,
  }),
});

// grid-template-rows
export const gridTemplateRows = style<"gridTemplateRows", CSSProperties["gridTemplateRows"]>({
  prop: ["gridTemplateRows"],
  css: (value) => ({
    gridTemplateRows: value,
  }),
});

// grid-template-columns
export const gridTemplateColumns = style<"gridTemplateColumns", CSSProperties["gridTemplateColumns"]>({
  prop: ["gridTemplateColumns"],
  css: (value) => ({
    gridTemplateColumns: value,
  }),
});

export const grids = compose(
  gap,
  rowGap,
  columnGap,
  gridColumn,
  gridRow,
  gridArea,
  gridAutoFlow,
  gridAutoRows,
  gridAutoColumns,
  gridTemplateAreas,
  gridTemplateRows,
  gridTemplateColumns
);

export type GridsApi = CSSApi<typeof gap> &
  CSSApi<typeof rowGap> &
  CSSApi<typeof columnGap> &
  CSSApi<typeof gridColumn> &
  CSSApi<typeof gridRow> &
  CSSApi<typeof gridArea> &
  CSSApi<typeof gridAutoFlow> &
  CSSApi<typeof gridAutoRows> &
  CSSApi<typeof gridAutoColumns> &
  CSSApi<typeof gridTemplateAreas> &
  CSSApi<typeof gridTemplateRows> &
  CSSApi<typeof gridTemplateColumns>;

export type GridsVar = CSSVar<GridsApi>;
