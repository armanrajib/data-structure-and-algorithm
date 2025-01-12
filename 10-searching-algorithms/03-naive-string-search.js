// ============================
// Naive String Search
// Pseudocode
// ============================

// Define a function called naiveStringSearch that takes two strings as arguments
// Initialize a variable called count and set it to 0
// Loop over the longer string
// Loop over the shorter string
// If the characters don't match, break out of the inner loop
// If the characters do match, keep going
// If you complete the inner loop and find a match, increment the count of matches
// Return the count

//Examples
// naiveStringSearch("lorie loled", "lol") // 1
// naiveStringSearch("lorie loled", "pop") // 0
// naiveStringSearch("lorie loled", "lo") // 2
// naiveStringSearch("lorie loled", "ed") // 1
// naiveStringSearch("lorie loled", "e") // 2
// naiveStringSearch("lorie loled", "l") // 3

// ==========================
// TODO: Solution
// Time complexity: O(n^2)
// ==========================

function naiveStringSearch(long, short) {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }

  return count;
}

// Test cases
console.log(naiveStringSearch("lorie loled", "lol"));
console.log(naiveStringSearch("lorie loled", "pop"));
console.log(naiveStringSearch("lorie loled", "lo"));
console.log(naiveStringSearch("lorie loled", "ed"));
console.log(naiveStringSearch("lorie loled", "e"));
console.log(naiveStringSearch("lorie loled", "l"));
console.log(naiveStringSearch("eeeeeeeee", "ee"));
