// console.log(a);
// let a = 2;
// console.log(a); // error

let b = 3;
console.log(b);

// functions work differently
// hoisting moves your function to the top
console.log(sum(1, 3));

function sum(a, b) {
  return a + b;
}

// doesn't work with arrow functions and function by variable
console.log(divide(5, 10));

const divide = function(a, b) {
  return a / b;
}