const darkModeToggle = document.querySelector("[data-js=darkmode-toggle]");
darkModeToggle.addEventListener("input", (event) => {
  const body = document.body;
  const header = document.querySelector("header");

  if (event.target.checked) {
    body.style.background = "var(--body-background-color-darkmode)";
    header.style.backgroundColor = "black";
  } else {
    body.style.background = "var(--body-background-color-lightmode)";
    header.style.backgroundColor = "white";
  }
});
