//привет! я едва понимаю, что тут происходит, поэтому всё в комментах
//инпуты

const formName = document.getElementById('formName');
const nameInput = document.getElementById('inputName');
const statusInput = document.getElementById('inputStatus');
const formAddPic = document.getElementById('formAddPic');
const inputPicName = document.getElementById('inputPicName');
const inputPicLink = document.getElementById('inputPicLink');

//кнопки

const openNamePopupButton = document.getElementById('openNamePopupButton');
const openAddPopupButton = document.getElementById('openAddPopupButton');
const closePopupButton = document.getElementById('closePopupButton');

//поп-кошка

let popup = document.getElementById('formPopup');

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
  const cardTemplate = document.getElementById('card').content; 
  const cardZone = document.querySelector('.elements');
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
  popup.classList.add('popup_opened');
  //nameInput.value = hName.textContent;
  //statusInput.value = hStatus.textContent;
}

//ЗАКРЫТЬ ВОРОТА!

function closeNameEditForm() {
  popup.classList.remove('popup_opened');
}

//ЗАКРЫТЬ ВОРОТА, НО ЗАНЕСТИ ВНУТРЬ НАГРАБЛЕННОЕ!

function placeInputs (evt) {
    evt.preventDefault();
    hName.textContent = nameInput.value;
    hStatus.textContent = statusInput.value;
    closeNameEditForm();
}

openNamePopupButton.addEventListener('click', openNameEditForm);
openAddPopupButton.addEventListener('click', openAddPopupButton);
closePopupButton.addEventListener('click', closeNameEditForm);
nameForm.addEventListener('submit', placeInputs);

//а в школьные годы с++ для начинающих давался мне легче. старею.