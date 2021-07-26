import './index.css';

import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Section from '../scripts/components/Section.js';
import Api from '../scripts/components/Api.js';

import PopupDelete from '../scripts/components/PopupDelete.js';

import { editButton,
  addButton,
  formParametes,
  nameInput,
  jobInput,
  ownerId,
  changeAvatarButton,
  avatar,
} from '../scripts/utils/constants.js'

const profileFormValidator = new FormValidator(formParametes, document.querySelector('#popupEdit .popup__form')); 
profileFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(formParametes, document.querySelector('#popupAdd .popup__form'));
addCardFormValidator.enableValidation();

const addAvatarFormValidator = new FormValidator(formParametes, document.querySelector('#popupAvatar .popup__form'));
addAvatarFormValidator.enableValidation();

const userInfo = new UserInfo('.profile__name', '.profile__profession');

const popupEdit= new PopupWithForm('#popupEdit', ( {fullname, job} ) => {
  apiInfo.setUserInfo(fullname, job, (isLoading) => {
    popupEdit.renderLoading(isLoading);
    userInfo.setUserInfo(fullname, job);
  });
});
popupEdit.setEventListeners();

const popupAddCard = new PopupWithForm('#popupAdd', ( {pictureName, link} ) => {
  apiInfo.addCard(pictureName, link, (result) => {
    const id = result._id;
    section.addItem(createNewCard(pictureName, link, 0, '#card-template', 'prepend', true, id, false), 'prepend');
  },
  (isLoading) => {
    popupAddCard.renderLoading(isLoading);
  });
});
popupAddCard.setEventListeners();

const popupDeleteCard = new PopupDelete('#popupDelete', (card, id) => {
  card.removeCard();
  apiInfo.deleteCard(id);
});
popupDeleteCard.setEventListeners();

const section = new Section('.places');

const popupChangeAvatar = new PopupWithForm('#popupAvatar', ({link}) => {
  apiInfo.changeAvatar(link, (isLoading) => {
    popupChangeAvatar.renderLoading(isLoading);
    avatar.src = link;
  });
})
popupChangeAvatar.setEventListeners();

const popupImage = new PopupWithImage('#imagePopup');
popupImage.setEventListeners();

function openEditProfilePopup() {
  const userInfoText = userInfo.getUserInfo();
  nameInput.value = userInfoText.name;
  jobInput.value = userInfoText.job;
  profileFormValidator.setValidation();
  popupEdit.open();
}

function openAddCardPopup() {
  addCardFormValidator.setValidation();
  popupAddCard.open();
}

function openChangeAvatarPopup() {
  addAvatarFormValidator.setValidation();
  popupChangeAvatar.open();
}

function createNewCard(
  name, 
  link, 
  likes, 
  template, 
  method, 
  deleteButtonStatus, 
  cardId, 
  isLiked) {
  const card = new Card(
    name, 
    link, 
    likes, 
    template, 
    deleteButtonStatus,
    (image) => {
      popupImage.open(image);
    }, 
    () => {
      popupDeleteCard.open(card, cardId);
    },
    (method) => {
      apiInfo.likeCard(cardId, method);
    },
    isLiked);
  const createdCard = card.createCard();
  return createdCard;
}

editButton.addEventListener('click', openEditProfilePopup);

addButton.addEventListener('click', openAddCardPopup);

changeAvatarButton.addEventListener('click', openChangeAvatarPopup);

const apiInfo= new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-26',
  headers: {
    authorization: 'e21e18fa-ab6d-4a3e-87f4-9a2549a22c3a',
    'Content-Type': 'application/json'
  }
});

apiInfo.getUserInfo(({fullname, job}) => {
    userInfo.setUserInfo(fullname, job);
  }
);

apiInfo.getInitialCards((result) => {
  result.forEach(item => {
    const deleteButtonStatus = item.owner._id === ownerId;
    const cardId = item._id;
    let isLiked = false;
    item.likes.forEach((item) => {
      if(item._id === ownerId) {
        isLiked = true;
      } 
    });
    section.addItem(createNewCard(
      item.name, 
      item.link, 
      item.likes.length, 
      '#card-template', 
      'append', 
      deleteButtonStatus, 
      cardId, 
      isLiked), 'append');
  })
})

apiInfo.getAvatar((link) => {
  avatar.src = link;
})