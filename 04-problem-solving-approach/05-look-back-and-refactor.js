// ============================================================================================
// Write a function which takes in a string and returns counts of each character in the string.
// ============================================================================================

/*
function charCount(str) {
  if (typeof str !== "string") return result;

  const result = {};

  for (const char of str) {
    const charLower = char.toLocaleLowerCase();

    if (/[a-z0-9]/.test(charLower)) {
      result[charLower] = ++result[charLower] || 1;
    }
  }

  return result;
}
*/

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  return (
    (code > 47 && code < 58) || // 0-9
    (code > 64 && code < 91) || // A-Z
    (code > 96 && code < 123) // a-z
  );
}

function charCount(str) {
  if (typeof str !== "string") return {};

  const result = {};

  for (const char of str) {
    if (isAlphaNumeric(char)) {
      const charLower = char.toLocaleLowerCase();
      result[charLower] = ++result[charLower] || 1;
    }
  }

  return result;
}

console.log(charCount("aaaa"));
console.log(charCount("hello"));
console.log(charCount("Your PIN number is 1234!"));
console.log(charCount(""));
console.log(charCount(123));
console.log(charCount(null));
