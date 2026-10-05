function sayHello(firstName, lastName, cb) {
  const fullName = firstName + " " + lastName;
  console.log(cb(fullName));
}

function greet(fullName) {
  return "Hello" + " " + fullName + "!";
}


sayHello("Kyle", "Nikko", greet);