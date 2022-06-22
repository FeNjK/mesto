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

  /* constructor({userName, userActivityType}) {
    this._userName = document.querySelector(userName);
    this._userActivityType = document.querySelector(userActivityType);
  } */

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
      //userAvatar: this._userAvatar.src
    };
  }

  /* getUserInfo() {
    return {
      userName: this._userName.textContent,
      userActivityType: this._userActivityType.textContent
    };
  } */

  /**
   * Метод, принимающий новые данные пользователя
   * и добавляет их на страницу при сабмите
   */
  //setUserInfo(popupUserName, popupUserActivityType, popupAvatar, _id) {
  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userActivityType.textContent = data.about;
    this._userAvatar.src = data.avatar;
    //this._id = _id;
  }

  /* setUserInfo(popupUserName, popupUserActivityType) {
    this._userName.textContent = popupUserName;
    this._userActivityType.textContent = popupUserActivityType;
  } */
}