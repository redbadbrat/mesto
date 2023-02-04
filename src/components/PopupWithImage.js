import Popup from './Popup.js';
import { picZoom, captionZoom, popupSettings } from '../utils/variables.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popup = document.querySelector(popupSelector);
        this._buttonExit = this._popup.querySelector(popupSettings.buttonExitSelector);
        this._popupZoomed = this._popup.closest('.element');
        this._picZoom = picZoom;
        this._captionZoom = captionZoom;
    }

    open(name, link) {
        this._captionZoom.textContent = name;
        this._picZoom.src = link;
        this._picZoom.alt = name;
        this._popup.classList.add('popup_dark');
        super.open();
    }

}