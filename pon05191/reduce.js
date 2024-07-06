export const reduce = (array, fn, initValue) => {
  if (initValue === undefined) {
    initValue = array[0];
    array = array.slice(1);
  }

  for (let i = 0; i < array.length; i += 1) {
    initValue = fn(initValue, array[i]);
  }

  return initValue;
};
