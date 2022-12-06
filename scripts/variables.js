//вспомогательные триггеры - является ли попап формочкой (для песка) или не принимает на вход инпутов
const hasInput = true;
const noInput = false;

//инпуты

const profileForm = document.querySelector('#profileForm');
const addPicForm = document.querySelector('#addPicForm');
const nameInput = document.querySelector('#input-name');
const statusInput = document.querySelector('#input-status');
const picNameInput = document.querySelector('#input-pic-name');
const picLinkInput = document.querySelector('#input-pic-link');

//зум зум

const zoomPic = document.querySelector('.zoom-element__picture');
const zoomCaption = document.querySelector('.zoom-element__caption');

//зона карточек и темлпейт

const cardTemplate = document.querySelector('#card').content;
const cardsZone = document.querySelector('.elements');

//кнопки

const openNamePopupButton = document.querySelector('#openNamePopupButton');
const openAddPopupButton = document.querySelector('#openAddPopupButton');
const closeProfileButton = document.querySelector('#closeNamePopupButton');
const closeAddButton = document.querySelector('#closeAddPopupButton');
const closeZoomButton = document.querySelector('#closeZoomPopupOverlay');

//поп-кошка

const popups = document.querySelectorAll('.popup');
const popupWindows = document.querySelectorAll('.popup__window');
const popupProfile = document.querySelector('#formPopup');
const popupAdd = document.querySelector('#formPopupCard');
const popupZoom = document.querySelector('#zoomPopup');

//заголовки со статусом/именем

const userName = document.querySelector('#userName');
const userStatus = document.querySelector('#userStatus');
