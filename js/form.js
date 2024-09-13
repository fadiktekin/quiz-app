const questionTextArea = document.querySelector("[data-js=question]");
const maxLength = questionTextArea.getAttribute("maxlength");
const answerTextArea = document.querySelector("[data-js=answer]");
const questionCharactersLeft = document.querySelector(
  "[data-js=question__charachers-left]"
);

const answerCharactersLeft = document.querySelector(
  "[data-js=answer__charachers-left]"
);

function showCharacterAmountLeft(amountLeft, el) {
  const left = Number.parseInt(maxLength) - amountLeft;
  el.innerHTML = `<p>${left} characters left</p>`;
}

questionTextArea.addEventListener("input", (event) => {
  showCharacterAmountLeft(event.target.value.length, questionCharactersLeft);
});

answerTextArea.addEventListener("input", (event) => {
  showCharacterAmountLeft(event.target.value.length, answerCharactersLeft);
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
          <figure>
            <img
              data-js="question-card__bookmark"
              class="question-card__bookmark --not-selected"
              alt="bookmark"
            />
          </figure>`;
});
