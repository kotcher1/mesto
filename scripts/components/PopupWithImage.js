import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(image) {
    super.open();
    const bigImage = document.querySelector('.popup__image');
    const popupImageTitle = document.querySelector('.popup__image-title');
    bigImage.src = image.src;
    bigImage.alt = image.alt;
    popupImageTitle.textContent = image.alt;
  }
}