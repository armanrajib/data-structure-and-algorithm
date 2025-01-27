class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // insert
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  // bubbleUp
  bubbleUp() {
    let index = this.values.length - 1;
    const value = this.values[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.values[parentIndex];

      if (value <= parent) {
        break;
      }

      this.values[parentIndex] = value;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  // extractMax
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
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

      if (leftChildIndex < length && leftChild > value) {
        swap = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        ((!swap && rightChild > value) || (swap && rightChild > leftChild))
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

const heap = new MaxBinaryHeap();
console.log(heap);

heap.insert(41);
heap.insert(42);
heap.insert(43);
heap.insert(44);
heap.insert(45);
heap.insert(46);
heap.insert(43);

console.log(heap);

console.log(heap.extractMax());
console.log(heap);

console.log(heap.extractMax());
console.log(heap);

// Big O Notation
// ===============

// Insertion - O(log n)
// Removal - O(log n)
// Search - O(n)
