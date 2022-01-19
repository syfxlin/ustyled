import { compose, style } from "../style";
import { CSSApi, CSSProperties, CSSVar } from "../../types";

// transform
export const transform = style<"transform", CSSProperties["transform"]>({
  prop: ["transform"],
  css: (value) => ({
    transform: value,
  }),
});

// transform-origin
export const transformOrigin = style<"transformOrigin", CSSProperties["transformOrigin"]>({
  prop: ["transformOrigin"],
  css: (value) => ({
    transformOrigin: value,
  }),
});

// transform-style
export const transformStyle = style<"transformStyle", CSSProperties["transformStyle"]>({
  prop: ["transformStyle"],
  css: (value) => ({
    transformStyle: value,
  }),
});

export const transforms = compose(transform, transformOrigin, transformStyle);

export type TransformsApi = CSSApi<typeof transform> & CSSApi<typeof transformOrigin> & CSSApi<typeof transformStyle>;

export type TransformsVar = CSSVar<TransformsApi>;
