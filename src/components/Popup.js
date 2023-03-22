import { popupSettings } from '../utils/variables.js'

export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._buttonExit = this._popup.querySelector(popupSettings.buttonExitSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        //this._popupOpened = `${popupSelector}_opened`; попробовать после завершения работы, я же смелая дофига.
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close(){
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(event) {
        if (event.key === 'Escape' || event.key === 'Esc') {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.addEventListener('click', (event) => {
            if (event.target.classList.contains('popup_opened') || event.target.classList.contains('popup__close-button')) {
                this.close();}
            });
    //тут только листенер на кнопке закрытия
    }

}
