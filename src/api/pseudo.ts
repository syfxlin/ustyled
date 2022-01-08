import { CSSObject } from "@emotion/react";
import { Pseudos } from "csstype";
import { $merge } from "./util";
import { UstyledFn } from "./index";

// prettier-ignore
export type Pseudo = {
  $hover: (...styles: CSSObject[]) => CSSObject;
  $active: (...styles: CSSObject[]) => CSSObject;
  $focus: (...styles: CSSObject[]) => CSSObject;
  $highlighted: (...styles: CSSObject[]) => CSSObject;
  $focusWithin: (...styles: CSSObject[]) => CSSObject;
  $focusVisible: (...styles: CSSObject[]) => CSSObject;
  $disabled: (...styles: CSSObject[]) => CSSObject;
  $readOnly: (...styles: CSSObject[]) => CSSObject;
  $before: (...styles: CSSObject[]) => CSSObject;
  $after: (...styles: CSSObject[]) => CSSObject;
  $empty: (...styles: CSSObject[]) => CSSObject;
  $expanded: (...styles: CSSObject[]) => CSSObject;
  $checked: (...styles: CSSObject[]) => CSSObject;
  $grabbed: (...styles: CSSObject[]) => CSSObject;
  $pressed: (...styles: CSSObject[]) => CSSObject;
  $invalid: (...styles: CSSObject[]) => CSSObject;
  $valid: (...styles: CSSObject[]) => CSSObject;
  $loading: (...styles: CSSObject[]) => CSSObject;
  $selected: (...styles: CSSObject[]) => CSSObject;
  $hidden: (...styles: CSSObject[]) => CSSObject;
  $autofill: (...styles: CSSObject[]) => CSSObject;
  $even: (...styles: CSSObject[]) => CSSObject;
  $odd: (...styles: CSSObject[]) => CSSObject;
  $first: (...styles: CSSObject[]) => CSSObject;
  $last: (...styles: CSSObject[]) => CSSObject;
  $notFirst: (...styles: CSSObject[]) => CSSObject;
  $notLast: (...styles: CSSObject[]) => CSSObject;
  $visited: (...styles: CSSObject[]) => CSSObject;
  $activeLink: (...styles: CSSObject[]) => CSSObject;
  $activeStep: (...styles: CSSObject[]) => CSSObject;
  $indeterminate: (...styles: CSSObject[]) => CSSObject;
  $placeholder: (...styles: CSSObject[]) => CSSObject;
  $fullScreen: (...styles: CSSObject[]) => CSSObject;
  $selection: (...styles: CSSObject[]) => CSSObject;
  $selector: (selector: Pseudos | string, ...styles: CSSObject[]) => CSSObject;
};

export const $selector = (
  selector: Pseudos | string,
  ...styles: CSSObject[]
) => {
  return {
    [selector]: $merge(...styles),
  };
};

// prettier-ignore
export const pseudo: UstyledFn<Pseudo> = (theme) => ({
  $selector,
  $hover: (...styles) => $selector("&:hover, &[data-hover]", ...styles),
  $active: (...styles) => $selector("&:active, &[data-active]", ...styles),
  $focus: (...styles) => $selector("&:focus, &[data-focus]", ...styles),
  $highlighted: (...styles) => $selector("&[data-highlighted]", ...styles),
  $focusWithin: (...styles) => $selector("&:focus-within", ...styles),
  $focusVisible: (...styles) => $selector("&:focus-visible", ...styles),
  $disabled: (...styles) => $selector("&[disabled], &[aria-disabled=true], &[data-disabled]", ...styles),
  $readOnly: (...styles) => $selector("&[readonly], &[aria-readonly=true], &[data-readonly]", ...styles),
  $before: (...styles) => $selector("&::before", ...styles),
  $after: (...styles) => $selector("&::after", ...styles),
  $empty: (...styles) => $selector("&:empty", ...styles),
  $expanded: (...styles) => $selector("&[aria-expanded=true], &[data-expanded]", ...styles),
  $checked: (...styles) => $selector("&[checked], &[aria-checked=true], &[data-checked]", ...styles),
  $grabbed: (...styles) => $selector("&[aria-grabbed=true], &[data-grabbed]", ...styles),
  $pressed: (...styles) => $selector("&[aria-pressed=true], &[data-pressed]", ...styles),
  $invalid: (...styles) => $selector("&[aria-invalid=true], &[data-invalid]", ...styles),
  $valid: (...styles) => $selector("&[data-valid], &[data-state=valid]", ...styles),
  $loading: (...styles) => $selector("&[data-loading], &[aria-busy=true]", ...styles),
  $selected: (...styles) => $selector("&[aria-selected=true], &[data-selected]", ...styles),
  $hidden: (...styles) => $selector("&[hidden], &[data-hidden]", ...styles),
  $autofill: (...styles) => $selector("&:-webkit-autofill", ...styles),
  $even: (...styles) => $selector("&:nth-of-type(even)", ...styles),
  $odd: (...styles) => $selector("&:nth-of-type(odd)", ...styles),
  $first: (...styles) => $selector("&:first-of-type", ...styles),
  $last: (...styles) => $selector("&:last-of-type", ...styles),
  $notFirst: (...styles) => $selector("&:not(:first-of-type)", ...styles),
  $notLast: (...styles) => $selector("&:not(:last-of-type)", ...styles),
  $visited: (...styles) => $selector("&:visited", ...styles),
  $activeLink: (...styles) => $selector("&[aria-current=page]", ...styles),
  $activeStep: (...styles) => $selector("&[aria-current=step]", ...styles),
  $indeterminate: (...styles) => $selector("&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]", ...styles),
  $placeholder: (...styles) => $selector("&::placeholder", ...styles),
  $fullScreen: (...styles) => $selector("&:fullscreen", ...styles),
  $selection: (...styles) => $selector("&::selection", ...styles),
});
