import { getDiscountedPrice } from '../app';

test('50% off $300 is $150', () => {
  expect(getDiscountedPrice({ percentOff: 50, amount: 300 })).toBe('$150.00');
});

test('35% off 179.99 is $116.99', () => {
  expect(getDiscountedPrice({ percentOff: 35, amount: 179.99 })).toBe(
    '$116.99',
  );
});

test('default percent is 25%', () => {
  expect(getDiscountedPrice({ amount: 30 })).toBe('$22.50');
});
