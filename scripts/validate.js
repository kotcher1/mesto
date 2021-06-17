function enableValidation(obj) {
  const forms = Array.from(document.querySelectorAll(obj.formSelector));
  const inputs = Array.from(document.querySelectorAll(obj.inputSelector));

  function showInputError(input) {
    const errorMessage = document.querySelector(`#${input.id} + ${obj.errorClass}`);
    errorMessage.classList.add(obj.errorVisibleClass);
    errorMessage.textContent = input.validationMessage;
    input.classList.add(obj.inputErrorClass);
  }

  function hideInputError(input) {
    const errorMessage = document.querySelector(`#${input.id} + ${obj.errorClass}`);
    errorMessage.classList.remove(obj.errorVisibleClass);
    input.classList.remove(obj.inputErrorClass);
  }

  function isValid(input) {
    if (!input.validity.valid) {
      showInputError(input);
    } else {
      hideInputError(input);
    }
  };

  inputs.forEach((input) => {
    isValid(input);
  })

  forms.forEach((form) => {
    form.addEventListener('input', (evt) => {
      isValid(evt.target);
      determineFormValidity(form);
    })
  })

  function determineFormValidity(form) {
    const inputs = Array.from(form.querySelectorAll('input'));
    const allInputsValidity = inputs.every((el) => {
      return el.validity.valid;
    })
    if(allInputsValidity) {
      form.querySelector(obj.submitButtonSelector).classList.remove(obj.inactiveButtonClass);
      form.querySelector(obj.submitButtonSelector).removeAttribute('disabled');
    } else {
      form.querySelector(obj.submitButtonSelector).classList.add(obj.inactiveButtonClass);
      form.querySelector(obj.submitButtonSelector).setAttribute('disabled', '');
    }
  }
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disable',
  errorClass: '.popup__input-error',
  inputErrorClass: 'popup__input_type_error',
  errorVisibleClass: 'popup__input-error_active'
}); 