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

//АЛЯРМА! я табурека

//------сектор подрубания API------
  
const api = new API({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-58',
  headers: {
    authorization: '41d3be90-8a0b-4c9a-b544-2c05d7a8fad5',
    'Content-Type': 'application/json'
  } 
});

//------сектор вспомогательный------

function showErrorMessage(error) {
  console.error('Упс, всё сломалось! Мы продобались, код ошибки: ', error);
}

//------сектор валидации------

const formAddValidator = new FormValidator(picAddForm, validationSettings);
const formNameValidator = new FormValidator(profileForm, validationSettings);

formAddValidator.enableValidation();
formNameValidator.enableValidation();

//------сектор юзеринфо и кардлист------

const cardList = new Section({
    renderer: (inputValues, myId) => {
      const newCardElement = createCard(inputValues, myId);
      cardList.addDefaultItem(newCardElement);
    }
  }, 
  cardsZone);

  const currentUserInfo = new UserInfo(userName, userStatus, userAvatar);

//------сектор создания, удаления и генерёжки карточек------

const zoomedCard = new PopupWithImage(popupTypesList.popupZoom);
zoomedCard.setEventListeners();

const deletionPopup = new PopupWithConfirmation(popupTypesList.popupCardDeletion,
                      (card) => {deleteCard(card)}
);

function createCard(inputValues, myId) {
  const newCard = new Card(inputValues, cardCreationSettings,
                  myId,
                  () => {zoomedCard.open(inputValues.name, inputValues.link)},
                  () => {deletionPopup.open(newCard)},
                  () => {addLike(newCard)},
                  () => {deleteLike(newCard)}
  )
  const newCardElement = newCard.createCard();
  return newCardElement;
};

function deleteCard(card) {
  api.deleteCard(card.getCardId())
  .then(() => {
    deletionPopup.close();
    card.handleCardDelete();
  })
  .catch(error => {
    showErrorMessage(error);
  });
}

function addLike(card) {
  api.addLike(card.getCardId())
  .then((res) => {
    console.log('AAAAAAAAA');
    card.handleLikeCounter(res.likes);
  })
  .catch(error => {
    showErrorMessage(error);
  });
}

function deleteLike(card) {
  api.deleteLike(card.getCardId())
  .then((res) => {
    card.handleLikeCounter(res.likes);
  })
  .catch(error => {
    showErrorMessage(error);
  });
}

//------сектор попапов------

const popupWithFormAdd = new PopupWithForm(popupTypesList.popupAdd, 
  (inputValues) => {
    popupWithFormAdd.showLoading(true);
    api.postNewCard(inputValues)
      .then(inputValues => {
        const newCardElement = createCard(inputValues, currentUserInfo.returnUserId());
        cardList.addItem(newCardElement);
      })
      //добавили карточки и подождали, всё ок. вырубили лоадер и закрыли попан.
      .then(() => {
        popupWithFormAdd.showLoading(false);
        popupWithFormAdd.close();
      })
      .catch(error => {
        showErrorMessage(error);
        console.log('Произошла ошибка. При перезагруке страницы карточка не сохранится :(')
      })
  }
);

const popupWithFormProfile = new PopupWithForm(popupTypesList.popupProfile,
  (inputValues) => {
    popupWithFormProfile.showLoading(true);
    api.editUserProfile(inputValues)
    .then((inputValues) => {
      currentUserInfo.setUserInfo(inputValues.name, inputValues.about);
    })
    .catch(error => {
      showErrorMessage(error);
    })
    .finally(() => {
      popupWithFormProfile.showLoading(false);
      popupWithFormProfile.close()
    })
  }
);

const popupWithFormAvatar = new PopupWithForm(popupTypesList.popupAvatar,
  (inputValue) => {
    popupWithFormAvatar.showLoading(true);
    api.updateAvatar(inputValue)
    .then((inputValue) => {
      currentUserInfo.setUserAvatar(inputValue.avatar);
    })
    .catch(error => {
      showErrorMessage(error);
    })
    .finally(() => {
      popupWithFormAvatar.showLoading(false);
      popupWithFormAvatar.close()
    })
  }
);

popupWithFormAdd.setEventListeners();
popupWithFormProfile.setEventListeners();
popupWithFormAvatar.setEventListeners();
deletionPopup.setEventListeners();

popupAddButtonOpen.addEventListener('click', () => {
  popupWithFormAdd.open();
  formAddValidator.disableSubmitButton();
});

namePopupButtonOpen.addEventListener('click', () => {
  const profile = currentUserInfo.getUserInfo();
  nameInput.value = profile.currentName; 
  statusInput.value = profile.currentStatus;
  popupWithFormProfile.open();
});

popupChangeAvatarOpen.addEventListener('click', () => {
  popupWithFormAvatar.open();
});

//------сектор пустых обещаний------

Promise.all([api.getUserData(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    cardList.renderElements(initialCards, userData._id);
    currentUserInfo.setUserInfo(userData.name, userData.about)
    currentUserInfo.setUserAvatar(userData.avatar)
    currentUserInfo.setUserId(userData._id)
  })
  .catch(error => {
    console.log('все обещания пошли прахом.')
    showErrorMessage(error);
  });

//------Ашкелон------
//------сектор газа------






