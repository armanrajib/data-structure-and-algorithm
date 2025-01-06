// Write a function called sumZero which accepts a sorted array of integers.
//   The function should find the first pair where the sum is 0.
//   Return an array that includes both values that sum to zero or undefined if a pair does not exist

// Examples:
// sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3,3]
// sumZero([-2, 0, 1, 3]); // undefined
// sumZero([1, 2, 3]); // undefined

// =======================
// FIXME: Naive solution
// Time complexity: O(n^2)
// Space complexity: O(1)
// =======================

// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
//     }
//   }
// }

// TODO: Refactored solution
// Time complexity: O(n)
// Space complexity: O(1)
// =========================

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left++;
  }
}

// Test cases
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

// ============================
// Challenge: countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.
// =========================================================================

// TODO: Solution
// Time complexity: O(n)
// Space complexity: O(1)
// ======================

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

// Test cases
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
console.log(countUniqueValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(countUniqueValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]));
