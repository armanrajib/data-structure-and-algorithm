// ===============
// collectStrings
// ===============

// Write a function called collectStrings which accepts an object and
// returns an array of all the values in the object that have a typeof string

// Test Input
var obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

// Examples
// collectStrings(obj); // ["foo", "bar", "baz"]

// ===============
// TODO: Solution
// ===============

function collectStrings(obj) {
  let strings = [];

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      strings.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      strings = strings.concat(collectStrings(obj[key]));
    }
  }

  return strings;
}

// Test Cases
console.log(collectStrings(obj));
