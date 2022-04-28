const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_error',
  errorMessageClass: 'popup__validation-message'
};

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
    
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    setEventListeners(config, formElement);
    toggleButtonState(config, formElement);
  });
};

// Функция показа сообщения об ошибке при валидации
const showInputError = (config, formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.classList.add(config.errorMessageClass);
  errorElement.textContent = errorMessage;
};

// Функция сокрытия сообщения об ошибке при валидации
const hideInputError = (config, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorMessageClass);
  errorElement.textContent = '';
};

// Функция определения состояния кнопки сохранения
function toggleButtonState(config, formElement) {
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  buttonElement.classList.toggle(config.inactiveButtonClass, !formElement.checkValidity());
  buttonElement.disabled = !formElement.checkValidity();
}

// Функция проверки поля ввода на валидность
const checkInputValidity = (config, formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(config, formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(config, formElement, inputElement);
  }
  toggleButtonState(config, formElement);
};

// Функция проверки на валидацию нескольких полей ввода
function setEventListeners(config, formElement) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(config, formElement, inputElement);
      toggleButtonState(config, formElement);
    });
  });
};

// Вызов функции валидации с учётом исходных данных
//enableValidation({
//  formSelector: '.popup__form',
//  inputSelector: '.popup__input',
//  submitButtonSelector: '.popup__save-button',
//  inactiveButtonClass: 'popup__save-button_disabled',
//  inputErrorClass: 'popup__input_error',
//  errorMessageClass: 'popup__validation-message'
//});

enableValidation(config);