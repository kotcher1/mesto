import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._popup = document.querySelector(this._popupSelector);
    this._submit = submit;
  }

  _getInputValues() {
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', this._submitPopup.bind(this), { once: true })
  }

  close() {
    super.close();
  }

  _submitPopup(evt) {
    evt.preventDefault();
    this._submit();
    this.close();
  }
}