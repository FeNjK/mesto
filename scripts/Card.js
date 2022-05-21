import { openModalWindow } from './utils.js';

export default class Card {

  // Находим в DOM используемые в классе Card свойства
  _modalWindowShowImage = document.querySelector('.popup_task_show-image'); // модальное окно добавления карточки
  _popUpImage = document.querySelector('.popup__image'); // презентируемое изображение
  _popUpCaption = document.querySelector('.popup__caption'); // подпись презентируемого изображения

  constructor( {name, link}, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  // Метод возврата шаблона DOM-разметки
  _getTemplate() {
     const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardElement; // Кажется это можно было сделать по-другому... *
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
  _handleLikeCard() {
    this._cardMark.classList.toggle('element__mark_active');
  }

  // Метод удаления карточки
  _handleDeleteCard(e) {
    e.target.closest('.element').remove();
  }

  // Метод открытия модального окна с картинкой нажатием на любую картинку
  _handleShowImage() {
    openModalWindow(this._modalWindowShowImage);
    
    // Передача значений элемента модальному окну
    this._popUpCaption.textContent = this._name;
    this._popUpImage.alt = this._name;
    this._popUpImage.src = this._link;
  }

  // Слушатели срабатывания методов
  _setEventListeners() {
    this._cardMark.addEventListener('click', () => {
      this._handleLikeCard();
    });
    this._cardTrash.addEventListener('click', (e) => {
      this._handleDeleteCard(e);
    });
    this._cardImage.addEventListener('click', () => {
      this._handleShowImage();
    });
  }
}

