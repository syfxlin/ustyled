export type CSSScalar = undefined | null | string | number;

export type UnitRecord<K extends keyof any, T> = Record<K, T> & {
  unit?: T;
};
