import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._popup = document.querySelector(this._popupSelector);
    this._submit = submit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.querySelector('.popup__submit').addEventListener('click', this._submitPopup.bind(this))
  }

  open(card) {
    super.open();
    this._card = card;
  }

  _submitPopup(evt) {
    evt.preventDefault();
    this._submit(this._card);
    this.close();
  }
}