function getConcatenation(arr: number[]): number[] {
  const n = arr.length;
  const result = new Array(2 * n);

  for (let i = 0; i < n; i++) {
    result[i] = arr[i];
    result[i + n] = arr[i];
  }

  return result;
}
