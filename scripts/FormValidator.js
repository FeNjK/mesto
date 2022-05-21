export default class FormValidator {

  constructor(config, form) {
    this._config = config;
    this._form = form;
    this._inputElement = config.inputSelector;
    this._buttonElement = form.querySelector(config.submitButtonSelector);
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorMessageClass = config.errorMessageClass;
  }

  // Метод очистки полей ввода (на передачу в index.js)
  removeInputError() {
    const textError = this._form.querySelectorAll(`.${this._config.errorMessageClass}`);
    const placeError = this._form.querySelectorAll(`.${this._config.inputErrorClass}`);
    
    textError.forEach((textError) => {
      textError.textContent = '';
    });
    placeError.forEach((placeError) => {
      placeError.classList.remove(this._config.inputErrorClass);
    });
  }

  // Метод показа сообщения об ошибке при валидации
  _showInputError (inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorMessageClass);
    errorElement.textContent = errorMessage;
  }

// Метод сокрытия сообщения об ошибке при валидации
  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorMessageClass);
    errorElement.textContent = '';
  };

  // Метод проверки поля ввода на валидность
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  // Метод условий состояния кнопки сохранения данных формы
  _toggleButtonState(isActive) {
    if (isActive) {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
    } else {
      this._buttonElement.classList.add(this._inactiveButtonClass);
    }
  }
  
  // Метод валидации кнопки сохранения данных формы (на передачу в index.js)
  checkButtonState() {
    this._toggleButtonState(this._form.checkValidity());
  }

  // Метод проверки на валидацию нескольких полей ввода
  _setEventListeners() {
    this._inputList = this._form.querySelectorAll(this._config.inputSelector);
    
    this._toggleButtonState(this._form.checkValidity());
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._form.checkValidity());
      });
    });
  }

  enableValidation() {
    this._formList = document.querySelectorAll(this._config.formSelector);

    this._formList.forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
      });
      this._setEventListeners();
    });
  };
}