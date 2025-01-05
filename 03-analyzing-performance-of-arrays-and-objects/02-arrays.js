let names = ["Michael", "Melissa", "Andrea"];

//          Michael    Melissa    Andrea
//             0          1         2

// Big O of Arrays
// =================

// Insertion -   It depends....
// ----------------------------

// Adding to the end of an array is O(1)
names.push("Raj");
console.log(names);

// Adding to the beginning of an array is O(N)
names.unshift("Raj");
console.log(names);

// Removal -   It depends....
// ---------------------------

// Removing from the end of an array is O(1)
names.pop();
console.log(names);

// Removing from the beginning of an array is O(N)
names.shift();
console.log(names);

// Searching -   O(N)
// ------------------
console.log(names.indexOf("Melissa"));

// Access -   O(1)
// ---------------
console.log(names[1]);

// Big O of Array Operations
// =========================

// push -   O(1)
// pop -   O(1)
// shift -   O(N)
// unshift -   O(N)
// concat -   O(N)
// slice -   O(N)
// splice -   O(N)
// sort -   O(N * log N) // Need to explore this more
// forEach/map/filter/reduce/etc. -   O(N)
