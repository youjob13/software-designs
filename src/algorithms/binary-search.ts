/**
 *
 */

export function binarySearch(source: number[], target: number) {
  let left = 0;
  let right = source.length - 1;

  while (left <= right) {
    const midIndex = Math.floor((left + right) / 2);
    if (source[midIndex] === target) {
      return midIndex;
    } else if (target < source[midIndex]) {
      right = midIndex - 1;
    } else {
      left = midIndex + 1;
    }
  }

  return -1;
}

export function binarySearchOnShiftedData(source: number[], target: number) {
  let left = 0;
  let right = source.length - 1;

  while (left <= right) {
    const midIndex = Math.floor((left + right) / 2);
    if (source[midIndex] === target) {
      return midIndex;
    } else if (source[left] <= source[midIndex]) {
      if (target >= source[left] && target < source[midIndex]) {
        right = midIndex - 1;
      } else {
        left = midIndex + 1;
      }
    } else {
      if (target > source[midIndex] && target <= source[right]) {
        left = midIndex + 1;
      } else {
        right = midIndex - 1;
      }
    }
  }

  return -1;
}
