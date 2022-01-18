import { compose, style } from "../style";
import { CSSApi, CSSProperties, CSSVar } from "../../types";
import { border } from "../util";

// box-shadow
export const boxShadow = style<"boxShadow", CSSProperties["boxShadow"]>({
  prop: ["boxShadow"],
  css: (value) => (theme) => ({
    boxShadow: border(value, theme),
  }),
});

// text-shadow
export const textShadow = style<"textShadow", CSSProperties["textShadow"]>({
  prop: ["textShadow"],
  css: (value) => (theme) => ({
    textShadow: border(value, theme),
  }),
});

export const shadows = compose(boxShadow, textShadow);

export type ShadowsApi = CSSApi<typeof boxShadow> & CSSApi<typeof textShadow>;

export type ShadowsVar = CSSVar<ShadowsApi>;
