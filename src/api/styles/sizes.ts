import { style } from "../style";
import { multiply } from "../../utils/multiply";

export const size = style({
  prop: ["s", "size"],
  css: (ctx) => (value: string | number) => {
    if (ctx.sizes[value]) {
      return ctx.sizes[value];
    }
    if (typeof value === "number" && ctx.sizes.unit) {
      return multiply(value, ctx.sizes.unit);
    }
    return value;
  },
});

export const spacing = style({
  prop: ["sp", "spacing"],
  css: (ctx) => (value: string | number) => {
    if (ctx.spacings[value]) {
      return ctx.spacings[value];
    }
    if (typeof value === "number" && ctx.spacings.unit) {
      return multiply(value, ctx.spacings.unit);
    }
    return value;
  },
});
