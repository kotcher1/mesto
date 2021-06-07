const editButton = document.querySelector('.profile__edit');
const popupEditProfile = document.querySelector('#popupEdit');
const popupAddCard = document.querySelector('#popupAdd');
const closeButton = document.querySelector('.popup__close-button');
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
const cardTemplate = document.querySelector('#card-template').content;


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
  popupEditProfile.classList.add('popup_opened');
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;
}

function closePopup(evt) {
  evt.target.parentElement.parentElement.classList.remove('popup_opened');
}

function submitEditProfilePopup(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  nameField.textContent = nameValue;
  jobField.textContent = jobValue;
  closePopup(evt);
}

editButton.addEventListener('click', openEditProfilePopup);

document.addEventListener('click', (e) => {
  if(e.target.className === 'popup__close-button') {
    closePopup(e);
  }
})

formEditProfile.addEventListener('submit', submitEditProfilePopup);

initialCards.forEach((item) => {
  const card = createCard();
  const placeImage = card.querySelector('.places__image');
  card.querySelector('.places__name').textContent = item.name;
  placeImage.alt = item.name;
  placeImage.src = item.link;
  cardBlock.append(card);
})

function openAddCardPopup () {
  popupAddCard.classList.add('popup_opened');
  pictureNameInput.value = '';
  linkInput.value = '';
}

addButton.addEventListener('click', openAddCardPopup);

formAddCard.addEventListener('submit', submitAddCardForm);

function submitAddCardForm(evt) {
  evt.preventDefault();
  const card = createCard();
  const placeImage = card.querySelector('.places__image');
  card.querySelector('.places__name').textContent = pictureNameInput.value;
  placeImage.alt = pictureNameInput.value;
  placeImage.src = linkInput.value;
  cardBlock.prepend(card);
  closePopup(evt);
}

function removeCard(e) {
  e.target.parentElement.remove();
}

function createCard() {
  const card = cardTemplate.querySelector('.places__card').cloneNode(true);
  card.addEventListener('click', (e) => {
    if (e.target.className.indexOf('places__like') !== -1) {
      e.target.classList.toggle('places__like_liked');
    } else if (e.target.className === 'places__delete-button') {
      removeCard(e);
    } else if (e.target.className === 'places__image') {
      popupImage.classList.add('popup_opened');
      bigImage.src = e.target.src;
      bigImage.alt = e.target.alt;
      popupImageTitle.textContent = e.target.alt;
    }
  })
  return card;
}