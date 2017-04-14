/*
* The code below can be removed. It simply provides some examples of ES2015 syntax.
* */
export function getDiscountedPrice({ percentOff = 25, amount }) {
  return `$${((100 - percentOff) / 100 * amount).toFixed(2)}`;
}
