// ================
// capitalizeFirst
// ================

// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.

// Examples:
// capitalizeFirst(['car', 'taco', 'banana']); // ['Car', 'Taco', 'Banana']
// capitalizeFirst(['hello', 'world', 'goodbye']); // ['Hello', 'World', 'Goodbye']
// capitalizeFirst(['apple', 'orange', 'pear']); // ['Apple', 'Orange', 'Pear']

// =================
// TODO: Solution
// =================

// function capitalizeFirst(arr) {
//   if (arr.length === 0) return [];

//   const newArr = [];

//   for (const val of arr) {
//     newArr.push(val[0].toUpperCase() + val.slice(1));
//   }

//   return newArr;
// }

function capitalizeFirst(arr) {
  if (arr.length === 0) return [];

  return [
    arr[0][0].toUpperCase() + arr[0].slice(1),
    ...capitalizeFirst(arr.slice(1)),
  ];
}

// Test Cases
console.log(capitalizeFirst(["car", "taco", "banana"]));
console.log(capitalizeFirst(["hello", "world", "goodbye"]));
console.log(capitalizeFirst(["apple", "orange", "pear"]));
