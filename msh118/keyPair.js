import assert from 'assert';

export const keyPair = (arr, n) => {
  // 이 부분을 작성하시오.
  const pair = [];
  for (let i = 0; i <= arr.length - 1; i += 1) {
    for (let j = i + 1; j <= arr.length - 1; j += 1) {
      if (arr[i] * arr[j] === n) {
        pair.push(i, j);
        break;
      }
    }
  }

  return pair;
};
// assert.deepStrictEqual(keyPair([1, 3, 3, 4, 5], 12), [1, 3]);
assert.deepStrictEqual(keyPair([1, 3, 4, 5], 15), [1, 3]);
assert.deepStrictEqual(keyPair([5, 4, 3, 1], 15), [0, 2]);
assert.deepStrictEqual(keyPair([1, 3, 4, 5], 4), [0, 2]);
assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 450), [2, 4]);
// assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 6), [1, 3]);
assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 14), [1, 5]);
