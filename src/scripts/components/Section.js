export default class Section {
  constructor({ items, renderer }, conteinerSelector) {
    this._renderedItems = items;
    this._renderer = renderer; // renderer — это функция
    this._container = document.querySelector(conteinerSelector);
  }

  addItem(element) {
    this._container.append(element);
  }

  renderItems() {
    this._renderedItems.forEach(item => {
      this._renderer(item); // вызываем renderer, передав item
    }); 
  }
}