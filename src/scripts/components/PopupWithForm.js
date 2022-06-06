import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  
  /**
   * Кроме селектора попапа принимает в конструктор колбэк сабмита формы
   */
  constructor(popupSelector, { submitForm }) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._popupForm = this._popup.querySelector('.popup__form');
  }

  /**
   * @returns сбор данных всех полей формы
   */
  _getInputValues() {
    this._inputСontent = {};
    this._inputList = this._formContainer.querySelectorAll('.popup__input');
    this._inputList.forEach(input => {
      this._inputСontent[input.name] = input.value;
    });
    return this._inputСontent;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this._submitForm(this._getInputValues());
      this.close();
    })
  }

  /**
   * Перезапись родительского метода close, 
   * так как форма должна ещё и сбрасываться
   */
  close() {
    super.close();
    this._popupForm.reset();
  }
}