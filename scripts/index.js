//upd: не переживайте, я отстаю именно по причине того, что стараюсь понять своими 2 извилинами. да и я так, скорее про жизнь в целом
//спасибо за ваши комментарии и заметки, они мне помогли!

import {profileForm,
  picAddForm,
  nameInput,
  statusInput,
  picNameInput,
  picLinkInput,
  picZoom,
  captionZoom,
  cardsZone,
  namePopupButtonOpen,
  addPopupButtonOpen,
  popups,
  popupProfile,
  popupAdd,
  popupZoom,
  userName,
  userStatus,
  validationSettings,
  cardCreationSettings,
  startingCards } from './variables.js';
import Card from './Card.js';
import { FormValidator } from './FormValidator.js';

//все переменные репатриировались в variables.js. и правильно сделали

const formAddValidator = new FormValidator(picAddForm, validationSettings);
const formNameValidator = new FormValidator(profileForm, validationSettings);

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

function openNameEditForm() {
  openPopup(popupProfile);
  nameInput.value = userName.textContent;
  statusInput.value = userStatus.textContent;
  //disableSubmitButton(popupProfile.querySelector(validationSettings.buttonSelector), validationSettings);
}

export function openPopupZoom(event) {
  console.log(event.target);
  event.preventDefault();
  const clicky = event.target.closest('.element');
  captionZoom.textContent = clicky.querySelector('.element__caption').textContent;
  picZoom.src = clicky.querySelector('.element__image').src;
  picZoom.alt = clicky.querySelector('.element__image').alt;
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

function handleProfileFormSubmit (event) {
  event.preventDefault();
  userName.textContent = nameInput.value;
  userStatus.textContent = statusInput.value;
  closePopup(popupProfile);
}

namePopupButtonOpen.addEventListener('click', openNameEditForm);
addPopupButtonOpen.addEventListener('click', function () {
  formAddValidator.disableSubmitButton();
  openPopup(popupAdd);
});

const generateCard = (name, link) => {
  const newCard = new Card(name, link, cardCreationSettings);
  return newCard.createCard();
};

startingCards.forEach(({name, link}) => {
  cardsZone.append(generateCard(name, link, cardCreationSettings));
});

function handleCardFormSubmit(event) {
  event.preventDefault();
  const name = picNameInput.value;
  const link = picLinkInput.value;
  cardsZone.prepend(generateCard(name, link, cardCreationSettings));
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

formAddValidator.enableValidation();
formNameValidator.enableValidation();

picAddForm.addEventListener('submit', handleCardFormSubmit);
profileForm.addEventListener('submit', handleProfileFormSubmit);



