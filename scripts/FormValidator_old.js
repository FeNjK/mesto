export default class FormValidator {

  constructor(config, form) {
    this._config = config;
    this._form = form;
    this._inputSelector = this._form.querySelector(this._config.inputSelector);
    this._submitButtonSelector = this._config.submitButtonSelector;
    this._inactiveButtonClass = this._form.querySelectorAll(this._config.inactiveButtonClass);
    this._inputErrorClass = this._form.querySelectorAll(this._config.inputErrorClass);
    this._errorMessageClass = this._form.querySelectorAll(this._config.errorMessageClass);
  }

  enableValidation() {
    this._formList = this._form.querySelectorAll(this._config.formSelector);
      
    this._formList.forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
      });
      this._setEventListeners();
    });
  };

  removeInputError() {
    this._errorFields.forEach((textError) => textError.textContent = '');
    this._inputs.forEach((input) => input.classList.remove(this._validationSettings.inputErrorClass));
    this._setDisabledOnSubmitButton();
  };

  // Функция удаления ошибок валидации
  removeInputError() {
    const textError = Array.from(this._form.querySelectorAll(`.${this._errorMessageClass}`));
    const placeError = Array.from(this._form.querySelectorAll(`.${this._inputErrorClass}`));
    
    textError.forEach((textError) => {
      textError.textContent = '';
    });
    placeError.forEach((placeError) => {
      placeError.classList.remove(this._inputErrorClass);
    });
  }

  // Метод показа сообщения об ошибке при валидации
  _showInputError = (errorMessage) => {
    this._errorElement = this._form.querySelector(`#${this._inputElement.id}-error`);
    this._inputElement.classList.add(this._inputErrorClass);
    this._errorElement.classList.add(this._errorMessageClass);
    this._errorElement.textContent = errorMessage;
  }

// Метод сокрытия сообщения об ошибке при валидации
  _hideInputError = () => {
    this._errorElement = this._form.querySelector(`#${this._inputElement.id}-error`);
    this._inputElement.classList.remove(this._inputErrorClass);
    this._errorElement.classList.remove(this._errorMessageClass);
    this._errorElement.textContent = '';
  };

  toggleButtonState() {
    this._buttonElement.disabled = !this._form.checkValidity();
    this._buttonElement.classList.toggle(this._inactiveButtonClass, !this._form.checkValidity());
  }

  // Метод проверки поля ввода на валидность
  _checkInputValidity = (form, inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(form, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(form, inputElement);
    }
  };
  
  // Метод проверки на валидацию нескольких полей ввода
  _setEventListeners() {
    this._inputList = this._form.querySelectorAll(this._config.inputSelector);
    this._buttonElement = this._form.querySelector(this._config.submitButtonSelector);
  
    this._toggleButtonState();
    
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(form, inputElement);
        this._toggleButtonState();
      });
    });
  };
}