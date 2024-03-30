// Функция открытия модального окна
function openModal(popupElement) {
  popupElement.classList.add("popup_is-opened");
}

// Функция закрытия модального окна
function closeModal(popupElement) {
  popupElement.classList.remove("popup_is-opened");
  popupElement.querySelector("form")?.reset();
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
    openedPopup.removeEventListener("click", closeModalHandler);
    document.removeEventListener("keydown", closeModalEscHandler);
  }
}

// Функция-обработчик закрытия модального окна по нажатию Escape
function closeModalEscHandler(event) {
  const openedPopup = document.querySelector(".popup_is-opened");

  if (event.key === "Escape") {
    closeModal(openedPopup);
    document.removeEventListener("keydown", closeModalEscHandler);
  }
}

export { openModal, closeModal, closeModalHandler, closeModalEscHandler };
