import React from "react";
import { useU } from "../src";
import { css } from "@emotion/react";

const Demo: React.FC = () => {
  const { u, mode, setMode } = useU();

  return (
    <div>
      <div
        css={css`
          background-color: ${u.c("blue5")};
          width: ${u.s(25)};
          height: ${u.s(25)};
          background: ${u.c("blue8")};
          border: ${u.bw(4)} solid ${u.c("green5")};
          border-top: ${u.bw("20px")} solid ${u.c("yellow5")};
          color: #000;

          ${u.up("md")} {
            color: ${u.c("red7", "blue7")};
          }

          ${u.light()} {
            height: ${u.s(50)};
          }

          ${u.dark()} {
            height: ${u.s(75)};
          }
        `}
      >
        Text
      </div>
      <div
        css={css({
          backgroundColor: u.c("blue5,7"),
          width: "100px",
          height: "100px",
        })}
      />
      <button
        onClick={() =>
          setMode((p) => {
            if (p === "auto") {
              return "light";
            }
            if (p === "light") {
              return "dark";
            }
            if (p === "dark") {
              return "auto";
            }
            return "auto";
          })
        }
      >
        {mode}
      </button>
    </div>
  );
};

export default Demo;
