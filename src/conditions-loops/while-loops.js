let userInput = "";

while (userInput !== "quit") {
  userInput = prompt("Enter a command or 'quit' to exit: ");
  if (userInput !== "quit") {
    console.log(`You entered: ${userInput}`);
  }
}

// while loop
// do while loop - guaranteed once or at least once
// for when you know, while when you don't know