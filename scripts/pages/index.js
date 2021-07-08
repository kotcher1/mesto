import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';

import { editButton,
  cardBlock,
  addButton,
  pictureNameInput,
  linkInput,
  formParametes,
  formList,
  initialCards
} from '../utils/constants.js'

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