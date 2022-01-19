import { compose, style } from "../style";
import { CSSApi, CSSProperties, CSSVar } from "../../types";
import { $border, $color } from "../util";

// border, border-(top|bottom|left|right|x|y|inline|block)
export const border = style<"b" | "border", CSSProperties["border"]>({
  prop: ["b", "border"],
  css: (value) => (theme) => ({
    border: $border(value, theme),
  }),
});
export const borderTop = style<"bt" | "borderTop", CSSProperties["borderTop"]>({
  prop: ["bt", "borderTop"],
  css: (value) => (theme) => ({
    borderTop: $border(value, theme),
  }),
});
export const borderBottom = style<"bb" | "borderBottom", CSSProperties["borderBottom"]>({
  prop: ["bb", "borderBottom"],
  css: (value) => (theme) => ({
    borderBottom: $border(value, theme),
  }),
});
export const borderLeft = style<"bl" | "borderLeft", CSSProperties["borderLeft"]>({
  prop: ["bl", "borderLeft"],
  css: (value) => (theme) => ({
    borderLeft: $border(value, theme),
  }),
});
export const borderRight = style<"br" | "borderRight", CSSProperties["borderRight"]>({
  prop: ["br", "borderRight"],
  css: (value) => (theme) => ({
    borderRight: $border(value, theme),
  }),
});
export const borderX = style<"bx" | "borderX", CSSProperties["borderLeft"]>({
  prop: ["bx", "borderX"],
  css: (value) => (theme) => {
    const b = $border(value, theme);
    return {
      borderLeft: b,
      borderRight: b,
    };
  },
});
export const borderY = style<"by" | "borderY", CSSProperties["borderTop"]>({
  prop: ["by", "borderY"],
  css: (value) => (theme) => {
    const b = $border(value, theme);
    return {
      borderTop: b,
      borderBottom: b,
    };
  },
});
export const borderInline = style<"borderInline", CSSProperties["borderInline"]>({
  prop: ["borderInline"],
  css: (value) => (theme) => ({
    borderInline: $border(value, theme),
  }),
});
export const borderBlock = style<"borderBlock", CSSProperties["borderBlock"]>({
  prop: ["borderBlock"],
  css: (value) => (theme) => ({
    borderBlock: $border(value, theme),
  }),
});

// border-width, border-(top|bottom|left|right|x|y|inline|block)-width
export const borderWidth = style<"bw" | "borderWidth", CSSProperties["borderWidth"]>({
  prop: ["bw", "borderWidth"],
  css: (value) => (theme) => ({
    borderWidth: theme.borderWidths(value) ?? value,
  }),
});
export const borderTopWidth = style<"btw" | "borderTopWidth", CSSProperties["borderTopWidth"]>({
  prop: ["btw", "borderTopWidth"],
  css: (value) => (theme) => ({
    borderTopWidth: theme.borderWidths(value) ?? value,
  }),
});
export const borderBottomWidth = style<"bbw" | "borderBottomWidth", CSSProperties["borderBottomWidth"]>({
  prop: ["bbw", "borderBottomWidth"],
  css: (value) => (theme) => ({
    borderBottomWidth: theme.borderWidths(value) ?? value,
  }),
});
export const borderLeftWidth = style<"blw" | "borderLeftWidth", CSSProperties["borderLeftWidth"]>({
  prop: ["blw", "borderLeftWidth"],
  css: (value) => (theme) => ({
    borderLeftWidth: theme.borderWidths(value) ?? value,
  }),
});
export const borderRightWidth = style<"brw" | "borderRightWidth", CSSProperties["borderRightWidth"]>({
  prop: ["brw", "borderRightWidth"],
  css: (value) => (theme) => ({
    borderRightWidth: theme.borderWidths(value) ?? value,
  }),
});
export const borderXWidth = style<"bxw" | "borderXWidth", CSSProperties["borderLeftWidth"]>({
  prop: ["bxw", "borderXWidth"],
  css: (value) => (theme) => {
    const b = theme.borderWidths(value) ?? value;
    return {
      borderLeftWidth: b,
      borderRightWidth: b,
    };
  },
});
export const borderYWidth = style<"byw" | "borderYWidth", CSSProperties["borderTopWidth"]>({
  prop: ["byw", "borderYWidth"],
  css: (value) => (theme) => {
    const b = theme.borderWidths(value) ?? value;
    return {
      borderTopWidth: b,
      borderBottomWidth: b,
    };
  },
});
export const borderInlineWidth = style<"borderInlineWidth", CSSProperties["borderInlineWidth"]>({
  prop: ["borderInlineWidth"],
  css: (value) => (theme) => ({
    borderInlineWidth: theme.borderWidths(value) ?? value,
  }),
});
export const borderBlockWidth = style<"borderBlockWidth", CSSProperties["borderBlockWidth"]>({
  prop: ["borderBlockWidth"],
  css: (value) => (theme) => ({
    borderBlockWidth: theme.borderWidths(value) ?? value,
  }),
});

