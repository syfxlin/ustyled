import { compose, style } from "../style";
import { CSSApi, CSSProperties, CSSVar } from "../../types";
import { spacing as $spacing } from "../util";

// margin
export const margin = style<"m" | "margin", CSSProperties["margin"]>({
  prop: ["m", "margin"],
  css: (value) => (theme) => ({
    margin: $spacing(value, theme),
  }),
});

// margin-top
export const marginTop = style<"mt" | "marginTop", CSSProperties["marginTop"]>({
  prop: ["mt", "marginTop"],
  css: (value) => (theme) => ({
    marginTop: $spacing(value, theme),
  }),
});

// margin-bottom
export const marginBottom = style<"mb" | "marginBottom", CSSProperties["marginBottom"]>({
  prop: ["mb", "marginBottom"],
  css: (value) => (theme) => ({
    marginBottom: $spacing(value, theme),
  }),
});

// margin-left
export const marginLeft = style<"ml" | "marginLeft", CSSProperties["marginLeft"]>({
  prop: ["ml", "marginLeft"],
  css: (value) => (theme) => ({
    marginLeft: $spacing(value, theme),
  }),
});

// margin-right
export const marginRight = style<"mr" | "marginRight", CSSProperties["marginRight"]>({
  prop: ["mr", "marginRight"],
  css: (value) => (theme) => ({
    marginRight: $spacing(value, theme),
  }),
});

// margin-x
export const marginX = style<"mx" | "marginX", CSSProperties["marginLeft"]>({
  prop: ["mx", "marginX"],
  css: (value) => (theme) => ({
    marginLeft: $spacing(value, theme),
    marginRight: $spacing(value, theme),
  }),
});

// margin-y
export const marginY = style<"my" | "marginY", CSSProperties["marginTop"]>({
  prop: ["my", "marginY"],
  css: (value) => (theme) => ({
    marginTop: $spacing(value, theme),
    marginBottom: $spacing(value, theme),
  }),
});

// margin-inline-start
export const marginInlineStart = style<"ms" | "marginInlineStart", CSSProperties["marginInlineStart"]>({
  prop: ["ms", "marginInlineStart"],
  css: (value) => (theme) => ({
    marginInlineStart: $spacing(value, theme),
  }),
});

// margin-inline-end
export const marginInlineEnd = style<"me" | "marginInlineEnd", CSSProperties["marginInlineEnd"]>({
  prop: ["me", "marginInlineEnd"],
  css: (value) => (theme) => ({
    marginInlineEnd: $spacing(value, theme),
  }),
});

// padding
export const padding = style<"p" | "padding", CSSProperties["padding"]>({
  prop: ["p", "padding"],
  css: (value) => (theme) => ({
    padding: $spacing(value, theme),
  }),
});

// padding-top
export const paddingTop = style<"pt" | "paddingTop", CSSProperties["paddingTop"]>({
  prop: ["pt", "paddingTop"],
  css: (value) => (theme) => ({
    paddingTop: $spacing(value, theme),
  }),
});

// padding-bottom
export const paddingBottom = style<"pb" | "paddingBottom", CSSProperties["paddingBottom"]>({
  prop: ["pb", "paddingBottom"],
  css: (value) => (theme) => ({
    paddingBottom: $spacing(value, theme),
  }),
});

// padding-left
export const paddingLeft = style<"pl" | "paddingLeft", CSSProperties["paddingLeft"]>({
  prop: ["pl", "paddingLeft"],
  css: (value) => (theme) => ({
    paddingLeft: $spacing(value, theme),
  }),
});

// padding-right
export const paddingRight = style<"pr" | "paddingRight", CSSProperties["paddingRight"]>({
  prop: ["pr", "paddingRight"],
  css: (value) => (theme) => ({
    paddingRight: $spacing(value, theme),
  }),
});

// padding-x
export const paddingX = style<"px" | "paddingX", CSSProperties["paddingLeft"]>({
  prop: ["px", "paddingX"],
  css: (value) => (theme) => ({
    paddingLeft: $spacing(value, theme),
    paddingRight: $spacing(value, theme),
  }),
});

// padding-y
export const paddingY = style<"py" | "paddingY", CSSProperties["paddingTop"]>({
  prop: ["py", "paddingY"],
  css: (value) => (theme) => ({
    paddingTop: $spacing(value, theme),
    paddingBottom: $spacing(value, theme),
  }),
});

// padding-inline-start
export const paddingInlineStart = style<"ps" | "paddingInlineStart", CSSProperties["paddingInlineStart"]>({
  prop: ["ps", "paddingInlineStart"],
  css: (value) => (theme) => ({
    paddingInlineStart: $spacing(value, theme),
  }),
});

// padding-inline-end
export const paddingInlineEnd = style<"pe" | "paddingInlineEnd", CSSProperties["paddingInlineEnd"]>({
  prop: ["pe", "paddingInlineEnd"],
  css: (value) => (theme) => ({
    paddingInlineEnd: $spacing(value, theme),
  }),
});

export const spacing = compose(
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginX,
  marginY,
  marginInlineStart,
  marginInlineEnd,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingX,
  paddingY,
  paddingInlineStart,
  paddingInlineEnd
);

export type SpacingApi = CSSApi<typeof margin> &
  CSSApi<typeof marginTop> &
  CSSApi<typeof marginBottom> &
  CSSApi<typeof marginLeft> &
  CSSApi<typeof marginRight> &
  CSSApi<typeof marginX> &
  CSSApi<typeof marginY> &
  CSSApi<typeof marginInlineStart> &
  CSSApi<typeof marginInlineEnd> &
  CSSApi<typeof padding> &
  CSSApi<typeof paddingTop> &
  CSSApi<typeof paddingBottom> &
  CSSApi<typeof paddingLeft> &
  CSSApi<typeof paddingRight> &
  CSSApi<typeof paddingX> &
  CSSApi<typeof paddingY> &
  CSSApi<typeof paddingInlineStart> &
  CSSApi<typeof paddingInlineEnd>;

export type SpacingVar = CSSVar<SpacingApi>;
