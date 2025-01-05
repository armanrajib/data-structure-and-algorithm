// ============================================================================================
// Write a function which takes in a string and returns counts of each character in the string.
// ============================================================================================

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  return (
    (code > 47 && code < 58) || // 0-9
    (code > 64 && code < 91) || // A-Z
    (code > 96 && code < 123) // a-z
  );
}

function charCount(str) {
  // make object to return at end
  const result = {};

  // if input is not a string, return empty object
  if (typeof str !== "string") return result;

  // loop over string, for each character...
  for (let i = 0; i < str.length; i++) {
    char = str[i].toLowerCase();

    //   if the char is a number/letter AND is a key in object, add one to count
    if (isAlphaNumeric(char) && result[char] > 0) {
      result[char]++;
    }
    //   if the char is a number/letter AND not in object, add it and set value to 1
    else if (isAlphaNumeric(char) && result[char] === undefined) {
      result[char] = 1;
    }
    //   if char is something else (space, period, etc.) don't do anything
    else {
      // Do nothing
      continue;
    }
  }

  // return object at end
  return result;
}

console.log(charCount("aaaa"));
console.log(charCount("hello"));
console.log(charCount("Your PIN number is 1234!"));
console.log(charCount(""));
console.log(charCount(123));
console.log(charCount(null));
