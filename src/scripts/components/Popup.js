export default class Popup {
  
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  /**
   * Метод открытия модальных окон
   */
  open() {
    this._popup.classList.add('popup_activ');
    document.addEventListener(`keydown`, this._handleEscClose);
  }

  /**
   * Метод закрытия модальных окон
   */
  close() {
    this._popup.classList.remove('popup_activ');
    document.addEventListener(`keydown`, this._handleEscClose);
  }

  /**
   * Метод закрытия модальных окон нажатием на клавишу "Esc"
   * @param {Event} e event
   */
  _handleEscClose = (e) => {
    if (e.key === 'Escape') {
      this.close();
    }
  }

  /**
   * Универсальный метод закрытия модальных окон 
   * нажатием на оверлей или "крестик" модального окна
   */
  _handlePopupClose = (e) => {
    if (e.target.classList.contains('popup_activ') || e.target.classList.contains('popup__close-button')) {
      this.close();
    }
  }

  /**
   * Добавляем слушатели клика для закрытия попапа (разными способами)
   */
  setEventListeners() {
    this._popup.addEventListener('mousedown', this._handlePopupClose);
  }
}