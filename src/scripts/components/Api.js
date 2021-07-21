export default class Api {
  constructor(options) {
    this._options = options;
  }

  getUserInfo(callback) {
    fetch(this._options.baseUrl, {
      headers: this._options.headers,
    })
    .then(res => res.json())
    .then((result) => {
      const userInformation = {
        fullname: result.name,
        job: result.about,
      }
      callback(userInformation);
    }); 
  }

  getInitialCards(callback) {
    fetch(this._options.baseUrl, {
      headers: this._options.headers,
    })
    .then(res => res.json())
    .then((result) => {
      callback(result);
    }); 
  }

  setUserInfo(userName, userAbout) {
    fetch(this._options.baseUrl, {
      method: 'PATCH',
      headers: this._options.headers,
      body: JSON.stringify({
        name: userName,
        about: userAbout,
      })
    })
  }

  addCard(cardName, cardLink) {
    fetch(this._options.baseUrl, {
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify({
        name: cardName,
        link: cardLink,
      })
    })
  }

  deleteCard(cardId) {
    fetch(`${this._options.baseUrl}/${cardId}`, {
      method: 'DELETE',
      headers: this._options.headers,
    })
  }

  likeCard(cardId, method) {
    fetch(`${this._options.baseUrl}/likes/${cardId}`, {
      method: method,
      headers: this._options.headers,
    })
  }
}