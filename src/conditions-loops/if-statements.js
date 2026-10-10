const age = 18;
const hasLicense = true;

if (age >= 18) {
  console.log("Drink moderately!");
} else if (age >= 15) {
  console.log("Close but not old enough!");
}

if (age >= 18 && hasLicense) {
  console.log("You can drive!");
}

const isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in!");
  // or return
}

// guard clauses are early exit that return a function for readability
// if a condition is not met then exit
// opposite condition first
const weather = "sunny";
const temp = 75;

if (weather !== "sunny") {
  console.log("Not a sunny day!");
  return;
}

if (temperature > 70) {
  console.log("Perfect day for the beach!");
} else {
  console.log("Sunny but a bit cold");
}
