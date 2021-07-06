import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';

import { editButton,
  popupEditProfile,
  popupAddCard,
  formEditProfile,
  formAddCard,
  nameInput,
  jobInput,
  nameField,
  jobField,
  cardBlock,
  addButton,
  pictureNameInput,
  linkInput,
  popups,
  formParametes,
  formList,
  initialCards
} from '../utils/constants.js'

import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Popup from '../components/Popup.js';

// function openEditProfilePopup() {
//   openPopup(popupEditProfile);
//   nameInput.value = nameField.textContent;
//   jobInput.value = jobField.textContent;
//   formEditProfile.querySelector('.popup__submit').classList.remove('popup__submit_disable');
// }

function openEditProfilePopup() {
  const popup = new PopupWithForm('#popupEdit', () => {
    const nameValue = nameInput.value;
    const jobValue = jobInput.value;
    nameField.textContent = nameValue;
    jobField.textContent = jobValue;
  });
  popup.open();
  popup.setEventListeners();
}

// function openAddCardPopup () {
//   openPopup(popupAddCard);
//   if(!pictureNameInput.validity.valid || !linkInput.validity.valid) {
//     const addCardSubmit = popupAddCard.querySelector('.popup__submit');
//     addCardSubmit.classList.add('popup__submit_disable');
//     addCardSubmit.setAttribute('disabled', '');
//   }
// }

function openAddCardPopup() {
  const popup = new PopupWithForm('#popupAdd', () => {
    const card = new Card(pictureNameInput.value, linkInput.value, '#card-template', (image) => {
      const popup = new PopupWithImage('#imagePopup');
      popup.open(image);
      popup.setEventListeners();
    });
    const createdCard = card.createCard();
    cardBlock.prepend(createdCard);
    pictureNameInput.value = '';
    linkInput.value = '';
  });
  popup.open();
  popup.setEventListeners();
}

// function closePopup(popup) {
  // popup.classList.remove('popup_opened');
  // document.removeEventListener('keydown', closeByEscape)
// }

// function submitEditProfilePopup() {
  // evt.preventDefault();
  // const nameValue = nameInput.value;
  // const jobValue = jobInput.value;
  // nameField.textContent = nameValue;
  // jobField.textContent = jobValue;
  // closePopup(popupEditProfile);
// }

editButton.addEventListener('click', openEditProfilePopup);

// formEditProfile.addEventListener('submit', submitEditProfilePopup);

addButton.addEventListener('click', openAddCardPopup);

// formAddCard.addEventListener('submit', submitAddCardForm);

// function openPopup(popup) {
  // popup.classList.add('popup_opened');
  // document.addEventListener('keydown', closeByEscape);
// }

// popups.forEach((popup) => {
//   popup.addEventListener('click',(e) => {
//     if (e.target.classList.contains('popup') || e.target.classList.contains('popup__close-button')) {
//       closePopup(popup);
//     }
//   })
// })

// function closeByEscape(evt) {
//   if (evt.key === 'Escape') {
//     closePopup(document.querySelector('.popup_opened'));
//   }
// }

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, '#card-template', (image) => {
    const popup = new PopupWithImage('#imagePopup');
    popup.open(image);
    popup.setEventListeners();
  });
  const createdCard = card.createCard();
  cardBlock.append(createdCard);
})

// function submitAddCardForm(evt) {
//   evt.preventDefault();
//   const card = new Card(pictureNameInput.value, linkInput.value, '#card-template');
//   const createdCard = card.createCard();
//   cardBlock.prepend(createdCard);
//   closePopup(document.querySelector('.popup_opened'));
//   pictureNameInput.value = '';
//   linkInput.value = '';
// }

formList.forEach((formElement) => {
  const formValidator = new FormValidator(formParametes, formElement);
  formValidator.enableValidation();
});

// export {openPopup}