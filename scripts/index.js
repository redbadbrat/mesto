//привет! я едва понимаю, что тут происходит, поэтому всё в комментах. what a lovely piece of code

import {profileForm,
  addPicForm,
  nameInput,
  statusInput,
  picNameInput,
  picLinkInput,
  zoomPic,
  zoomCaption,
  cardsZone,
  openNamePopupButton,
  openAddPopupButton,
  //closeProfileButton,
  //closeAddButton,
  //closeZoomButton,
  popups,
  //popupWindows,
  popupProfile,
  popupAdd,
  popupZoom,
  userName,
  userStatus} from './variables.js';
import { startingCards } from './sampleCards.js'
import Card from './Card.js';
//import { validationSettings, FormValidator } from './FormValidator.js';

console.log('check');

//все переменные репатриировались в variables.js. и правильно сделали

//-----------------------------------------------
const formAddValidator = new FormValidator(addPicForm, validationSettings);
const formNameValidator = new FormValidator(profileForm, validationSettings);
//-----------------------------------------------

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

function openNameEditForm() {
  openPopup(popupProfile);
  nameInput.value = userName.textContent;
  statusInput.value = userStatus.textContent;
  disableSubmitButton(popupProfile.querySelector(validationSettings.buttonSelector), validationSettings);
}

export function openPopupZoom(event) {
  console.log(event.target);
  event.preventDefault();
  const clicky = event.target.closest('.element');
  zoomCaption.textContent = clicky.querySelector('.element__caption').textContent;
  zoomPic.src = clicky.querySelector('.element__image').src;
  zoomPic.alt = clicky.querySelector('.element__image').alt;
  popupZoom.classList.add('popup_dark');
  openPopup(popupZoom);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

function closePopupEsc(event) {
  if (event.key === 'Escape' || event.key === 'Esc') {
    closePopup(
      document.querySelector('.popup_opened')
    )
  }
}

function formEditSubmitHandler (event) {
  event.preventDefault();
  userName.textContent = nameInput.value;
  userStatus.textContent = statusInput.value;
  closePopup(popupProfile);
}

openNamePopupButton.addEventListener('click', openNameEditForm);
openAddPopupButton.addEventListener('click', function () {
  //у валидатора отпуск, ведь хоть что-то должно работать. и пока это не валидатор

  //-----------------------------------------------
  disableSubmitButton(popupAdd.querySelector(validationSettings.buttonSelector), validationSettings);
  //----------------------------------------------- 

  openPopup(popupAdd);
});

const generateCard = (name, link) => {
  const newCard = new Card(name, link);
  return newCard.createCard();
};

startingCards.forEach(({name, link}) => {
  cardsZone.append(generateCard(name, link));
});

function renderCard(event) {
  event.preventDefault();
  const name = picNameInput.value;
  const link = picLinkInput.value;
  cardsZone.prepend(generateCard(name, link));
  picNameInput.value = '';
  picLinkInput.value = '';
  closePopup(popupAdd);
};

popups.forEach(element => { 
  element.addEventListener('click', (event) => {
  if (event.target.classList.contains('popup_opened') || event.target.classList.contains('popup__close-button')) {
      closePopup(element)}
  });
});

//-----------------------------------------------
formAddValidator.enableValidation();
formNameValidator.enableValidation();
//-----------------------------------------------

addPicForm.addEventListener('submit', renderCard);
profileForm.addEventListener('submit', formEditSubmitHandler);



