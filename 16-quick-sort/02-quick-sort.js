function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
    }
  }

  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];

  return swapIndex;
}

// Test cases
console.log(pivot([5, 2, 1, 8, 4, 7, 6, 3]));
console.log(pivot([8, 2, 1, 5, 4, 7, 6, 3]));

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

// Test cases
console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]));
console.log(quickSort([8, 2, 1, 5, 4, 7, 6, 3]));

// Time complexity
// ================
// Best case: O(n log n)
// Average case: O(n log n)
// Worst case: O(n^2)

// Space complexity
// =================
// Best case: O(log n)
// Average case: O(log n)
// Worst case: O(log n)
