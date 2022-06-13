import { style } from "../style";

export const shadow = style({
  prop: ["sh", "shadow"],
  css: (ctx) => (value: string) => {
    return ctx.shadows[value] ?? value;
  },
});
