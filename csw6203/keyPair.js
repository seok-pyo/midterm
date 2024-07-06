// export const keyPair_origin = (arr, n) => {
//   // 이 부분을 작성하시오.
//   const val_idx = {};
//   let i;
//   for(i = 0 ; i < arr.length ; i += 1){
//     const val = arr[i];
//     if (val_idx[i]) { return [val_idx[val], i]; }
//     val_idx[n - val] = i; 
//     console.log(n, '-', val,':',i,'-',val_idx[i],'-', val_idx);
//   }
// };
// export const keyPair_plusminus = (arr, n) => {
//   // 이 부분을 작성하시오.
//   const val_idx = {};
//   let i;
//   for(i = 0 ; i < arr.length ; i += 1){
//     const val = arr[i];
//     if (val_idx[i]) { return [val_idx[i], val_idx[n-i]]; }
//     val_idx[n - val] = i; 
//     //if (val_idx[i]) { return [val_idx[val], i]; }
//     console.log(n, '-', val,':',i,'-',val_idx[i],'-', val_idx);
//   }
//   console.log(i);
//   return [val_idx[i-1],val_idx[n-(i-1)]];
// };

export const keyPair = (arr, n) => {
  const val_idx = {};
  for(let i=0;i<arr.length;i++){
    const val = arr[i];
    if(val_idx[i]) return [val_idx[i], i];
    console.log(n, '-', val,':',i,'-',val_idx[i],'-', val_idx);
    if(n%val==0) val_idx[n/val] = i;
  }

}
//덧셈 예제
// console.log(keyPair([2,3,4,5],8)); //1,3
// console.log(keyPair([1, 4, 45, 6, 10, 8], 10), [1,3]);
// console.log(keyPair([0,1, 3, 3, 4, 5], 9)); //4,5

//곱셈 예제
// console.log(keyPair([1, 3, 3, 4, 5], 12), [1, 3]);
// console.log(keyPair([1, 3, 4, 5], 15), [1, 3]);
// console.log(keyPair([5, 4, 3, 1], 15), [0, 2]);
// console.log(keyPair([1, 3, 4, 5], 4), [0, 2]);
// console.log(keyPair([1, 4, 45, 6, 10, 8], 450), [2, 4]);
// console.log(keyPair([1, 2, 4, 3, 6], 6), [1, 3]);
// console.log(keyPair([1, 2, 3, 4, 5, 7], 14), [1, 5]);


