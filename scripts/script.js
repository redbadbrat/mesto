//привет! я едва понимаю, что тут происходит, поэтому всё в комментах. what a lovely piece of code
//p.s. если что, я своих кошек подкормышей зову по цветам и количеству шрамов. с неймингом беда

//все переменные репатриировались в variables.js

//ОТКРЫТЬ ВОРОТА!

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function openNameEditForm() {
  openPopup(popupProfile);
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
  openPopup(popupZoom);
}

//ЗАКРЫТЬ ВОРОТА!
//у меня были проблемы с единой кнопкой для всего :(

//ура, я смогла! forEach всё же стоило вставить в функцию, а не в слушатель. немного горжусь собой, это заняло время

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//ЗАКРЫТЬ ВОРОТА, НО ЗАНЕСТИ ВНУТРЬ НАГРАБЛЕННОЕ!

function formEditSubmitHandler (event) {
  event.preventDefault();
  userName.textContent = nameInput.value;
  userStatus.textContent = statusInput.value;
  closePopup(popupProfile);
}
//нужно перестать работать мемами и давать нормальные название. это лайк

function clickLikeButton (event) {
  event.target.classList.toggle('element__like-button_clicked');
}

//удоли

function deleteCard(event) {
  event.target.closest('.element').remove();
}

//добавление картинки через попап аддПик - стоило его написать однажды и потом юзать при загрузке странице тоже,
//они друг друга почти полностью копируют. но я запуталась

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
openAddPopupButton.addEventListener('click', () => openPopup(popupAdd));
closeProfileButton.addEventListener('click', () => closePopup(popupProfile));
closeAddButton.addEventListener('click', () => closePopup(popupAdd));
closeZoomButton.addEventListener('click', () => closePopup(popupZoom));

//к следующему спринту соберу всё в кулак и последую совету доработать forEach в листенере, спасибо!

//изменение контента в кардсЗоне

addPicForm.addEventListener('submit', createCustomCard);
profileForm.addEventListener('submit', formEditSubmitHandler);

//closePopupButtons.forEach(item => {
//  console.log(item);
//  item.addEventListener('click', closePopup);
//});

//а в школьные годы с++ для начинающих давался мне легче. старею.