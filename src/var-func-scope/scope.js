function sayHi() {
  const result = "Hi"; // creates a new scope
  console.log(result);
}

const result = "Bye"; // global scope
sayHi();
console.log(result);

// always start at the inner scope
// defer -> run in order they appeared or in the script
// global scope
// block scope
// function scope