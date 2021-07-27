export default class Api {
  constructor(options) {
    this._options = options;
  }

  getUserInfo() {
    return fetch(`${this._options.baseUrl}/users/me`, {
      headers: this._options.headers,
    })
    .then((res) => this._checkAnswer(res));
  }

  getInitialCards() {
    return fetch(`${this._options.baseUrl}/cards`, {
      headers: this._options.headers,
    })
    .then(res => this._checkAnswer(res))
  }

  setUserInfo(userName, userAbout) {
    return fetch(`${this._options.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._options.headers,
      body: JSON.stringify({
        name: userName,
        about: userAbout,
      })
    })
    .then(res => this._checkAnswer(res))
  }

  addCard(cardName, cardLink) {
    return fetch(`${this._options.baseUrl}/cards`, {
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify({
        name: cardName,
        link: cardLink,
      })
    })
    .then(res => this._checkAnswer(res))
  }

  deleteCard(cardId) {
    return fetch(`${this._options.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._options.headers,
    })
    .then(res => this._checkAnswer(res))
  }

  likeCard(cardId, method) {
    return fetch(`${this._options.baseUrl}/cards/likes/${cardId}`, {
      method: method,
      headers: this._options.headers,
    })
    .then(res => this._checkAnswer(res))
  }

  changeAvatar(link) {
    return fetch(`${this._options.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._options.headers,
      body: JSON.stringify({
        avatar: link,
      })
    })
    .then(res => this._checkAnswer(res))
  }

  _checkAnswer(res) {
    if(res.ok) {
      return Promise.resolve(res);
    } else {
      return Promise.reject(res);
    }
  }
}