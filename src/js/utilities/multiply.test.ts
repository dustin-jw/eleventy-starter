import { multiply } from './multiply';

describe('multiply', () => {
  it('multiplies two by two', () => {
    expect(multiply(2, 2)).toEqual(4);
  });
});
