export const keyPair = (arr, n) => {
  // 이 부분을 작성하시오.
  const val_idx = {};
  for(let i =0;i<arr.length;i+=1){
    const val = arr[i];
    if(val_idx[i]) return [val_idx[i], i];
    val_idx[n-val] = i; 
    console.log(n, '-', val,'=',i,'---', val_idx);
  }
};
console.log(keyPair([1, 3, 3, 4, 5], 9));
// console.log(keyPair([1, 3, 3, 4, 5], 9), [1, 3]);
// console.log(keyPair([1, 3, 4, 5], 15), [1, 3]);
// console.log(keyPair([5, 4, 3, 1], 15), [0, 2]);
// console.log(keyPair([1, 3, 4, 5], 4), [0, 2]);
// console.log(keyPair([1, 4, 45, 6, 10, 8], 450), [2, 4]);
// console.log(keyPair([1, 2, 4, 3, 6], 6), [1, 3]);
// console.log(keyPair([1, 2, 3, 4, 5, 7], 14), [1, 5]);


