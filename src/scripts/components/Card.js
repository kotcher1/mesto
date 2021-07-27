export default class Card {
  constructor(name, link, likes, selector, deleteButtonStatus, handleCardClick, handleDeleteClick, handleLike, isLiked) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._deleteButtonStatus = deleteButtonStatus;
    this._handleDeleteLClick = handleDeleteClick;
    this._handleLike = handleLike;
    this._isLiked = isLiked;
  }

  _getCardTemplate() {
    this._cardTemplate = document.querySelector(this._selector).content;
    this._card = this._cardTemplate.querySelector('.places__card').cloneNode(true);
  }

  createCard() {
    this._getCardTemplate();
    this._placeImage = this._card.querySelector('.places__image');
    this._card.querySelector('.places__name').textContent = this._name;
    this._likeCounter = this._card.querySelector('.places__like-number');
    this._likeCounter.textContent = this._likes;
    this._placeImage.alt = this._name;
    this._placeImage.src = this._link;
    this._likeCard();
    this._deleteCard();
    this._setEventListeners();
    this._setBucketStatus();
    if(this._isLiked) {
      this._likeButton.classList.toggle('places__like_liked');
    }
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

  removeCard() {
    this._card.remove();
  }

  _handleLikeIcon = () => {
    this._likeButton.classList.toggle('places__like_liked');
    if (!this._likeButton.classList.contains('places__like_liked')) {
      this._handleLike('DELETE');
    } else {
      this._handleLike('PUT');
    }
  } 

  deleteLike() {
    this._likes = this._likes - 1;
    this._likeCounter.textContent = this._likes;
  }

  addLike() {
    this._likes = this._likes + 1;
    this._likeCounter.textContent = this._likes;
  }

  _handleDeleteCard  = () => {
    this._handleDeleteLClick();
  }

  _handlePreviewPicture = () => {
    this._handleCardClick(this._placeImage);
  }

  _setBucketStatus() {
    if(!this._deleteButtonStatus) {
      this._card.querySelector('.places__delete-button').style.display = 'none';
    }
  }
}