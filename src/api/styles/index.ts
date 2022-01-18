import { compose } from "../style";
import { animations, AnimationsApi, AnimationsVar } from "./animations";
import { backgrounds, BackgroundsApi, BackgroundsVar } from "./backgrounds";
import { borders, BordersApi, BordersVar } from "./borders";
import { colors, ColorsApi, ColorsVar } from "./colors";
import { shadows, ShadowsApi, ShadowsVar } from "./shadows";
import { flexboxes, FlexboxesApi, FlexboxesVar } from "./flexboxes";
import { grids, GridsApi, GridsVar } from "./grids";
import { interactivity, InteractivityApi, InteractivityVar } from "./interactivity";
import { layout, LayoutApi, LayoutVar } from "./layout";
import { sizes, SizesApi, SizesVar } from "./sizes";
import { spacing, SpacingApi, SpacingVar } from "./spacing";

export const styles = compose(
  animations,
  backgrounds,
  borders,
  colors,
  shadows,
  flexboxes,
  grids,
  interactivity,
  layout,
  sizes,
  spacing
);

export type StylesApi = AnimationsApi &
  BackgroundsApi &
  BordersApi &
  ColorsApi &
  ShadowsApi &
  FlexboxesApi &
  GridsApi &
  InteractivityApi &
  LayoutApi &
  SizesApi &
  SpacingApi;

export type StylesVar = AnimationsVar &
  BackgroundsVar &
  BordersVar &
  ColorsVar &
  ShadowsVar &
  FlexboxesVar &
  GridsVar &
  InteractivityVar &
  LayoutVar &
  SizesVar &
  SpacingVar;

declare module "../../types" {
  // @ts-ignore
  interface CSSVariables extends StylesVar {}
}
