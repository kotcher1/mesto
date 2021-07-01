export default class Card {
  constructor(name, link, selector) {
    this._name = name;
    this._link = link;
    this._selector = selector;
    this._cardTemplate = document.querySelector(this._selector).content;
  }

  createCard() {
    this._card = this._cardTemplate.querySelector('.places__card').cloneNode(true);
    this._placeImage = this._card.querySelector('.places__image');
    this._card.querySelector('.places__name').textContent = this._name;
    this._placeImage.alt = this._name;
    this._placeImage.src = this._link;
    this._likeCard();
    this._deleteCard();
    return this._card;
  }

  _deleteCard() {
    this._deleteButton = this._card.querySelector('.places__delete-button');
    this._deleteButton.addEventListener('click', (e) => {
      this._removeCard(e);
    })
  }

  _likeCard() {
    this._likeButton = this._card.querySelector('.places__like');
    this._likeButton.addEventListener('click', () => {
      this._likeButton.classList.toggle('places__like_liked');
    })
  }

  _removeCard(e) {
    e.target.parentElement.remove();
  }
}