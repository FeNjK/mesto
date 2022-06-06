
// Кнопки
export const buttonEdit = document.querySelector('.profile-info__editing-button'); //Нашли кнопку редактирования профиля
export const buttonAdd = document.querySelector('.profile__add-button'); //Нашли кнопку добавления карточки

// Данные профиля отображенные на странице
export const formUserData = document.querySelector('.profile-info__data');//нашли форму с данными профиля пользователя
export const userName = formUserData.querySelector('.profile-info__name');//нашли поле с именем пользователя
export const userActivityType = formUserData.querySelector('.profile-info__activity-type');// нашли поле с родом деятельности пользователя

// Поля заполнения данных ПРОФИЛЯ в модальном окне
export const popupFormUserData = document.querySelector('.popup__form_type_user-data');//Форма с данными профиля пользователя
export const popupUserName = popupFormUserData.querySelector('.popup__input_content_name');//Поле с именем пользователя
export const popupUserActivityType = popupFormUserData.querySelector('.popup__input_content_activity-type');//Поле с родом деятельности пользователя

// Поля заполнения данных КАРТИНКИ в модальном окне
export const popupFormNewCard = document.querySelector('.popup__form_type_new-card');//Форма с данными новой карточки с картинкой
export const popupImageTitle = popupFormNewCard.querySelector('.popup__input_content_image-title');//Поле с названием картинки
export const popupImageLink = popupFormNewCard.querySelector('.popup__input_content_image-link');//Поле с ссылкой на картинку в интернете

// Данные карточки отображенные на странице 
export const cardList = document.querySelector('.elements'); // Список карточек
export const cardListSelector = '.elements'; // Список карточек

// Конфигурационный файл валидации
export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_error',
  errorMessageClass: 'popup__validation-message_active'
};