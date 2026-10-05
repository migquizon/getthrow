function printName() {
  console.log('Amelia');
  console.log('by');
  console.log('Tonight Alive');
}

printName();


// with parameters
// parameters are the names in the definition
// arguments are the values
// placeholder for the value is the parameter

function displayName(whatName) {
  console.log(whatName);
}

displayName('Tsukiii');
displayName('Gab');

// math operations
function sum(x, y) {
  console.log(x + y);
}

sum(2, 3);

let firstNum = 3;
let secondNum = 4;

sum(firstNum, secondNum);

function multiply(a, b) {
  const product = a * b;
  return product;
}

console.log(multiply(5, 3));
