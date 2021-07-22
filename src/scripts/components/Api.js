export default class Api {
  constructor(options) {
    this._options = options;
  }

  getUserInfo(setUserInfoCallback) {
    fetch(this._options.baseUrl, {
      headers: this._options.headers,
    })
    .then(res => { 
      if(res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
    .then((result) => {
      const userInformation = {
        fullname: result.name,
        job: result.about,
      }
      setUserInfoCallback(userInformation);
    })
    .catch((err) => {
      console.log(err);
    }); 
  }

  getInitialCards(createCardCallback) {
    fetch(this._options.baseUrl, {
      headers: this._options.headers,
    })
    .then(res => { 
      if(res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
    .then((result) => {
      createCardCallback(result);
    })
    .catch((err) => {
      console.log(err);
    }); 
  }

  setUserInfo(userName, userAbout, renderLoadingCallback) {
    fetch(this._options.baseUrl, {
      method: 'PATCH',
      headers: this._options.headers,
      body: JSON.stringify({
        name: userName,
        about: userAbout,
      })
    })
    .then(res => { 
      if(res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoadingCallback(false);
    })
  }

  addCard(cardName, cardLink, createCardCallback, renderLoadingCallback) {
    fetch(this._options.baseUrl, {
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify({
        name: cardName,
        link: cardLink,
      })
    })
    .then(res => { 
      if(res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
    .then((result) => {
      createCardCallback(result);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoadingCallback(false);
    })
  }

  deleteCard(cardId) {
    fetch(`${this._options.baseUrl}/${cardId}`, {
      method: 'DELETE',
      headers: this._options.headers,
    })
    .then(res => { 
      if(res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  likeCard(cardId, method) {
    fetch(`${this._options.baseUrl}/likes/${cardId}`, {
      method: method,
      headers: this._options.headers,
    })
    .then(res => { 
      if(res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  changeAvatar(link, renderLoadingCallback) {
    fetch(`${this._options.baseUrl}/avatar`, {
      method: 'PATCH',
      headers: this._options.headers,
      body: JSON.stringify({
        avatar: link,
      })
    })
    .then(res => { 
      if(res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoadingCallback(false)
    })
  }

  getAvatar(setAvatarCallback) {
    fetch(`${this._options.baseUrl}`, {
      headers: this._options.headers,
    })
    .then(res => { 
      if(res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
    .then(result => {
      setAvatarCallback(result.avatar);
    })
    .catch((err) => {
      console.log(err);
    }); 
  }
}