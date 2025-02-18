// =============
// isPalindrome
// =============

// Write a recursive function called isPalindrome
// which returns true if the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.

// Examples:
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

// ===============
// TODO: Solution
// ===============

// function isPalindrome(str) {
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false;
//     }
//   }

//   return true;
// }

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];

  if (str[0] === str.slice(-1)) {
    return isPalindrome(str.slice(1, -1));
  }

  return false;
}

// Test Cases
console.log(isPalindrome("awesome"));
console.log(isPalindrome("foobar"));
console.log(isPalindrome("tacocat"));
console.log(isPalindrome("amanaplanacanalpanama"));
console.log(isPalindrome("amanaplanacanalpandemonium"));
