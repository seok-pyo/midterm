export const reduce = (array, fn, initValue) => {
  let acc = initValue ?? array[0];
  let startIdx = initValue ? 0 : 1;

  if (initValue === 0) startIdx = 0;
  for (let i = 0; i < array.length; i += 1){
    acc = fn(acc, array[i], i, initValue)
  }

  return acc;
};
