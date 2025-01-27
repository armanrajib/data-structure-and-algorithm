// MAX BINARY HEAP

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
}

const heap = new MaxBinaryHeap();
console.log(heap);

heap.insert(41);
console.log(heap);

heap.insert(42);
console.log(heap);

heap.insert(43);
console.log(heap);

heap.insert(44);
console.log(heap);

heap.insert(45);
console.log(heap);

heap.insert(46);
console.log(heap);

heap.insert(43);
console.log(heap);
