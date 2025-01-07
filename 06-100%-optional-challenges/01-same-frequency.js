// ==================================
// Frequency Counter - sameFrequency
// ==================================

// Write a function called sameFrequency.
// Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities: Time: O(N)

// Sample Input:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

// ======================
// TODO: Solution
// Time Complexity: O(n)
// ======================

function sameFrequency(num1, num2) {
  const num1Str = num1.toString();
  const num2Str = num2.toString();

  if (num1Str.length !== num2Str.length) return false;

  const frequencyCounter = {};

  for (const char of num1Str) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
  }

  for (const char of num2Str) {
    if (!frequencyCounter[char]) return false;
    frequencyCounter[char]--;
  }

  return true;
}

// Test Cases
console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
