//так как ООП заняло у меня время, я объясняю сама себе свои действия. прямо по строкам. надеюсь, вас это не раздражает
export default class Card {
    constructor(data, templateSettings, handleCardClick, handleCardDeletionPopup) {
        this._templateSettings = templateSettings;
        this._name = data.name; //переписала передачу через объект
        this._link = data.link;
        this._id = data._id;
        this._handleCardClick = handleCardClick;
        this._handleCardDeletionPopup = handleCardDeletionPopup;
    }
  
    _getCardTemplate () {
        const cardTemplate = document.querySelector(this._templateSettings.templateElementSelector).content
                            .querySelector(this._templateSettings.elementSelector).cloneNode(true);
                            //так?
        return cardTemplate;
    }

    //у меня премия Золотая Малина за наименования, ага

    _findCurrentLikeButton() {
        this._currentLike = this._newCard.querySelector(this._templateSettings.likeButtonSelector);
        return this._currentLike;
    }

    getId() {
        return this._id;
    }
  
    handleCardDelete() {
        this._newCard.remove();
        this._newCard = null;
    }

    //вы не сможете тыкнуть на кнопку если кнопки нет
    preventDeletion() {
        this._newCard.querySelector('.element__delete-button').classList.add('button_hidden');
    } 

    _handleLikeClick () {
        this._currentLike.classList.toggle(this._templateSettings.likeClickedSelector);
    }
    
    _setListeners () {
        this._findCurrentLikeButton();
        //однажды на вебинаре я увидела стрелочные функции в листенерах и так их и делаю.
        //без них теряется контекст, так?
        this._newCard.querySelector('.element__like-button').addEventListener('click', () => this._handleLikeClick()); 
        this._newCard.querySelector('.element__delete-button').addEventListener('click', this._handleCardDeletionPopup);
        this._newCard.querySelector('.element__image-overlay').addEventListener('click', this._handleCardClick);
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

