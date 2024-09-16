const questionTextArea = document.querySelector("[data-js=question]");
const maxLength = questionTextArea.getAttribute("maxlength");
const answerTextArea = document.querySelector("[data-js=answer]");
const questionCharactersLeft = document.querySelector(
  "[data-js=question__charachers-left]"
);

const answerCharactersLeft = document.querySelector(
  "[data-js=answer__charachers-left]"
);

function showCharactersAmountLeft(currentCharacterLength, element) {
  const amountLeft = Number.parseInt(maxLength) - currentCharacterLength;
  element.innerHTML = `<p>${amountLeft} characters left</p>`;
}

questionTextArea.addEventListener("input", (event) => {
  showCharactersAmountLeft(event.target.value.length, questionCharactersLeft);
});

answerTextArea.addEventListener("input", (event) => {
  showCharactersAmountLeft(event.target.value.length, answerCharactersLeft);
});

const form = document.querySelector("[data-js=add-card-form]");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const dataObject = Object.fromEntries(formData);

  const questionCard = document.createElement("article");
  questionCard.setAttribute("class", "question-card");
  const section = document.querySelector("section");
  section.append(questionCard);

  questionCard.innerHTML = `<div class="question-card__container">
            <p>
              ${dataObject.question}
            </p>
            <details>
              <summary>Show Answer</summary>
              <p><b>${dataObject.answer}</b></p>
            </details>
            <div class="question-card__categories">
              <div class="question-card__tag">#${dataObject.tag}</div>              
            </div>
          </div>          
            <img
              data-js="question-card__bookmark"
              class="question-card__bookmark --not-selected"
              alt="bookmark"
            />
          `;

  const bookmarkIcon = questionCard.querySelector(
    "[data-js=question-card__bookmark]"
  );
  bookmarkIcon.addEventListener("click", (event) => {
    event.target.classList.toggle("--selected");
  });

  event.target.reset();
  event.target.elements.question.focus();
});
