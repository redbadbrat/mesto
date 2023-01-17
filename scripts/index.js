//привет! я едва понимаю, что тут происходит, поэтому всё в комментах. what a lovely piece of code

//import startingCards from './sampleCards.js';

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

function openPopupZoom(event) {
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

/*const renderCard = (name, link) => {
  const name = picNameInput.value;
  const link = picLinkInput.value;
  const renderedCard = new Card({name, link});
  cardsZone.prepend(renderedCard);
  picNameInput.value = '';
  picLinkInput.value = '';
  closePopup(popupAdd);
}*/

/*startingCards.forEach((name, link) => {
  renderCard(name, link)
});*/

popups.forEach(element => { 
  element.addEventListener('click', (event) => {
  if (event.target.classList.contains('popup_opened') || event.target.classList.contains('popup__close-button')) {
      closePopup(element)}
  });
});

//addPicForm.addEventListener('submit', createCustomCard);
profileForm.addEventListener('submit', formEditSubmitHandler);

class Card {
  constructor({name, link}) {
      this._name = name;
      this._link = link;
  }

  _getCardTemplate () {
      const cardTemplate = document.querySelector('#card') //нашли темплейт по айди кард
                          .content.querySelector('.element') //внутри темплейта нашли класс элемент
                          .cloneNode(true); //скопировали ноду
      return cardTemplate;
  }

  _deleteCard() {
      this._newCard.remove();
      //this._newCard = null;
  }

  _clickLikeButton () {
      this._newCard.classList.toggle('element__like-button_clicked');
  }
  
  _setListeners () {
      this._newCard.querySelector('.element__like-button').addEventListener('click', () => this._clickLikeButton()); 
      this._newCard.querySelector('.element__delete-button').addEventListener('click', () => this._deleteCard());
      this._newCard.querySelector('.element__image-overlay').addEventListener('click', openPopupZoom);
  }

  _setData () {
    const linkProp = this._newCard.querySelector('.element__image');
    linkProp.src = this._link;

    const captionProp = this._newCard.querySelector('.element__caption');
    captionProp.textContent = this._name;

    const altProp = this._newCard.querySelector('.element__image');
    altProp.alt = this._name;
}

  createCard () {
      this._newCard = this._getCardTemplate();
      this._setListeners();
      this._setData();

      return this._newCard;
}

  /*_createCustomCard () {
      const name = picNameInput.value;
      const pic = picLinkInput.value;
      const renderedCard = createCard(name, pic);
      cardsZone.prepend(renderedCard);
      picNameInput.value = '';
      picLinkInput.value = '';
      closePopup(popupAdd);
  }*/
  
};

function createCardy() {
  const cardy = new Card('nammmy', 'https://avatars.githubusercontent.com/u/102689681?s=48&v=4');
  cardsZone.prepend(cardy.createCard());
}

createCardy();
//export default openPopupZoom;