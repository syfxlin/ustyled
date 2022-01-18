import { compose, style } from "../style";
import { CSSApi, CSSProperties, CSSVar } from "../../types";
import { color as $color } from "../util";

// color
export const color = style<"color", CSSProperties["color"]>({
  prop: ["color"],
  css: (value) => (theme) => ({
    color: $color(value, theme),
  }),
});

// fill
export const fill = style<"fill", CSSProperties["fill"]>({
  prop: ["fill"],
  css: (value) => (theme) => ({
    fill: $color(value, theme),
  }),
});

// stroke
export const stroke = style<"stroke", CSSProperties["stroke"]>({
  prop: ["stroke"],
  css: (value) => (theme) => ({
    stroke: $color(value, theme),
  }),
});

// opacity
export const opacity = style<"opacity", CSSProperties["opacity"]>({
  prop: ["opacity"],
  css: (value) => ({
    opacity: value,
  }),
});

export const colors = compose(color, fill, stroke, opacity);

export type ColorsApi = CSSApi<typeof color> & CSSApi<typeof fill> & CSSApi<typeof stroke> & CSSApi<typeof opacity>;

export type ColorsVar = CSSVar<ColorsApi>;
