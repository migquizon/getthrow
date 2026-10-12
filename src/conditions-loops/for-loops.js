for (let i = 0; i < 5; i++) {
  console.log(`count: ${i}`);
}

const fruits = ["apple", "banana", "chico", "dalanghita", "Elephant Apple"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`${i} : ${fruits[i]}`);
}

for (let x = 1; x <= 3; x++) {
  for (let y = 1; y <= 3; y++) {
    console.log(`${x} x ${y} = ${x * y}`);
  }
}

const numbers = [8, 18, 30, 47, 53, 40];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 30) {
    console.log("30 skipped");
    break;
  }
  console.log(`Number: ${numbers[i]}`);
}

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 30) {
    console.log("30 skipped");
    continue;
  }
  console.log(`Number: ${numbers[i]}`);
}

for (const number of numbers) {
  console.log(`Numbers of ${number}`);
}

const person = {
  name: "Tempura",
  age: 30,
  city: "New York"
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// common errors
// off by one errors
// - misses last item caused by short one in the index
// - out of bounds more than the index or length of the array

const even = [];

for (let num = 1; num <= 10; num++) {
  if (num % 2 == 0) {
    even.push(num);
  }
}

let sum = 0;

for (const num of even) {
  sum += num;
  console.log(sum);
}