const headerEl = document.querySelector("#main-header");
headerEl.textContent = "Welcome!";
const paragraphEls = document.querySelectorAll(".text");
paragraphEls.forEach(function changeTextColor(paragraphEl) {
  paragraphEl.style.color = "blue";
});
paragraphEls[paragraphEls.length - 1].style.visibility = "hidden";
const inputRequiredEls = document.querySelectorAll(".required");
inputRequiredEls.forEach(function hideInputRequired(inputRequiredEl) {
  inputRequiredEl.style.border = "2px solid black";
})