import assert from 'assert';
export { keyPair } from './keyPair.js';
export { ProxyEmp } from './ProxyEmp.js';
export { reduce } from './reduce.js';
export { Stack, Queue, ArrayList } from './collection.js';
export { cal } from './cal.js';
export { telfmt, searchByKoreanInitialSound } from './regexp.js';

Array.prototype.mapBy = function (k) {
  return this.map((user) => user[k]);
};

Array.prototype.groupBy = function (gfn) {
  // 이 부분을 작성하시오.
  const depts = new Set();
  // console.log(this.map((user) => user[...gfn]));
  depts.add(this.map((user) => user[gfn]));
  this.filter((user) => );
};