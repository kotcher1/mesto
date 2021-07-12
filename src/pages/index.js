import './index.css';

import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Section from '../scripts/components/Section.js';

import { editButton,
  addButton,
  pictureNameInput,
  linkInput,
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
const popupAddCard = new PopupWithForm('#popupAdd', () => {
  createNewCard(pictureNameInput.value, linkInput.value, '#card-template', 'prepend');
});
const section = new Section({ items: initialCards, 
  renderer: (item) => {
    createNewCard(item.name, item.link, '#card-template', 'append');
  }
}, '.places')

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
    const popup = new PopupWithImage('#imagePopup');
    popup.open(image);
  });
  const createdCard = card.createCard();
  section.addItem(createdCard, method);
}

editButton.addEventListener('click', openEditProfilePopup);

addButton.addEventListener('click', openAddCardPopup);

section.createElements()