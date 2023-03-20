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
            headers: this._headers
        })
        .then(res => {
            return this.checker(res);
        })
    }

    getInitialCards() {
        const currentURL = `${this._url + '/cards'}`;
        return fetch(currentURL , {
            //я знаю, что get это дефолтный метод. но я путаюсь без явного объявления
            method: 'GET',
            headers: this._headers
        })
        .then(res => {
            //баг репорт: без добавления return код не работал - в вызове метода объекта класса с юзер датой всё было ок,
            //а вот при вызове карточек - undefined. при этом юзер дате return не был нужен - работало и без него. што
            return this.checker(res);
        })
    }

    editUserProfile(userInfo) {
        const currentURL = `${this._url + '/users/me'}`;
        return fetch(currentURL , {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({      
                name: userInfo.name,
                about: userInfo.status
            })
        })
        .then(res => {
            return this.checker(res);
        })
    }
  
    postNewCard(cardInfo) {
        const currentURL = `${this._url + '/cards'}`;
        return fetch(currentURL , {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(cardInfo)
        })
        .then(res => {
            return this.checker(res);
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
            headers: this._headers,
        })
        .then(res => {
            return this.checker(res);
        })
    }

    addLike(cardID) {
        const currentURL = `${this._url + '/cards/' + cardID + '/likes'}`;
        return fetch(currentURL , {
            method: 'PUT',
            headers: this._headers,
        })
        .then(res => {
            return this.checker(res);
        })
    }

    deleteLike(cardID) {
        const currentURL = `${this._url + '/cards/' + cardID + '/likes'}`;
        return fetch(currentURL , {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(res => {
            return this.checker(res);
        })
    }

    updateAvatar(avatar) {
        const currentURL = `${this._url + '/users/me/avatar'}`;
        return fetch(currentURL , {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(avatar)
        })
        .then(res => {
            return this.checker(res);
        })
    }

    showUpdate() {
        
    }
}
