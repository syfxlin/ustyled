import { compose, style } from "../style";
import { CSSApi, CSSProperties, CSSVar } from "../../types";

// appearance
export const appearance = style<"appearance", CSSProperties["appearance"]>({
  prop: ["appearance"],
  css: (value) => ({
    appearance: value,
  }),
});

// cursor
export const cursor = style<"cursor", CSSProperties["cursor"]>({
  prop: ["cursor"],
  css: (value) => ({
    cursor: value,
  }),
});

// pointer-events
export const pointerEvents = style<"pointerEvents", CSSProperties["pointerEvents"]>({
  prop: ["pointerEvents"],
  css: (value) => ({
    pointerEvents: value,
  }),
});

// resize
export const resize = style<"resize", CSSProperties["resize"]>({
  prop: ["resize"],
  css: (value) => ({
    resize: value,
  }),
});

// user-select
export const userSelect = style<"userSelect", CSSProperties["userSelect"]>({
  prop: ["userSelect"],
  css: (value) => ({
    userSelect: value,
  }),
});

export const interactivity = compose(appearance, cursor, pointerEvents, resize, userSelect);

export type InteractivityApi = CSSApi<typeof appearance> &
  CSSApi<typeof cursor> &
  CSSApi<typeof pointerEvents> &
  CSSApi<typeof resize> &
  CSSApi<typeof userSelect>;

export type InteractivityVar = CSSVar<InteractivityApi>;
