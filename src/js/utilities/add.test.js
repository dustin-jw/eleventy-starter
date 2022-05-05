import { add } from './add';

describe('add', () => {
  it('adds two to two', () => {
    expect(add(2, 2)).toEqual(4);
  });
});
