//в задании было описано наличие 3х файлов кода, но я всё же выношу переменные отдельно. это нормально, так можно?

//инпуты

export const profileForm = document.querySelector('#profileForm');
export const addPicForm = document.querySelector('#addPicForm');
export const nameInput = document.querySelector('#input-name');
export const statusInput = document.querySelector('#input-status');
export const picNameInput = document.querySelector('#input-pic-name');
export const picLinkInput = document.querySelector('#input-pic-link');

//зум зум

export const zoomPic = document.querySelector('.zoom-element__picture');
export const zoomCaption = document.querySelector('.zoom-element__caption');

//зона карточек и темлпейт

export const cardsZone = document.querySelector('.elements');

//кнопки

export const openNamePopupButton = document.querySelector('#openNamePopupButton');
export const openAddPopupButton = document.querySelector('#openAddPopupButton');
//export const closeProfileButton = document.querySelector('#closeNamePopupButton');
//export const closeAddButton = document.querySelector('#closeAddPopupButton');
//export const closeZoomButton = document.querySelector('#closeZoomPopupOverlay');

//поп-кошка

export const popups = document.querySelectorAll('.popup');
//export const popupWindows = document.querySelectorAll('.popup__window');
export const popupProfile = document.querySelector('#formPopup');
export const popupAdd = document.querySelector('#formPopupCard');
export const popupZoom = document.querySelector('#zoomPopup');

//заголовки со статусом/именем

export const userName = document.querySelector('#userName');
export const userStatus = document.querySelector('#userStatus');
