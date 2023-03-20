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
  popupTypesList, 
  buttonSubmit,
  userAvatar,
  popupChangeAvatarOpen} from '../utils/variables.js';

import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import API from '../components/API';
import PopupWithConfirmation from '../components/PopupWithConfirmation';

//все переменные репатриировались в variables.js. и правильно сделали

//АЛЯРМА! Все запросы к серверу разбиты на задачи (а не сгруппированы) в учебных целях. Честное слово, я не очень табуретка, просто так легче дебажить - по слогам

//------сектор подрубания API------
  
const api = new API({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-58',
  headers: {
    authorization: '41d3be90-8a0b-4c9a-b544-2c05d7a8fad5',
    'Content-Type': 'application/json'
  } 
});

//------сектор вспомогательный------

function showLoading(res) {
  if (res) {
    buttonSubmit.textContent = 'Сохранение...';
  } else {
    buttonSubmit.textContent = 'Сохранить'
  }
}

showLoading;

function showErrorMessage(error) {
  console.error('Упс, всё сломалось! Мы продобались, код ошибки: ', error);
}

//------сектор валидации------

const formAddValidator = new FormValidator(picAddForm, validationSettings);
const formNameValidator = new FormValidator(profileForm, validationSettings);

formAddValidator.enableValidation();
formNameValidator.enableValidation();

//------сектор юзеринфо и кардлист------

const currentUserInfo = new UserInfo(userName, userStatus, userAvatar);

api.getUserData()
  .then(userData => {
    currentUserInfo.setUserInfo(userData.name, userData.about, userData.avatar)
  })
  .catch(error => {
    showErrorMessage(error);
  });

const cardList = new Section({
    renderer: (inputValues) => {
      const newCardElement = createCard(inputValues);
      cardList.addDefaultItem(newCardElement);
    }
  }, 
  cardsZone);

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

api.getInitialCards()
  .then(initialCards => {
    cardList.renderElements(initialCards);
  })
  .catch(error => {
    showErrorMessage(error);
  });

//------сектор попапов------

const popupWithFormAdd = new PopupWithForm(popupTypesList.popupAdd, 
  (inputValues) => {
    showLoading(true);
    api.postNewCard(inputValues)
      .then((inputValues) => {
        const newCardElement = createCard(inputValues);
        cardList.addItem(newCardElement);
      })
      .catch(error => {
        showErrorMessage(error);
        console.log('Произошла ошибка. При перезагруке страницы карточка не сохранится :(')
      })
      .finally(() => {
        showLoading(false);
        popupWithFormAdd.close();
      })
  }
);

const popupWithFormProfile = new PopupWithForm(popupTypesList.popupProfile,
  (inputValues) => {
    showLoading(true);
    api.editUserProfile(inputValues)
    .then((inputValues) => {
      currentUserInfo.setUserInfo(inputValues.name, inputValues.about);
    })
    .catch(error => {
      showErrorMessage(error);
    })
    .finally(() => {
      showLoading(false);
      popupWithFormProfile.close()
    })
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

popupChangeAvatarOpen.addEventListener('click', () => {
  console.log('click-clack-clock')
})

//------Ашкелон------
//------сектор газа------






