import { compose, style } from "../style";
import { CSSApi, CSSProperties, CSSVar } from "../../types";

// width
export const width = style<"w" | "width", CSSProperties["width"]>({
  prop: ["w", "width"],
  css: (value) => (theme) => ({
    width: theme.sizes(value) ?? value,
  }),
});

// height
export const height = style<"h" | "height", CSSProperties["height"]>({
  prop: ["h", "height"],
  css: (value) => (theme) => ({
    height: theme.sizes(value) ?? value,
  }),
});

// max-height
export const maxHeight = style<"maxH" | "maxHeight", CSSProperties["maxHeight"]>({
  prop: ["maxH", "maxHeight"],
  css: (value) => (theme) => ({
    maxHeight: theme.sizes(value) ?? value,
  }),
});

// max-width
export const maxWidth = style<"maxW" | "maxWidth", CSSProperties["maxWidth"]>({
  prop: ["maxW", "maxWidth"],
  css: (value) => (theme) => ({
    maxWidth: theme.sizes(value) ?? value,
  }),
});

// min-height
export const minHeight = style<"minH" | "minHeight", CSSProperties["minHeight"]>({
  prop: ["minH", "minHeight"],
  css: (value) => (theme) => ({
    minHeight: theme.sizes(value) ?? value,
  }),
});

// min-width
export const minWidth = style<"minW" | "minWidth", CSSProperties["minWidth"]>({
  prop: ["minW", "minWidth"],
  css: (value) => (theme) => ({
    minWidth: theme.sizes(value) ?? value,
  }),
});

// mask-size
export const maskSize = style<"maskSize", CSSProperties["maskSize"]>({
  prop: ["maskSize"],
  css: (value) => (theme) => ({
    maskSize: theme.sizes(value) ?? value,
  }),
});

export const sizes = compose(width, height, maxHeight, maxWidth, minHeight, minWidth, maskSize);

export type SizesApi = CSSApi<typeof width> &
  CSSApi<typeof height> &
  CSSApi<typeof maxHeight> &
  CSSApi<typeof maxWidth> &
  CSSApi<typeof minHeight> &
  CSSApi<typeof minWidth> &
  CSSApi<typeof maskSize>;

export type SizesVar = CSSVar<SizesApi>;
