export const ssr = <T>(fn: () => T): T | undefined => {
  return typeof window !== "undefined" ? fn() : undefined;
};
