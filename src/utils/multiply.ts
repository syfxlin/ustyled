const parse = (unit: string) => {
  let idx = 0;
  while (unit.charCodeAt(idx) >= 46 && unit.charCodeAt(idx) <= 57 && unit.charCodeAt(idx) !== 47) {
    idx++;
  }
  return [parseFloat(unit.substring(0, idx)), unit.substring(idx)] as const;
};

export const multiply = (value: number, unit: string | number) => {
  if (typeof unit === "number") {
    return String(value * unit);
  }
  const [v, u] = parse(unit);
  return value * v + u;
};
