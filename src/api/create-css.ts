import { UstyledTheme } from "../theme";
import { CSSFunction, CSSInterpolation, CSSObject, CSSVariables, Responsive, StyleGenerator } from "../types";
import { kebabToCamel } from "../utils/css";
import deepmerge from "deepmerge";
import { responsive } from "./responsive";

// ([-\w]+)                  属性名称，只包含 -、字母、数字，group 1
// (\s*:\s*)                 分隔符和周围空白字符，group 2
// (?=\S)                    先行判断符，指定后续字符应非空
// ((?:\\[\s\S]|[^\\;{}])*?) 属性值，group 3
// (\s*!important)?          important 标志，group 4
// (\s*;)                    结束分号，group5
const PROP_REGEXP = /([-\w]+)(\s*:\s*)(?=\S)((?:\\[\s\S]|[^\\;{}])*?)(\s*!important)?(\s*;)/g;

export const createCss = (theme: UstyledTheme, generator: StyleGenerator) => {
  const api = generator(theme);

  const template = (raw: string) => {
    let match: RegExpExecArray | null;
    let lastIndex = 0;
    const values: Array<string | CSSObject> = [];
    while ((match = PROP_REGEXP.exec(raw))) {
      const [, prop, colon, value, imp, semi] = match;
      const getter = api[kebabToCamel(prop)];
      if (getter) {
        let val: number | string = `${value}${imp || ""}`.trim();
        // @ts-ignore
        if (val !== "" && !isNaN(val)) {
          val = parseFloat(val);
        }
        values.push(raw.slice(lastIndex, match.index));
        values.push(getter(val));
        lastIndex = match.index + match[0].length;
      }
    }
    values.push(raw.slice(lastIndex, raw.length));
    return values;
  };

  const object = (style: Responsive<CSSVariables>) => {
    let obj: CSSObject = {};
    for (const key in style) {
      obj = deepmerge(
        obj,
        responsive(theme, style[key], (unit) => {
          if (api[key]) {
            return api[key](unit);
          } else {
            return { [key]: unit };
          }
        })
      );
    }
    return obj;
  };

  const interpolation = (ip: CSSInterpolation): Array<string | CSSObject> => {
    if (ip == null || typeof ip === "boolean") {
      return [];
    }
    if (typeof ip === "number") {
      return [String(ip)];
    }
    if (typeof ip === "string") {
      return template(ip);
    }
    if (Array.isArray(ip)) {
      return ip.map((i) => interpolation(i)).flat();
    } else {
      return [object(ip)];
    }
  };

  const fun: CSSFunction = (first, ...args) => {
    const values: Array<Array<string | CSSObject>> = [];

    // @ts-ignore
    const stringMode = !(first == null || first.raw === undefined);

    if (stringMode) {
      const strings = first as TemplateStringsArray;
      let string = strings[0];
      for (let i = 0; i < args.length; i++) {
        const arg = args[0];
        if (arg === undefined || arg === null) {
          continue;
        }
        if (typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string") {
          string += arg;
          string += strings[i + 1];
        } else {
          values.push(template(string));
          values.push(interpolation(arg));
          string = strings[i + 1];
        }
      }
      values.push(template(string));
    } else {
      const ip = first as CSSInterpolation;
      values.push(interpolation(ip));
      for (let i = 0; i < args.length; i++) {
        values.push(interpolation(args[i]));
      }
    }
    return values.flat();
  };

  return fun;
};
