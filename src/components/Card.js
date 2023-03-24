//так как ООП заняло у меня время, я объясняю сама себе свои действия. прямо по строкам. надеюсь, вас это не раздражает
export default class Card {
    constructor(data, templateSettings, myId, handleCardClick, handleCardDeletion, handleLike, handleDeleteLike) {
        this._templateSettings = templateSettings;
        this._name = data.name; //переписала передачу через объект
        this._link = data.link;
        this._cardId = data._id;
        this._cardOwnerId = data.owner._id;
        this._myId = myId;
        this._likes = data.likes;
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
        //новый _findCurrentLikeButton() - теперь со вкусом двойного использования в классе!
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

    _isLiked() {
        return this._likes.some(user => user._id === this._myId)
    }

    _updateLikesView() {
        this._likeCounter.textContent = this._likes.length;
        if (this._isLiked())
            this._currentLike.classList.add(this._templateSettings.likeClickedSelector);
        else 
            this._currentLike.classList.remove(this._templateSettings.likeClickedSelector);
    } 

    _handleLikeClick() {
        if (this._currentLike.classList.contains(this._templateSettings.likeClickedSelector)) {
            this._handleDeleteLike();
        } else {
            this._handleLike();
            //НЛО прилетело и оставило это сообщение здесь
        }
        this._updateLikesView(); 
    }
    
    handleLikeCounter (array) {
        this._likes = array;
        this._updateLikesView();
    }

    _setListeners () {
        this._findCurrentLikeButton();
        this._currentLike.addEventListener('click', () => this._handleLikeClick()); 
        this._newCard.querySelector('.element__image-overlay').addEventListener('click', this._handleCardClick);
        this._preventUnwantedDeletion();
    }
    
    _setData () {
        this._cardImage = this._newCard.querySelector('.element__image');
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardCaption = this._newCard.querySelector('.element__caption');
        this._cardCaption.textContent = this._name;
        //hi! my name is. what? my names is. who? my name is. this
  }
  
    createCard () {
        this._newCard = this._getCardTemplate();
        this._likeCounter = this._newCard.querySelector(this._templateSettings.likeCounter);
        this._setListeners();
        this._setData();
        this._updateLikesView();
  
        return this._newCard;
  }
    
};

