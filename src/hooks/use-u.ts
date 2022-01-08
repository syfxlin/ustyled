import { useUstyled } from "./use-ustyled";
import { Api } from "../api";

export const useU = <A extends Api = Api>() => {
  const [ctx] = useUstyled();
  return ctx.api(ctx.theme) as Api;
};
