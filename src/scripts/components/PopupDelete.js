import Popup from './Popup.js'

export default class PopupDelete extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._popup = document.querySelector(this._popupSelector);
    this._submit = submit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.querySelector('.popup__submit').addEventListener('click', this._clickButton.bind(this))
  }

  open(card, id) {
    super.open();
    this._card = card;
    this._id = id
  }

  _clickButton() {
    this._submit(this._card, this._id);
  }
}