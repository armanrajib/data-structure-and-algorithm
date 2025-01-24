const queue = [];

console.log(queue.push(11));
console.log(queue.push(12));
console.log(queue.push(13));

queue;

console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());

queue;

// Big O
// ------
// Insertion (push) - O(1)
// Removal (shift) - O(n)

// ==================================

console.log(queue.unshift(11));
console.log(queue.unshift(12));
console.log(queue.unshift(13));

queue;

console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());

queue;

// Big O
// ------
// Insertion (unshift) - O(n)
// Removal (pop) - O(1)
