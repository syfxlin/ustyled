import { at } from "../style";
import { CSSApi, CSSVar } from "../../types";
import { $px } from "../util";

const QUERY_REGEXP = /(\(\s*)([-\w]+)(\s*:\s*)([^)]*?)(\s*\))/g;

export const media = at<"@media", string>({
  prop: ["@media"],
  rule: (query) => (theme) => {
    let match: RegExpExecArray | null;
    let lastIndex = 0;
    let values = "";
    while ((match = QUERY_REGEXP.exec(query))) {
      const [, open, prop, colon, value, close] = match;
      if (prop === "min-width" || prop === "max-width") {
        values += query.slice(lastIndex, match.index);
        // @ts-ignore
        values += `${open}${prop}${colon}${$px(theme.breakpoints[value] ?? value)}${close}`;
        lastIndex = match.index + match[0].length;
      }
    }
    values += query.slice(lastIndex, query.length);
    values = values.trim();
    if (!values.startsWith("@media")) {
      values = `@media ${values}`;
    }
    return values;
  },
});

export type MediaApi = CSSApi<typeof media>;

export type MediaVar = CSSVar<MediaApi>;
