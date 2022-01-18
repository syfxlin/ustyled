import { compose, style } from "../style";
import { CSSApi, CSSProperties, CSSVar } from "../../types";

// box-sizing
export const boxSizing = style<"boxSizing", CSSProperties["boxSizing"]>({
  prop: ["boxSizing"],
  css: (value) => ({
    boxSizing: value,
  }),
});

// display
export const display = style<"display", CSSProperties["display"]>({
  prop: ["display"],
  css: (value) => ({
    display: value,
  }),
});

// float
export const float = style<"float", CSSProperties["float"]>({
  prop: ["float"],
  css: (value) => ({
    float: value,
  }),
});

// overflow
export const overflow = style<"overflow", CSSProperties["overflow"]>({
  prop: ["overflow"],
  css: (value) => ({
    overflow: value,
  }),
});

// overflow-x
export const overflowX = style<"overflowX", CSSProperties["overflowX"]>({
  prop: ["overflowX"],
  css: (value) => ({
    overflowX: value,
  }),
});

// overflow-y
export const overflowY = style<"overflowY", CSSProperties["overflowY"]>({
  prop: ["overflowY"],
  css: (value) => ({
    overflowY: value,
  }),
});

// position
export const position = style<"position", CSSProperties["position"]>({
  prop: ["position"],
  css: (value) => ({
    position: value,
  }),
});

// z-index
export const zIndex = style<"zIndex", CSSProperties["zIndex"]>({
  prop: ["zIndex"],
  css: (value) => ({
    zIndex: value,
  }),
});

// top
export const top = style<"top", CSSProperties["top"]>({
  prop: ["top"],
  css: (value) => (theme) => ({
    top: theme.spacings(value),
  }),
});

// bottom
export const bottom = style<"bottom", CSSProperties["bottom"]>({
  prop: ["bottom"],
  css: (value) => (theme) => ({
    bottom: theme.spacings(value),
  }),
});

// left
export const left = style<"left", CSSProperties["left"]>({
  prop: ["left"],
  css: (value) => (theme) => ({
    left: theme.spacings(value),
  }),
});

// right
export const right = style<"right", CSSProperties["right"]>({
  prop: ["right"],
  css: (value) => (theme) => ({
    right: theme.spacings(value),
  }),
});

// visibility
export const visibility = style<"visibility", CSSProperties["visibility"]>({
  prop: ["visibility"],
  css: (value) => ({
    visibility: value,
  }),
});

// object-fit
export const objectFit = style<"objectFit", CSSProperties["objectFit"]>({
  prop: ["objectFit"],
  css: (value) => ({
    objectFit: value,
  }),
});

export const layout = compose(
  boxSizing,
  display,
  float,
  overflow,
  overflowX,
  overflowY,
  position,
  zIndex,
  top,
  bottom,
  left,
  right,
  visibility,
  objectFit
);

export type LayoutApi = CSSApi<typeof boxSizing> &
  CSSApi<typeof display> &
  CSSApi<typeof float> &
  CSSApi<typeof overflow> &
  CSSApi<typeof overflowX> &
  CSSApi<typeof overflowY> &
  CSSApi<typeof position> &
  CSSApi<typeof zIndex> &
  CSSApi<typeof top> &
  CSSApi<typeof bottom> &
  CSSApi<typeof left> &
  CSSApi<typeof right> &
  CSSApi<typeof visibility> &
  CSSApi<typeof objectFit>;

export type LayoutVar = CSSVar<LayoutApi>;
