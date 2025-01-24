const stack = [];

console.log(stack.push(11));
console.log(stack.push(12));
console.log(stack.push(13));

stack;

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

stack;

// Big O
// ------
// Insertion (push) - O(1)
// Removal (pop) - O(1)

// ==================================

console.log(stack.unshift(11));
console.log(stack.unshift(12));
console.log(stack.unshift(13));

stack;

console.log(stack.shift());
console.log(stack.shift());
console.log(stack.shift());

stack;

// Big O
// ------
// Insertion (unshift) - O(n)
// Removal (shift) - O(n)
