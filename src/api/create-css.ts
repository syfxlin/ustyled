import { CreateCSS, CSSFunction, CSSInterpolation, CSSObject, CSSVariables } from "../types";
import { kebabToCamel } from "../utils/css";
import deepmerge from "deepmerge";
import { responsive } from "./responsive";
import { $num } from "./util";

// ([-\w]+)                  属性名称，只包含 -、字母、数字，group 1
// (\s*:\s*)                 分隔符和周围空白字符，group 2
// (?=\S)                    先行判断符，指定后续字符应非空
// ((?:\\[\s\S]|[^\\;{}])*?) 属性值，group 3
// (\s*!important)?          important 标志，group 4
// (\s*;)                    结束分号，group 5
const PROP_REGEXP = /([-\w]+)(\s*:\s*)(?=\S)((?:\\[\s\S]|[^\\;{}])*?)(\s*!important)?(\s*;)/g;

// (@[-\w]+\b\s*)            @ 规则，group 1
// (?=\S)                    先行判断符，指定后续字符应非空
// ([^{]+?)?                 查询参数，group 2
// (\s*{)                    结束括号，group 3
const AT_REGEXP = /(@[-\w]+\b\s*)(?=\S)([^{]+?)?(\s*{)/g;

const MATCH_REGEXP = new RegExp(`(?:${PROP_REGEXP.source}|${AT_REGEXP.source})`, "g");

const AT_PROPERTY_REGEXP = /(@[-\w]+\b\s*)(?=\S)(.+)?/;

export const createCss: CreateCSS = ({ theme, styles, ats }) => {
  const template = (raw: string) => {
    let match: RegExpExecArray | null;
    let lastIndex = 0;
    const values: Array<string | CSSObject> = [];
    while ((match = MATCH_REGEXP.exec(raw))) {
      const [, prop, colon, value, imp, semi, at, query, brace] = match;
      if (at) {
        const getter = ats[kebabToCamel(at.trim())];
        if (getter) {
          let line = "";
          line += raw.slice(lastIndex, match.index);
          line += getter(at + query);
          line += brace;
          values.push(line);
          lastIndex = match.index + match[0].length;
        }
      } else {
        const getter = styles[kebabToCamel(prop)];
        if (getter) {
          const val: number | string = $num(`${value}${imp || ""}`.trim());
          values.push(raw.slice(lastIndex, match.index));
          values.push(getter(val));
          lastIndex = match.index + match[0].length;
        }
      }
    }
    values.push(raw.slice(lastIndex, raw.length));
    return values;
  };

  const object = (style: CSSVariables) => {
    let obj: CSSObject = {};
    for (const property in style) {
      obj = deepmerge(
        obj,
        responsive(theme, style[property], (unit) => {
          if (styles[property]) {
            return styles[property](unit);
          }
          let key = property;
          const match = property.match(AT_PROPERTY_REGEXP);
          if (match) {
            const [, at, query] = match;
            const getter = ats[kebabToCamel(at.trim())];
            if (getter) {
              key = getter(at + query);
            }
          }
          if (unit === null || unit === undefined) {
            return {};
          }
          if (typeof unit === "number" || typeof unit === "string") {
            return { [key]: unit };
          }
          return { [key]: object(unit as CSSVariables) };
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
