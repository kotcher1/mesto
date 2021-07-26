export default class FormValidator {
  constructor(configObject, formElement) {
    this._inputSelector = configObject.inputSelector;
    this._submitButtonSelector = configObject.submitButtonSelector;
    this._inactiveButtonClass = configObject.inactiveButtonClass;
    this._errorClass = configObject.errorClass;
    this._inputErrorClass = configObject.inputErrorClass;
    this._errorVisibleClass = configObject.errorVisibleClass;
    this._formElement = formElement;
  }

  enableValidation() {
    this._formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners(); 
  }

  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._toggleButtonState()
    this._inputList.forEach((inputElement) => {
      this._checkInputValidity(inputElement);
      this._toggleButtonState();
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _showInputError(inputElement) {
    this._errorElement = this._formElement.querySelector(`#${inputElement.id} + ${this._errorClass}`);
    inputElement.classList.add(this._inputErrorClass);
    this._errorElement.textContent = inputElement.validationMessage;
    this._errorElement.classList.add(this._errorVisibleClass);
  };

  _hideInputError(inputElement) {
    this._errorElement = this._formElement.querySelector(`#${inputElement.id} + ${this._errorClass}`);
    inputElement.classList.remove(this._inputErrorClass);
    this._errorElement.classList.remove(this._errorVisibleClass);
    this._errorElement.textContent = '';
  };

  _toggleButtonState() {
    if(this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', '');
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled')
    } 
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    }); 
  }

  setValidation() {
    this._inputList.forEach((inputElement) => {
      this._checkInputValidity(inputElement);
      this._toggleButtonState();
    })
  }
}