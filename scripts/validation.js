//в ТЗ было много селекторов, но не все были использованы, хотя всё работает.

const validationSettings = {
  formSelector: '.form',
  buttonSelector: '.popup__submit-button',
  inputErrorSelector: 'input_style_error',
  inputSpanErrorActive: 'form__input-error_active',
  buttonDisabled: 'popup__submit-button_disabled'
}

function showInputError (formElement, inputElement, errorMessage, settings) {
  const errorElement = formElement.querySelector(`.form__${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorSelector);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.inputSpanErrorActive);
};

function hideInputError (formElement, inputElement, settings) {
  const errorElement = formElement.querySelector(`.form__${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorSelector);
  errorElement.classList.remove(settings.inputSpanErrorActive);
  errorElement.textContent = '';
};

function checkInputValidity(formElement, inputElement, settings) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, settings);
  } else {
    hideInputError(formElement, inputElement, settings);
  }
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
};

function disableSubmitButton(buttonElement, settings) {
  buttonElement.classList.add(settings.buttonDisabled);
  buttonElement.disabled = true;
};

function enableSubmitButton(buttonElement, settings) {
  buttonElement.classList.remove(settings.buttonDisabled);
  buttonElement.disabled = false;
};

//я всё же оставила тоггл, потому что его основная роль - проверка, однако теперь он имеет в логике лишь 2 функции.

function toggleSubmitButton(inputList, buttonElement, settings) {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(buttonElement, settings);
  } else {
    enableSubmitButton(buttonElement, settings);
  } 
};

function setEventListeners(formElement, settings) {
  const inputList = Array.from(formElement.querySelectorAll('.input'));
  const buttonElement = formElement.querySelector(settings.buttonSelector);
  toggleSubmitButton(inputList, buttonElement, settings);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, settings);
      toggleSubmitButton(inputList, buttonElement, settings);
    });
  });
};

function enableValidation(settings) {
  formList = Array.from(document.querySelectorAll(settings.formSelector)); 
  formList.forEach((formElement) => {
    setEventListeners(formElement, settings);
  }); 
}

enableValidation(validationSettings);

//отдельную благодарность выражаю старшим студентам нашей когорты (и младшим студентам тоже!), которые объяснили 
//мне принцип замыкания и то, как он используется. упоминайся он в тренажёре термином, было бы проще. без понимания этого принципа
//оставалось бы просто скопировать тренажёр, вставить, закрыть глаза и тыкать переменные до тех пор, пока не заработает.
//боль.
