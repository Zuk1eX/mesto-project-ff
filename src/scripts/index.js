// Импорты
import { initialCards } from "./cards.js";
import { createCard, removeCard, likeCard } from "./card.js";
import {
  openModal,
  closeModal,
  closeModalHandler,
  closeModalEscHandler,
} from "./modal.js";

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

// Назначение обработчиков
editProfileButton.addEventListener("click", editProfileHandler);
addCardButton.addEventListener("click", addCardHandler);
editProfileForm.addEventListener("submit", editProfileFormSubmitHandler);
addCardForm.addEventListener("submit", addCardFormSubmitHandler);

// Рендеринг карточек на страницу
renderCards(initialCards, cardsList);

// Функция рендеринга 1 карточки на страницу
function renderCard(cardInfo, cardsContainerElement, to = "append") {
  const cardElement = createCard(cardInfo, removeCard, likeCard, openCard);
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

  openModal(editProfilePopup);
  editProfilePopup.addEventListener("click", closeModalHandler);
  document.addEventListener("keydown", closeModalEscHandler);
}

// Функция-обработчик кнопки добавления карточки
function addCardHandler() {
  openModal(addCardPopup);
  addCardPopup.addEventListener("click", closeModalHandler);
  document.addEventListener("keydown", closeModalEscHandler);
}

// Функция открытия модального окна изображения карточки
function openCard(event) {
  const target = event.target;
  const card = target.closest(".card");
  const cardTitle = card.querySelector(".card__title");
  const popupImage = openCardPopup.querySelector(".popup__image");
  const popupCaption = openCardPopup.querySelector(".popup__caption");

  popupImage.src = target.src;
  popupImage.alt = target.alt;
  popupCaption.textContent = cardTitle.textContent;

  openModal(openCardPopup);
  openCardPopup.addEventListener("click", closeModalHandler);
  document.addEventListener("keydown", closeModalEscHandler);
}
