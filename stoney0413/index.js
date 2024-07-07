import assert from 'assert';
export { keyPair } from './keyPair.js';
export { ProxyEmp } from './ProxyEmp.js';
export { reduce } from './reduce.js';
export { Stack, Queue, ArrayList } from './collection.js';
export { cal } from './cal.js';
export { telfmt, searchByKoreanInitialSound } from './regexp.js';

Array.prototype.mapBy = function (k) {
  // 이 부분을 작성하시오.
  return this.map((e) => e[k]);
};

Array.prototype.groupBy = function (gfn) {
  // 이 부분을 작성하시오.
  const result = {};
  this.map((e) => {
    let ret = gfn(e);
    if (!result.hasOwnProperty(ret)) {
      result[ret] = [];
    }

    if (result.hasOwnProperty(ret)) {
      result[ret].push(e);
    }
  });
  return result;
};
