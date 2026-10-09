// array or objects, stores a reference to where the data lives
// normal data types, stores a value only

// so when you copy a variable that holds an array or object
// your actually copying the reference instead of creating clone of that array or object
// when you try to manipulate the value of the copier variable, the copied also changes

const arr = [1, 8, 5];
const arrCopy = arr;

console.log(arr);
arr.push(2);
console.log(arr);
console.log(arrCopy);
arrCopy.push(7); 
console.log(arr);
console.log(arrCopy);

// when using equal operator for the arrays and objects
// it checks the address or the reference

const fruits = ["banana", "castanas", "zircon", "chico"];
const basket = fruits;
const prutas = ["banana", "castanas", "zircon", "balimbing","apricot"];

console.log(fruits == basket);
console.log(fruits === basket);
console.log(fruits == prutas);
console.log(fruits === prutas);
console.log(basket < prutas);

// objects work the same way

let drink = {
  name: "coffee",
  tasteProfile: "bitter",
}

const coffeeDrink = drink;
const coffeeOrder = coffeeDrink;

console.log(coffeeDrink == drink);
console.log(coffeeOrder == drink);
console.log(coffeeOrder == coffeeDrink);

drink.price = 30;

console.log(coffeeDrink);

// that's the reason even though a variable is declared as const
// you can still update the value of an array or an object

const petNames = ["kyle", "aga", "charlene"];
petNames.push("rich");

// in this case, we added an element to petNames array
// because we're not changing the reference of the variable (as it's value)
// we will get an error only if we try to change the reference
// by assigning a new value or another array

// petNames = ["Ola", "Mib", "Min"];

// in the context of functions
// when you pass an array / object to a function as an argument
// you pass the reference and the function can modify the value of that
// reference thus affecting the variable's origin data

function addPetName(petNames, petName) {
  petNames.push(petName);
}

const yourPetName = "Nat";
addPetName(petNames, yourPetName);

console.log(petNames);