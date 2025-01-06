// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

// Examples:
// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null

// =======================
// FIXME: Naive Solution
// Time complexity: O(n^2)
// Space complexity: O(1)
// =======================

/*
function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;

  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;

    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    if (temp > max) max = temp;
  }

  return max;
}
*/

// TODO: Refactored Solution
// Time complexity: O(n)
// Space complexity: O(1)
// =========================

function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

// Test cases
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum([], 4));
console.log(maxSubarraySum([0, 0, 0, 0], 3));
console.log(maxSubarraySum([-3, -2, -1, 0], 3));
