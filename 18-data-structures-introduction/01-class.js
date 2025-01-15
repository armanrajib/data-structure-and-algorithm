class Student {
  constructor(firstName, lastName, grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
  }
}

const firstStudent = new Student("Colt", "Steele", 5);
const secondStudent = new Student("Arman", "Rajib", 4);

console.log(firstStudent);
console.log(firstStudent.firstName);
console.log(firstStudent.lastName);
console.log(firstStudent.year);

console.log(secondStudent);
console.log(secondStudent.firstName);
console.log(secondStudent.lastName);
console.log(secondStudent.year);
