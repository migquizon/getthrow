const greeting = "hello";
console.log(greeting);
console.log(typeof (2));
console.log(typeof (2) === 'number');
console.log(typeof (NaN)); // Not A Number ia a number 😆 
console.log(typeof (parseInt(greeting)));
console.log(parseInt(greeting)); // NaN
console.log(parseInt(greeting) === NaN);
console.log(isNaN(parseInt(greeting))); // method to check if a value is Not A Number -> isNaN
// so NaN was a result of an attempt to convert to a number type but failed
// NaN is never equal to anything including itself, harcoded behaviour