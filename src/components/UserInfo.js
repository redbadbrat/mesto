export default class UserInfo {
    constructor(userNameSelector, userStatusSelector, userAvatarSelector, userId){
        this._userName = userNameSelector;
        this._userStatus = userStatusSelector;
        this._userAvatar = userAvatarSelector;
        this._userId = userId;
    }

    getUserInfo() {
        const userData = {
            currentName: this._userName.textContent,
            currentStatus: this._userStatus.textContent,
            currentAvatar: this._userAvatar.src,
            ID: this._userId
        }
        return userData;
    }

    setUserInfo(name, status) {
        //ну, он эти данные ещё и запихивает на страницу
        this._userName.textContent = name;
        this._userStatus.textContent = status;
    }

    setUserAvatar(avatar) {
        this._userAvatar.src = avatar;
    }

    setUserId(id) {
        this._userId = id;
    }

    returnUserId() {
        return this._userId;
    }
}