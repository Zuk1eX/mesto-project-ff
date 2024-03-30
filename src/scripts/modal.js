// Функция открытия модального окна
function openModal(popupElement) {
  popupElement.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeModalEscHandler);
}

// Функция закрытия модального окна
function closeModal(popupElement) {
  popupElement.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeModalEscHandler);
}

// Функция-обработчик закрытия модального окна
function closeModalHandler(event) {
  const openedPopup = document.querySelector(".popup_is-opened");

  if (
    ["popup", "popup__close"].some((className) =>
      event.target.classList.contains(className)
    )
  ) {
    closeModal(openedPopup);
  }
}

// Функция-обработчик закрытия модального окна по нажатию Escape
function closeModalEscHandler(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    closeModal(openedPopup);
  }
}

export { openModal, closeModal, closeModalHandler };
