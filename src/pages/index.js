import './index.css';

import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Section from '../scripts/components/Section.js';
import Api from '../scripts/components/Api.js';

import { editButton,
  addButton,
  formParametes,
  initialCards,
  nameInput,
  jobInput
} from '../scripts/utils/constants.js'

const profileFormValidator = new FormValidator(formParametes, document.querySelector('#popupEdit .popup__form')); 

const addCardFormValidator = new FormValidator(formParametes, document.querySelector('#popupAdd .popup__form'));

const userInfo = new UserInfo('.profile__name', '.profile__profession');

const popupEdit= new PopupWithForm('#popupEdit', ( {fullname, job} ) => {
  userInfo.setUserInfo(fullname, job);
});
popupEdit.setEventListeners();

const popupAddCard = new PopupWithForm('#popupAdd', ( {pictureName, link} ) => {
  createNewCard(pictureName, link, '#card-template', 'prepend');
});
popupAddCard.setEventListeners();

const section = new Section({ items: initialCards, 
  renderer: (item) => {
    createNewCard(item.name, item.link, '#card-template', 'append');
  }
}, '.places')

const popupImage = new PopupWithImage('#imagePopup');
popupImage.setEventListeners();

function openEditProfilePopup() {
  const userInfoText = userInfo.getUserInfo();
  nameInput.value = userInfoText.name;
  jobInput.value = userInfoText.job;
  profileFormValidator.enableValidation();
  popupEdit.open();
}

function openAddCardPopup() {
  addCardFormValidator.enableValidation();
  popupAddCard.open();
}

function createNewCard(name, link, template, method) {
  const card = new Card(name, link, template, (image) => {
    popupImage.open(image);
  });
  const createdCard = card.createCard();
  section.addItem(createdCard, method);
}

editButton.addEventListener('click', openEditProfilePopup);

addButton.addEventListener('click', openAddCardPopup);

section.createElements();

const apiUserInfo= new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-26/users/me',
  headers: {
    authorization: 'e21e18fa-ab6d-4a3e-87f4-9a2549a22c3a',
  }
});

apiUserInfo.getUserInfo(({fullname, job}) => {
    userInfo.setUserInfo(fullname, job);
  }
);

const apiCardInfo = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-26/cards',
  headers: {
    authorization: 'e21e18fa-ab6d-4a3e-87f4-9a2549a22c3a',
  }
});
