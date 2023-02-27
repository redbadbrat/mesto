export default class UserInfo {
    constructor(userNameSelector, userStatusSelector, userAvatarSelector, userID){
        this._userName = userNameSelector;
        this._userStatus = userStatusSelector;
        this._userAvatar = userAvatarSelector;
        this._userID = userID;
    }

    getUserInfo() {
        const userData = {
            currentName: this._userName.textContent,
            currentStatus: this._userStatus.textContent,
            currentAvatar: this._userAvatar.src,
            ID: this._userID
        }
        return userData;
    }

    setUserInfo(name, status, avatar) {
        //ну, он эти данные ещё и запихивает на страницу
        this._userName.textContent = name;
        this._userStatus.textContent = status;
        this._userAvatar.src = avatar;
    }
}