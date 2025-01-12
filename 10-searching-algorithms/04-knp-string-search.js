// KMP String Search Algorithm
// ============================

function computeLPSArray(pattern) {
  const lps = Array(pattern.length).fill(0);
  let len = 0; // Length of the previous longest prefix suffix
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1]; // Try a shorter prefix
      } else {
        lps[i] = 0; // No prefix match
        i++;
      }
    }
  }

  return lps;
}

// Example Usage
console.log(computeLPSArray("ABAB"));
console.log(computeLPSArray("AAAA"));

function KMPSearch(text, pattern) {
  const lps = computeLPSArray(pattern);
  const result = [];
  let i = 0; // Index for text
  let j = 0; // Index for pattern

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      // Pattern found
      result.push(i - j); // Store the start index
      j = lps[j - 1];
    } else if (i < text.length && text[i] !== pattern[j]) {
      // Mismatch after j matches
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return result;
}

// Example Usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABAB";
const occurrences = KMPSearch(text, pattern);
console.log("Pattern found at indices:", occurrences);
