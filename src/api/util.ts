import { UstyledTheme } from "../theme";

export const color = (color: string | number | undefined, theme: UstyledTheme): string => {
  const parse = (value: string) => {
    const m = value.match(/^([a-zA-Z]+)(\d+)?$/);
    if (!m || !theme.colors[m[1]]) {
      return value;
    }
    const [, name, level] = m;
    if (level === undefined) {
      return theme.colors[name] as string;
    }
    return theme.colors[name === "primary" ? theme.primaryColor : name][parseInt(level)];
  };

  // prettier-ignore
  const [value, dark] = String(color).split(/\s*,\s*/).map((c) => c.trim());
  if (!dark || theme.colorMode === "light") {
    return parse(value);
  } else {
    return parse(dark);
  }
};

// TODO: 优化处理
export const border = (value: string | number, theme: UstyledTheme): string => {
  if (typeof value === "number") {
    return String(theme.borderWidths(value) ?? value);
  }
  const values = value.split(/\s+/).map((v) => {
    const w = theme.borderWidths(num(v));
    const c = color(w, theme);
    return c ?? v;
  });
  return values.join(" ");
};

// TODO: 优化处理
export const spacing = (value: string | number, theme: UstyledTheme): string => {
  if (typeof value === "number") {
    return px(theme.spacings(value));
  }
  const values = value.split(/\s+/).map((v) => {
    return px(theme.spacings(num(v)));
  });
  return values.join(" ");
};

export const num = (value: string | number) => {
  if (typeof value === "number") {
    return value;
  }
  // @ts-ignore
  if (value !== "" && !isNaN(value)) {
    value = parseFloat(value);
  }
  return value;
};

export const px = (value: string | number | undefined | null): string => {
  if (value === null || value === undefined) {
    return `0px`;
  }
  if (typeof value === "number") {
    return `${value}px`;
  }
  return value;
};
