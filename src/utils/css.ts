export const kebabToCamel = (property: string) => {
  property = property.toLowerCase();
  if (property.startsWith("-ms-")) {
    property = property.substring(1);
  }
  return property.replace(/-(\w|$)/g, ($0, $1) => $1.toUpperCase());
};

export const camelToKebab = (property: string) => {
  property = property.replace(/([A-Z])/g, ($0, $1) => `-${$1.toLowerCase()}`);
  if (property.startsWith("ms-")) {
    property = `-${property}`;
  }
  return property;
};
