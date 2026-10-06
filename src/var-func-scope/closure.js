// happens when an inner function has access to variables from an outer scope
// from a close space (function)?
// the function has access to the global context
// so any changes in the global scope will affect the scope from the function

let a = 1;

function print() {
  console.log(a);
}

a = 2;
print();

function outer(outt) { // established a scope
  function inner(inn) { // this has access to the outside scope
    console.log(outt);
    console.log(inn);
  }
  return inner; // returns the function which has access to the current scope
}

const newFunc = outer(1);
// even though a variable has been assigned with the argument
// it creates a scope or context since a function has been called in memory
// that has also the ability to get the world inside of it 
// so the scope has been able to create it's own world
// in the case of inn, another scope or context has been created 
// and have access to the outside world and get that data to be held also
// closures exploits how scoping works in functions
newFunc(2); // returns 1 , 2
outer(3); // nothing was returned since the function only returns the inner world 
newFunc(6); // changes the value of inn but remembers the value of 1 since this was declared based on the newFunc world

function createGreeter(greeting) {
  function greetName(name) {
    console.log(greeting + " " + name + "!");
  }
  return greetName;
}

let greeter = createGreeter("Hello");
greeter("Amelia");