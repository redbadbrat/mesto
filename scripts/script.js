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
const closePopupButton = document.getElementById('closePopupButton');
const closeAddPopupButton = document.getElementById('closeAddPopupButton');
const closeZoomPopupOverlay = document.getElementById('closeZoomPopupOverlay');

//поп-кошка

let popup = document.getElementById('formPopup');
let popupCard = document.getElementById('formPopupCard');
let popupZoom = document.getElementById('zoomPopup');

//заголовки со статусом/именем

const hName = document.getElementById('hName');
const hStatus = document.getElementById('hStatus');

//картиночки.......

const startingCards = [
  {
    name: 'Архыз',
    link: './images/samples/arkhyz.jpg',
    alt: 'барашки на фоне летних гор'
  },
  {
    name: 'Озеро Байкал',
    link: './images/samples/baikal.jpg',
    alt: 'замёрзшее озеро Байкал'
  },
  {
    name: 'Эльбрус',
    link: './images/samples/elbrus.jpg',
    alt: 'деревня на фоне горы Эльбрус'
  },
  {
    name: 'Карелия',
    link: './images/samples/karelia.jpg',
    alt: 'палатка в лесу и поле морошки'
  },
  {
    name: 'Сахалин',
    link: './images/samples/sakhalyn.jpg',
    alt: 'столб пепла после извержения вулкана'
  },
  {
    name: 'Териберка, Мурманская область',
    link: './images/samples/teriberka.jpg',
    alt: 'рыбаки в лодках на фоне северного сияния'
  }
]; 

//ОТКРЫТЬ ВОРОТА!
//идея для рефакторинга этого куска к. - слить формы воедино

function openNameEditForm() {
  popup.classList.add('popup_opened');
  nameInput.value = hName.textContent;
  statusInput.value = hStatus.textContent;
}

function openPopupCard() {
  popupCard.classList.add('popup_opened');
}

function openPopupZoom(event) {
  event.preventDefault();
  debugger;
  clicky = event.currentTarget;
  zoomCaption.textContent = clicky.parentNode.querySelector('.element__caption').textContent;
  zoomPic.src = clicky.parentNode.querySelector('.element__image').src;
  popupZoom.classList.add('popup_opened');
}

//ЗАКРЫТЬ ВОРОТА!

function closeNameEditForm() {
  popup.classList.remove('popup_opened');
}

function closeAddPicForm() {
  popupCard.classList.remove('popup_opened');
}

function closeZoomPopup() {
  popupZoom.classList.remove('popup_opened');
}

//ЗАКРЫТЬ ВОРОТА, НО ЗАНЕСТИ ВНУТРЬ НАГРАБЛЕННОЕ!

function placeInputs (event) {
  event.preventDefault();
  hName.textContent = nameInput.value;
  hStatus.textContent = statusInput.value;
  closeNameEditForm();
}
//нужно перестать работать мемами и давать нормальные название. это лайк

function paintItBlack (event) {
  event.target.classList.toggle('element__like-button_clicked');
}

//удоли

function deleteCard(event) {
  event.target.closest(".element").remove();
}

//добавление картинки через попап аддПик - стоило его написать однажды и потом юзать при загрузке странице тоже,
//они друг друга почти полностью копируют. но я запуталась

function addPic (event) {
  event.preventDefault();
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardZone.prepend(cardElement);
  cardElement.querySelector('.element__like-button').addEventListener('click', paintItBlack); 
  cardElement.querySelector('.element__delete-button').addEventListener('click', deleteCard);
  cardElement.querySelector('.element__image-overlay').addEventListener('click', openPopupZoom);
  closeAddPicForm();
}

//копирование темплейта, наполнение контентом, вставка, 6 раз, костыль - накрутка кнопок внутри цикла. брух.
//known bugs - см.коммент выше. кто вообще использует циклы как из учебника 1995 года?

for (let i = 0; i < startingCards.length; i++) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = startingCards[i].link;
  cardElement.querySelector('.element__image').alt = startingCards[i].alt;
  cardElement.querySelector('.element__caption').textContent = startingCards[i].name;
  cardZone.append(cardElement);

  cardElement.querySelector('.element__like-button').addEventListener('click', paintItBlack);
  cardElement.querySelector('.element__delete-button').addEventListener('click', deleteCard);
  cardElement.querySelector('.element__image-overlay').addEventListener('click', openPopupZoom);  
  console.log('it worked'+i);
  } 

openNamePopupButton.addEventListener('click', openNameEditForm);
openAddPopupButton.addEventListener('click', openPopupCard);
closeZoomPopupOverlay.addEventListener('click', closeZoomPopup);
closePopupButton.addEventListener('click', closeNameEditForm);
closeAddPopupButton.addEventListener('click', closeAddPicForm);

//изменение контента в кардЗоне

formAddPic.addEventListener('submit', addPic);
nameForm.addEventListener('submit', placeInputs);

//а в школьные годы с++ для начинающих давался мне легче. старею.