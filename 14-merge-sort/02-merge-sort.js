// import merge from "./02-merge-sort";

function merge(arr1, arr2) {
  const results = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// Test cases
console.log(mergeSort([76, 7, 73, 24]));

// Time complexity
// ================
// Best case: O(n log n)
// Average case: O(n log n)
// Worst case: O(n log n)

// Space complexity
// =================
// Best case: O(n)
// Average case: O(n)
// Worst case: O(n)
