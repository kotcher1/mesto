const editButton = document.querySelector('.profile__edit');
const addButton = document.querySelector('.profile__add');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const changeAvatarButton = document.querySelector('.profile__avatar-button');
const avatar = document.querySelector('.profile__avatar');

const formParametes = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disable',
  errorClass: '.popup__input-error',
  inputErrorClass: 'popup__input_type_error',
  errorVisibleClass: 'popup__input-error_active'
};

export { editButton,
  addButton,
  formParametes,
  nameInput,
  jobInput,
  changeAvatarButton,
  avatar,
}