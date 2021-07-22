export default class Section {
  constructor(elementSelector) {
    this._elementsContainer = document.querySelector(elementSelector);
  }

  addItem(item, method) {
    if (method === 'append') {
      this._elementsContainer.append(item);
    } else if (method === 'prepend') {
      this._elementsContainer.prepend(item);
    }
  }
}