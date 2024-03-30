// Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// Функция создания карточки
function createCard(
  { name: cardName, link: cardLink },
  removeCardHandler,
  likeImageHandler,
  openImageHandler
) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");
  const cardLikeBtn = cardElement.querySelector(".card__like-button");

  cardImage.src = cardLink;
  cardImage.alt = cardName;
  cardTitle.textContent = cardName;

  cardDeleteBtn.addEventListener("click", removeCardHandler);
  cardLikeBtn.addEventListener("click", likeImageHandler);
  cardImage.addEventListener("click", openImageHandler);

  return cardElement;
}

// Функция лайка карточки
function likeCard(event) {
  event.target.classList.toggle("card__like-button_is-active");
}

// Функция удаления карточки
function removeCard(cardElement) {
  cardElement.remove();
}

export { createCard, removeCard, likeCard };
