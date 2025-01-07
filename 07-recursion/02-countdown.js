// ========================
// TODO: Without recursion
// ========================

// function countdown(num) {
//   for (let i = num; i > 0; i--) {
//     console.log(i);
//   }

//   console.log("All done!");
// }

// =====================
// TODO: With recursion
// =====================

function countdown(num) {
  // Base case
  if (num <= 0) {
    console.log("All done!");
    return;
  }

  console.log(num);
  num--;

  // Recursive call with different input (num)
  countdown(num);
}

// Function call
countdown(5);
