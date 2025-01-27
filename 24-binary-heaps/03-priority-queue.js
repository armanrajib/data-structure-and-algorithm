class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

// Implemented using min-BINARY-HEAP

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // enqueue
  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  // bubbleUp
  bubbleUp() {
    let index = this.values.length - 1;
    const value = this.values[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.values[parentIndex];

      if (value.priority >= parent.priority) {
        break;
      }

      this.values[parentIndex] = value;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  // dequeue
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }

  // sinkDown
  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const value = this.values[0];

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let leftChild = this.values[leftChildIndex];
      let rightChild = this.values[rightChildIndex];
      let swap = null;

      if (leftChildIndex < length && leftChild.priority < value.priority) {
        swap = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        ((!swap && rightChild.priority < value.priority) ||
          (swap && rightChild.priority < leftChild.priority))
      ) {
        swap = rightChildIndex;
      }

      if (!swap) {
        break;
      }

      this.values[index] = this.values[swap];
      this.values[swap] = value;
      index = swap;
    }
  }
}

const pq = new PriorityQueue();
console.log(pq);

pq.enqueue("common cold", 5);
console.log(pq);

pq.enqueue("gunshot wound", 1);
console.log(pq);

pq.enqueue("cough", 4);
console.log(pq);

pq.enqueue("broken arm", 2);
console.log(pq);

pq.enqueue("glass in foot", 3);
console.log(pq);

pq.enqueue("high fever", 2);
console.log(pq);

pq.enqueue("fever", 3);
console.log(pq);

// ======================================

console.log(pq.dequeue());
console.log(pq);

console.log(pq.dequeue());
console.log(pq);

console.log(pq.dequeue());
console.log(pq);

console.log(pq.dequeue());
console.log(pq);

console.log(pq.dequeue());
console.log(pq);

console.log(pq.dequeue());
console.log(pq);

console.log(pq.dequeue());
console.log(pq);
