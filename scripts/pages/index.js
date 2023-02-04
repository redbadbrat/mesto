//на самом деле я уверена, что мои 40-50 извилин очень стараются, а 2 из них просто много волнуются. не могу их в этом винить 
//хорошего вам дня и удачи в наши непростые времена,
//Ксения

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
  popupAddButtonOpen,
  popups,
  userName,
  userStatus,
  validationSettings,
  cardCreationSettings,
  popupSettings,
  startingCards,
  popupTypesList } from '../utils/variables.js';

import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';


//все переменные репатриировались в variables.js. и правильно сделали

//------сектор валидации------

const formAddValidator = new FormValidator(picAddForm, validationSettings);
const formNameValidator = new FormValidator(profileForm, validationSettings);

formAddValidator.enableValidation();
formNameValidator.enableValidation();

//------сектор создания и генерёжки карточек------

//предложили вынести кардклик снаружи, "иначе без пол-литра не разобраться". ну ладно :(
//upd: их предложение не сработало, так что берите пол-литра
const zoomedCard = new PopupWithImage(popupTypesList.popupZoom);
zoomedCard.setEventListeners();
/*function handleCardClick (name, link) {
  zoomedCard.open(name, link)
}*/

const cardList = new Section({
  items: startingCards, 
  renderer: (item) => {
  const newCard = new Card(item, cardCreationSettings, 
    () => {zoomedCard.open(item.name, item.link)});
  //нужна пояснительная бригада
  //на строчке 49 есть заготовка функции, которую я просот хотела использовать здесь, но она вместо этого выдавала мне
  //мгновенное открытие зума и отсутвтие листенеров на других карточках. почему безымянная стрелка победила? (кроме того, что она была в примере)
  //победила стрелка, победил и пластмассовый мир. вот так.
  const newCardElement = newCard.createCard();
  cardList.addDefaultItem(newCardElement);
  //сюда идёт prepend, как в какой-то далёкой пр из прошлого. для всего остального мастеркард и append
}}, 
cardsZone);

cardList.renderElements();

//------сектор юзеринфо------

const currentUserInfo = new UserInfo(userName, userStatus);

//------сектор попапов------

const popupWithFormAdd = new PopupWithForm(popupTypesList.popupAdd, 
  (obj) => {
    const newCard = new Card(obj, cardCreationSettings, 
      () => {zoomedCard.open(obj.name, obj.link)});
    const newCardElement = newCard.createCard();
    cardList.addItem(newCardElement); //append
    popupWithFormAdd.close();
  }
);

const popupWithFormProfile = new PopupWithForm(popupTypesList.popupProfile,
  (obj) => {
    currentUserInfo.setUserInfo(obj.name, obj.status)
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

//------сектор газа------




