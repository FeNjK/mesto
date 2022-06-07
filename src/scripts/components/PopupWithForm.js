import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  
  /**
   * Кроме селектора попапа принимает в конструктор колбэк сабмита формы
   */
  constructor(popupSelector, { submitForm }) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = this._popupForm.querySelectorAll('.popup__input');
  }

  /**
   * @returns сбор данных всех полей формы
   * результатом является обект в котором находятся все данные
   */
  _getInputValues() {
    this._inputsСontent = {};
    this._inputList.forEach(input => {
      this._inputsСontent[input.name] = input.value;
    });
    return this._inputsСontent;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this._submitForm(this._getInputValues());
    })
  }

  /**
   * Перезапись родительского метода close, 
   * так как форма должна ещё и сбрасываться
   * Чувствую, что тут есть проблема, 
   * так как пользователь не должен видеть 
   * процесс очистки формы до её закрытия...
   * Пока не получается её решить.
   */
  close() {
    super.close();
    this._popupForm.reset();
  }
}