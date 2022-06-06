export default class UserInfo {

  /**
   * Конструктор принимает в себя
   * @param {object} объект с селекторами двух элементов:
   * элемента имени пользователя и элемента информации о себе
   */
  constructor({userNameSelector, userActivityTypeSelector}) {
    this._userName = document.querySelector(userNameSelector);
    this._userActivityType = document.querySelector(userActivityTypeSelector);
  }

  /**
   * Метод, который
   * @returns {object} объект с данными пользователя
   * Этот метод пригодится когда данные пользователя нужно будет 
   * подставить в форму при открытии модального окна с данными профиля
   */
  getUserInfo() {
    return {
      popupUserName: this._userName.textContent,
      popupUserActivityType: this._userActivityType.textContent
    };
  }

  /**
   * Метод, принимающий новые данные пользователя
   * и добавляет их на страницу при сабмите, а именно:
   * @param {*} popupUserName - имя пользователя
   * @param {*} popupUserActivityType - инфо о роде деятельности пользователя
   */
  setUserInfo(popupUserName, popupUserActivityType) {
    this._userName.textContent = popupUserName;
    this._userActivityType.textContent = popupUserActivityType;
  }
}