// border-style, border-(top|bottom|left|right|x|y|inline|block)-style
export const borderStyle = style<"bs" | "borderStyle", CSSProperties["borderStyle"]>({
  prop: ["bs", "borderStyle"],
  css: (value) => ({
    borderStyle: value,
  }),
});
export const borderTopStyle = style<"bts" | "borderTopStyle", CSSProperties["borderTopStyle"]>({
  prop: ["bts", "borderTopStyle"],
  css: (value) => ({
    borderTopStyle: value,
  }),
});
export const borderBottomStyle = style<"bbs" | "borderBottomStyle", CSSProperties["borderBottomStyle"]>({
  prop: ["bbs", "borderBottomStyle"],
  css: (value) => ({
    borderBottomStyle: value,
  }),
});
export const borderLeftStyle = style<"bls" | "borderLeftStyle", CSSProperties["borderLeftStyle"]>({
  prop: ["bls", "borderLeftStyle"],
  css: (value) => ({
    borderLeftStyle: value,
  }),
});
export const borderRightStyle = style<"brs" | "borderRightStyle", CSSProperties["borderRightStyle"]>({
  prop: ["brs", "borderRightStyle"],
  css: (value) => ({
    borderRightStyle: value,
  }),
});
export const borderXStyle = style<"bxs" | "borderXStyle", CSSProperties["borderLeftStyle"]>({
  prop: ["bxs", "borderXStyle"],
  css: (value) => ({
    borderLeftStyle: value,
    borderRightStyle: value,
  }),
});
export const borderYStyle = style<"bys" | "borderYStyle", CSSProperties["borderTopStyle"]>({
  prop: ["bys", "borderYStyle"],
  css: (value) => ({
    borderTopStyle: value,
    borderBottomStyle: value,
  }),
});
export const borderInlineStyle = style<"borderInlineStyle", CSSProperties["borderInlineStyle"]>({
  prop: ["borderInlineStyle"],
  css: (value) => ({
    borderInlineStyle: value,
  }),
});
export const borderBlockStyle = style<"borderBlockStyle", CSSProperties["borderBlockStyle"]>({
  prop: ["borderBlockStyle"],
  css: (value) => ({
    borderBlockStyle: value,
  }),
});

// border-color, border-(top|bottom|left|right|x|y|inline|block)-color
export const borderColor = style<"bc" | "borderColor", CSSProperties["borderColor"]>({
  prop: ["bc", "borderColor"],
  css: (value) => (theme) => ({
    borderColor: $color(value, theme),
  }),
});
export const borderTopColor = style<"btc" | "borderTopColor", CSSProperties["borderTopColor"]>({
  prop: ["btc", "borderTopColor"],
  css: (value) => (theme) => ({
    borderTopColor: $color(value, theme),
  }),
});
export const borderBottomColor = style<"bbc" | "borderBottomColor", CSSProperties["borderBottomColor"]>({
  prop: ["bbc", "borderBottomColor"],
  css: (value) => (theme) => ({
    borderBottomColor: $color(value, theme),
  }),
});
export const borderLeftColor = style<"blc" | "borderLeftColor", CSSProperties["borderLeftColor"]>({
  prop: ["blc", "borderLeftColor"],
  css: (value) => (theme) => ({
    borderLeftColor: $color(value, theme),
  }),
});
export const borderRightColor = style<"brc" | "borderRightColor", CSSProperties["borderRightColor"]>({
  prop: ["brc", "borderRightColor"],
  css: (value) => (theme) => ({
    borderRightColor: $color(value, theme),
  }),
});
export const borderXColor = style<"bxc" | "borderXColor", CSSProperties["borderLeftColor"]>({
  prop: ["bxc", "borderXColor"],
  css: (value) => (theme) => {
    const c = $color(value, theme);
    return {
      borderLeftColor: c,
      borderRightColor: c,
    };
  },
});
export const borderYColor = style<"byc" | "borderYColor", CSSProperties["borderTopColor"]>({
  prop: ["byc", "borderYColor"],
  css: (value) => (theme) => {
    const c = $color(value, theme);
    return {
      borderTopColor: c,
      borderBottomColor: c,
    };
  },
});
export const borderInlineColor = style<"borderInlineColor", CSSProperties["borderInlineColor"]>({
  prop: ["borderInlineColor"],
  css: (value) => (theme) => ({
    borderInlineColor: $color(value, theme),
  }),
});
export const borderBlockColor = style<"borderBlockColor", CSSProperties["borderBlockColor"]>({
  prop: ["borderBlockColor"],
  css: (value) => (theme) => ({
    borderBlockColor: $color(value, theme),
  }),
});

