// Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// DOM узлы
const cardsList = document.querySelector(".places__list");

// Функция создания карточки
function createCard({ name: cardName, link: cardLink }, removeCardHandler) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");

  cardImage.src = cardLink;
  cardImage.alt = cardName;
  cardTitle.textContent = cardName;

  cardDeleteBtn.addEventListener("click", removeCardHandler);

  return cardElement;
}

// Функция удаления карточки
function removeCard(event) {
  event.target.closest(".card").remove();
}

// Функция рендеринга карточек на страницу
function renderCards() {
  initialCards.forEach((card) => {
    const cardElement = createCard(card, removeCard);
    cardsList.append(cardElement);
  });
}

renderCards();
