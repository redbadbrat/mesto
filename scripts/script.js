//привет! я едва понимаю, что тут происходит, поэтому всё в комментах. what a lovely piece of code
//инпуты

const formName = document.getElementById('formName');
const nameInput = document.getElementById('inputName');
const statusInput = document.getElementById('inputStatus');
const inputPicName = document.getElementById('inputPicName');
const inputPicLink = document.getElementById('inputPicLink');
let zoomPic = document.querySelector('.zoom-element__picture');
let zoomCaption = document.querySelector('.zoom-element__caption');

//зона карточек и темлпейт

const cardTemplate = document.getElementById('card').content; 
const cardZone = document.querySelector('.elements');

//кнопки

const openNamePopupButton = document.getElementById('openNamePopupButton');
const openAddPopupButton = document.getElementById('openAddPopupButton');
const closeNameButton = document.getElementById('closeNamePopupButton');
const closeAddButton = document.getElementById('closeAddPopupButton');
const closeZoomButton = document.getElementById('closeZoomPopupOverlay');

//поп-кошка

let popup = document.querySelectorAll('.popup');
let popupName = document.getElementById('formPopup');
let popupAdd = document.getElementById('formPopupCard');
let popupZoom = document.getElementById('zoomPopup');

//заголовки со статусом/именем

const hName = document.getElementById('hName');
const hStatus = document.getElementById('hStatus');

//ОТКРЫТЬ ВОРОТА!
//идея для рефакторинга этого куска к. - слить формы воедино

function openNameEditForm() {
  popupName.classList.add('popup_opened');
  nameInput.value = hName.textContent;
  statusInput.value = hStatus.textContent;
}

function openPopupCard() {
  popupAdd.classList.add('popup_opened');
}

function openPopupZoom(event) {
  event.preventDefault();
  clicky = event.currentTarget;
  zoomCaption.textContent = clicky.parentNode.querySelector('.element__caption').textContent;
  zoomPic.src = clicky.parentNode.querySelector('.element__image').src;
  popupZoom.classList.add('popup_opened');
}

//ЗАКРЫТЬ ВОРОТА!
//у меня были проблемы с единой кнопкой для всего :(

function closeNamePopup() {
  popupName.classList.remove('popup_opened');
}

function closeAddPopup() {
  popupAdd.classList.remove('popup_opened');
}

function closeZoomPopup() {
  popupZoom.classList.remove('popup_opened');
}

//ЗАКРЫТЬ ВОРОТА, НО ЗАНЕСТИ ВНУТРЬ НАГРАБЛЕННОЕ!

function formEditSubmitHandler (event) {
  event.preventDefault();
  hName.textContent = nameInput.value;
  hStatus.textContent = statusInput.value;
  closeName();
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

function addPic (evt) {
  evt.preventDefault();
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = inputPicLink.value;
  cardElement.querySelector('.element__caption').textContent = inputPicName.value;
  cardElement.querySelector('.element__image').alt = inputPicName.value;
  cardZone.prepend(cardElement);
  cardElement.querySelector('.element__like-button').addEventListener('click', clickLikeButton); 
  cardElement.querySelector('.element__delete-button').addEventListener('click', deleteCard);
  cardElement.querySelector('.element__image-overlay').addEventListener('click', openPopupZoom);
  closeAdd();
}

//копирование темплейта, наполнение контентом, вставка, 6 раз, костыль - накрутка кнопок внутри цикла. брух.
//known bugs - см.коммент выше. кто вообще использует циклы как из учебника 1995 года?

for (let i = 0; i < startingCards.length; i++) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = startingCards[i].link;
  cardElement.querySelector('.element__image').alt = startingCards[i].name;
  cardElement.querySelector('.element__caption').textContent = startingCards[i].name;
  cardZone.append(cardElement);
  cardElement.querySelector('.element__like-button').addEventListener('click', clickLikeButton);
  cardElement.querySelector('.element__delete-button').addEventListener('click', deleteCard);
  cardElement.querySelector('.element__image-overlay').addEventListener('click', openPopupZoom); 
} 

openNamePopupButton.addEventListener('click', openNameEditForm);
openAddPopupButton.addEventListener('click', openPopupCard);
closeNameButton.addEventListener('click', closeNamePopup);
closeAddButton.addEventListener('click', closeAddPopup);
closeZoomButton.addEventListener('click', closeZoomPopup);

//изменение контента в кардЗоне

formAddPic.addEventListener('submit', addPic);
nameForm.addEventListener('submit', formEditSubmitHandler);

//вот что не работало. по задумке я брала массив всех .popup, брала item в функции и на него вышала remove,
//потом функция в "слушателе" кидалсь на всё. но я не учла, что у индивидуальных функций это тоже было. i'm puzzled

//closePopupButtons.forEach(item => {
//  console.log(item);
//  item.addEventListener('click', closePopup);
//});

//а в школьные годы с++ для начинающих давался мне легче. старею.