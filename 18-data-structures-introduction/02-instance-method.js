class Student {
  constructor(firstName, lastName, grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.tardies = 0;
    this.scores = [];
  }

  // Instance Methods
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) return "YOU ARE EXPELLED!";
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage() {
    let sum = this.scores.reduce((acc, val) => acc + val, 0);
    return sum / this.scores.length;
  }
}

const firstStudent = new Student("Colt", "Steele", 5);
console.log(firstStudent.fullName());

const secondStudent = new Student("Arman", "Rajib", 4);

// fullName()
console.log(secondStudent.fullName());

// markLate()
console.log(secondStudent.markLate());
console.log(secondStudent.markLate());
console.log(secondStudent.markLate());
console.log(secondStudent.tardies);

// addScore()
console.log(secondStudent.addScore(90));
console.log(secondStudent.addScore(85));
console.log(secondStudent.scores);

// calculateAverage()
console.log(secondStudent.calculateAverage());
