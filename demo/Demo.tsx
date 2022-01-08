import React from "react";
import { useU } from "../src";

const Demo: React.FC = () => {
  const u = useU();
  return (
    <div>
      <div
        css={[
          u.m([2, 4, 6, 8, 10, 12]),
          u.bg("blue5"),
          u.color("green8"),
          u.d("flex"),
          u.align("center"),
          u.justify("center"),
          // u.clearfix()
          // u.flexCenter()
          {
            width: 100,
            height: 100,
          },
          u.animation("spin", {
            duration: "10s",
            infinite: true,
            timingFn: "in-out",
            delay: "3s",
          }),
        ]}
      >
        Text
      </div>
      <div
        css={[
          u.size(25),
          u.bg("url(https://ixk.me/bg.jpg)"),
          u.bgPos("center"),
          u.p(10),
          u.bx(10),
          u.bs("solid"),
          u.bc("blue9"),
          u.by(`20px solid ${u.$color("green9")}`),
          u.animation("spin"),
        ]}
      />
      <div
        css={[
          u.size(25),
          u.bg("blue5"),
          u.transition("all", {
            timingFn: "in-out",
            delay: "1s",
            duration: "1s",
          }),
          u.$hover(u.size(50)),
          // u.$selector("&:hover, &[data-hover]", u.size(50)),
        ]}
      />
    </div>
  );
};

export default Demo;
