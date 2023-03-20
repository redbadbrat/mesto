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
export const buttonSubmit = document.querySelector('#submitButton');

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
    popupAvatar: '#formAvatar',
    popupZoom: '#zoomPopup',
    popupCardDeletion: '#formDeletePopupButton'
}

//ура, легаси код

export const startingCards = [
    {
        name: 'Архыз',
        link: 'https://cdn.midjourney.com/0760f8ae-9656-4ba2-995f-326b13883c92/grid_0.png',
    },
    {
        name: 'Озеро Байкал',
        link: 'https://cdn.midjourney.com/094bbcf8-d66d-4e4d-ab77-4100138b962b/grid_0.png',
    },
    {
        name: 'Промыслы в Якутии',
        link: 'https://cdn.midjourney.com/7c936274-06a5-4b41-85c4-fcff74c4138a/grid_0.png',
    },
    {
        name: 'Борис Ельцин',
        link: 'https://cdn.midjourney.com/5865108b-4a27-4c18-83ed-e73897c1aa18/grid_0.png',
    },
    {
        name: 'Сахалин',
        link: 'https://cdn.midjourney.com/4fdf5234-3ce5-43a1-9371-f133dcf0918e/grid_0.png',
    },
    {
        name: 'Териберка, Мурманская область',
        link: 'https://cdn.midjourney.com/44b9ef3a-b2a9-4c5a-9814-0a7a66e1f9d7/grid_0.png',
    }
];


