import Popup from './Popup.js'

export default class PopupWithСonfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._submitForm = submitForm;
    //this._submitButton = this._popup.querySelector('.popup__save-button');
    this._submitForm = this._popup.querySelector('popup__form');
  }

  setSubmit(targetSubmit) {
    this._submitHandlerCallback = targetSubmit;
  }
  
  setEventListeners() {
    super.setEventListeners();
    this._submitButton.addEventListener('click', (e) => {
      e.preventDefault();
      //this._submitForm(this._submitHandler);
      this._submitHandlerCallback();
    });
  }
}