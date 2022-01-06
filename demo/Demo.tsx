import React from "react";
import { useU } from "../src/hooks/use-u";

const Demo: React.FC = () => {
  const u = useU();
  return (
    <div
      css={u.merge(
        u.m([2, 4, 6, 8, 10, 12]),
        u.bg("blue.5"),
        u.color("green.8"),
        u.d("flex"),
        u.align("center"),
        u.justify("center"),
        // u.clearfix()
        // u.flexCenter()
        {
          width: 100,
          height: 100,
        }
      )}
    >
      Text
    </div>
  );
};

export default Demo;
