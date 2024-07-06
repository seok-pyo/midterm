import assert from 'assert';

export const reduce = (array, fn, initValue) => {
  // 이 부분을 작성하시오.
  let i = 0;
  let result = initValue ?? ((i += 1), array[0]);
  for (; i < array.length; i += 1) {
    result = fn(result, array[i]);
  }
  return result;
};

const Hong = { id: 1, name: 'Hong' };
const Kim = { id: 2, name: 'Kim' };
const Lee = { id: 3, name: 'Lee' };
let users1 = [Hong, Kim, Lee];

const hong = { id: 1, name: 'Hong', dept: 'HR' };
const kim = { id: 2, name: 'Kim', dept: 'Server' };
const lee = { id: 3, name: 'Lee', dept: 'Front' };
const park = { id: 4, name: 'Park', dept: 'HR' };
const ko = { id: 7, name: 'Ko', dept: 'Server' };
const loon = { id: 6, name: 'Loon', dept: 'Sales' };
const choi = { id: 5, name: 'Choi', dept: 'Front' };
const users = [hong, kim, lee, park, ko, loon, choi];

const a10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
assert.deepStrictEqual(
  reduce(a10, (acc, cur) => acc + cur, 0),
  a10.reduce((acc, cur) => acc + cur, 0)
);

assert.deepStrictEqual(
  reduce(users1, (acc, user) => acc + user.name),
  users1.reduce((acc, user) => acc + user.name)
);

assert.deepStrictEqual(
  reduce([1, 2, 3, 4, 5], (acc, cur) => acc * cur),
  120
);
