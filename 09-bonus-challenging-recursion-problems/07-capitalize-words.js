// ================
// capitalizeWords
// ================

// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.

// Test Input
var words = ["i", "am", "learning", "recursion"];

// Examples
// capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

// =================
// TODO: Solution
// =================

function capitalizeWords(arr) {
  if (arr.length === 0) return [];
  return [arr[0].toUpperCase(), ...capitalizeWords(arr.slice(1))];
}

// Test Cases
console.log(capitalizeWords(words));
