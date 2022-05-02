import { CSSInterpolation } from "@emotion/serialize";
import { css, SerializedStyles } from "@emotion/react";

export const MIXIN_REGEXP = /\.([\w_-]+)\(([^)]*)\)/g;

export const NAMED_ARGS_REGEXP = /@[\w_-]+\s*:/;

export const createCss = (api: Record<string, any>) => {
  const parseValue = (raw: string): any => {
    if (raw.startsWith(`'`) && raw.endsWith(`'`)) {
      return raw.substring(1, raw.length - 1);
    } else if (raw.startsWith(`"`) && raw.endsWith(`"`)) {
      return raw.substring(1, raw.length - 1);
    } else if (raw === "null") {
      return null;
    } else if (raw === "undefined") {
      return undefined;
    } else if (!isNaN(parseFloat(raw))) {
      return parseFloat(raw);
    } else {
      return raw;
    }
  };

  const parseArgs = (raw: string): any[] => {
    const values: any[] = [];
    if (NAMED_ARGS_REGEXP.test(raw)) {
      // named args
      const args = raw.split(",").map((i) => i.trim());
      const obj: any = {};
      for (const arg of args) {
        const [k, v] = arg.replace(/^@/, "").split(":");
        obj[k] = parseValue(v);
      }
      values.push(obj);
    } else {
      // normal args
      const args = raw.split(",").map((i) => i.trim());
      for (const arg of args) {
        values.push(parseValue(arg));
      }
    }
    return values;
  };

  const parseStyle = (raw: string): string => {
    let match: RegExpExecArray | null;
    let index = 0;
    let values = "";
    while ((match = MIXIN_REGEXP.exec(raw))) {
      const [fn, name, args] = match;
      if (api[name]) {
        values += raw.slice(index, match.index);
        values += api[name](...parseArgs(args));
        index = match.index + fn.length;
      }
    }
    values += raw.slice(index, raw.length);
    return values;
  };

  return (first: TemplateStringsArray | CSSInterpolation, ...args: Array<CSSInterpolation>): SerializedStyles => {
    // @ts-ignore
    const result = css(first, ...args);
    return {
      ...result,
      styles: parseStyle(result.styles),
    };
  };
};
