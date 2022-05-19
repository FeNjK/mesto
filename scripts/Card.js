import { openModalWindow } from './utils.js'; // Не уверен, что тут это вообще нужно, т.к. уже есть в index.js...

export default class Card {

  // Находим в DOM используемые в классе Card свойства
  _modalWindowShowImage = document.querySelector('.popup_task_show-image'); // модальное окно добавления карточки
  _popUpImage = document.querySelector('.popup__image'); // презентируемое изображение
  _popUpCaption = document.querySelector('.popup__caption'); // подпись презентируемого изображения

  // Не понятно почему объявлять переменные можно только в TypeScript, ведь в других файлах получалось же.
  // Надо разобраться... Пока пишу так, подожду ревью...

  constructor( name, link, cardSelector) {
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
  _handleDeleteCard() {
    //const element = e.target.closest('.element');
    //element.remove();

    //e.target.closest('.element').remove();

    cardElement.remove();
  }

  // Метод открытия модального окна с картинкой нажатием на любую картинку
  _handleShowImage({ name, link }) {
    openModalWindow(this._modalWindowShowImage);
    
    // Передача значений элемента модальному окну
    this._popUpCaption.textContent = name;
    this._popUpImage.alt = name;
    this._popUpImage.src = link;
  }

  // Слушатели срабатывания методов
  _setEventListeners() {
    this._cardMark.addEventListener('click', () => {
      this._handleLikeCard();
    });
    this._cardTrash.addEventListener('click', () => {
      this._handleDeleteCard();
    });
    this._cardImage.addEventListener('click', () => {
      this._handleShowImage(this._name, this._link);
    });
  }
}

