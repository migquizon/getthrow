let userInput = "";

while (userInput !== "quit") {
  userInput = prompt("Enter a command or 'quit' to exit: ");
  if (userInput !== "quit") {
    console.log(`You entered: ${userInput}`);
  }
}