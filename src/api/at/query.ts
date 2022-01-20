import { at, compose } from "../style";
import { $px } from "../util";
import { CSSApi, CSSVar } from "../../types";

export const up = at<"@up", string>({
  prop: ["@up"],
  rule: (value) => (theme) => {
    const minWidth = value.replace("@up", "").trim();
    // @ts-ignore
    return `@media (min-width: ${$px(theme.breakpoints[minWidth] ?? minWidth)})`;
  },
});

export const down = at<"@down", string>({
  prop: ["@down"],
  rule: (value) => (theme) => {
    const maxWidth = value.replace("@down", "").trim();
    // @ts-ignore
    return `@media (max-width: ${$px(theme.breakpoints[maxWidth] ?? maxWidth)})`;
  },
});

export const between = at<"@between", string>({
  prop: ["@between"],
  // prettier-ignore
  rule: (value) => (theme) => {
    const [minWidth, maxWidth] = value.replace("@between", "").trim().split(/\s*,\s*/);
    // @ts-ignore
    return `@media (min-width: ${$px(theme.breakpoints[minWidth] ?? minWidth)}) and (max-width: ${$px(theme.breakpoints[maxWidth] ?? maxWidth)})`;
  },
});

export const query = compose(up, down, between);

export type QueryApi = CSSApi<typeof up> & CSSApi<typeof down> & CSSApi<typeof between>;

export type QueryVar = CSSVar<QueryApi>;
