class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // enqueue
  enqueue(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  // dequeue
  dequeue() {
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

const queue = new Queue();

console.log(queue.enqueue(11));
queue;

console.log(queue.enqueue(12));
queue;

console.log(queue.enqueue(13));
queue;

// ---------------------------------

console.log(queue.dequeue());
queue;

console.log(queue.dequeue());
queue;

console.log(queue.dequeue());
queue;

console.log(queue.dequeue());
queue;

// Big O Notation
// ---------------
// Insertion (enqueue) - O(1)
// Removal (dequeue) - O(1)
// Searching - O(n)
// Access - O(n)
