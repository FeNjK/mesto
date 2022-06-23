export default class UserInfo {

  /**
   * Конструктор принимает в себя
   * @param {object} объект с селекторами двух элементов:
   * элемента имени пользователя и элемента информации о себе
   */
  constructor({userName, userActivityType, userAvatar}) {
    this._userName = document.querySelector(userName);
    this._userActivityType = document.querySelector(userActivityType);
    this._userAvatar = document.querySelector(userAvatar);
  }

  /**
   * Метод, который
   * @returns {object} объект с данными пользователя
   * Этот метод пригодится когда данные пользователя нужно будет 
   * подставить в форму при открытии модального окна с данными профиля
   */
  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userActivityType: this._userActivityType.textContent,
      userAvatar: this._userAvatar.src
    };
  }

  /**
   * Метод, принимающий новые данные пользователя
   * и добавляет их на страницу при сабмите
   */
  setUserInfo(userName, userActivityType) {
    this._userName.textContent = userName;
    this._userActivityType.textContent = userActivityType;
  }
  
  setUserData(userInfo) {
    this._userName._id = userInfo._id;
    this._userName.textContent = userInfo.name;
    this._userActivityType.textContent = userInfo.about;
    this._userAvatar.src = userInfo.avatar;
  }

  setUserInfoAvatar(userInfoAvatar) {
   this._userAvatar.src = userInfoAvatar.avatar;
   userInfoAvatar.avatar.classList.add('.profile__avatar');
  }
}