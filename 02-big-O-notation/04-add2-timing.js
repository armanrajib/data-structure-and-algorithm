function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

const t1 = performance.now();
console.log(addUpTo(20000000));
const t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// The time complexity of this function is O(1)
// because the number of operations is constant regardless of the input size.
