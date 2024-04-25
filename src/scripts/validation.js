class Validation {
	constructor(validationConfig) {
		this._formSelector = validationConfig.formSelector;
		this._inputSelector = validationConfig.inputSelector;
		this._submitButtonSelector = validationConfig.submitButtonSelector;
		this._inactiveButtonClass = validationConfig.inactiveButtonClass;
		this._inputErrorClass = validationConfig.inputErrorClass;
		this._errorClass = validationConfig.errorClass;

		this._formList = Array.from(document.querySelectorAll(this._formSelector));
	}

	enableValidation() {
		this._formList.forEach((formElement) => {
			formElement.addEventListener("submit", (e) => e.preventDefault());
			this.setEventListeners(formElement);
		});
	}

	setEventListeners(formElement) {
		const inputList = Array.from(
			formElement.querySelectorAll(this._inputSelector)
		);
		const buttonElement = formElement.querySelector(this._submitButtonSelector);

		this.toggleButtonState(inputList, buttonElement);

		inputList.forEach((inputElement) => {
			inputElement.addEventListener("input", () => {
				this.checkInputValidity(formElement, inputElement);
				this.toggleButtonState(inputList, buttonElement);
			});
		});
	}

	toggleButtonState(inputList, buttonElement) {
		if (this.hasInvalidInput(inputList)) {
			buttonElement.disabled = true;
			buttonElement.classList.add(this._inactiveButtonClass);
		} else {
			buttonElement.disabled = false;
			buttonElement.classList.remove(this._inactiveButtonClass);
		}
	}

	checkInputValidity(formElement, inputElement) {
		if (inputElement.validity.patternMismatch) {
			inputElement.setCustomValidity(inputElement.dataset.errorMessage);
		} else {
			inputElement.setCustomValidity("");
		}

		if (!inputElement.validity.valid) {
			this.showInputError(
				formElement,
				inputElement,
				inputElement.validationMessage
			);
		} else {
			this.hideInputError(formElement, inputElement);
		}
	}

	hasInvalidInput(inputList) {
		return inputList.some((inputElement) => {
			if (!inputElement.validity.patternMismatch) {
				inputElement.setCustomValidity("");
			}
			return !inputElement.validity.valid;
		});
	}

	showInputError(formElement, inputElement, errorMessage) {
		const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
		inputElement.classList.add(this._inputErrorClass);
		errorElement.textContent = errorMessage;
		errorElement.classList.add(this._errorClass);
	}

	hideInputError(formElement, inputElement) {
		const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
		inputElement.classList.remove(this._inputErrorClass);
		errorElement.textContent = "";
		errorElement.classList.remove(this._errorClass);
	}

	clearValidation(formElement) {
		const inputList = Array.from(
			formElement.querySelectorAll(this._inputSelector)
		);
		const buttonElement = formElement.querySelector(this._submitButtonSelector);

		formElement.reset();
		this.toggleButtonState(inputList, buttonElement);

		inputList.forEach((inputElement) => {
			this.hideInputError(formElement, inputElement);
		});
	}
}

export { Validation };
