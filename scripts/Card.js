import { openPopupZoom } from './index.js';

//так как ООП заняло у меня время, я объясняю сама себе свои действия. прямо по строкам. надеюсь, вас это не раздражает

export default class Card {
    constructor(name, link) {
        this._name = name;
        this._link = link;
    }
  
    _getCardTemplate () {
        const cardTemplate = document.querySelector('#card') //нашли темплейт по айди кард
                            .content.querySelector('.element') //внутри темплейта нашли класс элемент
                            .cloneNode(true); //скопировали ноду
        return cardTemplate;
    }
  
    _deleteCard() {
        this._newCard.remove();
        //this._newCard = null;
    }
  
    _clickLikeButton () {
        this._newCard.querySelector('.element__like-button').classList.toggle('element__like-button_clicked');
    }
    
    _setListeners () {
        this._newCard.querySelector('.element__like-button').addEventListener('click', () => this._clickLikeButton()); 
        this._newCard.querySelector('.element__delete-button').addEventListener('click', () => this._deleteCard());
        this._newCard.querySelector('.element__image-overlay').addEventListener('click', openPopupZoom); //импорт не работает - почему?
    }
  
    _setData () {
      const linkProp = this._newCard.querySelector('.element__image');
      linkProp.src = this._link;
  
      const captionProp = this._newCard.querySelector('.element__caption');
      captionProp.textContent = this._name;
  
      const altProp = this._newCard.querySelector('.element__image');
      altProp.alt = this._name;
  }
  
    createCard () {
        this._newCard = this._getCardTemplate();
        this._setListeners();
        this._setData();
  
        return this._newCard;
  }
    
};

