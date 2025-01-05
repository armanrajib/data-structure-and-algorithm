function sum(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}

console.log(sum([1, 2, 3, 4, 5]));

// The space complexity of this function is O(1)
// because the amount of memory used by the function does not change regardless of the input size. (variables: total and i)
