export default class Section {
  constructor( { items, renderer }, elementSelector) {
    this._items = items;
    this._renderer = renderer;
    this._elementsContainer = document.querySelector(elementSelector);
  }

  createElements() {
    this._items.forEach(item => {
      this._renderer(item)
    })
  }

  addItem(item, method) {
    if (method === 'append') {
      this._elementsContainer.append(item);
    } else if (method === 'prepend') {
      this._elementsContainer.prepend(item);
    }
  }
}