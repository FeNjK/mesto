export default class Card {

  constructor(
    data,
    userId,
    cardSelector,
  { handleCardClick,
    handleLikeCardClick,
    handleDeleteCardClick }) 
  { this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardId = data._id;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this.handleLikeCardClick = handleLikeCardClick;
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
    this._cardTrash = this._cardContainer.querySelector('.element__trash');
    this._cardMark = this._cardContainer.querySelector('.element__mark');
    this._cardMarkCounter = this._cardContainer.querySelector('.element__mark-counter');
    
    // Прописываем связи между объектами массива и свойствами, 
    // присвоенными элементам страницы
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    this._cardMarkCounter.textContent = this._likes.length;
    
    this._showDeleteButtonState();
    this._setEventListeners();
    this._checkCardLike()

    return this._cardContainer;
  }

  // Слушатели срабатывания методов
  _setEventListeners() {
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
    this._cardMark.addEventListener('click', () => {
      this.handleLikeCardClick(this);
    });
    this._cardTrash.addEventListener('click', () => {
      this.handleDeleteCardClick(this);
    });
  }

  _checkCardLike() {
    this._likes.forEach((element) => {
      if (this._userId._id === element._id) {
        this._cardMark.classList.add('element__mark_active');
      }
    });
  }

  isLiked() {
    return Boolean(this._likes.find((element) => {
      return element._id === this._userId._id;
    })
  )}

  updateLikesCounter(data) {
    this._likes = data.likes;
    this._cardMarkCounter.textContent = this._likes.length;
  }
  
  addLike() {
    this._cardMark.classList.add('element__mark_active');
  }

  deleteLike() {
    this._cardMark.classList.remove('element__mark_active');
  }

  // Только добавлявший карточку сможет её удалить
  // в противном случае иконка корзины не видна
  _showDeleteButtonState() {
    if (this._userId._id !== this._ownerId) {
      this._cardTrash.remove();
    }
  }

  // Метод удаления карточки
  deleteCard() {
    this._cardContainer.remove();
    this._cardContainer = null;
  }
}