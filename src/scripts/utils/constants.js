const editButton = document.querySelector('.profile__edit');
const addButton = document.querySelector('.profile__add');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');

const formParametes = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disable',
  errorClass: '.popup__input-error',
  inputErrorClass: 'popup__input_type_error',
  errorVisibleClass: 'popup__input-error_active'
};

const formList = Array.from(document.querySelectorAll('.popup__form'));

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export { editButton,
  addButton,
  formParametes,
  initialCards,
  nameInput,
  jobInput
}