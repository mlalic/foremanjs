import { assert } from 'chai';
import itertools from '../src/itertools';

describe('Foreman', () => {
  describe('Brick', () => {
    it("works", () => {
      assert.equal(1, 1);
    });
  });

  describe('itertools', () => {
    it('`map` works', () => {
      let map1 = itertools.map(x => x + 1, [1, 2, 3]);
      let map2 = itertools.map(x => x + 1, map1);

      const res = [
        for (x of map2)
        x
      ];

      assert.deepEqual(res, [3, 4, 5]);
    });
  });
});
