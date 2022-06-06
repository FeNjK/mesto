export default class Card {

  constructor( data, cardSelector, {handleCardClick}) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  // Метод возврата шаблона DOM-разметки
  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardElement;
  }

  // Метод добавления новой карточки
  generateCard() {
    this._cardContainer = this._getTemplate();
    this._cardImage = this._cardContainer.querySelector('.element__image');
    this._cardTitle = this._cardContainer.querySelector('.element__title');
    this._cardMark = this._cardContainer.querySelector('.element__mark');
    this._cardTrash = this._cardContainer.querySelector('.element__trash');

    // Прописываем связи между объектами массива и свойствами, присвоенными элементам страницы
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    this._setEventListeners();

    return this._cardContainer;
  }

  // Метод "лайка" карточки
  _handleCardLike() {
    this._cardMark.classList.toggle('element__mark_active');
  }

  // Метод удаления карточки
  _handleCardDelete() {
    this._cardContainer.remove();
    this._cardContainer = null;
  }

  // Метод открытия модального окна с картинкой нажатием на любую картинку
  _handleCardClick() {
    // Передача значений элемента модальному окну
    this._popUpCaption.textContent = this._name;
    this._popUpImage.alt = this._name;
    this._popUpImage.src = this._link;
  }

  // Слушатели срабатывания методов
  _setEventListeners() {
    this._cardMark.addEventListener('click', () => {
      this._handleCardLike();
    });
    this._cardTrash.addEventListener('click', () => {
      this._handleCardDelete();
    });
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}

