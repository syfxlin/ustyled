import { compose, style } from "./style";

it("style", () => {
  const generator = style({
    prop: ["m", "margin"],
    css: (value) => ({
      margin: value,
    }),
  })({} as any);
  expect(generator["m"]("1px")).toStrictEqual({ margin: "1px" });
  expect(generator["margin"]("1px")).toStrictEqual({ margin: "1px" });
});

it("compose", () => {
  const margin = style({
    prop: ["m", "margin"],
    css: (value) => ({
      margin: value,
    }),
  });
  const padding = style({
    prop: ["p", "padding"],
    css: (value) => ({
      padding: value,
    }),
  });

  const generator = compose(margin, padding)({} as any);
  expect(generator["m"]("1px")).toStrictEqual({ margin: "1px" });
  expect(generator["margin"]("1px")).toStrictEqual({ margin: "1px" });
  expect(generator["p"]("2px")).toStrictEqual({ padding: "2px" });
  expect(generator["padding"]("2px")).toStrictEqual({ padding: "2px" });
});
