export default class UserInfo {
  constructor(nameElement, jobElement) {
    this._nameElement = document.querySelector(nameElement);
    this._jobElement = document.querySelector(jobElement);
  }

  getUserInfo() {
    const nameInput = document.querySelector('#name');
    const jobInput = document.querySelector('#job');
    this._nameValue = nameInput.value;
    this._jobValue = jobInput.value;
    return {
      name: this._nameValue,
      job: this._jobValue,
    }
  }

  setUserInfo({ name, job }) {
    this._nameElement.textContent = name;
    this._jobElement.textContent = job;
  }
}