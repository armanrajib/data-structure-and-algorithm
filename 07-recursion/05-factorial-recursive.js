function factorial(num) {
  // Base case
  if (num === 1) return 1;

  // Recursive call with different input (num - 1)
  return num * factorial(num - 1);
}

console.log(factorial(5));
