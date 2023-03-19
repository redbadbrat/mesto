//HERE WE GO AGAIN YOPTA

import './index.css';
import {profileForm,
  picAddForm,
  nameInput,
  statusInput,
  cardsZone,
  namePopupButtonOpen,
  popupAddButtonOpen,
  userName,
  userStatus,
  validationSettings,
  cardCreationSettings,
  startingCards,
  popupTypesList, 
  buttonSubmit,
  userAvatar} from '../utils/variables.js';

import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import API from '../components/API';
import PopupWithConfirmation from '../components/PopupWithConfirmation';

//все переменные репатриировались в variables.js. и правильно сделали

//------сектор подрубания API------
  
const api = new API({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-58',
  headers: {
    authorization: '41d3be90-8a0b-4c9a-b544-2c05d7a8fad5',
    'Content-Type': 'application/json'
  } 
});

//------сектор вспомогательный------

function showLoading() {
  buttonSubmit.textContent = 'Сохранение...';
}

showLoading;

api.getUserData()
  .then(userData => {
    console.log(userData.name);
  })
  .catch(error => {
    console.error('Error fetching user data:', error);
  });

//------сектор валидации------

const formAddValidator = new FormValidator(picAddForm, validationSettings);
const formNameValidator = new FormValidator(profileForm, validationSettings);

formAddValidator.enableValidation();
formNameValidator.enableValidation();

//------сектор создания и генерёжки карточек------

const zoomedCard = new PopupWithImage(popupTypesList.popupZoom);
zoomedCard.setEventListeners();
const deletionPopup = new PopupWithConfirmation(popupTypesList.popupCardDeletion);
deletionPopup.setEventListeners();

function createCard(inputValues) {
  const newCard = new Card(inputValues, cardCreationSettings, 
                  () => {zoomedCard.open(inputValues.name, inputValues.link)},
                  () => {}
  )

  const newCardElement = newCard.createCard();
  return newCardElement;
};

const cardList = new Section({
  items: startingCards, 
  renderer: (inputValues) => {
  const newCardElement = createCard(inputValues);
  cardList.addDefaultItem(newCardElement);
}}, 
cardsZone);

cardList.renderElements();

//------сектор юзеринфо------

const currentUserInfo = new UserInfo(userName, userStatus, userAvatar);

//------сектор попапов------

const popupWithFormAdd = new PopupWithForm(popupTypesList.popupAdd, 
  (inputValues) => {
    const newCardElement = createCard(inputValues);
    cardList.addItem(newCardElement);
    popupWithFormAdd.close();
  }
);

const popupWithFormProfile = new PopupWithForm(popupTypesList.popupProfile,
  (inputValues) => {
    currentUserInfo.setUserInfo(inputValues.name, inputValues.status)
    popupWithFormProfile.close();
  }
);

popupWithFormAdd.setEventListeners();
popupWithFormProfile.setEventListeners();

popupAddButtonOpen.addEventListener('click', () => {
  popupWithFormAdd.open();
  formAddValidator.disableSubmitButton();
});

namePopupButtonOpen.addEventListener('click', () => {
  const profile = currentUserInfo.getUserInfo();
  nameInput.value = profile.currentName; 
  statusInput.value = profile.currentStatus;
  popupWithFormProfile.open();
  console.log(currentUserInfo.getUserInfo())
});

//------Ашкелон------
//------сектор газа------






