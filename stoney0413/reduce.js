export const reduce = (array, fn, initValue) => {
  let acc;
  if (initValue !== undefined) {
    acc = initValue;
    array.forEach((_, i) => {
      acc = fn(acc, array[i]);
    });
  } else {
    acc = array[0];
    for (let i = 1; i < array.length; i += 1) {
      acc = fn(acc, array[i]);
    }
  }
  return acc;
};
