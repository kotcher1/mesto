let editButton = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let form = document.querySelector('.popup__form');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job');
let nameField = document.querySelector('.profile__name');
let jobField = document.querySelector('.profile__profession');


function edit() {
  popup.classList.add('popup_opened');
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmit(evt) {
  evt.preventDefault();
  let nameValue = nameInput.value;
  let jobValue = jobInput.value;
  nameField.textContent = nameValue;
  jobField.textContent = jobValue;
  closePopup();
}

editButton.addEventListener('click', edit);

closeButton.addEventListener('click', closePopup);

form.addEventListener('submit', formSubmit);