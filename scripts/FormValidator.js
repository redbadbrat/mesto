export const validationSettings = {
  formSelector: '.form',
  buttonSelector: '.popup__submit-button',
  inputErrorSelector: 'input_style_error',
  inputSpanErrorActive: 'form__input-error_active',
  buttonDisabled: 'popup__submit-button_disabled',
};

export class FormValidator {
  constructor(formElement, settings) {
    this._formElement = formElement;
    this._settings = settings;
  }

  //памагити

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.form__${inputElement.id}-error`);
    inputElement.classList.add(this._settings.inputErrorSelector);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._settings.inputSpanErrorActive);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.form__${inputElement.id}-error`);
    inputElement.classList.remove(this._settings.inputErrorSelector);
    errorElement.classList.remove(this._settings.inputSpanErrorActive);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _disableSubmitButton() {
    this.buttonElement.classList.add(this._settings.buttonDisabled);
    this.buttonElement.disabled = true;
  }

  _enableSubmitButton() {
    this.buttonElement.classList.remove(this._settings.buttonDisabled);
    this.buttonElement.disabled = false;
  }

  //я всё же оставила тоггл, потому что его основная роль - проверка, однако теперь он имеет в логике лишь 2 функции.

  _toggleSubmitButton(inputList) {
    if (this._hasInvalidInput(this.inputList)) {
      this._disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  }

  _setEventListeners() {
    this.inputList = Array.from(this._formElement.querySelectorAll('.input'));
    this.buttonElement = this._formElement.querySelector(this._settings.buttonSelector);
    this._toggleSubmitButton();

    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleSubmitButton();
      });
    });
  }

  //*орёт*

  enableValidation() {
    this._setEventListeners();
  }
}

//отдельную благодарность выражаю старшим студентам нашей когорты (и младшим студентам тоже!).
//без вас я бы повесилась на любимом жёлтом шарфе
