export const keyPair = (arr, n) => {
  const val_idx = {};

  for (let i = 0; i < arr.length; i += 1){
    const val = arr[i];

    if(val_idx[val]) return [val_idx[val], i];

    val_idx[n / val] = i;
  }
};