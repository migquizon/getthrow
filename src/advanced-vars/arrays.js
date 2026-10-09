const number = 5;
const name = "Kyle";

const numbers = [2, 3, 4, 5, 7];
const names = ["Novi", "Tito", "Klaus"];

console.log(number);
console.log(name);
console.log(numbers);
console.log(names);
console.log(numbers[2]);
console.log(names[2]);

// add item to the array
numbers.push(10);
console.log(numbers);
names.push(23); // pushed 23, array in JavaScript can have different types
console.log(names);

// nested array
const numMatrix = [
  [2, 3],
  [10, 5],
  [4, 7, 8, 9]
];

console.log(numMatrix);
console.log(numMatrix[0].push(1));
console.log(numMatrix[0]);
console.log(numMatrix[1][0]);
numMatrix.push([38, 29, 10]);
console.log(numMatrix);
console.log(numMatrix.length);