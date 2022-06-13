import { style } from "../style";
import { multiply } from "../../utils/multiply";

export const border = style({
  prop: ["b", "border"],
  css: (ctx) => (value: string) => {
    return ctx.borders[value] ?? value;
  },
});

export const borderWidth = style({
  prop: ["bw", "borderWidth"],
  css: (ctx) => (value: string | number) => {
    if (ctx.borderWidths[value]) {
      return ctx.borderWidths[value];
    }
    if (typeof value === "number" && ctx.borderWidths.unit) {
      return multiply(value, ctx.borderWidths.unit);
    }
    return value;
  },
});

export const borderStyle = style({
  prop: ["bs", "borderStyle"],
  css: (ctx) => (value: string) => {
    return ctx.borderStyles[value] ?? value;
  },
});

export const borderRadius = style({
  prop: ["br", "borderRadius"],
  css: (ctx) => (value: string | number) => {
    if (ctx.borderRadius[value]) {
      return ctx.borderRadius[value];
    }
    if (typeof value === "number" && ctx.borderRadius.unit) {
      return multiply(value, ctx.borderRadius.unit);
    }
    return value;
  },
});
