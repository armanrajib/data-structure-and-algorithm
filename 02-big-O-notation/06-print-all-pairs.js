function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

printAllPairs(3);

// The time complexity of this function is O(n^2)
// because the number of operations grows quadratically with the input size.
