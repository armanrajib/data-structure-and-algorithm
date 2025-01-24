class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // push
  push(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
      // newNode.next = this.first;
      // this.first = newNode;
    }

    return ++this.size;
  }

  // pop
  pop() {
    if (!this.first) return null;

    const temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

const stack = new Stack();

console.log(stack.push(11));
stack;

console.log(stack.push(12));
stack;

console.log(stack.push(13));
stack;

// ---------------------------------

console.log(stack.pop());
stack;

console.log(stack.pop());
stack;

console.log(stack.pop());
stack;

console.log(stack.pop());
stack;

// Big O Notation
// ---------------
// Insertion (push) - O(1)
// Removal (pop) - O(1)
// Searching - O(n)
// Access - O(n)
