function sum(a, b) {
  return a + b;
}

// const because you don't want a function to be redefined
// parenthesis are optional for single parameter
const sumArrow = (a, b) => {
  return a + b;
}

// single line return
const getFullName = (firstName, lastName) => firstName + " " + lastName;

console.log(sum(2, 3));
console.log(sumArrow(5, 2));
console.log(getFullName("Anne", "Poro"));

// arrow with no param
const letsDo = () => {
  console.log('serious');
}

letsDo();

// even shorter on one line
function processData(x, callback) {
  callback(x);
}

processData(10, function (varData) {
  console.log(varData);
})

processData(10, varData => {
  console.log(varData);
})

processData(10, varData => console.log(varData));