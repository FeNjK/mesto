import Popup from './Popup.js'

export default class PopupWithСonfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    //this._submitForm = submitForm;
    this._submitForm = this._popup.querySelector('.popup__form_type_confirmation');;
    this._submitButton = this._popup.querySelector('.popup__save-button');
  }

  setSubmit(targetSubmit) {
    this._submitHandlerCallback = targetSubmit;
  }
  
  setEventListeners() {
    super.setEventListeners();
    this._submitButton.addEventListener('click', (e) => {
      //this._submitForm.addEventListener('click', (e) => {
      e.preventDefault();
      this._submitButton(this._submitHandlerCallback);
      //this._submitHandlerCallback();
    });
  }

  // Метод изменения кнопки в момент отправки формы на сервер
  processLoading() {
    this._submitButton.textContent = 'Исполняю...';
    this._submitButton.disabled = true;
  }

  // Обычное состояние кнопки отправки
  normalCondition() {
    this._submitButton.textContent = 'Да';
      this._submitButton.disabled = false;
  }
}