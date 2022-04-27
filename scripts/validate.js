//enableValidation({
//  formSelector: '.popup__form',
//  inputSelector: '.popup__input',
//  submitButtonSelector: '.popup__save-button',
//  inactiveButtonClass: 'popup__save-button_disabled',
//  inputErrorClass: 'popup__input_error',
//  errorMessageClass: 'popup__validation-message'
//});

//const form = document.querySelector('.popup__form');
//const formInput = form.querySelector('.popup__input');
//const formError = form.querySelector(`#${formInput.id}-error`);

// Функция показа сообщения об ошибке при валидации
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add('popup__input_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__validation-message');
};

// Функция сокрытия сообщения об ошибке при валидации
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_error');
  errorElement.classList.remove('popup__validation-message');
  errorElement.textContent = '';
};

// Функция проверки поля ввода на валидность
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  //const buttonElement = formElement.querySelector('.popup__save-button');

  //toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);

      //toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function () {
      evt.preventDefault();
    });
    
    //const fieldsetList = Array.from(formElement.querySelectorAll('.popup__input-place'));
    
    //fieldsetList.forEach((fieldSet) => {
    //  setEventListeners(fieldSet);
    //});
    setEventListeners(formElement);
  });
};

enableValidation();

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

//const toggleButtonState = (inputList, buttonElement) => {
//  if (hasInvalidInput(inputList)) {
//    buttonElement.classList.add('popup__save-button_disabled');
//  } else {
//    buttonElement.classList.remove('popup__save-button_disabled');
//  }
//};






//function isValid(config, form, input) {
//  
//  if (!input.validity.valid) {
//    showInputError(config, form, input, input.validationMessage);
//  } else {
//    hideInputError(config, form, input);
//  }
//  toggleButton(config, form);
//}; 
