let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

// Big O of Objects
// ----------------

// Insertion -   O(1)
Object.assign(instructor, { lastName: "Johnson" });
console.log(instructor);

// Removal -   O(1)
delete instructor.lastName;
console.log(instructor);

// Access -   O(1)
console.log(instructor.firstName);

// Searching -   O(N)
console.log(Object.keys(instructor).includes("firstName")); // Not sure about this example

// Big O of Object Methods
// -----------------------

// Object.keys -   O(N)
console.log(Object.keys(instructor));

// Object.values -   O(N)
console.log(Object.values(instructor));

// Object.entries -   O(N)
console.log(Object.entries(instructor));

// hasOwnProperty -   O(1)
console.log(instructor.hasOwnProperty("firstName"));
