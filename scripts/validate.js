enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: '.popup__save-button_disabled',
  inputErrorClass: '.popup__input_error',
  errorMessageClass: '.popup__validation-message'
});

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

// Функция проверки поля ввода на валидность
const checkInputValidity = (config, formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(config, formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(config, formElement, inputElement);
  }
};

function setEventListeners(config, formElement) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  //const buttonElement = formElement.querySelector(config.submitButtonSelector);
  
  //toggleButtonState(config, inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(config, formElement, inputElement);

      //toggleButtonState(config, inputList, buttonElement);
    });
  });
};

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  console.log(formList);
  
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    setEventListeners(config, formElement);
    
  });
};

//const toggleButtonState = (config, inputList, buttonElement) => {
//  if (hasInvalidInput(config, inputList)) {
//    buttonElement.classList.add(config.inactiveButtonClass);
//  } else {
//    buttonElement.classList.remove(config.inactiveButtonClass);
//  }
//};

//enableValidation();