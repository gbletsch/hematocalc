export const calculateBSADubois = (h, w) => {
  if (h === 0 || w === 0) return 0;
  const result = (w ** 0.425 * h ** 0.725 * 71.84) / 10 ** 4;
  if (result > 2) return 2;
  return result;
};

export const calculateBSAMosteller = (h, w) => {
  if (h === 0 || w === 0) return 0;
  return ((h * w) / 3600) ** 0.5;
};
