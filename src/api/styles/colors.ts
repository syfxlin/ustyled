import { style, StyleApi } from "../style";
import { defaultColors } from "../../ctx";
import alpha from "color-alpha";

export const colors = style({
  prop: ["c", "color"],
  css: (ctx) => (value: string, dark?: string) => {
    const parse = (value: string) => {
      const m = value.match(/^([a-zA-Z]+)(\d+)?(?:\[([\d.]+)])?$/);
      if (!m) {
        return undefined;
      }
      const [, name, level, opacity] = m;
      if (name !== "primary" && !defaultColors[name]) {
        return undefined;
      }
      let color: string;
      if (level === undefined) {
        color = defaultColors[name] as string;
      } else {
        color = defaultColors[name === "primary" ? ctx.primary : name][parseInt(level)];
      }
      if (opacity === undefined) {
        return color;
      } else {
        return alpha(color, parseFloat(opacity));
      }
    };

    if (!dark || ctx.mode === "light") {
      return parse(value) ?? value;
    } else {
      return parse(dark) ?? dark;
    }
  },
});

export type ColorsApi = StyleApi<typeof colors>;
