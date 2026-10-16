console.log("Event Delegation");

const outer = document.querySelector("#outer");
const middle = document.querySelector("#middle");
const inner = document.querySelector("#inner");

inner.addEventListener("click", (e) => {
  console.log("button inner clicked");
  e.stopPropagation();
})

middle.addEventListener("click", (e) => {
  console.log("div middle clicked");
})

outer.addEventListener("click", (e) => {
  console.log("div outer clicked")
});

// event bubbling starts from the inner element or child
// and propagates up to the parent element
// to stop it, we can use stop propagation method
// {capture : true} modifies the event by inversing the bubbling, from parent to child
// capture, target, bubble