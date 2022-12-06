//привет! я едва понимаю, что тут происходит, поэтому всё в комментах. what a lovely piece of code

//все переменные репатриировались в variables.js

//ОТКРЫТЬ ВОРОТА! - теперь с крутым ловцом ивентов!

//внутрь передаётся type - он отражает потребность в неактивной кнопке в попапе. если что, я могу просто давать false/true, но с примитивом код читается легче

function openPopup(popup, type) {
  if (type === true) {
    submitButton = popup.querySelector('.popup__submit-button');
    submitButton.disabled = true;
    submitButton.classList.add('popup__submit-button_disabled');
  }
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

function openNameEditForm() {
  openPopup(popupProfile, hasInput);
  nameInput.value = userName.textContent;
  statusInput.value = userStatus.textContent;
}

function openPopupZoom(event) {
  debugger;
  console.log(event.target);
  event.preventDefault();
  const clicky = event.target.closest('.element');
  zoomCaption.textContent = clicky.querySelector('.element__caption').textContent;
  zoomPic.src = clicky.querySelector('.element__image').src;
  zoomPic.alt = clicky.querySelector('.element__image').alt;
  popupZoom.classList.add('popup_dark');
  openPopup(popupZoom, noInput);
}

//ЗАКРЫТЬ ВОРОТА! - теперь с крутым ловцом ивентов!

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

//версия 1 для кнопки еск - была на корню раскритикована коллегами по когорте. я всё равно питаю к ней нежные чувства

/*function closePopupEsc(popup, event) {
  if (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === "27") {
    closePopup(popup);
  }
}*/

//версия 2 - прилизанная 

function closePopupEsc(event) {
  if (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === "27") {
    closePopup(
      document.querySelector('.popup_opened')
    )
  }
}

//ЗАКРЫТЬ ВОРОТА, НО ЗАНЕСТИ ВНУТРЬ НАГРАБЛЕННОЕ!

function formEditSubmitHandler (event) {
  event.preventDefault();
  userName.textContent = nameInput.value;
  userStatus.textContent = statusInput.value;
  closePopup(popupProfile);
}

function clickLikeButton (event) {
  event.target.classList.toggle('element__like-button_clicked');
}

//удоли

function deleteCard(event) {
  event.target.closest('.element').remove();
}

function createCard (name, pic) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = pic;
  cardElement.querySelector('.element__caption').textContent = name;
  cardElement.querySelector('.element__image').alt = name;
  cardElement.querySelector('.element__like-button').addEventListener('click', clickLikeButton); 
  cardElement.querySelector('.element__delete-button').addEventListener('click', deleteCard);
  cardElement.querySelector('.element__image-overlay').addEventListener('click', openPopupZoom);
  return cardElement;
}

function createCustomCard (event) {
  event.preventDefault();
  const name = picNameInput.value;
  const pic = picLinkInput.value;
  const renderedCard = createCard(name, pic);
  cardsZone.prepend(renderedCard);
  picNameInput.value = '';
  picLinkInput.value = '';
  closePopup(popupAdd);
}

//тестовые карточки я пока решила оставить в цикле, чтобы не пропустить дедлайны грядущего спринта. но я перепишу!

for (let i = 0; i < startingCards.length; i++) {
  const pic = startingCards[i].link;
  const name = startingCards[i].name;
  const renderedCard = createCard(name, pic);
  cardsZone.append(renderedCard);
} 

//копирование темплейта, наполнение контентом, вставка, 6 раз, костыль - накрутка кнопок внутри цикла. брух.
//known bugs - см.коммент выше. кто вообще использует циклы как из учебника 1995 года?

openNamePopupButton.addEventListener('click', openNameEditForm);
openAddPopupButton.addEventListener('click', () => openPopup(popupAdd, hasInput));
closeProfileButton.addEventListener('click', () => closePopup(popupProfile));
closeAddButton.addEventListener('click', () => closePopup(popupAdd));
closeZoomButton.addEventListener('click', () => closePopup(popupZoom));

//known bug - не давало вводить формы и закрывало по клику в любом месте
//апдейт: пофиксила.
//оверлейное

popups.forEach(element => { 
  element.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup_opened')) {
      closePopup(element)}
  });
});

//изменение контента в кардсЗоне

addPicForm.addEventListener('submit', createCustomCard);
profileForm.addEventListener('submit', formEditSubmitHandler);

//а в школьные годы с++ для начинающих давался мне легче. старею.