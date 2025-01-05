function double(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }

  return newArr;
}

console.log(double([1, 2, 3, 4, 5]));

// The space complexity of this function is O(n)
// because the amount of memory used by the function grows linearly with the input size. (variables: newArr and i)
