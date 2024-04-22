import { addLike } from "./api";

// Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// Функция создания карточки
function createCard(
	userId,
	{ name: cardName, link: cardLink, ...cardInfo },
	removeCardHandler,
	likeImageHandler,
	openImageHandler
) {
	const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
	const cardImage = cardElement.querySelector(".card__image");
	const cardTitle = cardElement.querySelector(".card__title");
	const cardDeleteBtn = cardElement.querySelector(".card__delete-button");
	const cardLikeBtn = cardElement.querySelector(".card__like-button");
	const cardLikeCounter = cardElement.querySelector(".card__like-counter");

	cardElement.dataset.id = cardInfo._id;
	cardImage.src = cardLink;
	cardImage.alt = cardName;
	cardTitle.textContent = cardName;
	cardLikeCounter.textContent = cardInfo.likes.length;

	cardLikeBtn.addEventListener("click", likeImageHandler);
	cardImage.addEventListener("click", openImageHandler);

	if (cardInfo.owner._id !== userId) {
		cardDeleteBtn.remove();
	} else {
		cardDeleteBtn.addEventListener("click", removeCardHandler);
	}

	return cardElement;
}

// Функция лайка карточки
function likeCard(event) {
  const cardId = event.target.closest(".card").dataset.id;
  addLike(cardId).then((res) => {
    event.target.closest(".card__like-counter").textContent = res.likes.length;
    event.target.classList.toggle("card__like-button_is-active");
  })
}

// Функция удаления карточки
function removeCard(cardElement) {
	cardElement.remove();
}

export { createCard, removeCard, likeCard };
