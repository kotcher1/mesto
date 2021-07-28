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
  apiInfo.setUserInfo(fullname, job)
    .then(res => res.json())
    .then(() => {
      userInfo.setUserInfo(fullname, job);
    })
    .then(() => {
      popupEdit.close();
    })
    .catch((err) => {
        console.log(err);
      })
});
popupEdit.setEventListeners();

const popupAddCard = new PopupWithForm('#popupAdd', ( {pictureName, link} ) => {
  apiInfo.addCard(pictureName, link)
    .then(res => res.json())
    .then((result) => {
      const id = result._id;
      section.addItem(createNewCard(pictureName, link, 0, '#card-template', true, id, false), 'prepend');
    })
    .then(() => {
      popupAddCard.close();
    })
    .catch((err) => {
      console.log(err);
    })
});
popupAddCard.setEventListeners();

const popupDeleteCard = new PopupDelete('#popupDelete', (card, id) => {
  apiInfo.deleteCard(id)
    .then(() => {
      card.removeCard();
    })
    .then(() => {
      popupDeleteCard.close();
    })
    .catch((err) => {
      console.log(err);
    });
});
popupDeleteCard.setEventListeners();

const section = new Section('.places');

const popupChangeAvatar = new PopupWithForm('#popupAvatar', ({link}) => {
  apiInfo.changeAvatar(link)
    .then(() => {
      avatar.src = link;
    })
    .then(() => {
      popupChangeAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
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
      apiInfo.likeCard(cardId, method)
        .then(() => {
          if(method === "DELETE") {
            card.deleteLike()
          } else {
            card.addLike()
          }
        })
        .then(() => {
          card.toggleLikeButton();
        })
        .catch((err) => {
          console.log(err);
        })
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

const info = [apiInfo.getUserInfo(), apiInfo.getInitialCards()];
Promise.all(info)
  .then(([info, cards]) => {
    userInfo.setUserInfo(info.name, info.about);
    avatar.src = info.avatar;
    const id = info._id;
    cards.forEach(item => {
      const deleteButtonStatus = item.owner._id === id;
      const cardId = item._id;
      let isLiked = false;
      item.likes.forEach((item) => {
        if(item._id === id) {
          isLiked = true;
        } 
      });
      section.addItem(createNewCard(
        item.name, 
        item.link, 
        item.likes.length, 
        '#card-template',
        deleteButtonStatus, 
        cardId, 
        isLiked), 'append');
    })
  })
  .catch((err) => {
    console.log(err);
  }); 