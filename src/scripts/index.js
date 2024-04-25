// Импорты
import { createCard, removeCard, likeCard } from "./card.js";
import { openModal, closeModal, closeModalHandler } from "./modal.js";
import { Validation } from "./validation.js";
import {
	APIError,
	addCard,
	deleteCard,
	getInitialCards,
	getUserInfo,
	updateUserAvatar,
	updateUserInfo,
} from "./api.js";
import { reloadPage } from "./utils.js";

// DOM узлы
const profileImage = document.querySelector(".profile__image");
const profileInfo = document.querySelector(".profile__info");
const placesLoader = document.querySelector(".places__loader");
const cardsList = document.querySelector(".places__list");

const editProfileButton = document.querySelector(".profile__edit-button");
const editAvatarButton = document.querySelector(".profile__edit-avatar-button");
const addCardButton = document.querySelector(".profile__add-button");
const editProfilePopup = document.querySelector(".popup_type_edit");
const editAvatarPopup = document.querySelector(".popup_type_edit-avatar");
const addCardPopup = document.querySelector(".popup_type_new-card");
const openCardPopup = document.querySelector(".popup_type_image");

const editProfileForm = document.forms["edit-profile"];
const editAvatarForm = document.forms["edit-avatar"];
const addCardForm = document.forms["new-place"];

let editProfileButtonTimer = null;
let editAvatarButtonTimer;
let addCardButtonTimer;

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
editAvatarButton.addEventListener("click", editAvatarHandler);
addCardButton.addEventListener("click", addCardHandler);

editAvatarForm.addEventListener("submit", editAvatarFormSubmitHandler);
editProfileForm.addEventListener("submit", editProfileFormSubmitHandler);
addCardForm.addEventListener("submit", addCardFormSubmitHandler);

editProfilePopup.addEventListener("click", closeModalHandler);
editAvatarPopup.addEventListener("click", closeModalHandler);
addCardPopup.addEventListener("click", closeModalHandler);
openCardPopup.addEventListener("click", closeModalHandler);

// Запрос и рендеринг информации о пользователе и карточек на страницу
function renderPage() {
	changeLoaderStatus(placesLoader, "loading");

	Promise.all([getUserInfo(), getInitialCards()])
		.then(([user, cards]) => {
			renderUserInfo(user);
			renderUserImage(user);

			editProfileButton.disabled = false;
			editAvatarButton.disabled = false;
			addCardButton.disabled = false;

			const sortedCards = sortCards(cards);
			renderCards(user._id, sortedCards, cardsList);
		})
		.catch((error) => {
			changeLoaderStatus(placesLoader, "error", error);
			console.log(error);
		})
		.finally(() => {
			changeLoaderStatus(placesLoader);
		});
}

renderPage();

function changeLoaderStatus(loader, status, error) {
	switch (status) {
		case "loading": {
			loader.classList.add("loader_is-loading");
			break;
		}
		case "error": {
			loader.classList.add("loader_is-error");
			loader
				.querySelector(".loader__button")
				.addEventListener("click", reloadPage);

			if (error instanceof APIError) {
				const errorText = loader.querySelector(".loader__error-code");
				errorText.textContent = `Код ошибки: ${error.status}`;
			}
			break;
		}
		default: {
			loader.classList.remove("loader_is-loading");
		}
	}
}

// Функция сортировки карточек по дате
function sortCards(cards) {
	return [...cards].sort(({ createdAt: a }, { createdAt: b }) => {
		return new Date(b) - new Date(a);
	});
}

