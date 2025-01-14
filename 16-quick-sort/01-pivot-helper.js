function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
    }
  }

  [pivot, arr[swapIndex]] = [arr[swapIndex], pivot];

  return swapIndex;
}

// Test cases
console.log(pivot([5, 2, 1, 8, 4, 7, 6, 3]));
