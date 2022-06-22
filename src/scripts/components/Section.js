export default class Section {
  constructor({ renderer }, conteinerSelector) {
    this._renderer = renderer; // renderer — это функция
    this._container = document.querySelector(conteinerSelector);
  }

  addAppend(item) {
    this._container.append(item);
  }

  addPrepend(item) {
    this._container.prepend(item);
  }

  renderItems(items) {
    items.forEach(item => {
      this._renderer(item); // вызываем renderer, передав item
    });
    return items;
  }
  
}