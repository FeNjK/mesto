//enableValidation({
//  formSelector: '.popup__form',
//  inputSelector: '.popup__input',
//  submitButtonSelector: '.popup__save-button',
//  inactiveButtonClass: 'popup__save-button_disabled',
//  inputErrorClass: 'popup__input_error',
//  errorMessageClass: 'popup__validation-message'
//});

const formElement = document.querySelector('.popup__form');
const formInput = formElement.querySelector('.popup__input');
const formError = formElement.querySelector(`.${formInput.id}-error`);
console.log(formError);

// Функция показа сообщения об ошибке при валидации
const showError = (input, errorMessage) => {
  input.classList.add('popup__input_error');
  formError.textContent = errorMessage;
  formError.classList.add('popup__validation-message');
};

// Функция сокрытия сообщения об ошибке при валидации
const hideError = (input) => {
  input.classList.remove('popup__input_error');
};

// Функция проверки поля ввода на валидность
const checkInputValidity = () => {
  if (!formInput.validity.valid) {
    showError(formInput, formInput.validationMessage);
  } else {
    hideError(formInput);
  }
};

formElement.addEventListener('submit', (e) => {
  e.preventDefault(); // Отменим стандартное поведение
});

// Функция проверки на валидность при заполнении поля ввода
formInput.addEventListener('input', () => {
  checkInputValidity();
});


//function isValid(config, form, input) {
//  
//  if (!input.validity.valid) {
//    showInputError(config, form, input, input.validationMessage);
//  } else {
//    hideInputError(config, form, input);
//  }
//  toggleButton(config, form);
//}; 
