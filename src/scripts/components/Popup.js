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
  _handleEscClose(e) {
    if (e.key === 'Escape') {
      const activPopup = document.querySelector('.popup_activ'); //Кажется это можно сделать проще
      this.close(activPopup);
    }
  }

  /**
   * Универсальный метод закрытия модальных окон нажатием на оверлей или "крестик" модального окна
   * Честно говоря есть сомнения относительно правильности его реализации в рамках модуля,
   * ведь у нас же подлежит закрытию конкретный активный в данный момент попап...
   * */
  /* _popups = document.querySelectorAll('.popup').forEach((popup) => {
    popup.addEventListener('mousedown', (e) => {
      if (e.target.classList.contains('popup_activ') || e.target.classList.contains('popup__close-button')) {
        close(popup);
      }
    });
  }); */

  _handlePopupClose = (e) => {
    if (e.target.classList.contains('popup_activ') || e.target.classList.contains('popup__close-button')) {
      this.close(this._popup);
    }
  }


  setEventListeners() {
    //this._popup.querySelector('.popup__close-button').addEventListener('click', () => this.close());
    //this._popups.addEventListener('click', () => this.close());
    this._popup.addEventListener('click', this._handlePopupClose);
  }
}