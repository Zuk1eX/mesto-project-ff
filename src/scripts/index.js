// Импорты
import { initialCards } from "./cards.js";
import { createCard, removeCard, likeCard } from "./card.js";
import { openModal, closeModal, closeModalHandler } from "./modal.js";
// import { enableValidation, clearValidation } from "./validation.js";
import { Validation } from "./validation.js";
import {
	addCard,
	deleteCard,
	getInitialCards,
	getUserInfo,
	updateUserInfo,
} from "./api.js";

// DOM узлы
const profileInfo = document.querySelector(".profile__info");
const cardsList = document.querySelector(".places__list");

const editProfileButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
const editProfilePopup = document.querySelector(".popup_type_edit");
const addCardPopup = document.querySelector(".popup_type_new-card");
const openCardPopup = document.querySelector(".popup_type_image");

const editProfileForm = document.forms["edit-profile"];
const addCardForm = document.forms["new-place"];

// Настройка валидации форм
const validationConfig = {
	formSelector: ".form",
	inputSelector: ".form__input",
	submitButtonSelector: ".form__button",
	inactiveButtonClass: "form__button_disabled",
	inputErrorClass: "form__input_type_error",
	errorClass: "form__input-error_active",
};
const validation = new Validation(validationConfig);
validation.enableValidation();

// Назначение обработчиков
editProfileButton.addEventListener("click", editProfileHandler);
addCardButton.addEventListener("click", addCardHandler);
editProfileForm.addEventListener("submit", editProfileFormSubmitHandler);
addCardForm.addEventListener("submit", addCardFormSubmitHandler);
editProfilePopup.addEventListener("click", closeModalHandler);
addCardPopup.addEventListener("click", closeModalHandler);
openCardPopup.addEventListener("click", closeModalHandler);

// Запрос и рендеринг информации о пользователе и карточек на страницу
Promise.all([getUserInfo(), getInitialCards()])
	.then(([user, cards]) => {
		renderUserInfo(user);
		renderCards(user._id, cards, cardsList);
	})
	.catch((error) => {
		console.log(error);
	});

// Функция рендеринга 1 карточки на страницу
function renderCard(userId, cardInfo, cardsContainerElement, to = "append") {
	const cardElement = createCard(
		userId,
		cardInfo,
		() => {
			deleteCard(cardInfo._id)
				.then(() => {
					removeCard(cardElement);
				})
				.catch((error) => {
					console.log(error);
				});
		},
		likeCard,
		() => openCard(cardInfo)
	);
	cardsContainerElement[to](cardElement);
}

// Функция рендеринга карточек на страницу
function renderCards(userId, cardsData, cardsContainerElement) {
	cardsData.forEach((card) => {
		renderCard(userId, card, cardsContainerElement);
	});
}

// Функция-обработчик сабмита формы добавления карточки
function addCardFormSubmitHandler(event) {
	event.preventDefault();
	const { "place-name": name, link } = addCardForm.elements;

	addCard({ name: name.value, link: link.value })
		.then((card) => {
			renderCard(card, cardsList, "prepend");
			closeModal(addCardPopup);
		})
		.catch((error) => {
			console.log(error);
		});
}

// Функция-обработчик сабмита формы редактирования профиля
function editProfileFormSubmitHandler(event) {
	event.preventDefault();
	const { name, description } = editProfileForm.elements;

	updateUserInfo({ name: name.value, about: description.value })
		.then((user) => {
			closeModal(editProfilePopup);
			renderUserInfo(user);
		})
		.catch((error) => {
			console.log(error);
		});
}

// Функция получения текстовых элементов профиля
function getProfileInfo(profileInfoElement) {
	const profileName = profileInfoElement.querySelector(".profile__title");
	const profileDesc = profileInfoElement.querySelector(".profile__description");

	return { profileName, profileDesc };
}

async function renderUserInfo({ name, about }) {
	profileInfo.querySelector(".profile__title").textContent = name;
	profileInfo.querySelector(".profile__description").textContent = about;
}

// Функция-обработчик кнопки редактирования профиля
function editProfileHandler() {
	const { profileName, profileDesc } = getProfileInfo(profileInfo);
	const { name, description } = editProfileForm.elements;

	[name.value, description.value] = [
		profileName.textContent,
		profileDesc.textContent,
	];
	validation.clearValidation(editProfileForm);
	openModal(editProfilePopup);
}

// Функция-обработчик кнопки добавления карточки
function addCardHandler() {
	addCardForm.reset();
	validation.clearValidation(addCardForm);
	openModal(addCardPopup);
}

// Функция открытия модального окна изображения карточки
function openCard({ name, link }) {
	const popupImage = openCardPopup.querySelector(".popup__image");
	const popupCaption = openCardPopup.querySelector(".popup__caption");

	popupImage.src = link;
	popupImage.alt = name;
	popupCaption.textContent = name;

	openModal(openCardPopup);
}
