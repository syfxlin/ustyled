import { style } from "../style";
import { multiply } from "../../utils/multiply";

export const font = style({
  prop: ["f", "font"],
  css: () => (value: string) => {
    const map: Record<string, string> = {
      sans: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
      serif: `Georgia, Cambria, "Times New Roman", Times, serif`,
    };
    return map[value] ?? value;
  },
});

export const fontSize = style({
  prop: ["fs", "fontSize"],
  css: (ctx) => (value: string | number) => {
    if (ctx.fontSizes[value]) {
      return ctx.fontSizes[value];
    }
    if (typeof value === "number" && ctx.fontSizes.unit) {
      return multiply(value, ctx.fontSizes.unit);
    }
    return value;
  },
});

export const fontWeight = style({
  prop: ["fw", "fontWeight"],
  css: (ctx) => (value: string | number) => {
    if (ctx.fontWeights[value]) {
      return ctx.fontWeights[value];
    }
    if (typeof value === "number" && ctx.fontWeights.unit) {
      return multiply(value, ctx.fontWeights.unit);
    }
    return value;
  },
});

export const letterSpacing = style({
  prop: ["ls", "letterSpacing"],
  css: (ctx) => (value: string | number) => {
    if (ctx.letterSpacings[value]) {
      return ctx.letterSpacings[value];
    }
    if (typeof value === "number" && ctx.letterSpacings.unit) {
      return multiply(value, ctx.letterSpacings.unit);
    }
    return value;
  },
});

export const lineHeight = style({
  prop: ["lh", "lineHeight"],
  css: (ctx) => (value: string | number) => {
    if (ctx.lineHeights[value]) {
      return ctx.lineHeights[value];
    }
    if (typeof value === "number" && ctx.lineHeights.unit) {
      return multiply(value, ctx.lineHeights.unit);
    }
    return value;
  },
});
