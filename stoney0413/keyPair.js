export const keyPair = (arr, n) => {
  const table = {};
  let val;

  for (let i = 0; i < arr.length; i += 1) {
    val = n / arr[i];
    table[val] = table[val] ? table[val] : i;
    if (table.hasOwnProperty(arr[i])) return [table[arr[i]], i];
  }
};
