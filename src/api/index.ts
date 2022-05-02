import { responsive, ResponsiveApi } from "./rules/responsive";
import { animations, AnimationsApi } from "./styles/animations";
import { borders, BordersApi } from "./styles/borders";
import { colors, ColorsApi } from "./styles/colors";
import { fonts, FontsApi } from "./styles/fonts";
import { shadows, ShadowsApi } from "./styles/shadows";
import { sizes, SizesApi } from "./styles/sizes";
import { compose } from "./style";

export const api = compose(responsive, animations, borders, colors, fonts, shadows, sizes);

export type UstyledApi = ResponsiveApi & AnimationsApi & BordersApi & ColorsApi & FontsApi & ShadowsApi & SizesApi;
