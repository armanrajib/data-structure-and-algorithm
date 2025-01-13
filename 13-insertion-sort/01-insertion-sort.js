// ===============
// Insertion sort
// ===============

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;

    for (j; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentVal;
  }

  return arr;
}

/*
// Debugging
// ==========

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    console.log(`currentVal: ${currentVal}`);
    let j = i - 1;
    console.log(`i: ${i}`);
    console.log(`j: ${j}`);

    for (j; j >= 0 && arr[j] > currentVal; j--) {
      console.log(`j: ${j}`);
      console.log(`arr[j]: ${arr[j]}`);
      arr[j + 1] = arr[j];
      console.log(`arr: ${arr}`);
    }

    console.log(`arr[j + 1]: ${arr[j + 1]}`);
    arr[j + 1] = currentVal;
    console.log(`arr[j + 1]: ${arr[j + 1]}`);
    console.log(`arr: ${arr}`);
  }

  console.log(`final arr: ${arr}`);
  return arr;
}
*/

// Test cases
console.log(insertionSort([8, 5, 2, 90, 4]));
console.log(insertionSort([5, 3, 4, 1, 2]));

// Time complexity
// ================
// Best case: O(n)
// Average case: O(n^2)
// Worst case: O(n^2)

// Use cases
// ==========
// 1. When the input array is almost sorted
// 2. Data is being inserted into the array as it comes in
// 3. When the input array is small
