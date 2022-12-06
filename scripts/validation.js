//в ТЗ было много селекторов, но не все были использованы, хотя всё работает.

const settings = {
  inputSelector: '.input',
  formSelector: '.form',
  buttonSelector: '.popup__submit-button',
  inputErrorSelector: 'input_style_error',
  inputSpanErrorActive: 'input__error_active',
  buttonDisabled: 'popup__submit-button_disabled'
}

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorSelector);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.inputSpanErrorActive);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorSelector);
  errorElement.classList.remove(settings.inputSpanErrorActive);
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
}

function toggleSubmitButton(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
  buttonElement.classList.add(settings.buttonDisabled);
  buttonElement.disabled = true;
} else {
  buttonElement.classList.remove(settings.buttonDisabled);
  buttonElement.disabled = false;
} 
}

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.input'));
  const buttonElement = formElement.querySelector(settings.buttonSelector);
  toggleSubmitButton(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleSubmitButton(inputList, buttonElement);
    });
  });
};

function enableValidation() {
  formList = Array.from(document.querySelectorAll(settings.formSelector)); 
  formList.forEach((formElement) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });
    setEventListeners(formElement);
}); 
}

enableValidation(settings);

//отдельную благодарность выражаю старшим студентам нашей когорты (и младшим студентам тоже!), которые объяснили 
//мне принцип замыкания и то, как он используется. упоминайся он в тренажёре термином, было бы проще. без понимания этого принципа
//оставалось бы просто скопировать тренажёр, вставить, закрыть глаза и тыкать переменные до тех пор, пока не заработает.
//боль.
