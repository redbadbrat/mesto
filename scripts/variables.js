//инпуты

const profileForm = document.querySelector('#profileForm');
const addPicForm = document.querySelector('#addPicForm');
const nameInput = document.querySelector('#inputName');
const statusInput = document.querySelector('#inputStatus');
const picNameInput = document.querySelector('#inputPicName');
const picLinkInput = document.querySelector('#inputPicLink');

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
const popupProfile = document.querySelector('#formPopup');
const popupAdd = document.querySelector('#formPopupCard');
const popupZoom = document.querySelector('#zoomPopup');

//заголовки со статусом/именем

const userName = document.querySelector('#userName');
const userStatus = document.querySelector('#userStatus');
