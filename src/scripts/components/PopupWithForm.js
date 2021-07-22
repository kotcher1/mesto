import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._popup = document.querySelector(this._popupSelector);
    this._button = this._popup.querySelector('.popup__submit');
    this._submit = submit;
  }

  open() {
    super.open();
    this._button.textContent = 'Сохранить';
  }

  _getInputValues() {
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', this._submitPopup.bind(this))
  }

  close() {
    super.close();
    this._popup.querySelector('.popup__form').reset();
  }

  _submitPopup(evt) {
    evt.preventDefault();
    this._submit(this._getInputValues());
    this.renderLoading(true);
  }

  renderLoading(isLoading) {
    if(isLoading) {
      this._button.textContent = 'Сохранение...';
    } else {
      this.close();
    }
  }
}