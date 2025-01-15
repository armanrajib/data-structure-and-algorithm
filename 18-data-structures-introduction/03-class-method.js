// ==============
// Student Class
// ==============

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

  // Class Methods
  static enrollStudents(...students) {
    return "ENROLLING STUDENTS!";
  }
}

const firstStudent = new Student("Arman", "Rajib", 4);

// enrollStudents()
console.log(Student.enrollStudents());

// ============
// Point Class
// ============

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy); // hypotenuse of a right-angled triangle
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

// distance()
console.log(Point.distance(p1, p2));
