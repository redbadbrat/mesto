//так как ООП заняло у меня время, я объясняю сама себе свои действия. прямо по строкам. надеюсь, вас это не раздражает
export default class Card {
    constructor(data, templateSettings, myId, handleCardClick, handleCardDeletion, handleLike, handleDeleteLike) {
        this._templateSettings = templateSettings;
        this._name = data.name; //переписала передачу через объект
        this._link = data.link;
        this._cardId = data._id;
        this._cardOwnerId = data.owner._id;
        this._myId = myId;
        this._likeAmount = data.likes;
        this._handleCardClick = handleCardClick;
        this._handleCardDeletion = handleCardDeletion;
        this._handleLike = handleLike;
        this._handleDeleteLike = handleDeleteLike;
    }
  
    _getCardTemplate() {
        const cardTemplate = document.querySelector(this._templateSettings.templateElementSelector).content
                            .querySelector(this._templateSettings.elementSelector).cloneNode(true);
        return cardTemplate;
    }

    getCardId() {
        const id = this._cardId;
        return id;
    }

    //у меня премия Золотая Малина за наименования, ага

    _findCurrentLikeButton() {
        this._currentLike = this._newCard.querySelector(this._templateSettings.likeButtonSelector);
        return this._currentLike;
    }
  
    handleCardDelete() {
        this._newCard.remove();
        this._newCard = null;
    }

    //вы не сможете тыкнуть на кнопку если кнопки нет hehe
    _preventUnwantedDeletion() {
        if (this._cardOwnerId && this._cardOwnerId !== this._myId) {
            this._newCard.querySelector('.element__delete-button').remove();
        } else {
            this._newCard.querySelector('.element__delete-button').addEventListener('click', this._handleCardDeletion);
        }
    } 

    handleLikeClick() {
        this._currentLike.classList.toggle(this._templateSettings.likeClickedSelector);
    }

    handleLikeState() {
        if (this._currentLike.classList.contains(this._templateSettings.likeClickedSelector)) {
            this._handleLike();
        } else {
            this._handleDeleteLike();
        }
    }
      
    
    handleLikeCounter (array) {
        this._likeCounter = this._newCard.querySelector('.element__like-counter');
        this._likeCounter.textContent = array.length;
    }

    _setListeners () {
        this._findCurrentLikeButton();
        this._newCard.querySelector('.element__like-button').addEventListener('click', () => this.handleLikeClick()); 
        this._newCard.querySelector('.element__image-overlay').addEventListener('click', this._handleCardClick);
        this._preventUnwantedDeletion();
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
        this.handleLikeCounter(this._likeAmount);
  
        return this._newCard;
  }
    
};

