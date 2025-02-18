// ===============
// ProductOfArray
// ===============

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// Examples:
// productOfArray([1, 2, 3]) // 6
// productOfArray([1, 2, 3, 10]) // 60

// ==============
// TODO: Soluion
// ==============

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

// Test Cases
console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));
