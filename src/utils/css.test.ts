import { camelToKebab, kebabToCamel } from "./css";

it("kebabToCamel", () => {
  expect(kebabToCamel("-webkit-border-radius")).toBe("WebkitBorderRadius");
  expect(kebabToCamel("-moz-border-radius")).toBe("MozBorderRadius");
  expect(kebabToCamel("-ms-border-radius")).toBe("msBorderRadius");
  expect(kebabToCamel("border-radius")).toBe("borderRadius");
});

it("camelToKebab", () => {
  expect(camelToKebab("WebkitBorderRadius")).toBe("-webkit-border-radius");
  expect(camelToKebab("MozBorderRadius")).toBe("-moz-border-radius");
  expect(camelToKebab("msBorderRadius")).toBe("-ms-border-radius");
  expect(camelToKebab("borderRadius")).toBe("border-radius");
});
