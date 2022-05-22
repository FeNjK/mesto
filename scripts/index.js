import initialCards from './initialCards.js';
import { openModalWindow, closeModalWindow } from './utils.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

// Модальные окна
const modalWindowEdit = document.querySelector('.popup_task_edit'); //нашли модальное окно редактирования профиля
const modalWindowAdd = document.querySelector('.popup_task_add'); //нашли модальное окно добавления карточки

// Кнопки
const buttonEdit = document.querySelector('.profile-info__editing-button'); //Нашли кнопку редактирования профиля
const buttonAdd = document.querySelector('.profile__add-button'); //Нашли кнопку добавления карточки

// Данные профиля отображенные на странице
const formUserData = document.querySelector('.profile-info__data');//нашли форму с данными профиля пользователя
const userName = formUserData.querySelector('.profile-info__name');//нашли поле с именем пользователя
const userActivityType = formUserData.querySelector('.profile-info__activity-type');// нашли поле с родом деятельности пользователя

// Поля заполнения данных ПРОФИЛЯ в модальном окне
const popUpFormUserData = document.querySelector('.popup__form_type_user-data');//Форма с данными профиля пользователя
const popUpUserName = popUpFormUserData.querySelector('.popup__input_content_name');//Поле с именем пользователя
const popUpUserActivityType = popUpFormUserData.querySelector('.popup__input_content_activity-type');//Поле с родом деятельности пользователя

// Поля заполнения данных КАРТИНКИ в модальном окне
const popUpFormNewCard = document.querySelector('.popup__form_type_new-card');//Форма с данными новой карточки с картинкой
const popUpImageTitle = popUpFormNewCard.querySelector('.popup__input_content_image-title');//Поле с названием картинки
const popUpImageLink = popUpFormNewCard.querySelector('.popup__input_content_image-link');//Поле с ссылкой на картинку в интернете

// Данные карточки отображенные на странице 
const listContainer = document.querySelector('.elements'); // Список карточек

// Конфигурационный файл валидации
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_error',
  errorMessageClass: 'popup__validation-message_active'
};

// Создание экземпляров класса FormValidator для каждой формы
const popUpFormUserDataValidator = new FormValidator(config, popUpFormUserData);
const popUpFormNewCardValidator = new FormValidator(config, popUpFormNewCard);

// Вызов соответствующих методов у оных объектов
popUpFormUserDataValidator.enableValidation();
popUpFormNewCardValidator.enableValidation();

// Создание экземпляра класса Card // как-то коряво написано, надо будет переделать...
function createCard(card) {
  return new Card(card, '.template').generateCard();
}

function render(cards) { // И это тоже надо переделать будет...
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
  popUpFormUserDataValidator.removeInputError();
  popUpFormUserDataValidator.toggleButtonState();
  openModalWindow(modalWindowEdit);
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
  popUpFormNewCardValidator.removeInputError();
  popUpFormNewCardValidator.toggleButtonState();
  openModalWindow(modalWindowAdd);
});

// Реализация функции отправки формы добавления карточки
popUpFormNewCard.addEventListener('submit', (e) => {
  e.preventDefault();
  addInArr();
  closeModalWindow(modalWindowAdd);
});

render(initialCards);