// border-radius, border-(top-left|top-right|bottom-left|bottom-right)-radius0
export const borderRadius = style<"borderRadius", CSSProperties["borderRadius"]>({
  prop: ["borderRadius"],
  css: (value) => (theme) => ({
    borderRadius: theme.radius(value) ?? value,
  }),
});
export const borderTopLeftRadius = style<"borderTopLeftRadius", CSSProperties["borderTopLeftRadius"]>({
  prop: ["borderTopLeftRadius"],
  css: (value) => (theme) => ({
    borderTopLeftRadius: theme.radius(value) ?? value,
  }),
});
export const borderTopRightRadius = style<"borderTopRightRadius", CSSProperties["borderTopRightRadius"]>({
  prop: ["borderTopRightRadius"],
  css: (value) => (theme) => ({
    borderTopRightRadius: theme.radius(value) ?? value,
  }),
});
export const borderBottomLeftRadius = style<"borderBottomLeftRadius", CSSProperties["borderBottomLeftRadius"]>({
  prop: ["borderBottomLeftRadius"],
  css: (value) => (theme) => ({
    borderBottomLeftRadius: theme.radius(value) ?? value,
  }),
});
export const borderBottomRightRadius = style<"borderBottomRightRadius", CSSProperties["borderBottomRightRadius"]>({
  prop: ["borderBottomRightRadius"],
  css: (value) => (theme) => ({
    borderBottomRightRadius: theme.radius(value) ?? value,
  }),
});

// border-(top|bottom|left|right)-radius
export const borderTopRadius = style<"borderTopRadius", CSSProperties["borderTopLeftRadius"]>({
  prop: ["borderTopRadius"],
  css: (value) => (theme) => {
    const r = theme.radius(value) ?? value;
    return {
      borderTopLeftRadius: r,
      borderTopRightRadius: r,
    };
  },
});
export const borderBottomRadius = style<"borderBottomRadius", CSSProperties["borderBottomRightRadius"]>({
  prop: ["borderBottomRadius"],
  css: (value) => (theme) => {
    const r = theme.radius(value);
    return {
      borderBottomLeftRadius: r,
      borderBottomRightRadius: r,
    };
  },
});
export const borderLeftRadius = style<"borderLeftRadius", CSSProperties["borderTopLeftRadius"]>({
  prop: ["borderLeftRadius"],
  css: (value) => (theme) => {
    const r = theme.radius(value);
    return {
      borderTopLeftRadius: r,
      borderBottomLeftRadius: r,
    };
  },
});
export const borderRightRadius = style<"borderRightRadius", CSSProperties["borderBottomRightRadius"]>({
  prop: ["borderRightRadius"],
  css: (value) => (theme) => {
    const r = theme.radius(value);
    return {
      borderTopRightRadius: r,
      borderBottomRightRadius: r,
    };
  },
});

// outline
export const outline = style<"outline", CSSProperties["outline"]>({
  prop: ["outline"],
  css: (value) => (theme) => ({
    outline: $border(value, theme),
  }),
});
export const outlineWidth = style<"outlineWidth", CSSProperties["outlineWidth"]>({
  prop: ["outlineWidth"],
  css: (value) => (theme) => ({
    outlineWidth: theme.borderWidths(value) ?? value,
  }),
});
export const outlineColor = style<"outlineColor", CSSProperties["outlineColor"]>({
  prop: ["outlineColor"],
  css: (value) => (theme) => ({
    outlineColor: $color(value, theme),
  }),
});
export const outlineOffset = style<"outlineOffset", CSSProperties["outlineOffset"]>({
  prop: ["outlineOffset"],
  css: (value) => (theme) => ({
    outlineOffset: theme.borderWidths(value) ?? value,
  }),
});
export const outlineStyle = style<"outlineStyle", CSSProperties["outlineStyle"]>({
  prop: ["outlineStyle"],
  css: (value) => ({
    outlineStyle: value,
  }),
});

