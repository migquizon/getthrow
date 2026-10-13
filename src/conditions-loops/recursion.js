console.log("Recursion");

function printNumbers(num) {
  if (num > 10) {
    return;
  }

  console.log(num);
  printNumbers(num + 1);
}

// base case
// each function call, get to the call stack
// when the function returns then all the function is the call stack will be executed

printNumbers(5);

function countdown(num) {
  console.log(num);

  if (num <= 0) return;

  console.log("BEFORE");
  countdown(num - 1);
  console.log("AFTER " + num);
}

countdown(10);

// find the max value inside a nested array
// use Array.isArray() to check if an item is an array

let currentMax = 0;

function getMaxValue(arr) {

  let maxVal = -Infinity;

  for (const item of arr) {
    if (Array.isArray(item)) {
      const subMax = getMaxValue(item);
      maxVal = Math.max(maxVal, subMax);
    } else {
      maxVal = Math.max(maxVal, item);
    }
  }

  return maxVal;
    
}

let arrTest = [1, [3, 2], [4, [5, 6]], 7];

console.log(getMaxValue(arrTest));