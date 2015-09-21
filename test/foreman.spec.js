import { assert } from 'chai';
import itertools from '../src/itertools';

import BaseRange from '../src/range';

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

  describe('range', () => {
    it('range is re-entrant', () => {
      const range = BaseRange.fromForLike(0, x => x + 1, x => x == 10);
      const first = itertools.collect(range);
      const second = itertools.collect(range);
      const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

      assert.deepEqual(first, expected);
      assert.deepEqual(second, expected);
    });

    it('range from Array', () => {
      const list = [1, 2, 3, 4];
      const range = BaseRange.fromIterable(list);

      const first = itertools.collect(range);
      const second = itertools.collect(range);

      assert.deepEqual(first, list);
      assert.deepEqual(second, list);
    });

    it('range from iterator', () => {
      const list = [1, 2, 3, 4];
      const range = BaseRange.fromIterable(list[Symbol.iterator]());

      const first = itertools.collect(range);
      const second = itertools.collect(range);

      assert.deepEqual(first, list);
      // Once the first iteration is complete, the iterator is exhausted, so it is expected
      // that the second one is empty...
      assert.deepEqual(second, []);
    });
  });
});