// border-collapse
export const borderCollapse = style<"borderCollapse", CSSProperties["borderCollapse"]>({
  prop: ["borderCollapse"],
  css: (value) => ({
    borderCollapse: value,
  }),
});

export const borders = compose(
  border,
  borderTop,
  borderBottom,
  borderLeft,
  borderRight,
  borderX,
  borderY,
  borderInline,
  borderBlock,
  borderWidth,
  borderTopWidth,
  borderBottomWidth,
  borderLeftWidth,
  borderRightWidth,
  borderXWidth,
  borderYWidth,
  borderInlineWidth,
  borderBlockWidth,
  borderStyle,
  borderTopStyle,
  borderBottomStyle,
  borderLeftStyle,
  borderRightStyle,
  borderXStyle,
  borderYStyle,
  borderInlineStyle,
  borderBlockStyle,
  borderColor,
  borderTopColor,
  borderBottomColor,
  borderLeftColor,
  borderRightColor,
  borderXColor,
  borderYColor,
  borderInlineColor,
  borderBlockColor,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopRadius,
  borderBottomRadius,
  borderLeftRadius,
  borderRightRadius,
  outline,
  outlineWidth,
  outlineColor,
  outlineOffset,
  outlineStyle,
  borderCollapse
);

export type BordersApi = CSSApi<typeof border> &
  CSSApi<typeof borderTop> &
  CSSApi<typeof borderBottom> &
  CSSApi<typeof borderLeft> &
  CSSApi<typeof borderRight> &
  CSSApi<typeof borderX> &
  CSSApi<typeof borderY> &
  CSSApi<typeof borderInline> &
  CSSApi<typeof borderBlock> &
  CSSApi<typeof borderWidth> &
  CSSApi<typeof borderTopWidth> &
  CSSApi<typeof borderBottomWidth> &
  CSSApi<typeof borderLeftWidth> &
  CSSApi<typeof borderRightWidth> &
  CSSApi<typeof borderXWidth> &
  CSSApi<typeof borderYWidth> &
  CSSApi<typeof borderInlineWidth> &
  CSSApi<typeof borderBlockWidth> &
  CSSApi<typeof borderStyle> &
  CSSApi<typeof borderTopStyle> &
  CSSApi<typeof borderBottomStyle> &
  CSSApi<typeof borderLeftStyle> &
  CSSApi<typeof borderRightStyle> &
  CSSApi<typeof borderXStyle> &
  CSSApi<typeof borderYStyle> &
  CSSApi<typeof borderInlineStyle> &
  CSSApi<typeof borderBlockStyle> &
  CSSApi<typeof borderColor> &
  CSSApi<typeof borderTopColor> &
  CSSApi<typeof borderBottomColor> &
  CSSApi<typeof borderLeftColor> &
  CSSApi<typeof borderRightColor> &
  CSSApi<typeof borderXColor> &
  CSSApi<typeof borderYColor> &
  CSSApi<typeof borderInlineColor> &
  CSSApi<typeof borderBlockColor> &
  CSSApi<typeof borderRadius> &
  CSSApi<typeof borderTopLeftRadius> &
  CSSApi<typeof borderTopRightRadius> &
  CSSApi<typeof borderBottomLeftRadius> &
  CSSApi<typeof borderBottomRightRadius> &
  CSSApi<typeof borderTopRadius> &
  CSSApi<typeof borderBottomRadius> &
  CSSApi<typeof borderLeftRadius> &
  CSSApi<typeof borderRightRadius> &
  CSSApi<typeof outline> &
  CSSApi<typeof outlineWidth> &
  CSSApi<typeof outlineColor> &
  CSSApi<typeof outlineOffset> &
  CSSApi<typeof outlineStyle> &
  CSSApi<typeof borderCollapse>;

export type BordersVar = CSSVar<BordersApi>;
