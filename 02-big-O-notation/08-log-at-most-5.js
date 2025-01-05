function logAtMost5(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

logAtMost5(7);

// The time complexity of this function is O(1)
// because the number of operations is constant regardless of the input size.
