// =================
// stringifyNumbers
// =================

// Write a function called stringifyNumbers which takes in an object and finds all of the values
// which are numbers and converts them to strings. Recursion would be a great way to solve this!

// The exercise intends for you to create a new object with the numbers converted to strings, and not modify the original.
// Keep the original object unchanged.

// Test Input
var obj1 = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

var obj2 = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

// Examples
// stringifyNumbers(obj1); // { num: '1', test: [], data: { val: '4', info: { isRight: true, random: '66' } } }
// stringifyNumbers(obj2); // { num: '1', test: [], data: { val: '4', info: { isRight: true, random: '66' } } }

// ===============
// TODO: Solution
// ===============

function stringifyNumbers(obj) {
  const newObj = {};

  for (const key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

// Test Cases
console.log(stringifyNumbers(obj1));
console.log(stringifyNumbers(obj2));
