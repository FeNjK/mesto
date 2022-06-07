export default class Section {
  constructor({ items, renderer }, conteinerSelector) {
    this._renderedItems = items;
    this._renderer = renderer; // renderer — это функция
    this._container = document.querySelector(conteinerSelector);
  }

  addAppend(item) {
    this._container.append(item);
  }

  addPrepend(item) {
    this._container.prepend(item);
  }

  renderItems() {
    this._renderedItems.forEach(item => {
      this._renderer(item); // вызываем renderer, передав item
    });
  }
}