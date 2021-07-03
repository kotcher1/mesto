import Card from './Card.js';
import FormValidator from './FormValidator.js';

const editButton = document.querySelector('.profile__edit');
const popupEditProfile = document.querySelector('#popupEdit');
const popupAddCard = document.querySelector('#popupAdd');
const formEditProfile = document.querySelector('#formName');
const formAddCard = document.querySelector('#formPlace');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const nameField = document.querySelector('.profile__name');
const jobField = document.querySelector('.profile__profession');

const cardBlock = document.querySelector('.places');
const addButton = document.querySelector('.profile__add');
const pictureNameInput = document.querySelector('#pictureName');
const linkInput = document.querySelector('#link');
const popupImage = document.querySelector('#imagePopup');
const bigImage = document.querySelector('.popup__image');

const popupImageTitle = document.querySelector('.popup__image-title');

const popups = Array.from(document.querySelectorAll('.popup'));

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

function openEditProfilePopup() {
  openPopup(popupEditProfile);
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;
  formEditProfile.querySelector('.popup__submit').classList.remove('popup__submit_disable');
}

function openAddCardPopup () {
  openPopup(popupAddCard);
  if(!pictureNameInput.validity.valid || !linkInput.validity.valid) {
    const addCardSubmit = popupAddCard.querySelector('.popup__submit');
    addCardSubmit.classList.add('popup__submit_disable');
    addCardSubmit.setAttribute('disabled', '');
  }
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape)
}

function submitEditProfilePopup(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  nameField.textContent = nameValue;
  jobField.textContent = jobValue;
  closePopup(popupEditProfile);
}

editButton.addEventListener('click', openEditProfilePopup);

formEditProfile.addEventListener('submit', submitEditProfilePopup);

addButton.addEventListener('click', openAddCardPopup);

formAddCard.addEventListener('submit', submitAddCardForm);

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

popups.forEach((popup) => {
  popup.addEventListener('click',(e) => {
    if (e.target.classList.contains('popup') || e.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    }
  })
})

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, '#card-template');
  const createdCard = card.createCard();
  createImagePopup(createdCard);
  cardBlock.append(createdCard);
})

function submitAddCardForm(evt) {
  evt.preventDefault();
  const card = new Card(pictureNameInput.value, linkInput.value, '#card-template');
  const createdCard = card.createCard();
  createImagePopup(createdCard);
  cardBlock.prepend(createdCard);
  closePopup(document.querySelector('.popup_opened'));
  pictureNameInput.value = '';
  linkInput.value = '';
}

formList.forEach((formElement) => {
  const formValidator = new FormValidator(formParametes, formElement);
  formValidator.enableValidation();
});

function createImagePopup(card) {
  const placeImage = card.querySelector('.places__image');
  placeImage.addEventListener('click', () => {
    openPopup(popupImage);
    bigImage.src = placeImage.src;
    bigImage.alt = placeImage.alt;
    popupImageTitle.textContent = placeImage.alt;
  })
}