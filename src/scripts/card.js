import { addLike, deleteCard, deleteLike } from "./api";

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
	cardLikeCounter.textContent = cardInfo.likes?.length;

	cardLikeBtn.addEventListener("click", likeImageHandler);
	cardImage.addEventListener("click", openImageHandler);

	if (cardInfo.owner._id !== userId) {
		cardDeleteBtn.remove();
	} else {
		cardDeleteBtn.addEventListener("click", removeCardHandler);
	}

	if (cardInfo.likes.some((user) => user._id === userId)) {
		cardLikeBtn.classList.add("card__like-button_is-active");
	}

	return cardElement;
}

// Функция лайка карточки
function likeCard(cardElement) {
	const cardId = cardElement.dataset.id;
	const cardLikeBtn = cardElement.querySelector(".card__like-button");
	const cardLikeCounter = cardElement.querySelector(".card__like-counter");
	const isLiked = cardLikeBtn.classList.contains("card__like-button_is-active");
	const likeAction = isLiked ? deleteLike(cardId) : addLike(cardId);

	likeAction
		.then((res) => {
			cardLikeCounter.textContent = res.likes.length;
			cardLikeBtn.classList.toggle("card__like-button_is-active");
		})
		.catch((error) => {
			console.log(error);
		});
}

// Функция удаления карточки
function removeCard(cardElement) {
	deleteCard(cardElement.dataset.id)
		.then(() => cardElement.remove())
		.catch((error) => {
			console.log(error);
		});
}

export { createCard, removeCard, likeCard };
