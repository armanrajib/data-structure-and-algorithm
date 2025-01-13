// ===============
// Selection Sort
// ===============

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }

    if (minIndex !== i) [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}

/*
// Debugging
// ==========

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    console.log(`i: ${i}`);
    console.log(`minIndex: ${minIndex}`);

    for (let j = i + 1; j < arr.length; j++) {
      console.log(`j: ${j}`);

      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        console.log(`minIndex: ${minIndex}`);
      }
    }

    if (minIndex !== i) {
      console.log(`Swapping ${arr[i]} and ${arr[minIndex]}`);
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      console.log(`Array is now: ${arr}`);
    }
  }

  console.log(`Final array: ${arr}`);
  return arr;
}
*/

// Test cases
console.log(selectionSort([29, 10, 14, 37, 13]));
console.log(selectionSort([5, 4, 3, 2, 1]));

// Time complexity
// ================
// Best case: O(n^2)
// Average case: O(n^2)
// Worst case: O(n^2)
