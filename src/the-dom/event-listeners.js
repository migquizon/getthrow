console.log("Event Listeners");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("clicked");
});

button.addEventListener("click", () => {
  console.log("clicked again");
});

function clickThis() {
  console.log("Click this!");
}

button.addEventListener("click", clickThis);

button.removeEventListener("click", clickThis);

// if we use anonymous function for the listener then tried to remove it
// the function would still work because it was defined as another function
// in the memory and it was passed by value and not referenced
// so to remove it, we must use an external function
//

button.addEventListener("click", (event) => {
  console.log(event.target);
  console.log(event.clientX, event.clientY);
});

const linkGoogle = document.querySelector("a");

linkGoogle.addEventListener("click", (event) => {
  event.preventDefault();
})