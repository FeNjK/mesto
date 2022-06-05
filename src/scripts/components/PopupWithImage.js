import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupCaption = this._popup.querySelector('.popup__caption');
  }

  open (name, link) {
    this._popUpCaption.textContent = name;
    this._popUpImage.alt = name;
    this._popUpImage.src = link;
    super.open();
  }
}