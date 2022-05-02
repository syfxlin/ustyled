import { compose, style, StyleApi } from "../style";

export const up = style({
  prop: ["up"],
  css: (ctx) => (value: string) => {
    // @ts-ignore
    return `@media (min-width: ${ctx.breakpoints[value] ?? value}px)`;
  },
});

export const down = style({
  prop: ["down"],
  css: (ctx) => (value: string) => {
    // @ts-ignore
    return `@media (max-width: ${ctx.breakpoints[value] ?? value}px)`;
  },
});

export const between = style({
  prop: ["between"],
  css: (ctx) => (min: string, max: string) => {
    // @ts-ignore prettier-ignore
    return `@media (min-width: ${ctx.breakpoints[min] ?? min}px) and (max-width: ${ctx.breakpoints[max] ?? max}px)`;
  },
});

export const responsive = compose(up, down, between);

export type ResponsiveApi = StyleApi<typeof up> & StyleApi<typeof down> & StyleApi<typeof between>;
