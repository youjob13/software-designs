/**
 * It takes one element as a pivot and moves it to the correct position in a way that all elements at left are smaller and
 * all elements at right are greater than the pivot and hence partitions the array
 * at the pivot and again applies the same for the created partition subarray
 *
 * Time Complexity.
 *
 *  __________________________________
 * |                |                 |
 * |                |   BigO          |
 * |     Average    |   O(n*log(n))   |
 * |________________|_________________|
 *
 * Space Complexity.
 *  ______________________
 * |            |         |
 * |            |   BigO  |
 * |    Space   |   O(n)  |
 * |____________|_________|
 *
 */

export function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let leftArr: number[] = [];
  let rightArr: number[] = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const unsortedArr = [2, 1, 4, -1, 3, -111, 24, -99, 0, 1111];
console.log(quickSort(unsortedArr).toString());
