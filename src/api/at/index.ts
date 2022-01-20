import { compose } from "../style";
import { media, MediaApi, MediaVar } from "./media";
import { query, QueryApi, QueryVar } from "./query";

export const ats = compose(media, query);

export type AtsApi = MediaApi & QueryApi;

export type AtsVar = MediaVar & QueryVar;
