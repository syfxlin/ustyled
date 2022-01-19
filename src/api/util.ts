import { UstyledTheme } from "../theme";

export const $color = (color: string | number | undefined, theme: UstyledTheme): string => {
  const parse = (value: string) => {
    const m = value.match(/^([a-zA-Z]+)(\d+)?$/);
    if (!m || !theme.colors[m[1]]) {
      return undefined;
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
    return parse(value) ?? value;
  } else {
    return parse(dark) ?? dark;
  }
};

export const $border = (value: string | number, theme: UstyledTheme): string => {
  if (typeof value === "number") {
    return $px(theme.borderWidths(value) ?? value);
  }
  const values = value.split(/\s+/).map((value) => {
    // 解析数字类型，如 2 solid green5，split 后 2 是 string 类型，为了避免主题处理错误，需要验证类型
    let v = $num(value);
    // 解析一次宽度，如果解析成功则应用，如果解析失败则认为是其他属性
    v = theme.borderWidths(v) ?? v;
    if (typeof v === "number") {
      // 如果是 number 类型，则认为一定是宽度
      v = $px(v);
    }
    // 解析颜色
    v = $color(v, theme) ?? v;
    return v;
  });
  return values.join(" ");
};

export const $spacing = (value: string | number, theme: UstyledTheme): string => {
  if (typeof value === "number") {
    return $px(theme.spacings(value));
  }
  const values = value.split(/\s+/).map((v) => {
    return $px(theme.spacings($num(v)) ?? v);
  });
  return values.join(" ");
};

export const $num = (value: string | number) => {
  if (typeof value === "number") {
    return value;
  }
  // @ts-ignore
  if (value !== "" && !isNaN(value)) {
    value = parseFloat(value);
  }
  return value;
};

export const $unit = (unit: string) => {
  return (value: string | number | undefined | null): string => {
    if (value === null || value === undefined) {
      return `0${unit}`;
    }
    if (typeof value === "number") {
      return `${value}${unit}`;
    }
    return value;
  };
};

export const $px = $unit("px");
export const $s = $unit("s");
export const $deg = $unit("deg");
