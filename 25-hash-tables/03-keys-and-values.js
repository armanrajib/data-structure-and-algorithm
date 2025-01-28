class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  // _hash
  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  // set
  set(key, value) {
    const index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }

  // get
  get(key) {
    const index = this._hash(key);

    if (this.keyMap[index]) {
      for (const pair of this.keyMap[index]) {
        if (pair[0] === key) {
          return pair[1];
        }
      }
    }

    return undefined;
  }

  // keys
  keys() {
    const keyArr = [];

    for (const keyValuePair of this.keyMap) {
      if (keyValuePair) {
        for (const pair of keyValuePair) {
          keyArr.push(pair[0]);
        }
      }
    }

    return keyArr;
  }

  // values
  values() {
    const valueArr = [];

    for (const keyValuePair of this.keyMap) {
      if (keyValuePair) {
        for (const pair of keyValuePair) {
          valueArr.push(pair[1]);
        }
      }
    }

    return valueArr;
  }
}

let ht = new HashTable(17);

ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");

ht;

console.log(ht.keys());
console.log(ht.values());

// Big O of Hash Tables (Time Complexity) - Average Case
// ======================================================

// insert (set): O(1)
// access (get): O(1)
// delete: O(1)

// keys: O(n)
// values: O(n)
