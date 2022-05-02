import { style, StyleApi } from "../style";
import { defaultColors } from "../../ctx/default-colors";

export const colors = style({
  prop: ["c", "color"],
  css: (ctx) => (value: string, dark?: string) => {
    const parse = (value: string) => {
      const m = value.match(/^([a-zA-Z]+)(\d+)?$/);
      if (!m) {
        return undefined;
      }
      const [, name, level] = m;
      if (name !== "primary" && !defaultColors[name]) {
        return undefined;
      }
      if (level === undefined) {
        return defaultColors[name] as string;
      }
      return defaultColors[name === "primary" ? ctx.primary : name][parseInt(level)];
    };

    if (!dark || ctx.mode === "light") {
      return parse(value) ?? value;
    } else {
      return parse(dark) ?? dark;
    }
  },
});

export type ColorsApi = StyleApi<typeof colors>;
