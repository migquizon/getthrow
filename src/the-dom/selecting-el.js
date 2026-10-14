console.log("Selecting Element");
const authorName = document.getElementById("author-name");
console.log(authorName.content);
const descriptions = document.getElementsByClassName("description");
console.log(descriptions);
console.log(`Description count: ${descriptions.length}`);
const descriptionArr = Array.from(descriptions);
descriptionArr.forEach(function getDescription(item) {
  console.log(item.textContent);
})
const authorNameSelector = document.querySelector("#author-name");
console.log(authorNameSelector.textContent);
const descriptionSelectorAll = document.querySelectorAll(".description");
console.log(typeof descriptionSelectorAll);

// live collection - returns and update
// static collection - a copy of the past, does not update

const descriptionDetail = document.createElement("div");
descriptionDetail.className = "description";
document.body.appendChild(descriptionDetail);
console.log(descriptions.length); // updates the number to 4 , querySelectorAll still four