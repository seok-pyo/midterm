export { keyPair } from './keyPair.js';
export { ProxyEmp } from './ProxyEmp.js';
export { reduce } from './reduce.js';
export { Stack, Queue, ArrayList } from './collection.js';
export { cal } from './cal.js';
export { telfmt, searchByKoreanInitialSound } from './regexp.js';

Array.prototype.mapBy = function (k) {
  return this.map((user) => user[k]);
}

Array.prototype.groupBy = function (gfn) {
  return this.reduce((result, cur) => {
    if (result[gfn(cur)] === undefined) {
      result[gfn(cur)] = [cur];
      return result;
    }
    result[gfn(cur)].push(cur);
    return result;
  }, {});
};
