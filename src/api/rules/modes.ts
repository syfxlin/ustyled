import { compose, style, StyleApi } from "../style";

export const light = style({
  prop: ["light"],
  css: (ctx) => () => {
    return ctx.mode === "light" ? "@media (min-width: 0px)" : "@media (max-width: 0px)";
  },
});

export const dark = style({
  prop: ["dark"],
  css: (ctx) => () => {
    return ctx.mode === "dark" ? "@media (min-width: 0px)" : "@media (max-width: 0px)";
  },
});

export const modes = compose(light, dark);

export type ModesApi = StyleApi<typeof light> & StyleApi<typeof dark>;
