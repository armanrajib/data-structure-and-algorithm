// Sort strings
// ===============

const names = ["Hossain", "Arman", "Algorithm", "Data Structure"];

// Sorting strings alphabetically in ascending order
console.log(names.slice().sort());
console.log(names.slice().sort((a, b) => a.localeCompare(b)));

// Sorting strings alphabetically in descending order
console.log(names.slice().sort((a, b) => b.localeCompare(a)));

// Sorting string based on length of the string in ascending order
console.log(names.slice().sort((a, b) => a.length - b.length));

// Sorting string based on length of the string in descending order
console.log(names.slice().sort((a, b) => b.length - a.length));

console.log(names);

// Sort numbers
// ===============

const numbers = [6, 4, 15, 10];

// Default sort for numbers
console.log(numbers.slice().sort());

// Ascending order
console.log(numbers.slice().sort((a, b) => a - b));

// Descending order
console.log(numbers.slice().sort((a, b) => b - a));

console.log(numbers);
