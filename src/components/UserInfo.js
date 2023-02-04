export default class UserInfo {
    constructor(userNameSelector, userStatusSelector){
        this._userName = userNameSelector;
        this._userStatus = userStatusSelector;
    }

    getUserInfo() {
        const userData = {
            currentName: this._userName.textContent,
            currentStatus: this._userStatus.textContent
        }
        return userData;
    }

    setUserInfo(name, status) {
        //ну, он эти данные ещё и запихивает на страницу
        this._userName.textContent = name;
        this._userStatus.textContent = status;
    }
}