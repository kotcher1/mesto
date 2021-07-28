import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._popup = document.querySelector(this._popupSelector);
    this._button = this._popup.querySelector('.popup__submit');
    this._submit = submit;
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._popupForm = this._popup.querySelector('.popup__form');
  }

  open() {
    super.open();
    this._button.textContent = 'Сохранить';
  }

  _getInputValues() {
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
    this._popupForm.reset();
  }

  _submitPopup(evt) {
    evt.preventDefault();
    this._submit(this._getInputValues());
    this.renderLoading(true);
  }

  renderLoading() {
    this._button.textContent = 'Сохранение...';
  }
}