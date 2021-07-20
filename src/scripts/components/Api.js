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
      console.log(result);
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
      console.log(result);
      const cardInformation = {
        name: result.name,
        link: result.about,
      }
      callback(userInformation);
    }); 
  }
}