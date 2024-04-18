function showInputError(
	formElement,
	inputElement,
	errorMessage,
	inputErrorClass,
	errorClass
) {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	inputElement.classList.add(inputErrorClass);
	errorElement.textContent = errorMessage;
	errorElement.classList.add(errorClass);
}

function hideInputError(
	formElement,
	inputElement,
	inputErrorClass,
	errorClass
) {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	inputElement.classList.remove(inputErrorClass);
	errorElement.textContent = "";
	errorElement.classList.remove(errorClass);
}

function hasInvalidInput(inputList) {
	return inputList.some((inputElement) => {
		if (!inputElement.validity.patternMismatch) {
			inputElement.setCustomValidity("");
		}
		return !inputElement.validity.valid;
	});
}

function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
	if (hasInvalidInput(inputList)) {
		buttonElement.disabled = true;
		buttonElement.classList.add(inactiveButtonClass);
	} else {
		buttonElement.disabled = false;
		buttonElement.classList.remove(inactiveButtonClass);
	}
}

function checkInputValidity(
	formElement,
	inputElement,
	inputErrorClass,
	errorClass
) {
	if (inputElement.validity.patternMismatch) {
		inputElement.setCustomValidity(inputElement.dataset.errorMessage);
	} else {
		inputElement.setCustomValidity("");
	}

	if (!inputElement.validity.valid) {
		showInputError(
			formElement,
			inputElement,
			inputElement.validationMessage,
			inputErrorClass,
			errorClass
		);
	} else {
		hideInputError(formElement, inputElement, inputErrorClass, errorClass);
	}
}

function setEventListeners({
	formElement,
	inputSelector,
	submitButtonSelector,
	inactiveButtonClass,
	inputErrorClass,
	errorClass,
}) {
	const inputList = Array.from(formElement.querySelectorAll(inputSelector));
	const buttonElement = formElement.querySelector(submitButtonSelector);
	toggleButtonState(inputList, buttonElement, inactiveButtonClass);

	inputList.forEach((inputElement) => {
		inputElement.addEventListener("input", () => {
			checkInputValidity(
				formElement,
				inputElement,
				inputErrorClass,
				errorClass
			);
			toggleButtonState(inputList, buttonElement, inactiveButtonClass);
		});
	});
}

function enableValidation({
	formSelector,
	inputSelector,
	submitButtonSelector,
	inactiveButtonClass,
	inputErrorClass,
	errorClass,
}) {
	const formList = Array.from(document.querySelectorAll(formSelector));

	formList.forEach((formElement) => {
		formElement.addEventListener("submit", (e) => {
			e.preventDefault();
		});
		setEventListeners({
			formElement,
			inputSelector,
			submitButtonSelector,
			inactiveButtonClass,
			inputErrorClass,
			errorClass,
		});
	});
}

function clearValidation(formElement, validationConfig) {
	const {
		inputSelector,
		submitButtonSelector,
		inactiveButtonClass,
		inputErrorClass,
		errorClass,
	} = validationConfig;
	const inputList = Array.from(formElement.querySelectorAll(inputSelector));
	const buttonElement = formElement.querySelector(submitButtonSelector);

	toggleButtonState(inputList, buttonElement, inactiveButtonClass);
	inputList.forEach((inputElement) => {
		hideInputError(formElement, inputElement, inputErrorClass, errorClass);
	});
}

export { enableValidation, clearValidation };
