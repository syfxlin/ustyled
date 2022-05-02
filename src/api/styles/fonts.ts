import { compose, style, StyleApi } from "../style";

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
  css: () => (value: string | number) => {
    if (typeof value === "number") {
      return `${value}rem`;
    }
    return value;
  },
});

export const fonts = compose(font, fontSize);

export type FontsApi = StyleApi<typeof font> & StyleApi<typeof fontSize>;
