const editButton = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');
const form = document.querySelector('.popup__container');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const nameField = document.querySelector('.profile__name');
const jobField = document.querySelector('.profile__profession');


function edit() {
  popup.classList.add('popup_opened');
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
}

editButton.addEventListener('click', edit);

closeButton.addEventListener('click', (e) => {
  e.preventDefault();
  closePopup();
})

form.addEventListener('submit', (e) => {
  formSubmit(e);
  closePopup();
})