//инпуты

export const profileForm = document.querySelector('#profileForm');
export const picAddForm = document.querySelector('#addPicForm'); //переименовано
export const nameInput = document.querySelector('#input-name');
export const statusInput = document.querySelector('#input-status');
export const picNameInput = document.querySelector('#input-pic-name');
export const picLinkInput = document.querySelector('#input-pic-link');

//зум зум

export const picZoom = document.querySelector('.zoom-element__picture'); //переименовано
export const captionZoom = document.querySelector('.zoom-element__caption'); //переименовано

//зона карточек и темлпейт

export const cardsZone = document.querySelector('.elements');

//кнопки

export const namePopupButtonOpen = document.querySelector('#openNamePopupButton'); //переименовано 
export const addPopupButtonOpen = document.querySelector('#openAddPopupButton'); //переименовано 
//здесь add всё же не выполняет функции глагола-сказуемого, а указывает на стандартное название формы. но будем честны, само название было неудачным. стоило бы выбрать creation или adding, но будем опираться на add 
//я не знаю, составное подлежащее какое-то? хотя бы не сказуемое 

//поп-кошка

export const popups = document.querySelectorAll('.popup');
export const popupProfile = document.querySelector('#formPopup');
export const popupAdd = document.querySelector('#formPopupCard');
export const popupZoom = document.querySelector('#zoomPopup');

//заголовки со статусом/именем

export const userName = document.querySelector('#userName');
export const userStatus = document.querySelector('#userStatus');

//новенькие в блоки, покажите им клуб кожевников 

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

//помню, мне в отзыве на диплом написали, что всё чудесно, но форматирование у вас как у пьяного ворда. так было все курсовые работы
//и в гайде 2 пробела, в где-то в теории было про 4 пробела?
  
export const startingCards = [
    {
        name: 'Архыз',
        link: './images/samples/arkhyz.jpg',
    },
    {
        name: 'Озеро Байкал',
        link: './images/samples/baikal.jpg',
    },
    {
        name: 'Эльбрус',
        link: './images/samples/elbrus.jpg',
    },
    {
        name: 'Карелия',
        link: './images/samples/karelia.jpg',
    },
    {
        name: 'Сахалин',
        link: './images/samples/sakhalyn.jpg',
    },
    {
        name: 'Териберка, Мурманская область',
        link: './images/samples/teriberka.jpg',
    }
];

