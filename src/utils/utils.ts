export const round = (value: number, numbDecimals: number) => {
  const divider = Math.pow(10, numbDecimals);
  return Math.round(value * divider) / divider;
};
