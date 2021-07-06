import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._popup = document.querySelector(this._popupSelector);
    this._submit = submit;
  }

  _getInputValues() {

  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', (evt) => this._submitPopup(evt))
  }

  close() {
    super.close();
  }

  _submitPopup(evt) {
    evt.preventDefault();
    this._submit();
    super.close();
  }
}