//привет! если честно, в прошлый раз задание я до конца не читала. в этот раз дочитала. вроде. и спасибо за подсказки по коду! 
//инпуты

let formName = document.getElementById('formName');
let nameInput = document.getElementById('inputName');
let statusInput = document.getElementById('inputStatus');

//кнопки

let openPopupButton = document.getElementById('openPopupButton');
let closePopupButton = document.getElementById('closePopupButton');

//поп-кошка

let popup = document.getElementById('formPopup');

//заголовки со статусом/именем

let hName = document.getElementById('hName');
let hStatus = document.getElementById('hStatus');

//ОТКРЫТЬ ВОРОТА!

function openNameEditForm() {
  popup.classList.add('popup_opened');
  nameInput.value = hName.textContent;
  statusInput.value = hStatus.textContent;
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

openPopupButton.addEventListener('click', openNameEditForm);
closePopupButton.addEventListener('click', closeNameEditForm);
nameForm.addEventListener('submit', placeInputs);

//а в школьные годы с++ для начинающих давался мне легче. старею.