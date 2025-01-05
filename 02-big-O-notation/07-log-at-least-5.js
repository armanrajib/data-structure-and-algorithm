function logAtLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

logAtLeast5(3);

// The time complexity of this function is O(n)
// because the number of operations grows linearly with the input size.
