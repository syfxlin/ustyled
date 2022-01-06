import { CSSObject } from "@emotion/react";
import deepmerge from "deepmerge";

export type Merge = {
  merge: (...styles: CSSObject[]) => CSSObject;
};

export const merge: Merge = {
  merge: (...styles) => {
    return deepmerge.all<CSSObject>(styles);
  },
};
