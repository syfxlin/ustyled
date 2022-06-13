import { style } from "../style";

export const up = style({
  prop: ["up"],
  css: (ctx) => (value: string) => {
    // @ts-ignore
    return `@media (min-width: ${ctx.breakpoints[value] ?? value})`;
  },
});

export const down = style({
  prop: ["down"],
  css: (ctx) => (value: string) => {
    // @ts-ignore
    return `@media (max-width: ${ctx.breakpoints[value] ?? value})`;
  },
});

export const between = style({
  prop: ["between"],
  css: (ctx) => (min: string, max: string) => {
    // @ts-ignore prettier-ignore
    return `@media (min-width: ${ctx.breakpoints[min] ?? min}) and (max-width: ${ctx.breakpoints[max] ?? max})`;
  },
});
