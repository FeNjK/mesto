import initialCards from './initialCards.js';
import { openModalWindow, closeModalWindow } from './utils.js';
import Card from './Card.js';
//import FormValidator from './FormValidator.js';

// Модальные окна
const modalWindowEdit = document.querySelector('.popup_task_edit'); //нашли модальное окно редактирования профиля
const modalWindowAdd = document.querySelector('.popup_task_add'); //нашли модальное окно добавления карточки
const modalWindowShowImage = document.querySelector('.popup_task_show-image'); //нашли модальное окно добавления карточки

// Кнопки
const buttonEdit = document.querySelector('.profile-info__editing-button'); //Нашли кнопку редактирования профиля
const buttonAdd = document.querySelector('.profile__add-button'); //Нашли кнопку добавления карточки
const buttonCloseModalWindowEdit = modalWindowEdit.querySelector('.popup__close-button_window_edit');//Нашли кнопку закрытия модального окна
const buttonCloseModalWindowAdd = modalWindowAdd.querySelector('.popup__close-button_window_add');
const buttonCloseModalWindowShowImage = modalWindowShowImage.querySelector('.popup__close-button_window_show-image');

// Данные профиля отображенные на странице 
const formUserData = document.querySelector('.profile-info__data');//нашли форму с данными профиля пользователя
const userName = formUserData.querySelector('.profile-info__name');//нашли поле с именем пользователя
const userActivityType = formUserData.querySelector('.profile-info__activity-type');// нашли поле с родом деятельности пользователя

// Поля заполнения данных ПРОФИЛЯ в модальном окне
const popUpFormUserData = document.querySelector('.popup__form_type_user-data');//Форма с данными профиля пользователя
const popUpUserName = popUpFormUserData.querySelector('.popup__input_content_name');//Поле с именем пользователя
const popUpUserActivityType = popUpFormUserData.querySelector('.popup__input_content_activity-type');//Поле с родом деятельности пользователя
//const popUpUserActivityTypeBtn = popUpFormUserData.querySelector('.popup__save-button');

// Поля заполнения данных КАРТИНКИ в модальном окне
const popUpFormNewCard = document.querySelector('.popup__form_type_new-card');//Форма с данными новой карточки с картинкой
const popUpImageTitle = popUpFormNewCard.querySelector('.popup__input_content_image-title');//Поле с названием картинки
const popUpImageLink = popUpFormNewCard.querySelector('.popup__input_content_image-link');//Поле с ссылкой на картинку в интернете
//const popUpFormNewCardBtn = popUpFormNewCard.querySelector('.popup__save-button');

// Данные карточки отображенные на странице 
const listContainer = document.querySelector('.elements'); // Список карточек
//const template = document.querySelector('.template').content;

function createCard(card) {
  return new Card(card, '.template').generateCard();
}

function render(cards) {
  return (
    cards.reverse().forEach((card) => listContainer.prepend(createCard(card)))
  );
}

function addInArr() {
  const newCard = createCard({
    name: popUpImageTitle.value,
    link: popUpImageLink.value,
  }, '.template');

  listContainer.prepend(newCard);
};

// Реализация функции редактирования данных профиля
// функция показывающая, что при открытии модального окна мы видим
buttonEdit.addEventListener('click', () => {
  popUpUserName.value = userName.textContent; //что в поле "введите ваше имя" фигурируют данные ранее указанные в имени пользователя профиля
  popUpUserActivityType.value = userActivityType.textContent; //что в поле "каков род ваших занятий" фигурируют данные ранее указанные в соответствующем поле профиля
  //removeInputError(config, popUpFormUserData);
  //toggleButtonState(config, popUpFormUserData, popUpUserActivityTypeBtn);
  openModalWindow(modalWindowEdit);
});

buttonCloseModalWindowEdit.addEventListener('click', () => {
  closeModalWindow(modalWindowEdit);
});

// Реализация функции отправки данных профиля
popUpFormUserData.addEventListener('submit', (e) => {
  e.preventDefault();

  userName.textContent = popUpUserName.value;
  userActivityType.textContent = popUpUserActivityType.value;

  closeModalWindow(modalWindowEdit);
});

// Функция открытия модального окна кнопкой добавления карточки
buttonAdd.addEventListener('click', () => {
  popUpFormNewCard.reset();
  //removeInputError(config, popUpFormNewCard);
  //toggleButtonState(config, popUpFormNewCard, popUpFormNewCardBtn);
  openModalWindow(modalWindowAdd);
});

// Реализация функции отправки формы добавления карточки
popUpFormNewCard.addEventListener('submit', (e) => {
  e.preventDefault();
  addInArr();
  closeModalWindow(modalWindowAdd);
});

// Функция закрытия модального окна добавления карточки нажатием на "крестик"
buttonCloseModalWindowAdd.addEventListener('click', () => {
  closeModalWindow(modalWindowAdd);
});

// Функция закрытия модального окна с картинкой нажатием на "крестик"
buttonCloseModalWindowShowImage.addEventListener('click', () => {
  closeModalWindow(modalWindowShowImage);
});

render(initialCards);