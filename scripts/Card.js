//import openPopupZoom from './index.js'

//так как ООП заняло у меня время, я объясняю сама себе свои действия. прямо по строкам. надеюсь, вас это не раздражает

/*class Card {
    constructor({name, link}) {
        this._name = name;
        this._link = link;
    }

    _getCardTemplate () {
        const cardTemplate = document.querySelector('#card') //нашли темплейт по айди кард
                            .content.querySelector('.element') //внутри темплейта нашли класс элемент
                            .cloneNode(true); //скопировали ноду
        return cardTemplate;
    }

    _setData () {
        this._newCard.querySelector('.element__image').src = this._link;
        this._newCard.querySelector('.element__caption').textContent = this._name;
        this._newCard.querySelector('.element__image').alt = this._name;
    }

    _deleteCard() {
        this._newCard.remove();
        this._newCard = null;
    }

    _clickLikeButton () {
        this._newCard.classList.toggle('element__like-button_clicked');
    }
    
    _setListeners () {
        this._newCard.querySelector('.element__like-button').addEventListener('click', () => this._clickLikeButton()); 
        this._newCard.querySelector('.element__delete-button').addEventListener('click', () => this._deleteCard());
        this._newCard.querySelector('.element__image-overlay').addEventListener('click', openPopupZoom);
    }
  
    createCard () {
        this._newCard = this._getCardTemplate;
        this._setData;
        this._setListeners;

        return this._newCard;
  }
  
    _createCustomCard () {
        const name = picNameInput.value;
        const pic = picLinkInput.value;
        const renderedCard = createCard(name, pic);
        cardsZone.prepend(renderedCard);
        picNameInput.value = '';
        picLinkInput.value = '';
        closePopup(popupAdd);
    }
    
}

export default Card;*/
