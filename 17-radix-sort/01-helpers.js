function getDigit(number, place) {
  return Math.floor(Math.abs(number) / Math.pow(10, place)) % 10;
}

// Test cases
console.log(getDigit(12345, 0));
console.log(getDigit(12345, 1));
console.log(getDigit(12345, 2));
console.log(getDigit(12345, 3));
console.log(getDigit(12345, 4));
console.log(getDigit(12345, 5));

function digitCount(number) {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}

// Test cases
console.log(digitCount(12345));
console.log(digitCount(123));
console.log(digitCount(1));
console.log(digitCount(0));

function mostDigits(numbers) {
  let maxDigits = 0;

  for (let i = 0; i < numbers.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(numbers[i]));
  }

  return maxDigits;
}

// Test cases
console.log(mostDigits([2345, 123, 1, 0]));
console.log(mostDigits([1, 0]));
console.log(mostDigits([0]));

export { getDigit, digitCount, mostDigits };

// ===========
// Experiment
// ===========

console.log(
  [].concat(
    ...[
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
  )
);

console.log(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ].flat()
);
