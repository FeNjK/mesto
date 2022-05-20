export default class FormValidator {

  constructor(config, formSelector) {
    this._config = config;
    this._formSelector = formSelector;
    this._inputSelector = this._formSelector.querySelector(this._config.inputSelector);
    this._submitButtonSelector = this._formSelector.querySelector(this._config.submitButtonSelector);
    this._inactiveButtonClass = this._formSelector.querySelectorAll(this._config.inactiveButtonClass);
    this._inputErrorClass = this._formSelector.querySelectorAll(this._config.inputErrorClass);
    this._errorMessageClass = this._formSelector.querySelectorAll(this._config.errorMessageClass);
  }

  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._config.formSelector));
      
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (e) => {
        e.preventDefault();
      });
      this._setEventListeners();
    });
  };

  // Функция удаления ошибок валидации
  _removeInputError() {
    const textError = Array.from(this._formElement.querySelectorAll(`.${this._errorMessageClass}`));
    const placeError = Array.from(this._formElement.querySelectorAll(`.${this._inputErrorClass}`));
    
    textError.forEach((textError) => {
      textError.textContent = '';
    });
    placeError.forEach((placeError) => {
      placeError.classList.remove(this._inputErrorClass);
    });
  }

  // Метод показа сообщения об ошибке при валидации
  _showInputError = (errorMessage) => {
    this._errorElement = this._formElement.querySelector(`#${this._inputElement.id}-error`);
    this._inputElement.classList.add(this._inputErrorClass);
    this._errorElement.classList.add(this._errorMessageClass);
    this._errorElement.textContent = errorMessage;
  }

// Метод сокрытия сообщения об ошибке при валидации
  _hideInputError = () => {
    this._errorElement = this._formElement.querySelector(`#${this._inputElement.id}-error`);
    this._inputElement.classList.remove(this._inputErrorClass);
    this._errorElement.classList.remove(this._errorMessageClass);
    this._errorElement.textContent = '';
  };

  // Метод определения состояния кнопки сохранения
  _toggleButtonState() {
    this._buttonElement.disabled = !this._formElement.checkValidity();
    this._buttonElement.classList.toggle(this._inactiveButtonClass, !this._formElement.checkValidity());
  }

  // Метод проверки поля ввода на валидность
  _checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  };
  
  // Метод проверки на валидацию нескольких полей ввода
  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  
    this._toggleButtonState();
    
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState();
      });
    });
  };
}