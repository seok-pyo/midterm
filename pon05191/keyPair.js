export const keyPair = (arr, n) => {
  const c = new Map();

  for (let i = 0; i < arr.length; i += 1) {
    const index = c.get(n / arr[i]);
    if (index !== undefined) return [index, i];
    if (!c.has(arr[i])) c.set(arr[i], i);
  }

  return [];
};
