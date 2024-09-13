console.log("loaded js");
const bookmarkIcons = document.querySelectorAll(
  "[data-js=question-card__bookmark]"
);

for (item of bookmarkIcons) {
  item.addEventListener("click", (event) => {
    event.target.classList.toggle("--selected");
  });
}
