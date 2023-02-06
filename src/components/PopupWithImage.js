import Popup from './Popup.js';
import { popupSettings } from '../utils/variables.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._picZoom = this._popup.querySelector('.zoom-element__picture');
        this._captionZoom = this._popup.querySelector('.zoom-element__caption');
    }

    open(name, link) {
        this._captionZoom.textContent = name;
        this._picZoom.src = link;
        this._picZoom.alt = name;
        super.open();
    }
}