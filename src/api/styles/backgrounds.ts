import { CSSApi, CSSProperties, CSSVar } from "../../types";
import { compose, style } from "../style";
import { $color } from "../util";

// background
export const background = style<"bg" | "background", CSSProperties["background"]>({
  prop: ["bg", "background"],
  css: (value) => (theme) => ({
    background: $color(value, theme),
  }),
});

// background-color
export const backgroundColor = style<"bgColor" | "backgroundColor", CSSProperties["backgroundColor"]>({
  prop: ["bgColor", "backgroundColor"],
  css: (value) => (theme) => ({
    backgroundColor: $color(value, theme),
  }),
});

// background-image
export const backgroundImage = style<"bgImg" | "backgroundImage", CSSProperties["backgroundImage"]>({
  prop: ["bgImg", "backgroundImage"],
  css: (value) => ({
    backgroundImage: value,
  }),
});

// background-blend-mode
export const backgroundBlendMode = style<"bgBlandMode" | "backgroundBlendMode", CSSProperties["backgroundBlendMode"]>({
  prop: ["bgBlandMode", "backgroundBlendMode"],
  css: (value) => ({
    backgroundBlendMode: value,
  }),
});

// background-size
export const backgroundSize = style<"bgSize" | "backgroundSize", CSSProperties["backgroundSize"]>({
  prop: ["bgSize", "backgroundSize"],
  css: (value) => ({
    backgroundSize: value,
  }),
});

// background-position
export const backgroundPosition = style<"bgPos" | "backgroundPosition", CSSProperties["backgroundPosition"]>({
  prop: ["bgPos", "backgroundPosition"],
  css: (value) => ({
    backgroundPosition: value,
  }),
});

// background-repeat
export const backgroundRepeat = style<"bgRepeat" | "backgroundRepeat", CSSProperties["backgroundRepeat"]>({
  prop: ["bgRepeat", "backgroundRepeat"],
  css: (value) => ({
    backgroundRepeat: value,
  }),
});

// background-attachment
// prettier-ignore
export const backgroundAttachment = style<"bgAttachment" | "backgroundAttachment", CSSProperties["backgroundAttachment"]>({
  prop: ["bgAttachment", "backgroundAttachment"],
  css: (value) => ({
    backgroundAttachment: value,
  }),
});

// background-clip
export const backgroundClip = style<"bgClip" | "backgroundClip", CSSProperties["backgroundClip"]>({
  prop: ["bgClip", "backgroundClip"],
  css: (value) => ({
    backgroundClip: value,
  }),
});

export const backgrounds = compose(
  background,
  backgroundColor,
  backgroundImage,
  backgroundBlendMode,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  backgroundAttachment,
  backgroundClip
);

export type BackgroundsApi = CSSApi<typeof background> &
  CSSApi<typeof backgroundColor> &
  CSSApi<typeof backgroundImage> &
  CSSApi<typeof backgroundBlendMode> &
  CSSApi<typeof backgroundSize> &
  CSSApi<typeof backgroundPosition> &
  CSSApi<typeof backgroundRepeat> &
  CSSApi<typeof backgroundAttachment> &
  CSSApi<typeof backgroundClip>;

export type BackgroundsVar = CSSVar<BackgroundsApi>;
