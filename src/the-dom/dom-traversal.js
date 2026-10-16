console.log("DOM Traversal");
const deleteBtn = document.querySelector("#delete-btn");
const container = deleteBtn.closest(".container");
console.log(container);
