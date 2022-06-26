import { style } from "../style";
import alpha from "color-alpha";

export const color = style({
  prop: ["c", "color"],
  css: (ctx) => (value: string, dark?: string) => {
    const parse = (value: string) => {
      const m = value.match(/^([a-zA-Z]+)(\d+)?(?:[_,-](\d+))?$/);
      if (!m) {
        return undefined;
      }
      const [, name, level, opacity] = m;
      if (name !== "primary" && !ctx.colors[name]) {
        return undefined;
      }
      let color: string;
      if (level === undefined) {
        color = ctx.colors[name] as string;
      } else {
        color = ctx.colors[name === "primary" ? ctx.primary : name][parseInt(level)];
      }
      if (opacity === undefined) {
        return color;
      } else {
        return alpha(color, parseInt(opacity) / 10);
      }
    };

    if (!dark || ctx.mode === "light") {
      return parse(value) ?? value;
    } else {
      return parse(dark) ?? dark;
    }
  },
});
