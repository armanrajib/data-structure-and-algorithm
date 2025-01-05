// ============================================================================================
// Write a function which takes in a string and returns counts of each character in the string.
// ============================================================================================

function charCount(str) {
  // IMPLEMENTATION
}

// 1. Start with Simple Examples
charCount("aaaa"); // {a: 4}
charCount("hello"); // {h: 1, e: 1, l: 2, o: 1}

// 2. Progress to More Complex Examples
charCount("my phone number is 1234!"); // How numbers are handled?
charCount("Hello hi there!"); // How capitalization and spaces are handled?

// 3. Explore Examples with Empty Inputs
charCount(""); // {}
charCount(); // {}

// 4. Explore Examples with Invalid Inputs
charCount(123); // {}
charCount(null); // {}
