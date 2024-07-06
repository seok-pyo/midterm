export const keyPair = (arr, n) => {
  const val_idx = {} // {val: idx}
  for (let i = 0; i <= arr.length; i += 1) {
    const v = arr[i]
    if (val_idx[v] !== undefined) return [val_idx[v], i]
    val_idx[n/v] ??= i
  }
};
