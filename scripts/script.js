const editButton = document.querySelector('.profile__edit');
const popup = document.querySelector('#popupEdit');
const popupAdd = document.querySelector('#popupAdd');
const closeButton = document.querySelector('.popup__close-button');
const formName = document.querySelector('#formName');
const formPlace = document.querySelector('#formPlace');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const nameField = document.querySelector('.profile__name');
const jobField = document.querySelector('.profile__profession');

const cardBlock = document.querySelector('.places');
const addButton = document.querySelector('.profile__add');
const pictureNameInput = document.querySelector('#pictureName');
const linkInput = document.querySelector('#link');


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

function edit() {
  popup.classList.add('popup_opened');
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;
}

function closePopup(evt) {
  evt.target.parentElement.parentElement.classList.remove('popup_opened');
}

function formSubmit(evt) {
  evt.preventDefault();
  let nameValue = nameInput.value;
  let jobValue = jobInput.value;
  nameField.textContent = nameValue;
  jobField.textContent = jobValue;
  closePopup(evt);
}

editButton.addEventListener('click', edit);

document.addEventListener('click', (e) => {
  if(e.target.className === 'popup__close-button') {
    closePopup(e);
  } else if (e.target.className.indexOf('places__like') !== -1) {
    e.target.classList.toggle('places__like_liked');
  } else if (e.target.className === "places__delete-button") {
    cardRemove(e);
  }
})

formName.addEventListener('submit', formSubmit);

initialCards.forEach((item) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const card = cardTemplate.querySelector('.places__card').cloneNode(true);
  card.querySelector('.places__name').textContent = item.name;
  card.querySelector('.places__image').alt = item.name;
  card.querySelector('.places__image').src = item.link;
  cardBlock.append(card);
})

function editAddForm () {
  popupAdd.classList.add('popup_opened');
  pictureNameInput.value = '';
  linkInput.value = '';
}

addButton.addEventListener('click', editAddForm);

formPlace.addEventListener('submit', formPlaceSubmit);

function formPlaceSubmit(evt) {
  evt.preventDefault();
  const cardTemplate = document.querySelector('#card-template').content;
  const card = cardTemplate.querySelector('.places__card').cloneNode(true);
  card.querySelector('.places__name').textContent = pictureNameInput.value;
  card.querySelector('.places__image').alt = pictureNameInput.value;
  card.querySelector('.places__image').src = linkInput.value;
  cardBlock.prepend(card);
  closePopup(evt);
}

function cardRemove(e) {
  e.target.parentElement.remove();
}