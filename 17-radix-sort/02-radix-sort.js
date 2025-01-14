import { getDigit, digitCount, mostDigits } from "./01-helpers.js";

function radixSort(numbers) {
  const maxDigitCount = mostDigits(numbers);

  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < numbers.length; i++) {
      const digit = getDigit(numbers[i], k);
      digitBuckets[digit].push(numbers[i]);
    }

    // numbers = [].concat(...digitBuckets);
    numbers = digitBuckets.flat();
  }

  return numbers;
}

// Test cases
console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));

// Time complexity
// ================
// Best case: O(nk)
// Average case: O(nk)
// Worst case: O(nk)

// Space complexity
// =================
// Best case: O(n + k)
// Average case: O(n + k)
// Worst case: O(n + k)
