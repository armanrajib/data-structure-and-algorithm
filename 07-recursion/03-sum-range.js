function sumRange(num) {
  // Base case
  if (num === 1) return 1;

  // Recursive call with different input (num - 1)
  return num + sumRange(num - 1);
}

console.log(sumRange(5));
