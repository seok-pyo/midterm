export const reduce = (array, fn, initValue) => {
  let i = 0;
  let acc = initValue || (i = 1, array[0])
  while (i < array.length) {
    acc  = fn(acc, array[i++])
  }
  return acc
};
