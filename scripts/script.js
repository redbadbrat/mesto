//привет! я едва понимаю, что тут происходит, поэтому всё в комментах. what a lovely piece of code
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

function addPic (evt) {
  evt.preventDefault();
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__caption').textContent = inputPicName.value;
  cardElement.querySelector('.element__image').src = inputPicLink.value;
  cardZone.prepend(cardElement);
  cardElement.querySelector('.element__like-button').addEventListener('click', paintItBlack); 
  cardElement.querySelector('.element__delete-button').addEventListener('click', deleteCard); 
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
  console.log('it worked'+i);
  } 

openNamePopupButton.addEventListener('click', openNameEditForm);
openAddPopupButton.addEventListener('click', openAddPicForm);
closePopupButton.addEventListener('click', closeNameEditForm);
closeAddPopupButton.addEventListener('click', closeAddPicForm);

//изменение контента в кардЗоне

formAddPic.addEventListener('submit', addPic);
nameForm.addEventListener('submit', placeInputs);

//а в школьные годы с++ для начинающих давался мне легче. старею.