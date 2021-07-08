import './pages/index.css';

import Card from './scripts/components/Card.js';
import FormValidator from './scripts/components/FormValidator.js';
import PopupWithForm from './scripts/components/PopupWithForm.js';
import PopupWithImage from './scripts/components/PopupWithImage.js';
import UserInfo from './scripts/components/UserInfo.js';
import Section from './scripts/components/Section.js';

import { editButton,
  cardBlock,
  addButton,
  pictureNameInput,
  linkInput,
  formParametes,
  formList,
  initialCards
} from './scripts/utils/constants.js'

function openEditProfilePopup() {
  const popup = new PopupWithForm('#popupEdit', () => {
    const userInfo = new UserInfo('.profile__name', '.profile__profession');
    userInfo.setUserInfo(userInfo.getUserInfo());
  });
  popup.open();
  popup.setEventListeners();
}

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

editButton.addEventListener('click', openEditProfilePopup);

addButton.addEventListener('click', openAddCardPopup);

const section = new Section({ items: initialCards, 
  renderer: (item) => {
    const card = new Card(item.name, item.link, '#card-template', (image) => {
      const popup = new PopupWithImage('#imagePopup');
      popup.open(image);
      popup.setEventListeners();
    });
    const createdCard = card.createCard();
    section.addItem(createdCard);
  }
}, '.places')

section.createElement()

formList.forEach((formElement) => {
  const formValidator = new FormValidator(formParametes, formElement);
  formValidator.enableValidation();
});