const arr = [] as number[];

/**
 * Push/pop
 * O(1) time complexity for both operations, because we do not need to shift all elements
 * O(n) space complexity
 */

arr.push(1); // [1]
arr.push(2); // [1, 2]
arr.pop(); // [1], returns 2
arr.pop(); // [], returns 1

/**
 * Unshift/shift
 * O(n) time complexity for both operations, because we need to shift all elements
 * O(n) space complexity
 */

arr.unshift(1); // [1]
arr.unshift(2); // [2, 1]
arr.shift(); // [1], returns 2
arr.shift(); // [], returns 1

/**
 * array[index]
 * O(1) time complexity
 * O(n) space complexity
 */

arr[5] = 10; // [ <5 empty items>, 10 ]
arr[5]; // 10
