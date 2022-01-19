import { compose, style } from "../style";
import { CSSApi, CSSProperties, CSSVar } from "../../types";

// font-family
export const fontFamily = style<"fontFamily", CSSProperties["fontFamily"]>({
  prop: ["fontFamily"],
  css: (value) => (theme) => ({
    fontFamily: theme.fonts(value) ?? value,
  }),
});

// font-size
export const fontSize = style<"fontSize", CSSProperties["fontSize"]>({
  prop: ["fontSize"],
  css: (value) => (theme) => ({
    fontSize: theme.fontSizes(value) ?? value,
  }),
});

// font-style
export const fontStyle = style<"fontStyle", CSSProperties["fontStyle"]>({
  prop: ["fontStyle"],
  css: (value) => ({
    fontStyle: value,
  }),
});

// line-height
export const lineHeight = style<"lineHeight", CSSProperties["lineHeight"]>({
  prop: ["lineHeight"],
  css: (value) => (theme) => ({
    lineHeight: theme.lineHeights(value) ?? value,
  }),
});

// font-weight
export const fontWeight = style<"fontWeight", CSSProperties["fontWeight"]>({
  prop: ["fontWeight"],
  css: (value) => ({
    fontWeight: value,
  }),
});

// text-align
export const textAlign = style<"textAlign", CSSProperties["textAlign"]>({
  prop: ["textAlign"],
  css: (value) => ({
    textAlign: value,
  }),
});

// letter-spacing
export const letterSpacing = style<"letterSpacing", CSSProperties["letterSpacing"]>({
  prop: ["letterSpacing"],
  css: (value) => (theme) => ({
    letterSpacing: theme.letterSpacings(value) ?? value,
  }),
});

// text-transform
export const textTransform = style<"textTransform", CSSProperties["textTransform"]>({
  prop: ["textTransform"],
  css: (value) => ({
    textTransform: value,
  }),
});

// text-decoration
export const textDecoration = style<"textDecoration", CSSProperties["textDecoration"]>({
  prop: ["textDecoration"],
  css: (value) => ({
    textDecoration: value,
  }),
});

// vertical-align
export const verticalAlign = style<"verticalAlign", CSSProperties["verticalAlign"]>({
  prop: ["verticalAlign"],
  css: (value) => ({
    verticalAlign: value,
  }),
});

// white-space
export const whiteSpace = style<"whiteSpace", CSSProperties["whiteSpace"]>({
  prop: ["whiteSpace"],
  css: (value) => ({
    whiteSpace: value,
  }),
});

// text-overflow
export const textOverflow = style<"textOverflow", CSSProperties["textOverflow"]>({
  prop: ["textOverflow"],
  css: (value) => ({
    textOverflow: value,
  }),
});

// list-style-type
export const listStyleType = style<"listStyleType", CSSProperties["listStyleType"]>({
  prop: ["listStyleType"],
  css: (value) => ({
    listStyleType: value,
  }),
});

// list-style-position
export const listStylePosition = style<"listStylePosition", CSSProperties["listStylePosition"]>({
  prop: ["listStylePosition"],
  css: (value) => ({
    listStylePosition: value,
  }),
});

// word-break
export const wordBreak = style<"wordBreak", CSSProperties["wordBreak"]>({
  prop: ["wordBreak"],
  css: (value) => ({
    wordBreak: value,
  }),
});

// overflow-wrap
export const overflowWrap = style<"overflowWrap", CSSProperties["overflowWrap"]>({
  prop: ["overflowWrap"],
  css: (value) => ({
    overflowWrap: value,
  }),
});

export const typography = compose(
  fontFamily,
  fontSize,
  fontStyle,
  lineHeight,
  fontWeight,
  textAlign,
  letterSpacing,
  textTransform,
  textDecoration,
  verticalAlign,
  whiteSpace,
  textOverflow,
  listStyleType,
  listStylePosition,
  wordBreak,
  overflowWrap
);

export type TypographyApi = CSSApi<typeof fontFamily> &
  CSSApi<typeof fontSize> &
  CSSApi<typeof fontStyle> &
  CSSApi<typeof lineHeight> &
  CSSApi<typeof fontWeight> &
  CSSApi<typeof textAlign> &
  CSSApi<typeof letterSpacing> &
  CSSApi<typeof textTransform> &
  CSSApi<typeof textDecoration> &
  CSSApi<typeof verticalAlign> &
  CSSApi<typeof whiteSpace> &
  CSSApi<typeof textOverflow> &
  CSSApi<typeof listStyleType> &
  CSSApi<typeof listStylePosition> &
  CSSApi<typeof wordBreak> &
  CSSApi<typeof overflowWrap>;

export type TypographyVar = CSSVar<TypographyApi>;
