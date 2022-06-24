export default class Card {

  constructor(
    data,
    userId,
    cardSelector,
    { handleCardClick },
    { handleAddLikeClick },
    { handleDeleteLikeClick },
    { handleDeleteCardClick }) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardId = data._id;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this.handleAddLikeClick = handleAddLikeClick;
    this.handleDeleteLikeClick = handleDeleteLikeClick;
    this.handleDeleteCardClick = handleDeleteCardClick;
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
    this._cardMarkCounter = this._cardContainer.querySelector('.element__mark-counter');
    this._cardTrash = this._cardContainer.querySelector('.element__trash');

    // Прописываем связи между объектами массива и свойствами, 
    // присвоенными элементам страницы
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    this._setEventListeners();
    this._checkCardLike();
    this._showDeleteButtonState();

    return this._cardContainer;
  }

  // Слушатели срабатывания методов
  _setEventListeners() {
    this._cardMark.addEventListener('click', () => {
      this._handleLikeClick();
    });
    this._cardTrash.addEventListener('click', () => {
      this.handleDeleteCardClick();
    });
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  // Проверка наличия лайков на карточке
  _checkCardLike() {
    this._likes.forEach((element) => {
      if (element._id === this._userId) {
        this._cardMark.classList.add('element__mark_active');
      }
    });
  }

  _handleLikeClick() {
    if(this._cardMark.classList.add('element__mark_active')) {
      this.handleDeleteLikeClick(this._cardId);
    } else {
      this.handleAddLikeClick(this._cardId);
    }
  }

  // Только добавлявший карточку сможет её удалить
  // в противном случае иконка корзины не видна
  _showDeleteButtonState() {
    if (this._ownerId !== this._userId) {
      this._cardTrash.remove();
    }
  }

  // Метод удаления карточки
  deleteCard() {
    this._cardContainer.remove();
    this._cardContainer = null;
  }

  // Оператор increment (++) добавляет единицу 
  // к своему операнду и возвращает значение
  addLike() {
    this._cardMark.classList.add('element__mark_active');
    this._cardMarkCounter.textContent = ++this._like;
  }

  // Оператор decrement (--) вычитает единицу 
  // из своего операнда и возвращает значение
  deleteLike() {
    this._cardMark.classList.remove('element__mark_active');
    this._cardMarkCounter.textContent = --this._like;
  }
}