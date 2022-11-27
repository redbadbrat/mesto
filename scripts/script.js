//привет! я едва понимаю, что тут происходит, поэтому всё в комментах. what a lovely piece of code
//p.s. если что, я своих кошек подкормышей зову по цветам и количеству шрамов. с неймингом беда

//инпуты

const profileForm = document.querySelector('#profileForm');
const addPicForm = document.querySelector('#addPicForm');
const nameInput = document.querySelector('#inputName');
const statusInput = document.querySelector('#inputStatus');
const picNameInput = document.querySelector('#inputPicName');
const picLinkInput = document.querySelector('#inputPicLink');

//1.1 перезаписываются в открытии поп-апа \/

let zoomPic = document.querySelector('.zoom-element__picture');
let zoomCaption = document.querySelector('.zoom-element__caption');

//зона карточек и темлпейт

const cardTemplate = document.querySelector('#card').content;
const cardsZone = document.querySelector('.elements');

//кнопки

const openNamePopupButton = document.querySelector('#openNamePopupButton');
const openAddPopupButton = document.querySelector('#openAddPopupButton');
const closeNameButton = document.querySelector('#closeNamePopupButton');
const closeAddButton = document.querySelector('#closeAddPopupButton');
const closeZoomButton = document.querySelector('#closeZoomPopupOverlay');

//поп-кошка
//1.1 поняла тип объявления

const popups = document.querySelectorAll('.popup');
const popupName = document.querySelector('#formPopup');
const popupAdd = document.querySelector('#formPopupCard');
const popupZoom = document.querySelector('#zoomPopup');

//заголовки со статусом/именем

const userName = document.querySelector('#userName');
const userStatus = document.querySelector('#userStatus');

//ОТКРЫТЬ ВОРОТА!
//идея для рефакторинга этого куска к. - слить формы воедино

function openNameEditForm() {
  popupName.classList.add('popup_opened');
  nameInput.value = userName.textContent;
  statusInput.value = userStatus.textContent;
}

function openPopupCard() {
  popupAdd.classList.add('popup_opened');
}

function openPopupZoom(event) {
  event.preventDefault();
  let clicky = event.currentTarget;
  zoomCaption.textContent = clicky.parentNode.querySelector('.element__caption').textContent;
  zoomPic.src = clicky.parentNode.querySelector('.element__image').src;
  zoomPic.alt = clicky.parentNode.querySelector('.element__caption').textContent;
  popupZoom.classList.add('popup_opened');
}

//ЗАКРЫТЬ ВОРОТА!
//у меня были проблемы с единой кнопкой для всего :(

//ура, я смогла! forEach всё же стоило вставить в функцию, а не в слушатель. немного горжусь собой, это заняло время

function closePopup() {
  popups.forEach(item => {item.classList.remove('popup_opened')});
}

//ЗАКРЫТЬ ВОРОТА, НО ЗАНЕСТИ ВНУТРЬ НАГРАБЛЕННОЕ!

function formEditSubmitHandler (event) {
  event.preventDefault();
  userName.textContent = nameInput.value;
  userStatus.textContent = statusInput.value;
  closePopup();
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
  closePopup();
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
openAddPopupButton.addEventListener('click', openPopupCard);
closeNameButton.addEventListener('click', closePopup);
closeAddButton.addEventListener('click', closePopup);
closeZoomButton.addEventListener('click', closePopup);

//к следующему спринту соберу всё в кулак и последую совету доработать forEach в листенере, спасибо!

//изменение контента в кардсЗоне

addPicForm.addEventListener('submit', createCustomCard);
profileForm.addEventListener('submit', formEditSubmitHandler);

//closePopupButtons.forEach(item => {
//  console.log(item);
//  item.addEventListener('click', closePopup);
//});

//а в школьные годы с++ для начинающих давался мне легче. старею.