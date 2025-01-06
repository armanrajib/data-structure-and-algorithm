// Write a function called same, which accepts two arrays.
//   The function should return true if every value in the array has it's corresponding value squared in the second array.
//   The frequency of values must be the same.

// Examples:
// same([1, 2, 3], [4, 1, 9]) // true
// same([1, 2, 3], [1, 9]) // false
// same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)

// FIXME: A Naive Solution
// Time Complexity: O(n^2)
// =======================

/*
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (const val of arr1) {
    if (!arr2.includes(val ** 2)) return false;
    arr2.splice(arr2.indexOf(val ** 2), 1);
  }

  return true;
}
*/

// TODO: Refactored Solution
// Time Complexity: O(n)
// =========================

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) return false;
  }

  return true;
}

// Test Cases
console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));

// ========================
// TODO: Challenge: Anagram
// ========================

// function validAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false;

//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};

//   for (const char of str1) {
//     frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
//   }

//   for (const char of str2) {
//     frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
//   }

//   for (const key in frequencyCounter1) {
//     if (!(key in frequencyCounter2)) return false;
//     if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
//   }

//   return true;
// }

// TODO: Refactored Solution
// =========================

function validAnagram(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (const char of first) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  for (const char of second) {
    if (!lookup[char]) return false;
    lookup[char] -= 1;
  }

  return true;
}

// Test Cases
console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("texttwisttime", "timetwisttext"));
