// ========
// Reverse
// ========

// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// Examples:
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

// ==============
// TODO: Soluion
// ==============

// function reverse(str) {
//   let reverseString = "";

//   for (let i = 0; i < str.length; i++) {
//     reverseString += str[str.length - i - 1];
//   }

//   return reverseString;
// }

function reverse(str) {
  if (str.length === 0) return "";
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}

// Test Cases
console.log(reverse("awesome"));
console.log(reverse("rithmschool"));
