// this refers to the scope
// this or called in in the global scope referes to the window

// console.log(this); 

// when used inside as an object method, refers to the object itself

const person = {
  name: "Anya",
  age: 7,
  greet() {
    // is there a rule, or the parent scope
    // is there a case wherein this refers to the function
    // console.log(`Hello, my name is ${this.name}`);
    console.log(this);
  }
}

// console.log(person);
console.log(person.greet());

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const newPerson = new Person("Marvin", 10);
console.log(newPerson);

console.log(new Date());