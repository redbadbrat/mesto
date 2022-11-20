//привет! если честно, в прошлый раз задание я до конца не читала. в этот раз дочитала. вроде. и спасибо за подсказки по коду! 
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

const initialCards = [
  {
    name: 'Архыз',
    link: '../../../../images/samples/arkhyz.png'
  },
  {
    name: 'Озеро Байкал',
    link: '../../../../images/samples/baikal.png'
  },
  {
    name: 'Эльбрус',
    link: '../../../../images/samples/elbrus.png'
  },
  {
    name: 'Карелия',
    link: '../../../../images/samples/karelia.png'
  },
  {
    name: 'Сахалин',
    link: '../../../../images/samples/sakhalyn.png'
  },
  {
    name: 'Териберка, Мурманская область',
    link: '../../../../images/samples/teriberka.png'
  }
]; 

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