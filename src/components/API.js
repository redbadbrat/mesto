export default class API {
    constructor({baseUrl, headers}) {
        this._url = baseUrl;
        this._headers = headers;
    }

    checker(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    
    getUserData() {
        const currentURL = `${this._url + '/users/me'}`;
        return fetch(currentURL , {
            method: 'GET',
            headers: {
                authorization: this._headers
            }
        })
        .then(res => {
            this.checker(res);
        })
    }

    getInitialCards() {
        const currentURL = `${this._url + '/cards'}`;
        return fetch(currentURL , {
            //я знаю, что get это дефолтный метод. но я путаюсь без явного объявления
            method: 'GET',
            headers: {
                authorization: this._headers
            }
        })
        .then(res => {
            this.checker(res);
        })
    }

    setDefaultData() {
        return Promise.all([this.getUserData(), this.getInitialCards()]);
    }

    editUserProfile(userInfo) {
        const currentURL = `${this._url + '/users/me'}`;
        return fetch(currentURL , {
            method: 'PATCH',
            headers: {
                authorization: this._headers
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => {
            this.checker(res);
        })
    }
  
    postNewCard(cardInfo) {
        const currentURL = `${this._url + '/cards'}`;
        return fetch(currentURL , {
            method: 'POST',
            headers: {
                authorization: this._headers
            },
            body: JSON.stringify(cardInfo)
        })
        .then(res => {
            this.checker(res);
        })
    }

    /*showLikeCount() {
        const currentURL = `${this._url + '/cards'}`;
        return fetch(currentURL , {
            method: 'POST',
            headers: {
                authorization: this._headers
            },
            body: JSON.stringify(cardInfo)
        })
        .then(res => {
            this.checker(res);
        })
    }*/

    deleteCard(cardID) {
        const currentURL = `${this._url + '/cards/' + cardID}`;
        return fetch(currentURL , {
            method: 'DELETE',
            headers: {
                authorization: this._headers
            },
        })
        .then(res => {
            this.checker(res);
        })
    }

    addLike(cardID) {
        const currentURL = `${this._url + '/cards/' + cardID + '/likes'}`;
        return fetch(currentURL , {
            method: 'PUT',
            headers: {
                authorization: this._headers
            },
        })
        .then(res => {
            this.checker(res);
        })
    }

    deleteLike(cardID) {
        const currentURL = `${this._url + '/cards/' + cardID + '/likes'}`;
        return fetch(currentURL , {
            method: 'DELETE',
            headers: {
                authorization: this._headers
            },
        })
        .then(res => {
            this.checker(res);
        })
    }

    updateAvatar(avatar) {
        const currentURL = `${this._url + '/users/me/avatar'}`;
        return fetch(currentURL , {
            method: 'PATCH',
            headers: {
                authorization: this._headers
            },
            body: JSON.stringify(avatar)
        })
        .then(res => {
            this.checker(res);
        })
    }

    showUpdate() {
        
    }
}
