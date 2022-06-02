export default class Section {
  constructor({ items, renderer }, conteinerSelector) {
    this._renderedItems = items;
    this._renderer = renderer; // renderer — это функция
    this._container = document.querySelector(conteinerSelector);
  }

  addItem(item) {
    this._container.append(item);
  }

  renderItems() {
    this._renderedItems.forEach(item => {
      this._renderer(item); // вызываем renderer, передав item
    });
  }


  /* constructor({ renderer }, conteinerSelector) {
    this._renderer = renderer; // renderer — это функция
    this._container = document.querySelector(conteinerSelector);
  }

  renderItems(card) {
    card.forEach(item => {
      this._renderer(item); // вызываем renderer, передав item
    });
  } */
}