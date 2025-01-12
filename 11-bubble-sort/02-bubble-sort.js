// ============
// Bubble Sort
// ============

/*
function bubbleSort(arr) {
  for (let i = arr.length; i > 1; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}
*/

// Optimized with noSwaps
// =======================

function bubbleSort(arr) {
  let noSwaps;

  for (let i = arr.length; i > 1; i--) {
    noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return arr;
}

/*
// Debugging
// ==========

function bubbleSort(arr) {
  let noSwaps;

  for (let i = arr.length; i > 1; i--) {
    noSwaps = true;
    console.log(`noSwaps: ${noSwaps}`);

    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
        console.log(`noSwaps: ${noSwaps}`);
      }
    }

    if (noSwaps) {
      console.log("break because noSwaps is true");
      break;
    }
  }

  console.log(arr);
  return arr;
}
*/

console.log(bubbleSort([29, 8, 12, -3]));
console.log(bubbleSort([1, 2, 8, 3, 4, 5, 6, 7]));
console.log(bubbleSort(["Hossain", "Arman", "Algorithm", "Data Structure"]));

// Time complexity
// ================
// Best case: O(n)
// Average case: O(n^2)
// Worst case: O(n^2)
