const validationSettings = {
  inputSelector: '.input',
  formSelector: '.form',
  buttonSelector: '.popup__submit-button',
  inputErrorSelector: 'input__error'
}

const forms = Array.from(document.querySelectorAll(validationSettings.formSelector));

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('input_style_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('input__error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('input_style_error');
  errorElement.classList.remove('input__error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

//к сожалению, функцию из тренажёра я не совсем приняла как родную, переписала отдельно оба этапа - попроще

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
}); 
}

function toggleSubmitButton(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
  buttonElement.classList.add('popup__submit-button_disabled');
  buttonElement.disabled = true;
} else {
  buttonElement.classList.remove('popup__submit-button_disabled');
  buttonElement.disabled = false;
} 
}

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.input'));
  const buttonElement = formElement.querySelector('.popup__submit-button');
  toggleSubmitButton(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleSubmitButton(inputList, buttonElement);
    });
  });
};

function enableValidation() {
  formList = forms; 
  formList.forEach((formElement) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });
    setEventListeners(formElement);
}); 
}

enableValidation();
