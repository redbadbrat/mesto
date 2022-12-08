//в ТЗ было много селекторов, но не все были использованы, хотя всё работает.

const constants = {
  formSelector: '.form',
  buttonSelector: '.popup__submit-button',
  inputErrorSelector: 'input_style_error',
  inputSpanErrorActive: 'form__input-error_active',
  buttonDisabled: 'popup__submit-button_disabled'
}

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.form__${inputElement.id}-error`);
  inputElement.classList.add(constants.inputErrorSelector);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(constants.inputSpanErrorActive);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.form__${inputElement.id}-error`);
  inputElement.classList.remove(constants.inputErrorSelector);
  errorElement.classList.remove(constants.inputSpanErrorActive);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
};

function disableSubmitButton(buttonElement) {
  buttonElement.classList.add(constants.buttonDisabled);
  buttonElement.disabled = true;
};

function enableSubmitButton(buttonElement) {
  buttonElement.classList.remove(constants.buttonDisabled);
  buttonElement.disabled = false;
};

//я всё же оставила тоггл, потому что его основная роль - проверка, однако теперь он имеет в логике лишь 2 функции.

function toggleSubmitButton(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(buttonElement);
  } else {
    enableSubmitButton(buttonElement);
  } 
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.input'));
  const buttonElement = formElement.querySelector(constants.buttonSelector);
  toggleSubmitButton(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleSubmitButton(inputList, buttonElement);
    });
  });
};

function enableValidation(constants) {
  formList = Array.from(document.querySelectorAll(constants.formSelector)); 
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  }); 
}

enableValidation(constants);

//отдельную благодарность выражаю старшим студентам нашей когорты (и младшим студентам тоже!), которые объяснили 
//мне принцип замыкания и то, как он используется. упоминайся он в тренажёре термином, было бы проще. без понимания этого принципа
//оставалось бы просто скопировать тренажёр, вставить, закрыть глаза и тыкать переменные до тех пор, пока не заработает.
//боль.
