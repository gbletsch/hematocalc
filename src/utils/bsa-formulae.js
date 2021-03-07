export const calculateBSADubois = (h, w) => {
  return (w ** 0.425 * h ** 0.725 * 71.84) / 10 ** 4;
};

export const calculateBSAMosteller = (h, w) => {
  return ((h * w) / 3600) ** 0.5;
};
