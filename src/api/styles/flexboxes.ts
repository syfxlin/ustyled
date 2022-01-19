import { compose, style } from "../style";
import { CSSApi, CSSProperties, CSSVar } from "../../types";

// align-items
export const alignItems = style<"align" | "alignItems", CSSProperties["alignItems"]>({
  prop: ["align", "alignItems"],
  css: (value) => ({
    alignItems: value,
  }),
});

// align-content
export const alignContent = style<"alignContent", CSSProperties["alignContent"]>({
  prop: ["alignContent"],
  css: (value) => ({
    alignContent: value,
  }),
});

// align-self
export const alignSelf = style<"alignSelf", CSSProperties["alignSelf"]>({
  prop: ["alignSelf"],
  css: (value) => ({
    alignSelf: value,
  }),
});

// justify-items
export const justifyItems = style<"justifyItems", CSSProperties["justifyItems"]>({
  prop: ["justifyItems"],
  css: (value) => ({
    justifyItems: value,
  }),
});

// justify-content
export const justifyContent = style<"justify" | "justifyContent", CSSProperties["justifyContent"]>({
  prop: ["justify", "justifyContent"],
  css: (value) => ({
    justifyContent: value,
  }),
});

// justify-self
export const justifySelf = style<"justifySelf", CSSProperties["justifySelf"]>({
  prop: ["justifySelf"],
  css: (value) => ({
    justifySelf: value,
  }),
});

// flex-wrap
export const flexWrap = style<"wrap" | "flexWrap", CSSProperties["flexWrap"]>({
  prop: ["wrap", "flexWrap"],
  css: (value) => ({
    flexWrap: value,
  }),
});

// flex-direction
export const flexDirection = style<"direction" | "flexDirection", CSSProperties["flexDirection"]>({
  prop: ["direction", "flexDirection"],
  css: (value) => ({
    flexDirection: value,
  }),
});

// flex
export const flex = style<"flex", CSSProperties["flex"]>({
  prop: ["flex"],
  css: (value) => ({
    flex: value,
  }),
});

// flex-grow
export const flexGrow = style<"grow" | "flexGrow", CSSProperties["flexGrow"]>({
  prop: ["grow", "flexGrow"],
  css: (value) => ({
    flexGrow: value,
  }),
});

// flex-shrink
export const flexShrink = style<"shrink" | "flexShrink", CSSProperties["flexShrink"]>({
  prop: ["shrink", "flexShrink"],
  css: (value) => ({
    flexShrink: value,
  }),
});

// flex-basis
export const flexBasis = style<"basis" | "flexBasis", CSSProperties["flexBasis"]>({
  prop: ["basis", "flexBasis"],
  css: (value) => (theme) => ({
    flexBasis: theme.sizes(value) ?? value,
  }),
});

// order
export const order = style<"order", CSSProperties["order"]>({
  prop: ["order"],
  css: (value) => ({
    order: value,
  }),
});

export const flexboxes = compose(
  alignItems,
  alignContent,
  alignSelf,
  justifyItems,
  justifyContent,
  justifySelf,
  flexWrap,
  flexDirection,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  order
);

export type FlexboxesApi = CSSApi<typeof alignItems> &
  CSSApi<typeof alignContent> &
  CSSApi<typeof alignSelf> &
  CSSApi<typeof justifyItems> &
  CSSApi<typeof justifyContent> &
  CSSApi<typeof justifySelf> &
  CSSApi<typeof flexWrap> &
  CSSApi<typeof flexDirection> &
  CSSApi<typeof flex> &
  CSSApi<typeof flexGrow> &
  CSSApi<typeof flexShrink> &
  CSSApi<typeof flexBasis> &
  CSSApi<typeof order>;

export type FlexboxesVar = CSSVar<FlexboxesApi>;
