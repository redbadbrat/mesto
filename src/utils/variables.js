//инпуты

export const profileForm = document.querySelector('#profileForm');
export const picAddForm = document.querySelector('#addPicForm'); //переименовано
export const nameInput = document.querySelector('#input-name');
export const statusInput = document.querySelector('#input-status');
export const picNameInput = document.querySelector('#input-pic-name');
export const picLinkInput = document.querySelector('#input-pic-link');

//зона карточек и темлпейт

export const cardsZone = document.querySelector('.elements');

//кнопки

export const namePopupButtonOpen = document.querySelector('#openNamePopupButton'); //переименовано 
export const popupAddButtonOpen = document.querySelector('#openAddPopupButton'); //переименовано 
export const popupChangeAvatarOpen = document.querySelector('#openChangeAvatarOpen');

//состязание лингвистов окончилось победой формальной логики построения кода. чёрт! 

//поп-кошка

export const popups = document.querySelectorAll('.popup');

//заголовки со статусом/именем

export const userName = document.querySelector('#userName');
export const userStatus = document.querySelector('#userStatus');
export const userAvatar = document.querySelector('#userAvatar');

//новенькие в блоке, покажите им клуб кожевников 

export const validationSettings = {
    formSelector: '.form',
    buttonSelector: '.popup__submit-button',
    inputErrorSelector: 'input_style_error',
    inputSpanErrorActive: 'form__input-error_active',
    buttonDisabled: 'popup__submit-button_disabled'
};

export const cardCreationSettings = {
    templateElementSelector: '#card',
    elementSelector: '.element',
    likeButtonSelector: '.element__like-button',
    likeClickedSelector: 'element__like-button_clicked'
};

//почему всё везде в объектах и их ТАК МНОГО?
//я просто люблю выпендриваться
//если я не усложняю/упрощаю код завитушками, проверьте, жива ли я

export const popupSettings = {
    buttonExitSelector: '.popup__close-button',
    buttonSubmitSelector: '.popup__submit-button'
}

export const popupTypesList = {
    popupProfile: '#formPopup',
    popupAdd: '#formPopupCard',
    popupAvatar: '#avatarPopup',
    popupZoom: '#zoomPopup',
    popupCardDeletion: '#formDeletePopupButton',
}

//ура, легаси код


