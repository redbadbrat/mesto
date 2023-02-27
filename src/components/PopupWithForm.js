import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this._form = this._popup.querySelector('.form');
        this._submitCallback = submitCallback;
        this._inputList = this._popup.querySelectorAll('.input');
    }

    //этот класс занял у меня нервных клеток больше, чем курсовые 2-4 курсов в институте

    _getInputValues() {
        this._inputData = {};
        this._inputList.forEach((item) => {this._inputData[item.name] = item.value});
        return this._inputData;
    }

    //но в конечно итоге я разобралась, хоть и благодаря тренажёру
    //слава тренажёру

    close() {
        super.close();
        this._form.reset();
    }


    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._submitCallback(this._getInputValues())
          });
    }

}