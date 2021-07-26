import Popup from './Popup.js'

export default class PopupWithImage extends Popup {

  constructor(popupSelector) {
    super(popupSelector);
    this._popupCardImage = this._popup.querySelector('.popup__image');
    this._captionImage = this._popup.querySelector('.popup__image-title');
  }

  open(image) {
    super.open();
    this._popupCardImage.src = image.src;
    this._captionImage.alt = image.alt;
    this._captionImage.textContent = image.alt;
  }
}