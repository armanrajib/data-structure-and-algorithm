console.log("a".charCodeAt(0) - 96);
console.log("z".charCodeAt(0) - 96);

function hash(key, arrayLength) {
  let total = 0;

  for (const char of key) {
    const value = char.charCodeAt(0) - 96; // map "a" to 1, "b" to 2, "c" to 3, etc.
    total = (total + value) % arrayLength;
  }

  return total;
}

console.log(hash("pink", 10));
console.log(hash("orangered", 10));
console.log(hash("cyan", 10));

// Improved version of hash function
// ==================================

function improvedHash(key, arrayLength) {
  let total = 0;
  const WEIRD_PRIME = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const char = key[i];
    const value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLength;
  }

  return total;
}

console.log(improvedHash("pink", 10));
console.log(improvedHash("orangered", 10));
console.log(improvedHash("cyan", 10));

// Handling Collisions
// ====================

// 1. Separate Chaining
// 2. Linear Probing
