// ==========
// Fibonacci
// ==========

// Write a recursive function called fib which accepts a number and
// returns the nth number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
// which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

// Examples:
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// ==============
// TODO: Soluion
// ==============

function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

// Test Cases
console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));
