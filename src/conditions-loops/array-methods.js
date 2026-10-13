console.log("Array Methods");

const numbers = [12, 23, 31, 42, 50];

numbers.forEach(function iterateNum(num, index) {
  console.log(`${index} : ${num}`);
});

const doubled = numbers.map(function doubling(item) {
  return item * 2;
})

console.log(doubled);

const people = [
  { id: 1, name: "Juan" },
  { id: 2, name: "Tuko" },
  { id: 3, name: "Therese" }
];

const names = people.map(function getNames(item) {
  return item.name;
})

console.log(names);

const ruleNumbers = [38, 389, 109, 32938, 208, 21, 10, 29];

const evenNumbers = ruleNumbers.filter(function getEvenNum(item) {
  return item % 2 == 0;
})

console.log(evenNumbers);

// find only return a value that matches in the array

const foundNum = ruleNumbers.find(function findNum(item) {
  return item > 300;
})

console.log(`Found Number is ${foundNum}`);

// some is like find but it returns a boolean
// is this array contains some value that is greater than 300?
// if at least one value satifies the condition then it will return true
// in set theory this is called existential quantifier
// if we use every , it's the opposite of the some method on array but
// will return true if all or every value in the array returns true for the condition
// if any test fails, then will return false

const sum = numbers.reduce(function sumItUp(accumulator, item) {
  // accumulator += item;
  return accumulator;
},0)

console.log(sum);