//привет! я едва понимаю, что тут происходит, поэтому всё в комментах
//инпуты

const formName = document.getElementById('formName');
const nameInput = document.getElementById('inputName');
const statusInput = document.getElementById('inputStatus');
const inputPicName = document.getElementById('inputPicName');
const inputPicLink = document.getElementById('inputPicLink');

//зона карточек и темлпейт

const cardTemplate = document.getElementById('card').content; 
const cardZone = document.querySelector('.elements');

//кнопки

const openNamePopupButton = document.getElementById('openNamePopupButton');
const openAddPopupButton = document.getElementById('openAddPopupButton');
const closePopupButton = document.getElementById('closePopupButton');
const closeAddPopupButton = document.getElementById('closeAddPopupButton');
const like = document.getElementById('like');

//поп-кошка

let popup = document.getElementById('formPopup');
let popupCard = document.getElementById('formPopupCard');

//заголовки со статусом/именем

const hName = document.getElementById('hName');
const hStatus = document.getElementById('hStatus');

//картиночки.......

const startingCards = [
  {
    name: 'Архыз',
    link: './images/samples/arkhyz.png',
    alt: 'барашки на фоне летних гор'
  },
  {
    name: 'Озеро Байкал',
    link: './images/samples/baikal.png',
    alt: 'замёрзшее озеро Байкал'
  },
  {
    name: 'Эльбрус',
    link: './images/samples/elbrus.png',
    alt: 'деревня на фоне горы Эльбрус'
  },
  {
    name: 'Карелия',
    link: './images/samples/karelia.png',
    alt: 'палатка в лесу и поле морошки'
  },
  {
    name: 'Сахалин',
    link: './images/samples/sakhalyn.png',
    alt: 'столб пепла после извержения вулкана'
  },
  {
    name: 'Териберка, Мурманская область',
    link: './images/samples/teriberka.png',
    alt: 'рыбаки в лодках на фоне северного сияния'
  }
]; 

//копирование темплейта, наполнение контентом, вставка, 6 раз

for (let i = 0; i < startingCards.length; i++) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = startingCards[i].link;
  cardElement.querySelector('.element__image').alt = startingCards[i].alt;
  cardElement.querySelector('.element__caption').textContent = startingCards[i].name;
  cardZone.append(cardElement); 
  console.log('it worked'+i);
  } 

//ОТКРЫТЬ ВОРОТА!

function openNameEditForm() {
  popup.classList.add('popup_opened');
  nameInput.value = hName.textContent;
  statusInput.value = hStatus.textContent;
}

function openAddPicForm() {
  popupCard.classList.add('popup_opened');
}

//ЗАКРЫТЬ ВОРОТА!

function closeNameEditForm() {
  popup.classList.remove('popup_opened');
}

function closeAddPicForm() {
  popupCard.classList.remove('popup_opened');
}


//ЗАКРЫТЬ ВОРОТА, НО ЗАНЕСТИ ВНУТРЬ НАГРАБЛЕННОЕ!

function placeInputs (evt) {
  evt.preventDefault();
  hName.textContent = nameInput.value;
  hStatus.textContent = statusInput.value;
  closeNameEditForm();
}

function addPic (evt) {
  evt.preventDefault();
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__caption').textContent = inputPicName.value;
  cardElement.querySelector('.element__image').src = inputPicLink.value;
  cardZone.prepend(cardElement);
  closeAddPicForm();
}

function paintItBlack (evt) {
  evt.preventDefault();
  const cardElement = cardTemplate.querySelector('.element');
  let likeClicked = cardElement.querySelector('element__like-button');
  likeClicked.classList.toggle('element__like-button_clicked');
}

openNamePopupButton.addEventListener('click', openNameEditForm);
openAddPopupButton.addEventListener('click', openAddPicForm);
closePopupButton.addEventListener('click', closeNameEditForm);
closeAddPopupButton.addEventListener('click', closeAddPicForm);
like.addEventListener('click', paintItBlack);

formAddPic.addEventListener('submit', addPic);
nameForm.addEventListener('submit', placeInputs);

//а в школьные годы с++ для начинающих давался мне легче. старею.