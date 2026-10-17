console.group("Console Group");
console.info("Application has started successfully.");
console.warn("This feature will be deprecated in version 2.0.");
console.error("Failed to load user data.");
console.debug("Detailed debugging information.");
console.groupEnd();

const users = [
  {
    id: 1,
    name: "Lune",
    age: 25
  },
  {
    id: 2,
    name: "Selene",
    age: 22
  },
  {
    id: 3,
    name: "Naxx",
    age: 19
  }
];

console.table(users);
console.table(users, ["name", "age"]);
console.assert(getVal(), "False Asserting");

function getVal() {
  return false;
}
