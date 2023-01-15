//привет! я едва понимаю, что тут происходит, поэтому всё в комментах. what a lovely piece of code

//все переменные репатриировались в variables.js

//ОТКРЫТЬ ВОРОТА! - теперь с крутым ловцом ивентов!

//внутрь передаётся type - он отражает потребность в неактивной кнопке в попапе. если что, я могу просто давать false/true, но с примитивом код читается легче

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

//ЗАКРЫТЬ ВОРОТА! - теперь с крутым ловцом ивентов!

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

//версия 1 для кнопки еск - ОСТАВЛЕНА ДЛЯ ИСТОРИИ

/*function closePopupEsc(popup, event) {
  if (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === "27") {
    closePopup(popup);
  }
}*/

//версия 2 - прилизанная 

function closePopupEsc(event) {
  if (event.key === 'Escape' || event.key === 'Esc') {
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


//копирование темплейта, наполнение контентом, вставка, 6 раз, костыль - накрутка кнопок внутри цикла. брух.
//known bugs - см.коммент выше. кто вообще использует циклы как из учебника 1995 года?

openNamePopupButton.addEventListener('click', openNameEditForm);
openAddPopupButton.addEventListener('click', function () {
  disableSubmitButton(popupAdd.querySelector(validationSettings.buttonSelector), validationSettings);
  openPopup(popupAdd);
});

//known bug - не давало вводить формы и закрывало по клику в любом месте
//апдейт: пофиксила.
//оверлейное

startingCards.forEach(({name, link}) => {
  cardsZone.append(createCard(name, link));
});

popups.forEach(element => { 
  element.addEventListener('click', (event) => {
  if (event.target.classList.contains('popup_opened') || event.target.classList.contains('popup__close-button')) {
      closePopup(element)}
  });
});

addPicForm.addEventListener('submit', createCustomCard);

//изменение контента в кардсЗоне


profileForm.addEventListener('submit', formEditSubmitHandler);

//а в школьные годы с++ для начинающих давался мне легче. старею.