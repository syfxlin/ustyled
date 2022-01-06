import { useContext } from "react";
import { UstyledCtx } from "../components/UstyledProvider";

export const useUstyled = () => {
  const ctx = useContext(UstyledCtx);
  if (!ctx) {
    throw new Error(
      "useUstyled hook was called outside of context, make sure your app is wrapped with UstyledProvider component"
    );
  }
  return ctx;
};
