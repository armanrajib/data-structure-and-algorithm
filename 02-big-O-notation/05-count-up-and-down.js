function countUpAndDown(n) {
  console.log("Going up!");

  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  console.log("At the top!\nGoing down...");

  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }

  console.log("Back down. Bye!");
}

countUpAndDown(10);

// The time complexity of this function is O(n)
// because the number of operations grows linearly with the input size.
