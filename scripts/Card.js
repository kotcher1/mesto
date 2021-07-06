import { openPopup } from "./script.js";

export default class Card {
  constructor(name, link, selector) {
    this._name = name;
    this._link = link;
    this._selector = selector;
  }

  _getCardTemplate() {
    this._cardTemplate = document.querySelector(this._selector).content;
    this._card = this._cardTemplate.querySelector('.places__card').cloneNode(true);
  }

  createCard() {
    this._getCardTemplate();
    this._placeImage = this._card.querySelector('.places__image');
    this._card.querySelector('.places__name').textContent = this._name;
    this._placeImage.alt = this._name;
    this._placeImage.src = this._link;
    this._likeCard();
    this._deleteCard();
    this._setEventListeners();
    this._createImagePopup();
    return this._card;
  }

  _deleteCard() {
    this._deleteButton = this._card.querySelector('.places__delete-button');
  }

  _likeCard() {
    this._likeButton = this._card.querySelector('.places__like');
  }

  _setEventListeners() {
    this._deleteButton.addEventListener('click', (e) => this._handleDeleteCard(e))
    this._likeButton.addEventListener('click', () => this._handleLikeIcon())
    this._placeImage.addEventListener('click', () => this._handlePreviewPicture())
  }

  _createImagePopup () {
    this._popupImageTitle = document.querySelector('.popup__image-title');
    this._popupImage = document.querySelector('#imagePopup');
    this._bigImage = document.querySelector('.popup__image');
  }

  _removeCard(e) {
    e.target.parentElement.remove();
  }

  _handleLikeIcon = () => {
    this._likeButton.classList.toggle('places__like_liked');
  } 

  _handleDeleteCard  = (e) => {
    this._removeCard(e);
  }

  _handlePreviewPicture = () => {
    openPopup(this._popupImage);
    this._bigImage.src = this._placeImage.src;
    this._bigImage.alt = this._placeImage.alt;
    this._popupImageTitle.textContent = this._placeImage.alt;
  }
}