function sumAll(arr) {
  const [minValue, maxValue] = arr.sort((a, b) => a === b ? 0 : a > b ? 1 : -1);
  let result = 0;
  for (let i = minValue; i <= maxValue; i++) {
    result+=i;
  }
  return result;
}

sumAll([1, 4]);