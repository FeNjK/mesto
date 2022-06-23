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
  }

  /* renderItems(items) {
    items.forEach(item => {
      const element = this._renderer(item);
      this.addItem(element);
    })
  }

  addItem(item, isInversed = false) {
    if (isInversed) {
      this._container.prepend(item);
    } else {
      this._container.append(item);
    }
  } */
}