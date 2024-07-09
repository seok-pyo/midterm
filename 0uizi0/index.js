import assert from 'assert';
export { keyPair } from './keyPair.js';
export { ProxyEmp } from './ProxyEmp.js';
export { reduce } from './reduce.js';
export { Stack, Queue, ArrayList } from './collection.js';
export { cal } from './cal.js';
export { telfmt, searchByKoreanInitialSound } from './regexp.js';

Array.prototype.mapBy = function (k) {
  return this.map((t) => t[k])
};

Array.prototype.groupBy = function (gfn) {
  const ret = {}
  const args = gfn.toString().split('({ ')[1].split(' })')[0]
  const fnKeys = args.includes(', ') ? args.split(', ') : [args]
  
  const keys = [...new Set(this.map(gfn))]
  for (let fk of fnKeys) {
    for (let k of keys) {
      const r = this.filter(t => {
        return t[fk] === k
      })
      ret[k] = r
    }
  }
  return ret
};
