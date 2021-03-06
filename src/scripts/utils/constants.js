// DOM-ЭЛЕМЕНТЫ !!!

// Кнопки
export const buttonEdit = document.querySelector('.profile-info__editing-button'); //Нашли кнопку редактирования профиля
export const buttonAdd = document.querySelector('.profile__add-button'); //Нашли кнопку добавления карточки
export const buttonAvatar = document.querySelector('.profile-info__avatar-button');

// Формы, отображенные на странице
export const formUserData = document.querySelector('.profile-info__data');//нашли форму с данными профиля пользователя
export const popupFormUserData = document.querySelector('.popup__form_type_user-data');//Форма с данными профиля пользователя
export const popupFormNewCard = document.querySelector('.popup__form_type_new-card');//Форма с данными новой карточки с картинкой
export const popupFormAddAvatar = document.querySelector('.popup__form_type_avatar');

// Поля заполнения данных ПРОФИЛЯ в модальном окне
export const popupUserName = popupFormUserData.querySelector('.popup__input_content_name');//Поле с именем пользователя
export const popupUserActivityType = popupFormUserData.querySelector('.popup__input_content_activity-type');//Поле с родом деятельности пользователя

// СЕЛЕКТОРЫ !!!

// Конфигурационный файл валидации
export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_error',
  errorMessageClass: 'popup__validation-message_active'
};