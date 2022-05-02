import { compose, style, StyleApi } from "../style";

export const radius = style({
  prop: ["r", "radius"],
  css: () => (value: string | number) => {
    if (typeof value === "number") {
      return `${value * 0.25}rem`;
    }
    const map: Record<string, string> = {
      none: "0px",
      half: "50%",
      full: "9999px",
    };
    return map[value] ?? value;
  },
});

export const borderWidth = style({
  prop: ["bw", "borderWidth"],
  css: () => (value: string | number) => {
    if (typeof value === "number") {
      return `${value}px`;
    }
    return value;
  },
});

export const borders = compose(radius, borderWidth);

export type BordersApi = StyleApi<typeof radius> & StyleApi<typeof borderWidth>;
