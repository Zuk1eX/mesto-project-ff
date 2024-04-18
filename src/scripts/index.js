// Импорты
import { initialCards } from "./cards.js";
import { createCard, removeCard, likeCard } from "./card.js";
import { openModal, closeModal, closeModalHandler } from "./modal.js";
import { enableValidation, clearValidation } from "./validation.js";

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

const validationConfig = {
	formSelector: ".form",
	inputSelector: ".form__input",
	submitButtonSelector: ".form__button",
	inactiveButtonClass: "form__button_disabled",
	inputErrorClass: "form__input_type_error",
	errorClass: "form__input-error_active",
};

// Назначение обработчиков
editProfileButton.addEventListener("click", editProfileHandler);
addCardButton.addEventListener("click", addCardHandler);
editProfileForm.addEventListener("submit", editProfileFormSubmitHandler);
addCardForm.addEventListener("submit", addCardFormSubmitHandler);
editProfilePopup.addEventListener("click", closeModalHandler);
addCardPopup.addEventListener("click", closeModalHandler);
openCardPopup.addEventListener("click", closeModalHandler);

// Рендеринг карточек на страницу
renderCards(initialCards, cardsList);

// Функция рендеринга 1 карточки на страницу
function renderCard(cardInfo, cardsContainerElement, to = "append") {
	const cardElement = createCard(
		cardInfo,
		() => removeCard(cardElement),
		likeCard,
		() => openCard(cardInfo)
	);
	cardsContainerElement[to](cardElement);
}

// Функция рендеринга карточек на страницу
function renderCards(cardsData, cardsContainerElement) {
	cardsData.forEach((card) => {
		renderCard(card, cardsContainerElement);
	});
}

// Функция-обработчик сабмита формы добавления карточки
function addCardFormSubmitHandler(event) {
	event.preventDefault();
	const { "place-name": name, link } = addCardForm.elements;

	renderCard({ name: name.value, link: link.value }, cardsList, "prepend");
	closeModal(addCardPopup);
}

// Функция-обработчик сабмита формы редактирования профиля
function editProfileFormSubmitHandler(event) {
	event.preventDefault();
	const { profileName, profileDesc } = getProfileInfo(profileInfo);
	const { name, description } = editProfileForm.elements;

	[profileName.textContent, profileDesc.textContent] = [
		name.value,
		description.value,
	];
	closeModal(editProfilePopup);
}

// Функция получения текстовых элементов профиля
function getProfileInfo(profileInfoElement) {
	const profileName = profileInfoElement.querySelector(".profile__title");
	const profileDesc = profileInfoElement.querySelector(".profile__description");

	return { profileName, profileDesc };
}

// Функция-обработчик кнопки редактирования профиля
function editProfileHandler() {
	const { profileName, profileDesc } = getProfileInfo(profileInfo);
	const { name, description } = editProfileForm.elements;

	[name.value, description.value] = [
		profileName.textContent,
		profileDesc.textContent,
	];
	clearValidation(editProfileForm, validationConfig);
	openModal(editProfilePopup);
}

// Функция-обработчик кнопки добавления карточки
function addCardHandler() {
	addCardForm.reset();
	clearValidation(addCardForm, validationConfig);
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

enableValidation(validationConfig);
