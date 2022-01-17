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
  const [value, dark] = String(color).split(",").map((c) => c.trim());
  if (!dark || theme.colorMode === "light") {
    return parse(value);
  } else {
    return parse(dark);
  }
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
