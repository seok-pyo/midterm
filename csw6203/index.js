import assert from 'assert';
// export { keyPair } from './keyPair.js';
// export { ProxyEmp } from './ProxyEmp.js';
// export { reduce } from './reduce.js';
// export { Stack, Queue, ArrayList } from './collection.js';
// export { cal } from './cal.js';
// export { telfmt, searchByKoreanInitialSound } from './regexp.js';
Array.prototype.mapBy = function (k) {
  // 이 부분을 작성하시오.
  return this.map(a=>a[k]);
};

// const hong = { id: 1, name: 'Hong', dept: 'HR' };
// const kim = { id: 2, name: 'Kim', dept: 'Server' };
// const lee = { id: 3, name: 'Lee', dept: 'Front' };
// const park = { id: 4, name: 'Park', dept: 'HR' };
// const ko = { id: 7, name: 'Ko', dept: 'Server' };
// const loon = { id: 6, name: 'Loon', dept: 'Sales' };
// const choi = { id: 5, name: 'Choi', dept: 'Front' };
// const users = [hong, kim, lee, park, ko, loon, choi];
// assert.deepStrictEqual(users.mapBy('id'), [1, 2, 3, 4, 7, 6, 5]);
// assert.deepStrictEqual(users.mapBy('name'), [
//   'Hong',
//   'Kim',
//   'Lee',
//   'Park',
//   'Ko',
//   'Loon',
//   'Choi',
// ]);

Array.prototype.groupBy = function (gfn) {
  // 이 부분을 작성하시오.
};

// assert.deepStrictEqual(
//   users.groupBy(({ dept }) => dept),
//   {
//     HR: [
//       { id: 1, name: 'Hong', dept: 'HR' },
//       { id: 4, name: 'Park', dept: 'HR' },
//     ],
//     Server: [
//       { id: 2, name: 'Kim', dept: 'Server' },
//       { id: 7, name: 'Ko', dept: 'Server' },
//     ],
//     Front: [
//       { id: 3, name: 'Lee', dept: 'Front' },
//       { id: 5, name: 'Choi', dept: 'Front' },
//     ],
//     Sales: [{ id: 6, name: 'Loon', dept: 'Sales' }],
//   }
// );
// assert.deepStrictEqual(
//   users.groupBy(({ dept, id }) => `${dept}${id % 2}`),
//   {
//     HR1: [{ id: 1, name: 'Hong', dept: 'HR' }],
//     Server0: [{ id: 2, name: 'Kim', dept: 'Server' }],
//     Front1: [
//       { id: 3, name: 'Lee', dept: 'Front' },
//       { id: 5, name: 'Choi', dept: 'Front' },
//     ],
//     HR0: [{ id: 4, name: 'Park', dept: 'HR' }],
//     Server1: [{ id: 7, name: 'Ko', dept: 'Server' }],
//     Sales0: [{ id: 6, name: 'Loon', dept: 'Sales' }],
//   }
// );
