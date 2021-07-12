import Popup from './Popup.js'

export default class PopupWithImage extends Popup {

  open(image) {
    super.open();
    const bigImage = this._popup.querySelector('.popup__image');
    const popupImageTitle = this._popup.querySelector('.popup__image-title');
    bigImage.src = image.src;
    bigImage.alt = image.alt;
    popupImageTitle.textContent = image.alt;
  }
}