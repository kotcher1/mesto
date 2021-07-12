export default class UserInfo {
  constructor(nameElement, jobElement) {
    this._nameElement = document.querySelector(nameElement);
    this._jobElement = document.querySelector(jobElement);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent,
    }
  }

  setUserInfo(nameInput, jobInput) {
    this._nameElement.textContent = nameInput;
    this._jobElement.textContent = jobInput;
  }
}