import { compose, style, StyleApi } from "../style";

export const size = style({
  prop: ["s", "size"],
  css: () => (value: string | number) => {
    if (typeof value === "number") {
      return `${value * 0.25}rem`;
    }
    const map: Record<string, string> = {
      full: "100%",
      min: "min-content",
      max: "max-content",
      vw: "100vw",
      vh: "100vh",
    };
    return map[value] ?? value;
  },
});

export const spacing = style({
  prop: ["sp", "spacing"],
  css: () => (value: string | number) => {
    if (typeof value === "number") {
      return `${value * 0.25}rem`;
    }
    return value;
  },
});

export const sizes = compose(size, spacing);

export type SizesApi = StyleApi<typeof size> & StyleApi<typeof spacing>;
