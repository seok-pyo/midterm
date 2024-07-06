export const reduce = (array, fn, initValue) => {
  // 이 부분을 작성하시오.
  let result;
  if (initValue !== undefined) {
    result = initValue;
  } else {
    result = array[0];
  }

  array.map((e) => {
    result = fn(result, e);
  });
  return result;
};
