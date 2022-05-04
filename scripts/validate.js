const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_error',
  errorMessageClass: 'popup__validation-message_active'
};

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
    
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    setEventListeners(config, formElement);
  });
};

// Функция удаления ошибок валидации
function removeInputError(config, formElement) {
  const textError = Array.from(formElement.querySelectorAll('.popup__validation-message_active'));
  const placeError = Array.from(formElement.querySelectorAll('.popup__input_error'));
  
  textError.forEach((textError) => {
    textError.textContent = '';
  });
  placeError.forEach((placeError) => {
    placeError.classList.remove(config.inputErrorClass);
  });
}

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
function toggleButtonState(config, formElement, buttonElement) {
  buttonElement.disabled = !formElement.checkValidity();
  buttonElement.classList.toggle(config.inactiveButtonClass, !formElement.checkValidity());
}

// Функция проверки поля ввода на валидность
const checkInputValidity = (config, formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(config, formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(config, formElement, inputElement);
  }
};

// Функция проверки на валидацию нескольких полей ввода
function setEventListeners(config, formElement) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  toggleButtonState(config, formElement, buttonElement);
  
  inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(config, formElement, inputElement);
        toggleButtonState(config, formElement, buttonElement);
      });
    });
};

enableValidation(config);