console.log(1 == "1"); // coercion happens, "1" to 1 as a number
console.log(0 == false); // converts 0 (number) to boolean value 
console.log("" == false); // converts empty string to boolean value

// triple equals check the value and type
console.log("1" === 1);
console.log(0 === false);

// the same rule applies to not equals
console.log("1" != 1); // results to false
console.log("1" !== 1); // results to true

// but there are exceptions when it comes to null
console.log(null == null);
console.log(null === null);
console.log(null == undefined); // considered true for double equals
console.log(null === undefined); // they are different types
console.log(undefined == undefined);
console.log(undefined === undefined);