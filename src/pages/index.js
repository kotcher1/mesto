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

const addCardFormValidator = new FormValidator(formParametes, document.querySelector('#popupAdd .popup__form'));

const addAvatarFormValidator = new FormValidator(formParametes, document.querySelector('#popupAvatar .popup__form'));

const userInfo = new UserInfo('.profile__name', '.profile__profession');

const popupEdit= new PopupWithForm('#popupEdit', ( {fullname, job} ) => {
  userInfo.setUserInfo(fullname, job);
  apiUserInfo.setUserInfo(fullname, job, (isLoading) => {
    popupEdit.renderLoading(isLoading);
  });
});
popupEdit.setEventListeners();

const popupAddCard = new PopupWithForm('#popupAdd', ( {pictureName, link} ) => {
  apiCardInfo.addCard(pictureName, link, (result) => {
    const id = result._id;
    createNewCard(pictureName, link, 0, '#card-template', 'prepend', true, id, false);
  },
  (isLoading) => {
    popupAddCard.renderLoading(isLoading);
  });
});
popupAddCard.setEventListeners();

const popupDeleteCard = new PopupDelete('#popupDelete', (card, id) => {
  card.remove();
  apiCardInfo.deleteCard(id);
});
popupDeleteCard.setEventListeners();

const section = new Section('.places');

const popupChangeAvatar = new PopupWithForm('#popupAvatar', ({link}) => {
  avatar.src = link;
  apiUserInfo.changeAvatar(link, (isLoading) => {
    popupChangeAvatar.renderLoading(isLoading);
  });
})
popupChangeAvatar.setEventListeners();

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

function openChangeAvatarPopup() {
  addAvatarFormValidator.enableValidation();
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
      popupDeleteCard.open(createdCard, cardId);
    },
    (method) => {
      apiCardInfo.likeCard(cardId, method);
    },
    isLiked);
  const createdCard = card.createCard();
  section.addItem(createdCard, method);
}

editButton.addEventListener('click', openEditProfilePopup);

addButton.addEventListener('click', openAddCardPopup);

changeAvatarButton.addEventListener('click', openChangeAvatarPopup);

const apiUserInfo= new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-26/users/me',
  headers: {
    authorization: 'e21e18fa-ab6d-4a3e-87f4-9a2549a22c3a',
    'Content-Type': 'application/json'
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
    'Content-Type': 'application/json'
  }
});

apiCardInfo.getInitialCards((result) => {
  result.forEach(item => {
    const deleteButtonStatus = item.owner._id === ownerId;
    const cardId = item._id;
    let isLiked = false;
    item.likes.forEach((item) => {
      if(item._id === ownerId) {
        isLiked = true;
      } 
    });
    createNewCard(
      item.name, 
      item.link, 
      item.likes.length, 
      '#card-template', 
      'append', 
      deleteButtonStatus, 
      cardId, 
      isLiked);
  })
})

apiUserInfo.getAvatar((link) => {
  avatar.src = link;
})