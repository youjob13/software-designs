/**
 * Binary Search Algorithm is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half.
 * The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(log N).
 *
 * Time Complexity.
 *
 *  ________________________________
 * |                |               |
 * |                |   BigO        |
 * |     Best       |   O(1)        |
 * |     Average    |   O(log(n))   |
 * |     Worst      |   O(log(n))   |
 * |________________|_______________|
 *
 * Space Complexity.
 *  _______________________________
 * |                |              |
 * |                |   BigO       |
 * |    Loop        |   O(1)       |
 * |    Recursive   |   O(log(n))  |
 * |________________|______________|
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