// Функция рендеринга 1 карточки на страницу
function renderCard(userId, cardInfo, cardsContainerElement, to = "append") {
	const cardElement = createCard(
		userId,
		cardInfo,
		() => removeCard(cardElement),
		() => likeCard(cardElement),
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
	changeIsFormLoading(true, addCardForm);

	addCard({ name: name.value, link: link.value })
		.then((card) => {
			renderCard(card.owner._id, card, cardsList, "prepend");
			closeModal(addCardPopup);
		})
		.catch((e) => apiErrorFormHandler(e, addCardForm))
		.finally(() => {
			addCardButtonTimer = setTimeout(
				() => changeIsFormLoading(false, addCardForm),
				2000
			);
		});
}

// Функция-обработчик сабмита формы редактирования профиля
function editProfileFormSubmitHandler(event) {
	event.preventDefault();
	const { name, description } = editProfileForm.elements;

	changeIsFormLoading(true, editProfileForm);
	updateUserInfo({ name: name.value, about: description.value })
		.then((user) => {
			closeModal(editProfilePopup);
			renderUserInfo(user);
		})
		.catch((e) => apiErrorFormHandler(e, editProfileForm))
		.finally(() => {
			editProfileButtonTimer = setTimeout(
				() => changeIsFormLoading(false, editProfileForm),
				2000
			);
		});
}

function editAvatarFormSubmitHandler(event) {
	event.preventDefault();
	const { link } = editAvatarForm.elements;
	changeIsFormLoading(true, editAvatarForm);

	updateUserAvatar(link.value)
		.then((user) => {
			closeModal(editAvatarPopup);
			renderUserImage(user);
		})
		.catch((e) => apiErrorFormHandler(e, editAvatarForm))
		.finally(() => {
			editAvatarButtonTimer = setTimeout(
				() => changeIsFormLoading(false, editAvatarForm),
				2000
			);
		});
}

// Функция получения текстовых элементов профиля
function getProfileInfo(profileInfoElement) {
	const profileName = profileInfoElement.querySelector(".profile__title");
	const profileDesc = profileInfoElement.querySelector(".profile__description");

	return { profileName, profileDesc };
}

// Функция рендеринга информации о пользователе
function renderUserInfo({ name, about }) {
	profileInfo.querySelector(".profile__title").textContent = name;
	profileInfo.querySelector(".profile__description").textContent = about;
}

// Функция рендеринга аватара
function renderUserImage({ avatar }) {
	profileImage.src = avatar;
}

// Функция-обработчик кнопки редактирования профиля
function editProfileHandler() {
	const { profileName, profileDesc } = getProfileInfo(profileInfo);
	const { name, description } = editProfileForm.elements;
	clearTimeout(editProfileButtonTimer);
	changeIsFormLoading(false, editProfileForm);

	[name.value, description.value] = [
		profileName.textContent,
		profileDesc.textContent,
	];
	validation.clearValidation(editProfileForm);
	openModal(editProfilePopup);
}

// Функция-обработчик кнопки редактирования аватара
function editAvatarHandler() {
	const { link } = editAvatarForm.elements;
	clearTimeout(editAvatarButtonTimer);
	changeIsFormLoading(false, editAvatarForm);

	link.value = profileImage.src;
	validation.clearValidation(editAvatarForm);
	openModal(editAvatarPopup);
}

// Функция-обработчик кнопки добавления карточки
function addCardHandler() {
	clearTimeout(addCardButtonTimer);
	changeIsFormLoading(false, addCardForm);

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

// Функция смены состояния кнопки формы
function changeIsFormLoading(isLoading, form) {
	const btn = form.querySelector(".form__button");
	btn.classList.remove("form__button_failed");

	if (isLoading) {
		btn.textContent = "Сохранение...";
	} else {
		btn.textContent = "Сохранить";
	}
}

// Функция установки сообщения об ошибке в форме
function setFormLoadingError(form, errorMessage) {
	const btn = form.querySelector(".form__button");
	btn.textContent = errorMessage;
	btn.classList.add("form__button_failed");
}

// Функция обработки ошибок обращения к API в форме
function apiErrorFormHandler(error, form) {
	if (error instanceof APIError) {
		setFormLoadingError(form, `Не удалось сохранить (${error.status})`);
		console.log(`[${error.status}] ${error}`);
	} else {
		setFormLoadingError(form, "Не удалось сохранить");
		console.log(error);
	}
}
