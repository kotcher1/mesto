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
  openPopup(popupEditProfile);
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;
}

function openAddCardPopup () {
  openPopup(popupAddCard);
  pictureNameInput.value = '';
  linkInput.value = '';
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
  const card = createCard(item.name, item.link);
  cardBlock.append(card);
})

addButton.addEventListener('click', openAddCardPopup);

formAddCard.addEventListener('submit', submitAddCardForm);

function submitAddCardForm(evt) {
  evt.preventDefault();
  const card = createCard(pictureNameInput.value, linkInput.value);
  cardBlock.prepend(card);
  closePopup(evt);
}

function removeCard(e) {
  e.target.parentElement.remove();
}

function createCard(name, link) {
  const card = cardTemplate.querySelector('.places__card').cloneNode(true);
  const placeImage = card.querySelector('.places__image');
  const likeButton = card.querySelector('.places__like');
  const deleteButton = card.querySelector('.places__delete-button');
  card.querySelector('.places__name').textContent = name;
  placeImage.alt = name;
  placeImage.src = link;
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('places__like_liked');
  })
  deleteButton.addEventListener('click', (e) => {
    removeCard(e);
  })
  placeImage.addEventListener('click', () => {
    openPopup(popupImage);
    bigImage.src = placeImage.src;
    bigImage.alt = placeImage.alt;
    popupImageTitle.textContent = placeImage.alt;
  })
  return card;
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}