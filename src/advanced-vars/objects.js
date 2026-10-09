// object is a collection of related information stored in key-value pairs

const person = {
  name: "Jhen",
  age: 30,
  favoriteTvShow: "Peppa Pig",
  address: {
    street: "Jane",
    city: "Shamy"
  },
  hobbies: ["photography", "guitar", "basketball"],
  getName: function () {
    return this.name;
  }
};

console.log(person);
console.log(person.getName());
console.log(person['name']); // brackets can also be used in access value of a key
console.log(person);
console.log(person.address.street);
console.log(person.hobbies[0]);

const book = {
  title: "The Way of Kings",
  author: {
    firstName: "Brandon",
    lastName: "Sanderson",
  },
  yearPublished: 2010,
  publish() {
    console.log("Publishing your book")
  }
};

console.log(book);