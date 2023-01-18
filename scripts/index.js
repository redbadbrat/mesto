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
  closeProfileButton,
  closeAddButton,
  closeZoomButton,
  popups,
  popupWindows,
  popupProfile,
  popupAdd,
  popupZoom,
  userName,
  userStatus} from './variables.js';

import { startingCards } from './sampleCards.js'
import Card from './Card.js';

console.log('check');

//все переменные репатриировались в variables.js

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
  disableSubmitButton(popupAdd.querySelector(validationSettings.buttonSelector), validationSettings);
  openPopup(popupAdd);
});

/*function generateCard(name, link) {
  const newCard = new Card(name, link);
  newCard.createCard();
  cardsZone.prepend(newCard.createCard());
}*/

const generateCard = (name, link) => {
  const newCard = new Card(name, link);
  return newCard.createCard();
};

/*const renderCardyyyyyy = (name, link) => {
  const name = picNameInput.value;
  const link = picLinkInput.value;
  const renderedCard = new Card({name, link});
  cardsZone.prepend(renderedCard);
  picNameInput.value = '';
  picLinkInput.value = '';
  closePopup(popupAdd);
};*/

/*function renderCard (name, link) {
  const newCard = new Card(name, link);
  cardsZone.prepend(newCard.createCard());
}*/

startingCards.forEach(({name, link}) => {
  cardsZone.append(generateCard(name, link));
});

popups.forEach(element => { 
  element.addEventListener('click', (event) => {
  if (event.target.classList.contains('popup_opened') || event.target.classList.contains('popup__close-button')) {
      closePopup(element)}
  });
});

//addPicForm.addEventListener('submit', createCustomCard);
profileForm.addEventListener('submit', formEditSubmitHandler);


